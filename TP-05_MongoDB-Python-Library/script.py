from pymongo import MongoClient

client = MongoClient("mongodb://Ayoub:123456@localhost:27017/?authSource=admin")

db = client["cinema"]
 
# 1) Se connecter à une base de données MongoDB locale --- dans cet exemple, la base de données s'appelle "cinema".

""" for x in db.films.find():
    print(x) """

# 2) Ouvrir une base de données appelée bibliotheque. 

db = client["bibliotheque"]

# 3) Créer une collection appelée publications  

publications_collection = db["publications"]

# 4) Insérer un document dans cette collection  

""" publications_collection.insert_one({
    "titre": "Intelligence Artificielle Fondamentale",
    "auteur": "Sophie Martin",
    "year": 2023,
    "categorie": "Informatique",
    "langage": ["Python", "R", "Julia"],
    "pages": 450,
    "prix": 250,
    "maison_edition": "TechEditions",
    "evaluation": {
        "note": 4.7,
        "avis": 89
    },
    "disponible": True
})
 """

# 5) Insérez plusieurs documents (au moins 3 livres différents)  

""" publications_collection.insert_many([
  {
    "titre": "Applications Mobiles avec React Native",
    "auteur": "Laura Dubois",
    "year": 2023,
    "categorie": "Développement Mobile",
    "langage": ["JavaScript", "React", "TypeScript"],
    "pages": 295,
    "prix": 180,
    "maison_edition": "MobileFirst",
    "evaluation": {
        "note": 4.6,
        "avis": 75
    },
    "disponible": True
},
{
    "titre": "Cybersécurité pour Débutants",
    "auteur": "Marc Weber",
    "year": 2022,
    "categorie": "Sécurité Informatique",
    "langage": ["Bash", "Python", "SQL"],
    "pages": 420,
    "prix": 210,
    "maison_edition": "SecurePress",
    "evaluation": {
        "note": 4.4,
        "avis": 203
    },
    "disponible": True
},
{
    "titre": "Machine Learning Avancé",
    "auteur": "Nadia Chen",
    "year": 2024,
    "categorie": "Intelligence Artificielle",
    "langage": ["Python", "TensorFlow", "PyTorch"],
    "pages": 520,
    "prix": 280,
    "maison_edition": "AIPublications",
    "evaluation": {
        "note": 4.8,
        "avis": 42
    },
    "disponible": True
}
])
 """
# 6) Affichez tous les documents présents dans la collection.  

""" for x in publications_collection.find():
    print(x) """

# 7) Affichez uniquement les champs titre et auteur de chaque document  

""" for x in publications_collection.find({}, {"_id": 0, "titre": 1, "auteur": 1}):
    print(x) """ 

# 8) Affichez toutes les publications publiées après 2020 
 
""" for x in publications_collection.find({"year": {"$gt": 2020}}):
    print(x)  """

# 9) Affichez les publications dont le prix est supérieur à 150 et dont la catégorie est "Programmation"  

""" for x in publications_collection.find({"prix": {"$gt": 150}, "categorie": "Programmation"}):
    print(x)
   """
# 10) Affichez les publications contenant "JavaScript" dans le champ langage  

""" for x in publications_collection.find({"langage": "JavaScript"}):
    print(x) """

# 11) Affichez les livres triés par année (year) décroissante.  

""" for x in publications_collection.find().sort("year", -1):
    print(x) """

# 12) Comptez le nombre total de publications.  

""" count = publications_collection.count_documents({})
print("Nombre total de publications :", count)
 """

# 13) Comptez le nombre de publications depuis 2015  

""" count_2015 = publications_collection.count_documents({"year": {"$gte": 2015}})
print("Nombre de publications depuis 2015 :", count_2015) """

# 14) Utilisez une agrégation (aggregate) pour calculer la moyenne des prix des livres.  

""" resultat = publications_collection.aggregate([
    {
        "$group": {
            "_id": None,
            "prix_moyen": {"$avg": "$prix"}
        }
    }
])

for doc in resultat:
    print("Prix moyen des livres :", doc["prix_moyen"])

 """


# 15) Si chaque document contient evaluation.note, calculez la moyenne générale de ce champ.

""" resultat = publications_collection.aggregate([
    {
      "$match": { "evaluation.note": {"$exists": True} }
    },
    {
        "$group": {
            "_id": None,
            "note_moyenne": {"$avg": "$evaluation.note"}
        }
    }
])


for doc in resultat:
  print("Note moyenne générale :", doc["note_moyenne"])


 """


# 16) Grouper les publications par catégorie et afficher le nombre de livres par catégorie.  

""" resultat = publications_collection.aggregate([
    {
        "$group": {
            "_id": "$categorie",
            "nombre_livres": {"$sum": 1}
        }
    }
])

for doc in resultat:
    print(doc)

 """

# 17) Trouver le livre le plus cher  

""" for doc in publications_collection.find().sort("prix", -1).limit(1):
    print("Livre le plus cher :", doc) """

# 18) Afficher les livres dont la note est supérieure à 4.5  

""" for doc in publications_collection.find({"evaluation.note": {"$gt": 4.5}}):
    print(doc) """

# 19) Mettre à jour tous les livres d’un auteur donné pour augmenter le prix de 10 %.  

""" res = publications_collection.update_many(
    {"auteur": "Sophie Martin"},
    {"$mul": {"prix": 1.10}}
)

print(res) """

ou 

res = publications_collection.update_many(
    {"auteur": "Sophie Martin"},
    {"$add": {"prix": {"$multiply": ["$prix", 0.10]}}}
)

print(res)

# 20) Supprimer les livres publiés avant 2010


""" res = publications_collection.delete_many(
    {"year": {"$lt": 2010}}
)

print(res)
   """



client.close()
