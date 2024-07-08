from fastapi import FastAPI
from routers import user_db, auth_users, anuncio_db, publicidades_db, work_db, message_db
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Routers
app.include_router(user_db.router)
app.include_router(auth_users.router)
app.include_router(anuncio_db.router)
app.include_router(publicidades_db.router)
app.include_router(work_db.router)
app.include_router(message_db.router)

@app.get("/")
async def root():
    return {"message":"My FastAPI"}

# uvicorn main:app --reload