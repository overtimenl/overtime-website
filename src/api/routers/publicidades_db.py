from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
from db.models.publicidades import Publicidade
from db.schemas.publicidades import publicidade_schema, publicidades_schema
from db.client import db_client
from bson import ObjectId
from passlib.apps import custom_app_context as pwd_context
from passlib.context import CryptContext
from random import randrange
from datetime import datetime
import os
from pathlib import Path
#import shulil
# Import smtplib for the actual sending function
import smtplib
import uuid
# Import the email modules we'll need
from email.message import EmailMessage


router = APIRouter(prefix="/publicidadesdb", tags=["publicidadesdb"], 
                    responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

#router = APIRouter()
#app = FastAPI()
# user: paulonito@gmail.com senha: 931998
users_list = []


@router.get("/", response_model=list[Publicidade])
async def publicidades():
    publicidade_list = publicidades_schema(db_client.publicidades.find())
    return publicidade_list

@router.post("/create", status_code=status.HTTP_201_CREATED)
async def create_publicidade(title: str = Form(...), subtitle: str = Form(...), descricao: str = Form(...), more: str = Form(...), image: UploadFile = File(...)):
    #return user
    if not publicidadeExist(subtitle):
       raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Publicidade já cadastrada!")
    


    now = datetime.now()
    image.filename = f"{uuid.uuid4()}.jpg"
    contents = await image.read()
    #dt_string = {now.strftime("%d/%m/%Y %H:%M:%S")}+"_"+{image.name}
    #print("date and time =", dt_string)
    publicidade = {
        "id": "string",
        "title": title,
        "subtitle": subtitle,
        "descricao": descricao,
        "image": image.filename,
        "more": more,
    }

    # file_path = 
    with open(f"../assets/marketing/{image.filename}", "wb") as f:
        f.write(contents)
    #print("message": "File saved successfully")
    

    #return publicidade
    publicidade_dict = dict(publicidade)
    del publicidade_dict["id"]
   

    id = db_client.publicidades.insert_one(publicidade_dict).inserted_id

    new_publicidade = publicidade_schema(db_client.publicidades.find_one({"_id": id}))

    return Publicidade(**new_publicidade)


@router.put("/update", status_code=status.HTTP_201_CREATED)
async def update_publicidade(id: str = Form(...), title: str = Form(...), subtitle: str = Form(...), descricao: str = Form(...), more: str = Form(...), image: UploadFile = File(...)): 
   
    publicidade = search_publicidade(id);
    #print(publicidade)
    
    if (publicidade["image"] != image.filename):
        image.filename = f"{uuid.uuid4()}.jpg"
        contents = await image.read()

        with open(f"../assets/marketing/{image.filename}", "wb") as f:
            f.write(contents) 

            os.chdir('../assets/marketing/')
            os.remove(publicidade["image"]) 
            os.getcwd()
    

    publicidade = {
        "id": id,
        "title": title,
        "subtitle": subtitle,
        "descricao": descricao,
        "image": image.filename,
        "more": more,
    }
    publicidade_dict = dict(publicidade)
    del publicidade_dict["id"]

    try:
        db_client.publicidades.find_one_and_replace(
           {"_id": ObjectId(id)}, publicidade_dict)
        
    except:
        return {"error": "Pubicidade não atualizado!"}

    return search_publicidade(id)

    #for index, saved_user in enumerate(users_list):
    #    if saved_user.id == user.id:
    #        users_list[index] = user
    #        found = True

    #if not found:
    #    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Not Found")
    #else:
    #    return user

@router.delete("/{id}",  status_code=status.HTTP_204_NO_CONTENT)
async def delete_publicidade(id: str):
    publicidade = search_publicidade(id);
    found = db_client.publicidades.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Publicidade not deleted")
    
    os.chdir('../assets/marketing/')
    os.remove(publicidade.image)
    os.getcwd()  

# Path
@router.get("/{id}")
async def publicidade(id: str):
    return search_publicidade(id)

# Query ?id= Numero
@router.get("/publicidadequery/")
async def publicidade(id: str):
    return search_publicidade(id)


def publicidadeExist(subtitle: str):

    publicidade = db_client.publicidades.find_one({"subtitle": subtitle})

    if publicidade is None:
        return True
    else:
        return False
   



def search_publicidade(id: str):

    publicidade = publicidade_schema(db_client.publicidades.find_one({"_id": ObjectId(id)}))

    if publicidade is None:
        return {"error": "Publicidade Not Found"}
    else:
        return publicidade

    

#defult busca
def search_publicidade_default(field: str, key):

    try:
        publicidade = db_client.publicidades.find_one({field: key})
        return Publicidade(**publicidade_schema(publicidade))
    except:
        return {"error": "Publicidade não encontrado"}