from pydantic import BaseModel
from typing import Optional

# Entidade User
class User(BaseModel):
    id: Optional[str]
    username: str
    password: str
    email: str
    tipo: str
    desabled: bool