#from pymongo import MongoClient
#db_client = MongoClient().overdb
from dotenv import dotenv_values
from pymongo.mongo_client import MongoClient
from  pymongo.server_api import ServerApi

uri = "mongodb+srv://overtimenl47:Qj37d16Qe3sjqDgX@cluster0.kxkxbay.mongodb.net/?appName=Cluster0"
config = dotenv_values(".env")
# Create a new client and connect to the server
db_client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
#print("Connected to the MongoDB database!")
#print(db_client.list_database_names())
try:
    db_client = db_client.get_database('overdb')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(f'erro {e}')