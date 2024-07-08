from fastapi import FastAPI, HTTPException, APIRouter, status
from db.models.message import Message
from db.schemas.message import message_schema, messages_schema
from db.client import db_client
from bson import ObjectId
from passlib.apps import custom_app_context as pwd_context
from passlib.context import CryptContext
from random import randrange
# Import smtplib for the actual sending function
import smtplib

# Import the email modules we'll need
from email.message import EmailMessage


router = APIRouter(prefix="/messagedb", tags=["messagedb"], 
                    responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

#router = APIRouter()
#app = FastAPI()
# user: paulonito@gmail.com senha: 931998
users_list = []


@router.get("/", response_model=list[Message])
async def messages():
    message_list = messages_schema(db_client.messages.find())
    return message_list

@router.post("/create", response_model=Message, status_code=status.HTTP_201_CREATED)
async def create_message(message: Message):
    #return user
    #if not messageExist(message.name):
    #    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Message já cadastrado!")
    
    
    message_dict = dict(message)
    del message_dict["id"]
   

    id = db_client.messages.insert_one(message_dict).inserted_id

    new_message = message_schema(db_client.messages.find_one({"_id": id}))

    return Message(**new_message)


@router.put("/update", response_model=Message)
async def update_message(message: Message):
    #found = False

    message_dict = dict(message)
    del message_dict["id"]

    try:
        db_client.messages.find_one_and_replace(
            {"_id": ObjectId(message.id)}, message_dict)
    except:
        return {"error": "Message não atualizado!"}

    return search_message(ObjectId(message.id))

    #for index, saved_user in enumerate(users_list):
    #    if saved_user.id == user.id:
    #        users_list[index] = user
    #        found = True

    #if not found:
    #    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Not Found")
    #else:
    #    return user

@router.delete("/{id}",  status_code=status.HTTP_204_NO_CONTENT)
async def delete_message(id: str):
    found = db_client.messages.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Message not deleted")


# Path
@router.get("/{id}")
async def message(id: str):
    return search_message(id)

# Query ?id= Numero
@router.get("/messagequery/")
async def message(id: str):
    return search_message(id)


def messageExist(name: str):

    message = db_client.messages.find_one({"name": name})

    if message is None:
        return True
    else:
        return False
   



def search_message(id: str):
    try:
        message = db_client.messages.find_one({"_id": id})
        return Message(**message_schema(message))
    except:
        return {"error": "Message Not Found"}

#defult busca
def search_message_default(field: str, key):

    try:
        user = db_client.messages.find_one({field: key})
        return Message(**message_schema(message))
    except:
        return {"error": "Message não encontrado"}