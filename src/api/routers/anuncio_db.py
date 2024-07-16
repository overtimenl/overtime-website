from fastapi import FastAPI, HTTPException, APIRouter, status
from db.models.anuncio import Anuncio
from db.schemas.anuncio import anuncio_schema, anuncios_schema
from db.client import db_client
from bson import ObjectId
from passlib.apps import custom_app_context as pwd_context
from passlib.context import CryptContext
from random import randrange
# Import smtplib for the actual sending function
import smtplib

# Import the email modules we'll need
from email.message import EmailMessage


router = APIRouter(prefix="/anunciodb", tags=["anunciodb"], 
                    responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

#router = APIRouter()
#app = FastAPI()
# user: paulonito@gmail.com senha: 931998
users_list = []


@router.get("/", response_model=list[Anuncio])
async def anuncios():
    anunco_list = anuncios_schema(db_client.anuncios.find())
    return anunco_list

@router.post("/create", response_model=Anuncio, status_code=status.HTTP_201_CREATED)
async def create_anuncio(anuncio: Anuncio):
    #return user
    if not anuncioExist(anuncio.name):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Anuncio já cadastrado!")
    
    
    anuncio_dict = dict(anuncio)
    del anuncio_dict["id"]
   

    id = db_client.anuncios.insert_one(anuncio_dict).inserted_id

    new_anuncio = anuncio_schema(db_client.anuncios.find_one({"_id": id}))

    return Anuncio(**new_anuncio)


@router.put("/update", response_model=Anuncio)
async def update_anuncio(anuncio: Anuncio):
    #found = False

    anuncio_dict = dict(anuncio)
    del anuncio_dict["id"]

    try:
        db_client.anuncios.find_one_and_replace(
            {"_id": ObjectId(anuncio.id)}, anuncio_dict)
    except:
        return {"error": "Anuncio não atualizado!"}

    return search_anuncio(ObjectId(anuncio.id))

    #for index, saved_user in enumerate(users_list):
    #    if saved_user.id == user.id:
    #        users_list[index] = user
    #        found = True

    #if not found:
    #    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Not Found")
    #else:
    #    return user

@router.delete("/{id}",  status_code=status.HTTP_204_NO_CONTENT)
async def delete_anuncio(id: str):
    found = db_client.anuncios.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not deleted")


# Path
@router.get("/{id}")
async def anuncio(id: str):
    return search_anuncio(id)

# Query ?id= Numero
@router.get("/anuncioquery/")
async def anuncio(id: str):
    return search_anuncio(id)


def anuncioExist(name: str):

    anuncio = db_client.anuncios.find_one({"name": name})

    if anuncio is None:
        return True
    else:
        return False
   



def search_anuncio(id: str):
    try:
        anuncio = db_client.anuncios.find_one({"_id": id})
        return Anuncio(**anuncio_schema(anuncio))
    except:
        return {"error": "Anuncio Not Found"}

#defult busca
def search_anuncio_default(field: str, key):

    try:
        user = db_client.anuncios.find_one({field: key})
        return Anuncio(**anuncio_schema(anuncio))
    except:
        return {"error": "Anuncio não encontrado"}