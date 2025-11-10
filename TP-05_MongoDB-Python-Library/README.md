# 📘 MongoDB Python Project — Library Management

This project demonstrates how to **connect Python to MongoDB** using the `pymongo` library and perform various **CRUD** and **aggregation** operations on a collection called `publications`.

---

## 🧠 Project Overview

The goal is to manage a MongoDB database containing publications (books), perform queries, and manipulate data directly from Python.

---

## ⚙️ Requirements

Make sure you have the following installed on your system:

- 🐍 **Python 3.x**
- 🍃 **MongoDB** (running locally or remotely)
- 📦 **pymongo** library

Install pymongo with:

```bash
python -m pip install pymongo
```

---

## 🧩 Connection Setup

```python
from pymongo import MongoClient

client = MongoClient("mongodb://Ayoub:123456@localhost:27017/?authSource=admin")
db = client["cinema"]
```

> Replace the connection string with your own credentials if needed.

---

## 📚 Database and Collections

- Database: **bibliotheque**
- Collection: **publications**

---

## 🧱 Example Operations

### 1. Insert a Single Document
```python
publications_collection.insert_one({
    "titre": "Intelligence Artificielle Fondamentale",
    "auteur": "Sophie Martin",
    "year": 2023,
    "categorie": "Informatique",
    "langage": ["Python", "R", "Julia"],
    "pages": 450,
    "prix": 250,
    "maison_edition": "TechEditions",
    "evaluation": {"note": 4.7, "avis": 89},
    "disponible": True
})
```

### 2. Insert Multiple Documents
```python
publications_collection.insert_many([
  {
    "titre": "Applications Mobiles avec React Native",
    "auteur": "Laura Dubois",
    "year": 2023,
    "categorie": "Développement Mobile",
    "langage": ["JavaScript", "React", "TypeScript"],
    "prix": 180
  },
  {
    "titre": "Cybersécurité pour Débutants",
    "auteur": "Marc Weber",
    "year": 2022,
    "categorie": "Sécurité Informatique",
    "prix": 210
  }
])
```

### 3. Find all publications
```python
for x in publications_collection.find():
    print(x)
```

### 4. Find only title and author
```python
for x in publications_collection.find({}, {"_id": 0, "titre": 1, "auteur": 1}):
    print(x)
```

### 5. Aggregation Example: Average Price
```python
result = publications_collection.aggregate([
    { "$group": { "_id": None, "prix_moyen": { "$avg": "$prix" } } }
])
for doc in result:
    print("Prix moyen des livres:", doc["prix_moyen"])
```

### 6. Update Example: Increase price by 10%
```python
publications_collection.update_many(
    {"auteur": "Sophie Martin"},
    {"$mul": {"prix": 1.10}}
)
```

### 7. Delete Example: Remove books published before 2010
```python
publications_collection.delete_many({"year": {"$lt": 2010}})
```

---

## ✅ Closing the Connection
```python
client.close()
```

---

## 🧑‍💻 Author
**Ayoub Aguezar**

> A MongoDB–Python project for database practice and data manipulation.

