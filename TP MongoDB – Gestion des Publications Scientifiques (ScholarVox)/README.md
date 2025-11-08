# 📚 Projet MongoDB – Base de Données **ScholarVox**

Ce projet illustre la création et la manipulation d'une base de données MongoDB appelée **ScholarVox**, dédiée à la gestion de publications scientifiques et académiques (livres, articles, conférences, etc.).

---

## 🧠 Objectif du Projet

Le but de ce script est de :
- Créer une base de données et une collection pour stocker des publications.  
- Insérer plusieurs documents représentant des **livres**, **articles**, **conférences**, etc.  
- Effectuer des **requêtes MongoDB** (filtrage, tri, agrégation).  
- Manipuler les données avec des **opérations CRUD**.  
- Explorer les **agrégations avancées** pour analyser les publications par auteur, éditeur, année, etc.

---

## ⚙️ Prérequis

Avant de lancer le script, assure-toi d’avoir :
- [MongoDB](https://www.mongodb.com/try/download/community) installé sur ton système.
- Le shell **mongosh** disponible dans ton terminal.  

---

## 🚀 Utilisation

1. **Ouvrir le shell MongoDB**  
   ```bash
   mongosh
   ```

2. **Copier-coller le script** directement dans le shell  
   ou bien exécuter le fichier via :
   ```bash
   load("script.js")
   ```

3. **Exécuter les commandes pas à pas** selon les parties décrites ci-dessous.

---

## 🧩 Structure du Script

### 🧱 Partie 01 – Création et insertion des données

- Création de la base de données `ScholarVox`
- Création de la collection `publis` puis renommage en `publications`
- Insertion de plusieurs documents représentant des publications :
  ```javascript
  {
    "type": "Book",
    "title": "Artificial Intelligence: A Modern Approach",
    "year": 2020,
    "publisher": "Pearson",
    "authors": ["Stuart Russell", "Peter Norvig"],
    "source": "DBLP"
  }
  ```

---

### 🔍 Partie 02 – Requêtes de base

Quelques exemples de requêtes utilisées :

- Trouver tous les livres :
  ```javascript
  db.publications.find({ type: "Book" })
  ```

- Trouver toutes les publications depuis 2014 :
  ```javascript
  db.publications.find({ year: { $gte: 2014 } })
  ```

- Récupérer tous les éditeurs distincts :
  ```javascript
  db.publications.distinct("publisher")
  ```

- Trier les publications de "Toru Ishida" :
  ```javascript
  db.publications.find({ publisher: "Toru Ishida" }).sort({ title: 1, "pages.start": 1 })
  ```

---

### 📊 Partie 03 – Agrégations avancées

Cette partie exploite le **pipeline d’agrégation** de MongoDB.

Exemples :

- Nombre d’auteurs par livre :
  ```javascript
  db.publications.aggregate([
    { $match: { type: "Book" } },
    { $unwind: "$authors" },
    { $group: { _id: "$_id", title: { $first: "$title" }, nombreAuteurs: { $sum: 1 } } }
  ])
  ```

- Moyenne du nombre de pages par éditeur :
  ```javascript
  db.publications.aggregate([
    {
      $project: {
        publisher: 1,
        nombrePages: { $add: [{ $subtract: ["$pages.end", "$pages.start"] }, 1] }
      }
    },
    {
      $group: { _id: "$publisher", moyennePages: { $avg: "$nombrePages" } }
    }
  ])
  ```

- Publications par auteur et par année :
  ```javascript
  db.publications.aggregate([
    { $unwind: "$authors" },
    { $group: { _id: { auteur: "$authors", annee: "$year" }, nombrePublications: { $sum: 1 } } }
  ])
  ```

---

### 🧹 Partie 04 – Nettoyage et mises à jour

- Rechercher un mot-clé dans le titre :
  ```javascript
  db.publications.find({ title: /database/i })
  ```

- Supprimer un champ inutile :
  ```javascript
  db.publications.updateMany({ type: "Article" }, { $unset: { "number": "" } })
  ```

- Supprimer les articles sans auteurs :
  ```javascript
  db.publications.deleteMany({
    type: "Article",
    $or: [
      { authors: { $exists: false } },
      { authors: null },
      { authors: { $size: 0 } }
    ]
  })
  ```

---

## 📁 Arborescence du Projet

```
📂 ScholarVox/
├── README.md
└── script.js   # Le script MongoDB complet
```

---

## 🧑‍💻 Auteur

**Ayoub Aguezar**  
Étudiant en Développement Web Full-Stack à l’ISTA  
💡 Passionné par les bases de données, la cybersécurité et l’intelligence artificielle.

---

## 🧾 Licence

Ce projet est distribué sous la licence MIT.  
Tu peux le réutiliser, le modifier et le redistribuer librement.
