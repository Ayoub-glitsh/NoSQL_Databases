# la partie 1 : Gestion des utilisateurs et des rôles dans MongoDB
# 1) Créer un utilisateur responsable stock :

db.createUser({
  user: "gestionStock",
  pwd: "azerty",
  roles: [
    {
      role: "readWrite",
      db: "shop",
      collection: "produits"
    }
  ]
})

# 2) Créer un utilisateur admin complet :
db.createUser({
  user: "superAdmin",
  pwd: "root2025",
  roles: ["root"]
})

# 3) Créer un index unique sur username.
db.users.createIndex({ username: 1 }, { unique: true })

# 4) Crée un index composé sur (categorie, prix) dans produits.
db.produits.createIndex({ categorie: 1, prix: 1 })







# la partie 2 : Manipulation des données avec PyMongo

# 1) Faire la Connexion à MongoDB

# Connexion à MongoDB
from pymongo import MongoClient

# Établir la connexion
client = MongoClient("mongodb://Ayoub:123456@localhost:27017/?authSource=admin")


# Sélectionner la base de données
db = client['ISTA_OZTE']


#  créer la collection
stagiaires = db['stagiaire']


# 3. Insérer les données des stagiaires
donnees = [
    {
        "nom": "Karin",
        "prenom": "Yassine",
        "age": 21,
        "ville": "Quarzazate",
        "inscription": "2025-09-15",
        "bourse": True,
        "modules": ["BD", "Front-end", "Cloud"],
        "notes": [
            {"module": "BD", "note": 15, "coeff": 2},
            {"module": "Front-end", "note": 17, "coeff": 3},
            {"module": "Cloud", "note": 18, "coeff": 4}
        ],
        "absences": [
            {"date": "2025-01-12", "motif": "Maladie"},
            {"date": "2025-01-16", "motif": "Retard"}
        ]
    },
    {
        "nom": "Alami",
        "prenom": "Fatima",
        "age": 22,
        "ville": "Marrakech",
        "inscription": "2025-08-20",
        "bourse": False,
        "modules": ["BD", "Back-end"],
        "notes": [
            {"module": "BD", "note": 14, "coeff": 2},
            {"module": "Back-end", "note": 16, "coeff": 3}
        ],
        "absences": [
            {"date": "2025-02-10", "motif": "Maladie"}
        ]
    },
    {
        "nom": "Bennani",
        "prenom": "Karim",
        "age": 19,
        "ville": "Quarzazate",
        "inscription": "2025-10-01",
        "bourse": True,
        "modules": ["Front-end", "Cloud", "Mobile"],
        "notes": [
            {"module": "Front-end", "note": 19, "coeff": 3},
            {"module": "Cloud", "note": 12, "coeff": 4},
            {"module": "Mobile", "note": 15, "coeff": 3}
        ],
        "absences": []
    }
]

# Insérer les données
result = stagiaires.insert_many(donnees) 
print(f"{len(result.inserted_ids)} stagiaires inseres")



# 2) Trouver les stagiaires dont la ville est "Ouarzazate"
resultats = stagiaires.find({"ville": "Quarzazate"})

print("Stagiaires de Quarzazate:")
for stagiaire in resultats:
    print(f"- {stagiaire['nom']} {stagiaire['prenom']}")


# 3) Trouver tous les stagiaires ayant une bourse
resultats = stagiaires.find({"bourse": True})

print("\nStagiaires avec bourse:")
for stagiaire in resultats:
    print(f"- {stagiaire['nom']} {stagiaire['prenom']}")


# 4) Trouver les stagiaires ayant plus de 20 ans
resultats = stagiaires.find({"age": {"$gt": 20}})
print("\nStagiaires de plus de 20 ans:")
for stagiaire in resultats:
    print(f"- {stagiaire['nom']} {stagiaire['prenom']} ({stagiaire['age']} ans)")


# 5) Trouver ceux qui suivent le module "BD".
resultats = stagiaires.find({"modules": "BD"})
print("\nStagiaires suivant le module BD:")
for stagiaire in resultats:
    print(f"- {stagiaire['nom']} {stagiaire['prenom']}")


# 6) Trouver les stagiaires qui ont une note > 16 en Front-end.

resultats = stagiaires.find({
    "notes": {
        "$elemMatch": {
            "module": "Front-end",
            "note": {"$gt": 16}
        }
    }
})
print("\nStagiaires avec note > 16 en Front-end:")
for stagiaire in resultats:
    print(f"- {stagiaire['nom']} {stagiaire['prenom']}")
    for note in stagiaire['notes']:
        if note['module'] == 'Front-end':
            print(f"  Note: {note['note']}")



# 7) Trouver les stagiaires ayant au moins une absence.
resultats = stagiaires.find({"absences": {"$ne": []}})
print("\nStagiaires avec au moins une absence:")
for stagiaire in resultats:
    print(f"- {stagiaire['nom']} {stagiaire['prenom']}: {len(stagiaire['absences'])} absence(s)")


# 8) Trouver les stagiaires dont une absence a le motif "Retard".
resultats = stagiaires.find({"absences.motif": "Retard"})
print("\nStagiaires avec absence motif 'Retard':")
for stagiaire in resultats:
    print(f"- {stagiaire['nom']} {stagiaire['prenom']}")


# 9) Trouver les stagiaires inscrits après le 01/09/2025.
resultats = stagiaires.find({"inscription": {"$gt": "2025-09-01"}})
print("\nStagiaires inscrits apres le 01/09/2025:")
for stagiaire in resultats:
    print(f"- {stagiaire['nom']} {stagiaire['prenom']}: {stagiaire['inscription']}")


# 10) Trouver les stagiaires ayant le module "Claud".
resultats = stagiaires.find({"modules": "Cloud"})
print("\nStagiaires suivant le module Cloud:")
for stagiaire in resultats:
    print(f"- {stagiaire['nom']} {stagiaire['prenom']}")


# 11) Afficher uniquement nom, prenom, ville pour toutes les stagiaires 
resultats = stagiaires.find({}, {"_id": 0, "nom": 1, "prenom": 1, "ville": 1})
print("\nNom, Prenom, Ville de tous les stagiaires:")
for stagiaire in resultats:
    print(f"- {stagiaire['nom']} {stagiaire['prenom']} - {stagiaire['ville']}")




# 12) Augmenter la note du module "BD" de +2

resultat = stagiaires.update_many(
    {"notes.module": "BD"},  
    {"$inc": {"notes.$.note": 2}}  
)


# 13) Ajouter un champ "filiere": "Informatique" pour les stagiaires ayant le modules ‘BD’

resultat = stagiaires.update_many(
    {"modules": "BD"},  
    {"$set": {"filière": "Informatique"}}  
)


# 14) Calculer la Note moyenne par module

pipeline = [
    {"$unwind": "$notes"},
    {"$group": {
        "_id": "$notes.module",
        "moyenne": {"$avg": "$notes.note"},
        "nombre_notes": {"$sum": 1}
    }},
    {"$sort": {"_id": 1}}
]

resultats = list(stagiaires.aggregate(pipeline))

for res in resultats:
    print(f"{res['_id']}: {res['moyenne']:.2f} ({res['nombre_notes']} notes)")



# 15) Compter le nombre d’absences par motif pour chaque stagiaire

pipeline = [
    {"$unwind": "$absences"},
    {"$group": {
        "_id": {
            "nom": "$nom",
            "motif": "$absences.motif"
        },
        "nombre_absences": {"$sum": 1}
    }},
    {"$project": {
        "stagiaire": "$_id.nom",
        "motif": "$_id.motif",
        "nombre_absences": 1,
        "_id": 0
    }},
    {"$sort": {"stagiaire": 1}}
]

resultats = list(stagiaires.aggregate(pipeline))

if resultats:
    for res in resultats:
        print(f"{res['stagiaire']} - {res['motif']}: {res['nombre_absences']} absence(s)")
else:
    print("Aucune absence trouvee") 



# 16) Trouver la Date de la dernière absence

pipeline = [
    {"$unwind": "$absences"},
    {"$sort": {"absences.date": -1}},
    {"$limit": 1},
    {"$project": {
        "nom": 1,
        "prenom": 1,
        "derniere_absence": "$absences.date",
        "motif": "$absences.motif",
        "_id": 0
    }}
]

resultats = list(stagiaires.aggregate(pipeline))

if resultats:
    for res in resultats:
        print(f"Dernière absence:")
        print(f"  Stagiaire: {res['nom']} {res['prenom']}")
        print(f"  Date: {res['derniere_absence']}")
        print(f"  Motif: {res['motif']}")
else:
    print("Aucune absence trouvee dans la base de donnees")




client.close()












