# 📂 MongoDB Exercise — Stagiaires Collection

**Author:** Ayoub Aguezar  
**Background:** Student at ISTA & University of the People (Software Engineering), ALX Africa Data Engineering Trainee  

---

## Objective
Manage a collection of students (`stagiaires`) with CRUD operations in MongoDB.

---

## MongoDB Commands

```javascript
// 1️⃣ Remove all existing documents (clean collection)
db.stagiaires.deleteMany({}) // preferred over remove()

// 2️⃣ Insert multiple students
db.stagiaires.insertMany([
  { nom: "Ben", prenom: "Ali", age: 21, ville: "Ouarzazate", notes: [12,14] },
  { nom: "El Amrani", prenom: "Sara", age: 22, ville: "Zagora", notes: [13,15] },
  { nom: "Khalil", prenom: "Youssef", age: 23, ville: "Tinghir", notes: [10,16] },
  { nom: "El Fassi", prenom: "Nada", age: 20, ville: "Midelt", notes: [14,12] },
  { nom: "Ali", prenom: "Hassan", age: 21, ville: "Errachidia", notes: [11,15] },
  { nom: "Hassan", prenom: "Imane", age: 22, ville: "Ouarzazate", notes: [13,14] },
  { nom: "Karim", prenom: "Yassine", age: 23, ville: "Zagora", notes: [15,16] },
  { nom: "Souad", prenom: "Leila", age: 20, ville: "Tinghir", notes: [12,13] },
  { nom: "Adil", prenom: "Omar", age: 21, ville: "Midelt", notes: [14,15] },
  { nom: "Zahra", prenom: "Fatima", age: 22, ville: "Errachidia", notes: [16,17] },
  { nom: "Younes", prenom: "Anas", age: 23, ville: "Ouarzazate", notes: [10,12] },
  { nom: "Imane", prenom: "Salma", age: 20, ville: "Zagora", notes: [11,14] },
  { nom: "Othman", prenom: "Rachid", age: 21, ville: "Tinghir", notes: [13,16] },
  { nom: "Meryem", prenom: "Sofia", age: 22, ville: "Midelt", notes: [14,15] },
  { nom: "Samir", prenom: "Mehdi", age: 23, ville: "Errachidia", notes: [12,13] },
  { nom: "Hanae", prenom: "Nadia", age: 20, ville: "Ouarzazate", notes: [15,16] },
  { nom: "Yassir", prenom: "Bilal", age: 21, ville: "Zagora", notes: [14,15] },
  { nom: "Salma", prenom: "Mariam", age: 22, ville: "Tinghir", notes: [13,17] },
  { nom: "Amine", prenom: "Karim", age: 23, ville: "Midelt", notes: [10,14] },
  { nom: "Leila", prenom: "Hanane", age: 20, ville: "Errachidia", notes: [12,13] }
]);

// 3️⃣ Update operations
db.stagiaires.updateOne({prenom:"Ali"}, {$set:{age:22}})
db.stagiaires.updateOne({prenom:"Sara", nom:"El Amrani"}, {$push:{notes:18}})
db.stagiaires.updateMany({ville:"Ouarzazate"}, {$push:{notes:20}})
db.stagiaires.updateOne({nom:"Ben", prenom:"Ali"}, {$pull:{notes:20}})
db.stagiaires.updateOne({nom:"Ben", prenom:"Ali"}, {$push:{notes:20}})
db.stagiaires.updateMany({ville:"Midelt"}, {$inc:{"notes.$[]":1}})

// 4️⃣ Delete operations
db.stagiaires.deleteOne({nom:"El Fassi", prenom:"Nada"})
db.stagiaires.deleteMany({ville:"Errachidia"})

// 5️⃣ Query examples
db.stagiaires.find({ville:"Zagora"}, {nom:1, prenom:1})
db.stagiaires.find({ville:"Ouarzazate"}, {nom:1, ville:1})
db.stagiaires.find({ville:"Tinghir"}, {prenom:1, notes:1})
db.stagiaires.find({})
