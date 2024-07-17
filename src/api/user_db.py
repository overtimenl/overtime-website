from fastapi import FastAPI, HTTPException, APIRouter, status
from db.models.user import User
from db.schemas.user import user_schema, users_schema
from db.client import db_client
from bson import ObjectId
from passlib.apps import custom_app_context as pwd_context
from passlib.context import CryptContext
from random import randrange
# Import smtplib for the actual sending function
import smtplib
from email.mime.multipart import MIMEMultipart
#from email.MIMEMultipart import MIMEMultipart
from email.mime.text import MIMEText


from bson import ObjectId
from passlib.apps import custom_app_context as pwd_context
from passlib.context import CryptContext
from random import randrange

router = APIRouter(prefix="/usersdb", tags=["usersdb"], 
                    responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

#router = APIRouter()
#app = FastAPI()
# user: paulonito@gmail.com, pedrosurt@gmail.com, albanomendes33@gmail.com senha: 570110
users_list = []

@router.get("/", response_model=list[User])
async def users():
    return users_schema(db_client.users.find())

@router.post("/", response_model=User, status_code=status.HTTP_201_CREATED)
async def create_user(user: User):
    #return user
    if not userExist(user.email):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Exist")
    
    password = str(randrange(100000, 1000000, 2))
    print(password)

    # Create a text/plain message
    #msg = EmailMessage()
    msg = MIMEMultipart()
    # you == the recipient's email address
    message = f'Perfil Criado \nUsuario: {user.email} \nSenha: {password} \n\nOvertime&NL'
    msg['Subject'] = 'Senha de Acesso'
    msg['From'] = 'overtimenl47@gmail.com'
    msg['To'] = user.email


    msg.attach(MIMEText(message))

    # Send the message via our own SMTP server.
    mailserver = smtplib.SMTP('smtp.gmail.com', 587)
    mailserver.ehlo()
    mailserver.starttls()
    mailserver.ehlo()
    mailserver.login('overtimenl47@gmail.com', 'lslg wfph uouj kswo')

    mailserver.sendmail('overtimenl47@gmail.com', user.email, msg.as_string())

    mailserver.quit()
    #s = smtplib.SMTP('localhost')
    #s.send_message(msg)
    #s.quit()
     # define hashing parameters
    hasher = CryptContext(schemes=["sha256_crypt"])

    # hash the user password
    hash1 = hasher.hash(password)

    user_dict = dict(user)
    del user_dict["id"]
    user_dict["password"] = hash1
    user_dict["desabled"] = False

    id = db_client.users.insert_one(user_dict).inserted_id

    new_user = user_schema(db_client.users.find_one({"_id": id}))

    return User(**new_user)

def userExist(email: str):
    try:
        user = db_client.users.find_one({"email": email})       
        return True
    except:
        return False

@router.put("/", response_model=User)
async def update_user(user: User):
    #found = False

    user_dict = dict(user)
    del user_dict["id"]

    try:
        db_client.users.find_one_and_replace(
            {"_id": ObjectId(user.id)}, user_dict)
    except:
        return {"error": "No se ha actualizado el usuario"}

    return search_user("_id", ObjectId(user.id))

    #for index, saved_user in enumerate(users_list):
    #    if saved_user.id == user.id:
    #        users_list[index] = user
    #        found = True

    #if not found:
    #    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Not Found")
    #else:
    #    return user

@router.delete("/{id}",  status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(id: int):
    found = db_client.users.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not deleted")


# Path
@router.get("/{id}")
async def user(id: int):
    return search_user(id)

# Query ?id= Numero
@router.get("/userquery/")
async def user(id: int):
    return search_user(id)


def userExist(email: str):
    try:
        user = db_client.users.find_one({"email": email})
        return True
    except:
        return False



def search_user(id: int):
    try:
        user = db_client.users.find_one({"_id": id})
        return User(**user_schema(user))
    except:
        return {"error": "User Not Found"}

#defult busca
def search_user_default(field: str, key):

    try:
        user = db_client.users.find_one({field: key})
        return User(**user_schema(user))
    except:
        return {"error": "No se ha encontrado el usuario"}