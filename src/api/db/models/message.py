from pydantic import BaseModel
from typing import Optional


# Entidade Anúncios
class Message(BaseModel):
    id: Optional[str] 
    work: str 
    name: str    
    conteudo: str 
    data: str
    more: str