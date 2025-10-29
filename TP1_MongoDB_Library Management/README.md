# 📚 MongoDB Library Management System

[![MongoDB](https://img.shields.io/badge/MongoDB-4.4-green?logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![GitHub issues](https://img.shields.io/github/issues/yourusername/yourrepo)](https://github.com/yourusername/yourrepo/issues)  
[![GitHub stars](https://img.shields.io/github/stars/yourusername/yourrepo)](https://github.com/yourusername/yourrepo/stargazers)

---

## 📑 Table of Contents
- [Project Overview](#project-overview)
- [Database Structure](#database-structure)
- [Collections](#collections)
- [Project Features](#project-features)
- [CRUD Operations](#crud-operations)
- [Queries and Filtering](#queries-and-filtering)
- [Aggregation & Analytics](#aggregation--analytics)
- [Technologies Used](#technologies-used)
- [Learning Objectives](#learning-objectives)
- [License](#license)

---

## 🌟 Project Overview
The **MongoDB Library Management System** is designed to manage a library efficiently.  
It allows:  
- Tracking books and their availability  
- Recording borrowings and returns  
- Calculating fines and total revenue  
- Generating analytical insights  

This project demonstrates **NoSQL database concepts**, **CRUD operations**, and advanced **MongoDB aggregation pipelines**.

---

## 🏗 Database Structure
The project uses **two primary collections**:

### Books Collection
Stores book information:  
- Title  
- Author  
- Genre  
- Price  
- Availability status  
- Publication year  

### Borrowings Collection
Stores borrowing transactions:  
- Reader information (`firstName`, `lastName`)  
- Reference to borrowed book (`book_id`)  
- Borrow and return dates  
- Days borrowed  
- Amount and penalty fees  

All borrowings reference books via IDs to allow **advanced analytics**.

---

## 📚 Collections
### Books
- Each document represents a book in the library.  
- Supports adding, updating, deleting, and querying books.  

### Borrowings
- Each document represents a borrowing record.  
- Tracks readers, borrowed books, durations, amounts, and penalties.  
- Supports queries for penalties, overdue books, and reader activity.

---

## ⚡ Project Features
- Full **CRUD operations** for both collections  
- Filter and comparison queries (price, genre, availability)  
- Aggregation pipelines for analytics:  
  - Average book price  
  - Total revenue  
  - Most borrowed book  
  - Reader statistics  
- `$lookup` for joining borrowings and books  
- Reporting for library management

---

## 🛠 CRUD Operations
The system supports:  
- **Create**: Add books and borrowing records  
- **Read**: Query books and borrowings with filters  
- **Update**: Modify book availability, price, and borrow details  
- **Delete**: Remove books or borrowings  

---

## 🔍 Queries and Filtering
- Filter books by price, genre, or availability  
- Identify borrowings with penalties  
- Search borrowings by reader  
- Complex queries using `$and` and `$or`  

---

## 📊 Aggregation & Analytics
- Calculate **average book price**  
- Sum **total revenue** from borrowings  
- Count books per genre  
- Identify **most borrowed book** or **most active reader**  
- Compute **reader revenue contributions** including penalties  

---

## 💻 Technologies Used
- **MongoDB** – NoSQL database  
- **Mongo Shell / Compass** – for database interaction  

---

## 🎯 Learning Objectives
- Manage **NoSQL databases**  
- Perform **CRUD operations** efficiently  
- Use **aggregation pipelines** and `$lookup` for joining collections  
- Generate meaningful **analytics and statistics** from database data  
- Apply **best practices** in database management  

---

## 📄 License
This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for details
