# 🎬 MongoDB Exercise – Films Collection

## 📘 Overview
This exercise explores various MongoDB operations using a collection named **`films`**.  
The goal is to practice essential database manipulation techniques, including querying, filtering, sorting, updating, and deleting documents within a dataset representing films.

---

## 🎯 Objectives
The main objectives of this exercise are to:
- Understand how to retrieve and project specific data using the **`find()`** method.  
- Apply **query filters** to extract documents based on certain criteria (e.g., genre, director, release year, duration, or ratings).  
- Use **logical operators** such as `$or`, `$ne`, and comparison operators like `$lt` and `$gt`.  
- Implement **sorting** and **limiting** to organize and restrict query results.  
- Perform **update operations** using operators like `$set` and `$inc`.  
- Execute **delete operations** to remove documents based on defined conditions.

---

## 🗂️ Data Structure
The `films` collection represents a dataset of movies containing fields such as:
- **titre** → The title of the film  
- **genre** → The film’s category (e.g., Action, Drama, Science-Fiction)  
- **realisateur** → The director of the film  
- **annee** → The release year  
- **duree** → The film’s duration in minutes  
- **notes** → The average rating  
- **salles** → An array of cinemas showing the film, with their respective cities and ticket prices  

This structure allows the use of **embedded documents** and **arrays**, demonstrating how to query nested data in MongoDB.

---

## 🧠 Skills Practiced
Throughout this exercise, you will strengthen your understanding of:
- **Basic data retrieval** from a MongoDB collection  
- **Field projection** to display only relevant data  
- **Conditional queries** with operators (`$lt`, `$gt`, `$ne`, `$or`, etc.)  
- **Sorting** and **pagination** techniques  
- **Bulk updates** and nested field modifications  
- **Document deletion** and data cleaning  

---

## 🚀 Outcome
By completing this exercise, you will:
- Gain confidence in writing MongoDB queries.  
- Understand how to manipulate data efficiently within a collection.  
- Be able to apply these techniques to real-world projects involving structured and semi-structured data.

---

## 🧩 Tools & Environment
- **Database:** MongoDB  
- **Shell / Interface:** Mongo Shell or MongoDB Compass  
- **Collection Name:** `films`

---

## 👨‍💻 Author
**Ayoub Aguezar**  
📍 *MongoDB Practice – ISTA Ouarzazate*  
📅 *October 2025*
