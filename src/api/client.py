from pymongo import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://albanomendes33:9YmtlqjC0krHd617@cluster0.shsuamy.mongodb.net/?appName=Cluster0"

db_client = MongoClient(uri, server_api=ServerApi('1'))

try:
    db_client = db_client.get_database('overdb')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(f'erro {e}')