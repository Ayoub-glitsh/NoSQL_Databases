1)
use bibliotheque

2)
db.createCollection("livres")
db.createCollection("emprunts")

3) et 4)
const livres = [
  { titre: "Le Comte de Monte-Cristo", auteur: "Alexandre Dumas", genre: "Aventure", prix: 180, disponible: true, annee_publication: 1844 },
  { titre: "Madame Bovary", auteur: "Gustave Flaubert", genre: "Roman réaliste", prix: 130, disponible: false, annee_publication: 1857 },
  { titre: "L'Étranger", auteur: "Albert Camus", genre: "Philosophique", prix: 120, disponible: true, annee_publication: 1942 },
  { titre: "Notre-Dame de Paris", auteur: "Victor Hugo", genre: "Historique", prix: 160, disponible: true, annee_publication: 1831 },
  { titre: "Germinal", auteur: "Émile Zola", genre: "Roman naturaliste", prix: 140, disponible: false, annee_publication: 1885 }

]


const livresInsertResult = db.livres.insertMany(livres)
const livresIds = livresInsertResult.insertedIds


const emprunts = [
  {
  lecteur: { nom: "Benali", prenom: "Sara" },
  livre_id: livresIds[0],
  date_emprunt: ISODate("2025-10-10"),
  date_retour: ISODate("2025-10-20"),
  jours_emprunt: 10,
  montant: 100,
  penalite: 0
},
{
  lecteur: { nom: "El Fassi", prenom: "Youssef" },
  livre_id: livresIds[1],
  date_emprunt: ISODate("2025-09-05"),
  date_retour: ISODate("2025-09-12"),
  jours_emprunt: 7,
  montant: 80,
  penalite: 10
},
{
  lecteur: { nom: "Amrani", prenom: "Laila" },
  livre_id: livresIds[2],
  date_emprunt: ISODate("2025-10-01"),
  date_retour: ISODate("2025-10-11"),
  jours_emprunt: 10,
  montant: 120,
  penalite: 0
},
{
  lecteur: { nom: "Touhami", prenom: "Omar" },
  livre_id: livresIds[3],
  date_emprunt: ISODate("2025-09-25"),
  date_retour: ISODate("2025-10-05"),
  jours_emprunt: 10,
  montant: 90,
  penalite: 20
},
{
  lecteur: { nom: "Bouhaddi", prenom: "Imane" },
  livre_id: livresIds[4],
  date_emprunt: ISODate("2025-10-15"),
  date_retour: ISODate("2025-10-25"),
  jours_emprunt: 10,
  montant: 110,
  penalite: 0
}

]

db.emprunts.insertMany(emprunts)

5)

db.livres.updateMany({},{$set:{disponible:true}})
db.livres.updateMany({},{$unset:{disponible:""}})

6)

db.livres.updateOne({"genre": "Philosophique"},{$set:{prix:200}})


7)
db.livres.deleteOne({genre: "Roman naturaliste"})


8)
db.livres.find()

9)

db.livres.find({disponible:true})

10)

db.livres.find({prix: {$gt:120}})

11)

db.livres.find({disponible:true},{titre:1,prix:1})

12)

db.emprunts.find({"lecteur.nom":"Benali"})

13)

db.emprunts.find({jours_emprunt:{$gt:7}})

14)

db.livres.find({"genre": "Roman réaliste"})

15)

db.livres.find({
  $and: [
    { prix: { $gt: 100 } },
    { prix: { $lt: 180 } }
  ]
})

db.livres.find({
  prix : {$gt : 100 , $lt : 180 }
})

db.livres.find({
  prix : {$gt : 100},
  prix : { $lt : 180}
})

16)
db.livres.find({disponible:false})

17)

db.livres.find({genre: "Aventure", prix: {$lt : 200}})

18)

db.livres.find({
  $or: [
    { genre: "Aventure" },
    { prix: { $gt: 150 } }
  ]
})

19)

db.emprunts.find({penalite:{$gt:0}})

20)

db.emprunts.find({jours_emprunt:10})

21)

db.emprunts.find({penalite:{$exists:false}})

22)

db.emprunts.find({ montant:{$gt:80}})

23)

db.livres.aggregate([
  {$group: {
    _id: null,
    prixMoyen: {
      $avg: "$prix" 
    }
  }}
])


24)

db.livres.aggregate([

  {$match: {
    disponible:true
  }},
  {$group: {
    _id: null,
    prixTotal: {
      $sum: "$prix" 
    }
  }}
])

25)


db.emprunts.aggregate([
  {$group: {
    _id: null,
    recetteTotale : {
      $sum: "$montant" 
    }
  }}
])

26)

db.livres.aggregate([
  {$group: {
    _id: "$genre",
    recetteTotale : {
      $sum: "$prix" 
    }
  }}
])


db.emprunts.aggregate([
  {$lookup: {
    from: "livres",
    localField: "livre_id",
    foreignField: "_id",
    as: "livres_details"
  }},
  {$unwind: "$livres_details"}
  ,
   {$group: {
    _id: "$livres_details.genre",
    recetteTotale : {
      $sum: "$livres_details.prix" 
    }
  }}
])

27)

db.emprunts.aggregate([
  {$lookup: {
    from: "livres",
    localField: "livre_id",
    foreignField: "_id",
    as: "livres_details"
  }},
  {$unwind: "$livres_details"}
  ,
  {$group: {
    _id: "$livres_details.titre",
    moyenne_des_jours_empruntes: {
      $avg: "$jours_emprunt" 
    }
  }}
])

28)

db.livres.aggregate([
  
  {$group: {
    _id: "$genre",
    le_nombre_de_livres_par_genre: {
      $sum: 1 
    }
  }}
])

29)

db.livres.aggregate([
  
  {$group: {
    _id: null,
    prix_minimum: {
      $min: "$prix"
    },
    prix_miximum: {
      $max: "$prix"
    },
    prix_moyen: {
      $avg: "$prix"
    },
  }}
])

30)

db.emprunts.aggregate([
  
  {$group: {
    _id: {nom:"$lecteur.nom",prenom:"$lecteur.prenom"},
    Nombre_de_fois_emprunte: {
      $sum: 1
    }
  }},
  {$sort: {
  "Nombre_de_fois_emprunte": -1
  }},
  {$limit: 1}


])



31)


db.emprunts.aggregate([
  {$lookup: {
    from: "livres",
    localField: "livre_id",
    foreignField: "_id",
    as: "livres_details"
  }},
  {$unwind: "$livres_details"}
  ,
  {$group: {
    _id: "$livres_details.titre",
    Nombre_de_fois_emprunte: {
      $sum: 1
    }
  }},
  {$sort: {
    "Nombre_de_fois_emprunte": -1
  }},
  {$limit: 1}
])


32)

db.emprunts.aggregate([
  {$group: {
    _id: null,
    le_nombre_moyen_de_jours_d_emprunt: {
      $avg: "$jours_emprunt"
    }
  }}
])

33)

db.emprunts.aggregate([
  {$match: {
    jours_emprunt:{$gt:7}
  }},
  {$group: {
    _id: null,
    montant_total: {
      $sum: "$montant"
    },
    la_moyenne: {
      $avg: "$jours_emprunt"
    }
  }}
])

34)

db.livres.find({
  annee_publication : { $lt: 2010 }
})

35)
db.emprunts.find(
  { penalite: { $gt: 15 } }, 
  { lecteur: 1, _id: 0 }    
)

36)

db.livres.aggregate([
  {$match: {
    disponible:true
  }},
  {$count: 'NOMBRE DES LIVRES DISPONIBLES'}

])

37)

db.emprunts.aggregate([
  {$match: {
    date_emprunt:{$gt: ISODate("2025-01-01")},
    date_retour:{$lt: ISODate("2025-12-30")}
  }},
  
  
  {$group: {
    _id: null,
    la_recette_totale_par_année_d_emprunt: {
      $sum: {$add:["$montant","$penalite"]}
    }
  }}



])














38)

db.emprunts.aggregate([
  
  {$group: {
    _id: {nom:"$lecteur.nom",prenom:"$lecteur.prenom"},
    Prix_de_tous_ces_empruntes: {
      $sum: {$add:["$montant","$penalite"]}
    }
  }},
  {$sort: {
  "Prix_de_tous_ces_empruntes": -1
  }},
  {$limit: 1}


])

39)

db.emprunts.aggregate([
  
  {$group: {
    _id: {nom:"$lecteur.nom",prenom:"$lecteur.prenom"},
    Nombre_de_fois_emprunte: {
      $sum: 1
    }
  }}

])



