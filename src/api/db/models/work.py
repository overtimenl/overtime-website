from pydantic import BaseModel
from typing import Optional


# Entidade publicidades
class Work(BaseModel):
    id: Optional[str] 
    work: str
    name: str
    conteudo: str
    image: str
    more: str
    whats: str