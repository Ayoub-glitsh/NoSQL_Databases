// 1) Écris la commande pour créer la base de données magasin.
use magasin

// 2) Crée la collection produits dans la base magasin.
db.createCollection("produits")

// 3) Afficher la liste des bases de données existantes.
show dbs

// 4) Afficher la liste des collections de la base magasin.
show collections

// 5) Insère un document représentant le produit ci-dessus (Code: P001, Nom: Stylo).
db.produits.insertOne({
  Code: "P001",
  Nom: "Stylo"
})

// 6) Insérer plusieurs produits à la fois
db.produits.insertMany([
  {
    Code: "P002",
    Nom: "Cahier",
    Prix: 15,
    Quantite: 100,
    Fournisseur: { nom: "PaperPro", ville: "Rabat" },
    Categories: ["Scolaire", "Bureau"]
  },
  {
    Code: "P003", 
    Nom: "Clavier",
    Prix: 120,
    Quantite: 30,
    Fournisseur: { nom: "TechMaroc", ville: "Casablanca" },
    Categories: ["Informatique", "Bureau"]
  }
])

// 7) Insérer un produit sans champ Categories
db.produits.insertOne({
  Code: "P005",
  Nom: "Gomme",
  Prix: 5,
  Quantite: 200,
  Fournisseur: { nom: "Papeterie Atlas", ville: "Ouarzazate" }
})

// 8) Mets à jour le produit Code = "P001" pour ajouter le champ TVA: 20
db.produits.updateOne(
  { Code: "P001" },
  { $set: { TVA: 20 } }
)

// 9) Mets à jour tous les produits pour ajouter un champ Remise: 5
db.produits.updateMany(
  {},
  { $set: { Remise: 5 } }
)

// 10) Incrémenter la valeur de Quantite de 10 unités pour tous les produits.
db.produits.updateMany(
  {},
  { $inc: { Quantite: 10 } }
)

// 11) Modifier le prix du produit "P002" et mets-le à 25 dirhams.
db.produits.updateOne(
  { Code: "P002" },
  { $set: { Prix: 25 } }
)

// 12) Ajouter une nouvelle catégorie "Fourniture" au tableau Categories du produit "P001"
db.produits.updateOne(
  { Code: "P001" },
  { $push: { Categories: "Fourniture" } }
)

// 13) Supprimer la catégorie "Scolaire" du tableau Categories du produit "P001"
db.produits.updateOne(
  { Code: "P001" },
  { $pull: { Categories: "Scolaire" } }
)

// 14) Renommer le champ Nom en Designation dans tous les documents.
db.produits.updateMany(
  {},
  { $rename: { "Nom": "Designation" } }
)

// 15) Afficher tous les produits de la collection produits.
db.produits.find().pretty()

// 16) Afficher uniquement le Nom et le Prix de tous les produits.
db.produits.find(
  {},
  { Designation: 1, Prix: 1, _id: 0 }
)

// 17) Afficher les produits dont la ville du fournisseur est "Casablanca".
db.produits.find({
  "Fournisseur.ville": "Casablanca"
})

// 18) Afficher les produits dont la Quantite est supérieure à 30.
db.produits.find({
  Quantite: { $gt: 30 }
})

// 19) Afficher les produits dont la Quantite est inférieure ou égale à 20.
db.produits.find({
  Quantite: { $lte: 20 }
})

// 20) Afficher les produits dont le Prix est exactement 10.
db.produits.find({
  Prix: 10
})

// 21) Afficher les produits dont le Prix est différent de 10.
db.produits.find({
  Prix: { $ne: 10 }
})

// 22) Afficher les produits appartenant à la catégorie "Scolaire".
db.produits.find({
  Categories: "Scolaire"
})

// 23) Afficher uniquement les produits contenant le champ Categories.
db.produits.find({
  Categories: { $exists: true }
})

// 24) Afficher les produits ne contenant pas le champ Categories.
db.produits.find({
  Categories: { $exists: false }
})

// 25) Afficher les produits dont le Prix > 10 et la Quantite < 100.
db.produits.find({
  Prix: { $gt: 10 },
  Quantite: { $lt: 100 }
})

// 26) Afficher les produits dont le Prix < 5 ou la ville du fournisseur est "Marrakech".
db.produits.find({
  $or: [
    { Prix: { $lt: 5 } },
    { "Fournisseur.ville": "Marrakech" }
  ]
})

// 27) Afficher les produits qui n'ont pas la ville du fournisseur = "Casablanca".
db.produits.find({
  "Fournisseur.ville": { $ne: "Casablanca" }
})

// 28) Afficher les produits qui n'appartiennent pas à la catégorie "Bureau".
db.produits.find({
  Categories: { $ne: "Bureau" }
})

// 29) Afficher les produits ayant plus de 2 catégories dans le tableau Categories
db.produits.find({
  "Categories.2": { $exists: true }
})

// 30) Afficher les produits dont le Prix est compris entre 5 et 15.
db.produits.find({
  Prix: { $gte: 5, $lte: 15 }
})

// 31) Afficher les produits dont la Quantite est supérieure ou égale à 50.
db.produits.find({
  Quantite: { $gte: 50 }
})

// 32) Afficher les produits dont le Prix est supérieur à 20 et dont la ville du fournisseur est "Ouarzazate"
db.produits.find({
  Prix: { $gt: 20 },
  "Fournisseur.ville": "Ouarzazate"
})

// 33) Afficher les produits dont le Prix est supérieur à 20 ou la ville du fournisseur est "Ouarzazate"
db.produits.find({
  $or: [
    { Prix: { $gt: 20 } },
    { "Fournisseur.ville": "Ouarzazate" }
  ]
})
