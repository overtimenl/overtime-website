from pydantic import BaseModel
from typing import Optional


# Entidade Anúncios
class Anuncio(BaseModel):
    id: Optional[str] 
    name: str 
    servico: str 
    meio: str 
    vcampanha: float 
    duracao: int 
    conversao: int 
    dataFim: str