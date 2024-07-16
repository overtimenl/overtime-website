from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional

router = APIRouter()

# Routers
# Entidade ‘User’
class User(BaseModel):
    id: int          #Optional[str]
    username: str
    password: str
    email: str
    tipo: str
    desabled: bool

users_db = [User(id=1, username="Paulo Gustavo", password="fsjfwysdsdfsdfd", email="paulogustav@gmail.com", tipo="ADM", desabled=False),
            User(id=2, username="Maria Andre", password="fsjfwysdsdfsdfd", email="paulogustav@gmail.com", tipo="ADM", desabled=True),
            User(id=3, username="Paulo Miranda", password="fsjfwysdsdfsdfd", email="paulogustav@gmail.com", tipo="ADM", desabled=False),
            ]
@router.get("/users")
async def users():
    return users_db

@router.get("/usersjson")
async def usersjson():
    return users_db

@router.get("/user/{id}")
async def user(id: int):
    return search_user(id)

@router.post("/user/")
async def user(user: User, status_code=201):
    if type(search_user(user.id)) == User:
        raise HTTPException(status_code=404, detail="User Existend")
        #return {"error": "User Existend"}
    else:
        users_db.append(user)  
        return user


@router.put("/user/")
async def user(user: User):

    found = False
    
    for index, saved_user in enumerate(users_db):
        if saved_user.id == user.id:
            users_db[index] = user
            found = True

    if not found:
        return {"error": "User not found"}
    else:
        return user

@router.delete("/user/{id}")
async def user(id: int):

    found = False
    user = None
    for index, saved_user in enumerate(users_db):
        if saved_user.id == id:
            user = users_db[index]
            del users_db[index]
            found = True

    if not found:
        return {"error": "User not found"}
    else:
        return user



def search_user(id: int):
    user = filter(lambda user: user.id == id, users_db)
    try:        
        return list(user)[0]
    except:
        return {"error": "User Not Found"}

