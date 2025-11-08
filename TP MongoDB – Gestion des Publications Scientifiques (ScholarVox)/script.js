

// La Partie 01
// 1) 

use ScholarVox

// 2)

db.createCollection("publis")

// 3)

const pub = {
  "type": "Book",
  "title": "Modern Database Systems: The Object Model, Interoperability, and Beyond.",
  "year": 1995,
  "publisher": "ACM Press and Addison-Wesley",
  "authors": ["Won Kim"],
  "source": "DBLP"
}

// 4)

db.publis.insertOne(pub);

// 5)

db.publis.insertMany([
  

{
  "type": "Book",
  "title": "Distributed Systems: Concepts and Design",
  "year": 2012,
  "publisher": "Springer",
  "authors": ["George Coulouris", "Jean Dollimore", "Tim Kindberg"],
  "source": "DBLP"
},


{
  "type": "Article",
  "title": "A Survey of Cloud Computing Security",
  "year": 2015,
  "publisher": "IEEE",
  "authors": ["Toru Ishida", "Mei Lin"],
  "source": "ACM Digital Library",
  "pages": 45
},


{
  "type": "Book",
  "title": "Artificial Intelligence: A Modern Approach",
  "year": 2020,
  "publisher": "Pearson",
  "authors": ["Stuart Russell", "Peter Norvig"],
  "source": "DBLP",
  "booktitle": "AI Series"
},


{
  "type": "Article", 
  "title": "Blockchain Technology for Supply Chain Management",
  "year": 2018,
  "publisher": "Springer",
  "authors": ["Wei Zhang", "Toru Ishida", "Yuki Tanaka"],
  "source": "ScienceDirect",
  "pages": 23
},


{
  "type": "Book",
  "title": "Introduction to Machine Learning with Python",
  "year": 2016,
  "publisher": "O'Reilly Media",
  "authors": ["Andreas Müller", "Sarah Guido"],
  "source": "DBLP"
}])

// 6)

db.publis.renameCollection("publications")


// La Partie 02 

// 1)

db.publications.find({type:"Book"})

// 2)

db.publications.find({year:{$gte:2011}})

// 3)

db.publications.find({year:{$gte:2014},type :"Book"})

// 4)

db.publications.find({authors: "Toru Ishida"})

// 5)

db.publications.distinct(publisher)

// 6)

// la premiere methode 
db.publications.aggregate([
  { $unwind: "$authors" },
  { $group: { _id: "$authors" } }
])

// la deusieme methode 
db.publications.distinct("authors")

// 7)

// puisque on'a pas ce champ dans notre base de donnee je l'ajoute pour chaque document

db.publications.updateMany(
  {},
  { 
    $set: { 
     pages: {"start": 3, "end": 27}
    } 
  }
)

db.publications.insertMany([
  {
    "type": "Article",
    "title": "Machine Learning Applications in Healthcare",
    "year": 2021,
    "publisher": "IEEE",
    "authors": ["Sarah Chen", "David Kim"],
    "source": "IEEE Xplore",
    "pages": { "start": 3, "end": 27 }
  },
  {
    "type": "Article", 
    "title": "Blockchain for Secure Data Sharing",
    "year": 2019,
    "publisher": "Springer",
    "authors": ["Wei Zhang", "Toru Ishida"],
    "source": "ScienceDirect",
    "pages": { "start": 45, "end": 68 }
  },
  {
    "type": "Conference Paper",
    "title": "Real-time Anomaly Detection in IoT Networks",
    "year": 2022,
    "publisher": "ACM",
    "authors": ["Maria Rodriguez", "James Wilson", "Liu Wei"],
    "source": "ACM Digital Library",
    "pages": { "start": 112, "end": 125 }
  },
  {
    "type": "Article",
    "title": "Quantum Computing: Current State and Future Prospects",
    "year": 2020,
    "publisher": "Nature",
    "authors": ["Dr. Elena Petrov"],
    "source": "Nature Journal",
    "pages": { "start": 88, "end": 104 }
  },
  {
    "type": "Conference Paper",
    "title": "Deep Learning for Natural Language Processing",
    "year": 2018,
    "publisher": "Springer",
    "authors": ["Alex Johnson", "Toru Ishida", "Mei Lin"],
    "source": "DBLP",
    "pages": { "start": 203, "end": 219 }
  }
])

db.publications.insertMany([
  {
    "type": "Journal",
    "title": "Advances in Cross-Cultural Computing",
    "year": 2021,
    "publisher": "Toru Ishida",
    "authors": ["Yuki Tanaka", "Mei Lin"],
    "source": "Ishida Publications",
    "pages": { "start": 5, "end": 28 }
  },
  {
    "type": "Book",
    "title": "Digital City Research Papers Volume 1",
    "year": 2019,
    "publisher": "Toru Ishida",
    "authors": ["Wei Zhang", "Maria Rodriguez", "Alex Johnson"],
    "source": "Ishida Research Group",
    "pages": { "start": 1, "end": 350 }
  },
  {
    "type": "Conference Proceedings",
    "title": "International Workshop on Language Grid",
    "year": 2020,
    "publisher": "Toru Ishida",
    "authors": ["Hideyuki Nakanishi", "David Kim", "Sarah Chen"],
    "source": "Language Grid Foundation",
    "pages": { "start": 10, "end": 215 }
  },
  {
    "type": "Article",
    "title": "Multi-agent Systems Quarterly Review",
    "year": 2018,
    "publisher": "Toru Ishida",
    "authors": ["James Wilson", "Liu Wei"],
    "source": "MAS Publications",
    "pages": { "start": 45, "end": 89 }
  },
  {
    "type": "Technical Report",
    "title": "Human-Computer Interaction Trends 2022",
    "year": 2022,
    "publisher": "Toru Ishida",
    "authors": ["Dr. Elena Petrov", "George Coulouris"],
    "source": "HCI Research Center",
    "pages": { "start": 3, "end": 67 }
  }
])

// on passe maintenant a la question 


db.publications.find({publisher:"Toru Ishida"}).sort({title:1,"pages.start":1})


// 8)

db.publications.find({publisher:"Toru Ishida"},{title:1,pages:1}).sort({title:1,"pages.start":1})


// 9)

db.publications.find().sort({title:1,"pages.start":1}).count()

// ou cette repense 

db.publications.find({publisher:"Toru Ishida"}).sort({title:1,"pages.start":1}).count()

// 10)

db.publications.find({publisher:"Toru Ishida",year:{$gte:2011}}).sort({title:1,"pages.start":1}).count()

// ou 

db.publications.find({year:{$gte:2011}}).count()


// Partie 03 

// 1)

db.publications.aggregate([
  { $match: { type: "Book" } },
  { $project: { title: 1 } }
])

// 2)

db.publications.aggregate([
  { $match: { type: "Book" } },
  { $unwind: "$authors" },
  { $group: {
      _id: "$_id",
      title: { $first: "$title" },
      nombreAuteurs: { $sum: 1 }
  }}
])

// 3)

// puisque on'a pas le champ booktitle on doit l'ajouter dans note collection 

db.publications.updateMany(
  { type: "Book", booktitle: { $exists: false } },
  { 
    $set: { 
      "booktitle": "Advanced Computer Science Books" 
    } 
  }
)

db.publications.updateMany(
  { type: "Article", booktitle: { $exists: false } },
  { 
    $set: { 
      "booktitle": "Research Papers Collection" 
    } 
  }
)

db.publications.updateMany(
  { type: { $in: ["Conference Paper", "Conference Proceedings"] }, booktitle: { $exists: false } },
  { 
    $set: { 
      "booktitle": "Conference Proceedings Series" 
    } 
  }
)

db.publications.updateMany(
  { type: { $in: ["Journal", "Technical Report"] }, booktitle: { $exists: false } },
  { 
    $set: { 
      "booktitle": "Academic Publications" 
    } 
  }
)



// puisque on'a le champ nombre des chapitres j'ai utiliser le nombre des pages

db.publications.aggregate([
  { 
    $match: { 
      type: "Book",
      publisher: "Springer",
      booktitle: { $exists: true},
    }
  },
  {
    $project: {
      title: 1,
      booktitle: 1,
      publisher: 1,
      nombrePages: {
        $add: [
          { $subtract: ["$pages.end", "$pages.start"] },
          1  
        ]
      }
    }
  }
])


// 4)

db.publications.aggregate([
  { 
    $match: { 
      publisher: "Springer" 
    }
  },
  { 
    $group: {
      _id: "$year",
      nombrePublications: { $sum: 1 }
    }
  }
])

// 5)

db.publications.aggregate([
  { 
    $match: { 
      publisher: { $exists: true } 
    }
  },
  { 
    $group: {
      _id: {
        publisher: "$publisher",
        annee: "$year"
      },
      nombrePublications: { $sum: 1 }
    }
  }
])

// 6) 

db.publications.aggregate([
  { 
    $match: { 
      "authors": "Toru Ishida" 
    }
  },
  { 
    $group: {
      _id: "$year",
      nombrePublications: { $sum: 1 }
    }
  }
])

// 7)

db.publications.aggregate([
  { 
    $match: { 
      "authors": "Toru Ishida",
      "type": "Article"
    }
  },
  {
    $project: {
      titre: "$title",
      nombrePages: {
        $add: [
          { $subtract: ["$pages.end", "$pages.start"] },
          1
        ]
      }
    }
  },
  {
    $group: {
      _id: null,
      moyennePages: { $avg: "$nombrePages" }
    }
  }
])

// 8)

db.publications.aggregate([
  { 
    $unwind: "$authors" 
  },
  { 
    $group: {
      _id: "$authors",
      publications: { 
        $push: {
          titre: "$title",
          annee: "$year"
        }
      }
    }
  }
])

// 9) 

db.publications.aggregate([
  { 
    $unwind: "$authors" 
  },
  { 
    $group: {
      _id: {
        auteur: "$authors",
        annee: "$year"
      },
      nombrePublications: { $sum: 1 }
    }
  }
])

// 10)

db.publications.aggregate([
  { 
    $match: { 
      publisher: "Springer" 
    }
  },
  { 
    $unwind: "$authors" 
  },
  { 
    $group: {
      _id: "$year",
      nombreAuteurs: { $sum: 1 },
    }
  }
])

// 11)

// j'ajoute un document qui contient plus de 3 auteurs

db.publications.insertOne({
  "type": "Research Paper",
  "title": "Advanced Machine Learning Techniques for Big Data Analytics in Healthcare Systems",
  "year": 2023,
  "publisher": "Springer",
  "authors": [
    "Toru Ishida",
    "Wei Zhang", 
    "Maria Rodriguez",
    "David Kim",
    "Sarah Chen",
    "Alex Johnson"
  ],
  "source": "ACM Digital Library",
  "pages": {
    "start": 15,
    "end": 42
  },
  "booktitle": "AI Research Series"
})


db.publications.aggregate([
  {
    $project: {
      titre: "$title",
      nombreAuteurs: { $size: "$authors" },
      auteurs: "$authors"
    }
  },
  {
    $match: {
      nombreAuteurs: { $gt: 3 }
    }
  },
  {
    $count: "publications_plus_3_auteurs"
  }
]) 


// 12)

db.publications.aggregate([
  {
    $project: {
      publisher: 1,
      nombrePages: {
        $add: [
          { $subtract: ["$pages.end", "$pages.start"] },
          1
        ]
      }
    }
  },
  {
    $group: {
      _id: "$publisher",
      moyennePages: { $avg: "$nombrePages" }
    }
  }
])


// 13)

db.publications.aggregate([
  { 
    $unwind: "$authors" 
  },
  { 
    $group: {
      _id: "$authors",
      premiereAnnee: { $min: "$year" },
      derniereAnnee: { $max: "$year" },
      totalPublications: { $sum: 1 },
    }
  }
])


// Partie 04 

// 1)

db.publications.find({ title: /database/i })

// 2)

db.publications.updateMany(
  { type: "Article" },
  { 
    $unset: { "number": "" } 
  }
)

// 3)

db.publications.deleteMany({
  type: "Article",
  $or: [
    { authors: { $exists: false } },  
    { authors: null },                
    { authors: { $size: 0 } }       
  ]
})


