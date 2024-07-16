from pydantic import BaseModel
from typing import Optional


# Entidade publicidades
class Publicidade(BaseModel):
    id: Optional[str] 
    title: str
    subtitle: str
    descricao: str
    image: str
    more: str