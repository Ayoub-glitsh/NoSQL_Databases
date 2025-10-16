
# MongoDB Exercise — Stagiaires Collection

## Supprimer tous les documents
db.stagiaires.deleteMany({})

## Insérer plusieurs stagiaires
db.stagiaires.insertMany([
  { nom: "Ben", prenom: "Ali", age: 21, ville: "Ouarzazate", notes: [12,14] },
  { nom: "El Amrani", prenom: "Sara", age: 22, ville: "Zagora", notes: [13,15] },
  ...
])

## Mettre à jour certains champs
db.stagiaires.updateOne({prenom:"Ali"}, {$set:{age:22}})
db.stagiaires.updateOne({prenom:"Sara", nom:"El Amrani"}, {$push:{notes:18}})
db.stagiaires.updateMany({ville:"Ouarzazate"}, {$push:{notes:20}})

## Supprimer des documents
db.stagiaires.deleteOne({nom:"El Fassi", prenom:"Nada"})
db.stagiaires.deleteMany({ville:"Errachidia"})

## Requêtes (Find)
db.stagiaires.find({ville:"Zagora"},{ nom:1 , prenom:1 })
db.stagiaires.find({ville:"Ouarzazate"},{ nom:1 , ville:1 })
db.stagiaires.find({ville:"Tinghir"},{ prenom:1 , notes:1 })
db.stagiaires.find({})
