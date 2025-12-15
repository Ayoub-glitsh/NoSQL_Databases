  

* * *

🎬 CineMax Database Project
===========================

This project contains SQL and MongoDB scripts for managing a **film rental database** named `cineMax`. It includes table creation, data insertion, queries, stored procedures, triggers, and MongoDB aggregation operations.

* * *

📁 Project Structure
--------------------

*   **Part 1 – MySQL / SQL**
    
    *   `CREATE DATABASE cineMax;`
        
    *   Tables:
        
        *   `film` – stores film information (`idfilm`, `titre`, `genre`, `annee`, `prixLocation`, `coutProduction`, `RevenuTotal`)
            
        *   `client` – stores client information (`idclient`, `nom`, `prenom`, `telephone`)
            
        *   `location` – stores rental information (`idlocation`, `datelocation`, `dateretour`, `idfilm`, `idclient`, `prixLocation`)
            
    *   SQL Features:
        
        *   Data insertion (`INSERT INTO`)
            
        *   Queries to filter rentals by film and year
            
        *   Stored procedures:
            
            *   `AfficherFilm(id_film)` – shows details of a specific film
                
            *   `FilmJamaisLoues()` – lists films never rented
                
        *   User-defined function:
            
            *   `ChiffreAffairesFilm(id_film)` – calculates yearly revenue for a film
                
        *   Trigger:
            
            *   `update_revenu_total` – automatically updates total revenue for films after each rental insertion
                
*   **Part 2 – MongoDB**
    
    *   Database: `cineMax`
        
    *   Collection: `films`
        
    *   Documents structure:
        
            {
              "id": 9,
              "titre": "ALAMI",
              "realisateur": "Ahmed",
              "revenuTotal": 0,
              "locations": [
                {
                  "id_loc": 201,
                  "date": "02/06/2017",
                  "prixLocation": 300
                }
              ]
            }
            
        
    *   MongoDB Operations:
        
        *   Insertions (`insertOne`)
            
        *   Simple queries (`find`)
            
        *   Aggregation examples:
            
            *   Count total rentals per film
                
            *   Calculate total revenue for the current year
                
            *   Calculate total revenue per film
                
            *   Update documents with calculated total revenue
                
            *   List films that have never been rented
                

* * *

⚡ Usage
-------

### SQL

1.  Create the database and tables:
    
        CREATE DATABASE cineMax;
        USE cineMax;
        
    
2.  Insert sample data into `film`, `client`, and `location`.
    
3.  Execute stored procedures, functions, and triggers as needed.
    

### MongoDB

1.  Create database and collection:
    
        use cineMax;
        db.createCollection("films");
        
    
2.  Insert documents using `insertOne` or `insertMany`.
    
3.  Perform aggregations for revenue calculation and rental statistics.
    

* * *

🛠️ Features
------------

*   **Relational SQL Database:**
    
    *   Track films, clients, and rentals
        
    *   Automatically update film revenue after rental
        
    *   Retrieve films never rented
        
    *   Calculate revenue per film using stored function
        
*   **MongoDB NoSQL Database:**
    
    *   Flexible JSON-based document storage
        
    *   Aggregate rental statistics
        
    *   Update total revenue per film dynamically
        
    *   Identify films never rented
        

* * *

📌 Notes
--------

*   Ensure MySQL or MariaDB is installed for SQL operations.
    
*   Ensure MongoDB is installed and running for NoSQL operations.
    
*   Dates in MongoDB are stored as strings and parsed using `$dateFromString` for aggregation.
    

* * *

👨‍💻 Author
------------

**Ayoub Aguezar**   
CineMax Database Project – Film Rental Management System

* * *
