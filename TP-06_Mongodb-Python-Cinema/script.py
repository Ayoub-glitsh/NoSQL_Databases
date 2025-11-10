from pymongo import MongoClient

client = MongoClient("mongodb://Ayoub:123456@localhost:27017/?authSource=admin")

db = client["cinema"]


# 1)  Afficher tous les films de la collection
""" for x in db.films.find():
    print(x) """

# 2)  Afficher uniquement le titre et le genre de chaque film. 

""" for x in db.films.find({},{'titre':1, 'genre':1,"_id":0}):
    print(x) """

# 3)  Afficher les films du genre "Science-Fiction". 

""" for x in db.films.find({"genre":"Romance"}):
    print(x) """

# 4)  Afficher les films réalisés par "Christopher Nolan". 

""" for x in db.films.find({"realisateur":"Christopher Nolan"}):
    print(x) """

# 5) Afficher les films produits avant l’année 2010. 

""" for x in db.films.find({"annee":{"$lt":2010}}):
    print(x) """

# 6) Afficher les films projetés dans la ville "Agadir" 

""" for x in db.films.find({"ville":"Agadir"}):
    print(x) """

# 7) Afficher les films dont la durée est supérieure à 150 minutes. 

""" for x in db.films.find({"duree":{"$gt":150}}):
    print(x) """

# 8) Trier les films par année de sortie décroissante. 

""" for x in db.films.find().sort("annee",-1):
    print(x) """

# 9) Afficher les films ayant au moins une note supérieure à 9. 

""" for x in db.films.find({"notes":{"$gt":9}}):
    print(x)  """

# 10) Afficher les films dont le genre est "Action" ou "Drame". 

""" for x in db.films.find({"genre":{"$in":["Action","Drame"]}}):
    print(x) """

# 11) Afficher les films qui ne sont pas de genre "Romance". 

""" for x in db.films.find({"genre":{"$ne":"Romance"}}):
    print(x)
 """

# 12) Limiter les résultats aux 3 premiers films. 

""" for x in db.films.find().limit(3):
    print(x) """

# 13) Ajouter un champ version: "VF" pour tous les films. 

""" db.films.update_many({},{"$set":{"version":"VF"}})
 """

# 14) Modifier le champ prix dans toutes les salles pour augmenter de 5. 

""" db.films.update_many({},{"$inc":{"prix":5}})
 """ 

# 15) Supprime tous les films réalisés par "James Cameron". 

""" db.films.delete_many({"realisateur":"James Cameron"})
 """

client.close()
