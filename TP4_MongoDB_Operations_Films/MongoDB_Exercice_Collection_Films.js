db.films.find()

db.films.find({}, { "titre": 1, "genre": 1, "_id": 0 })

db.films.find({ "genre": "Science-Fiction" })

db.films.find({ "realisateur": "Christopher Nolan" })

db.films.find({ "annee": { $lt: 2010 } })

db.films.find({ "salles.ville": "Agadir" })

db.films.find({ "duree": { $gt: 150 } })

db.films.find().sort({ "annee": -1 })

db.films.find({ "notes": { $gt: 9 } })

db.films.find({ $or: [{ "genre": "Action" }, { "genre": "Drame" }] })

db.films.find({ "genre": { $ne: "Romance" } })

db.films.find().limit(3)

db.films.updateMany({}, { $set: { "version": "VF" } })

db.films.updateMany({}, { $inc: { "salles.$[].prix": 5 } })

db.films.deleteMany({ "realisateur": "James Cameron" })
