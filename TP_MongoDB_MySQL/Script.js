// la partie 1

// 1 
CREATE DATABASE cineMax;

// 2
USE cineMax;



create table film (
    idfilm varchar(20) primary key,
    titre varchar(50),
    genre varchar(50),
    annee date,
    prixlocation decimal(12,2)
);

create table client (
    idclient int primary key,
    nom varchar(50),
    prenom varchar(50),
    telephone varchar(20)
);

create table location (
    idlocation int primary key,
    datelocation date,
    dateretour date,
    idfilm varchar(20),
    idclient int,
    foreign key (idfilm) references film(idfilm),
    foreign key (idclient) references client(idclient)
    
    
);

// 3 

ALTER TABLE location  
ADD prixLocation DECIMAL(10,2);


// 4 

ALTER TABLE film  
ADD coutProduction DECIMAL(10,2);


5 //

INSERT INTO film (idfilm, titre, genre, annee, prixlocation, coutproduction) VALUES
("F1023", 'Inception', 'Science-Fiction', '2010-07-16', 3.50, 160000000),
("2", 'Le Parrain', 'Drame', '1972-03-24', 2.80, 6000000);

INSERT INTO client (idclient, nom, prenom, telephone) VALUES
(101, 'Dubois', 'Marie', '0612345678'),
(102, 'Martin', 'Pierre', '0623456789');

INSERT INTO location (idlocation, datelocation, dateretour, idfilm, idclient, prixlocation) VALUES
(1001, '2024-01-10', '2024-01-13', 1, 101, 3.50),
(1002, '2024-01-12', '2024-01-15', 3, 102, 4.00);


6 // 

SELECT l.* 
FROM location  l
WHERE l.idFilm = 'F1023'
  AND YEAR(l.dateLocation) = YEAR(CURDATE());



7 // 
DELIMITER $$

CREATE PROCEDURE AfficherFilm(IN id_film varchar(20))
BEGIN
    SELECT *
    FROM film
    WHERE  idFilm = id_film ;
END $$

DELIMITER ;


CALL AfficherFilm("F1023");




// 8


DELIMITER $$

CREATE PROCEDURE FilmJamaisLoues()
BEGIN
    SELECT *
    FROM film
    WHERE idFilm NOT IN (SELECT DISTINCT idFilm FROM location);
END $$

DELIMITER ;

CALL FilmJamaisLoues();


// 9

DELIMITER $$

CREATE FUNCTION ChiffreAffairesFilm(id_film VARCHAR(20)) 
RETURNS DECIMAL(10,2)
BEGIN
    DECLARE total DECIMAL(10,2);
    
    SELECT COALESCE(SUM(f.prixLocation), 0) INTO total
    FROM film f
    inner join location l on f.idFilm = l.idFilm
    WHERE f.idFilm = id_film
      AND YEAR(l.dateLocation) = YEAR(CURDATE());
    
    RETURN total;
END $$

DELIMITER ;


SELECT ChiffreAffairesFilm('F1023') AS Resultat;




// 10 



ALTER TABLE film
ADD RevenuTotal DECIMAL(10,2) DEFAULT 0;

DELIMITER $$

CREATE TRIGGER update_revenu_total
AFTER INSERT ON location
FOR EACH ROW
BEGIN
    
    UPDATE film 
    SET RevenuTotal = RevenuTotal + NEW.prixLocation  
    WHERE idFilm = NEW.idFilm;
END $$

DELIMITER ;




// la partie 2 


//1
use cineMax
//2
db.createCollection("films")
//3
db.films.insertOne({
    "id": 9,
    "titre": "ALAMI",
    "realisateur": "Ahmed",
    "revenuTotal": 0,
    "locations": [
            {
                "id_loc": 201,
                "date": "02/06/2017",
                "prixLocation": 300
            },
            {
                "id_loc": 219,
                "date": "12/09/2017",
                "prixLocation": 35
            }
        ]
    })

//4
db.films.find({id:12})

//5
db.films.aggregate([
    {
        $unwind: "$locations"
    },
    
    {
        $group: {
            _id: "$titre",
            "le nombre total des locations": { $sum: 1 }
        }
    }
]);


//6

var anneeCourante = new Date().getFullYear(); 

db.films.aggregate([
  {
    $unwind: "$locations"
  },
  {
    $addFields: {
      "anneeLocation": {
        $year: {
          $dateFromString: {
            dateString: "$locations.date",
            format: "%d/%m/%Y"  
          }
        }
      }
    }
  },
  {
    $match: {
      "anneeLocation": anneeCourante
    }
  },
  {
    $group: {
      _id: null,
      "Montant Total Pour cette Annee": { $sum: "$locations.prixLocation" }
    }
  }
])



// 7
db.films.aggregate([
    {$match: {
      id : 10
    }},
    {
        $unwind: "$locations"
    },
    {
        $group: {
            _id: null,
            MontantTotal: { $sum: "$locations.prixLocation" }
        }
    }
]);




//8

db.films.aggregate([
  {
    $project: {
      titre: 1,
      revenuCalcule: {
        $sum: "$locations.prixLocation"
      }
    }
  }
]).forEach(function(doc) {
  db.films.updateOne(
    { _id: doc._id },
    { $set: { revenuTotal: doc.revenuCalcule } }
  );
});



9//



db.films.aggregate([
  {
    $match: {
      $or: [
        { locations: { $exists: false } },
        { locations: null },
        { locations: [] },
        { $expr: { $eq: [{ $size: { $ifNull: ["$locations", []] } }, 0] } }
      ]
    }
  },
  {
    $project: {
      titre: 1,
      realisateur: 1,
      statut: "Jamais loue"
    }
  }
])





