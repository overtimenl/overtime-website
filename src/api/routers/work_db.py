from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
from db.models.work import Work
from db.schemas.work import work_schema, works_schema
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


router = APIRouter(prefix="/worksdb", tags=["worksdb"], 
                    responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

#router = APIRouter()
#app = FastAPI()
# user: paulonito@gmail.com senha: 931998
users_list = []


@router.get("/", response_model=list[Work])
async def works():
    work_list = works_schema(db_client.works.find())
    return work_list

@router.post("/create", status_code=status.HTTP_201_CREATED)
async def create_work(work: str = Form(...), name: str = Form(...), conteudo: str = Form(...), more: str = Form(...), whats: str = Form(...),image: UploadFile = File(...)):
    #return user
    if not workExist(name):
       raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Anuncio já cadastrado!")
    


    now = datetime.now()
    image.filename = f"{uuid.uuid4()}.jpg"
    contents = await image.read()
    #dt_string = {now.strftime("%d/%m/%Y %H:%M:%S")}+"_"+{image.name}
    #print("date and time =", dt_string)
    work = {
        "id": "string",
        "work": work,
        "name": name,
        "conteudo": conteudo,
        "image": image.filename,
        "more": more,
        "whats": whats,
    }

    # file_path = 
    with open(f"../assets/works/{image.filename}", "wb") as f:
        f.write(contents)
    #print("message": "File saved successfully")
    

    #return publicidade
    work_dict = dict(work)
    del work_dict["id"]
   

    id = db_client.works.insert_one(work_dict).inserted_id

    new_work = work_schema(db_client.works.find_one({"_id": ObjectId(id)}))

    return Work(**new_work)


@router.put("/update", status_code=status.HTTP_201_CREATED)
async def update_work(id: str = Form(...), work: str = Form(...), name: str = Form(...), conteudo: str = Form(...), more: str = Form(...), whats: str = Form(...),image: UploadFile = File(...)): 
   
    workdone = search_work(id);
    #print(workdone)
    
    if (workdone["image"] != image.filename):
        image.filename = f"{uuid.uuid4()}.jpg"
        contents = await image.read()

        with open(f"../assets/works/{image.filename}", "wb") as f:
            f.write(contents) 

            os.chdir('../assets/works/')
            os.remove(workdone["image"])
            os.getcwd()   
    
    workdone = {
        "id": id,
        "work": work,
        "name": name,
        "conteudo": conteudo,
        "image": image.filename,
        "more": more,
        "whats": whats,
    }
    workdone_dict = dict(workdone)
    del workdone_dict["id"]

    try:
        db_client.works.find_one_and_replace(
           {"_id": ObjectId(id)}, workdone_dict)
        
    except:
        return {"error": "Serviço não atualizado!"}

    return search_work(id)

    #for index, saved_user in enumerate(users_list):
    #    if saved_user.id == user.id:
    #        users_list[index] = user
    #        found = True

    #if not found:
    #    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Not Found")
    #else:
    #    return user

@router.delete("/{id}",  status_code=status.HTTP_204_NO_CONTENT)
async def delete_work(id: str):
    work = search_work(id);
    found = db_client.works.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not deleted")
    os.chdir('../assets/works/')
    os.remove(work["image"])
    os.getcwd()

# Path
@router.get("/{id}")
async def work(id: str):
    return search_work(id)

# Query ?id= Numero
@router.get("/workquery/")
async def work(id: str):
    return search_work(id)


def workExist(name: str):

    work = db_client.works.find_one({"name": name})

    if work is None:
        return True
    else:
        return False
   



def search_work(id: str):
    
        new_work = work_schema(db_client.works.find_one({"_id": ObjectId(id)}))
        #print(Work(*work_schema(work)))
        if new_work is None:
            return {"error": "Serviço Not Found"}
        else:
            return new_work

#defult busca
def search_work_default(field: str, key):

    try:
        work = db_client.works.find_one({field: key})
        return Work(**work_schema(work))
    except:
        return {"error": "Serviço não encontrado"}