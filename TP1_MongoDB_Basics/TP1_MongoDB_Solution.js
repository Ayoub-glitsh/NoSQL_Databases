// TP1 — MongoDB Basics
// Author: Ayoub Aguezar
// EFP: ISTA Ouarzazate | Module: Gestion de Données 1
// Database: entreprise

// 1️⃣ Create a database
use entreprise;

// 2️⃣ Create a collection "employes"
db.createCollection('employes');

// 3️⃣ Insert one employee
db.employes.insertOne({
  nom: 'Aguezar',
  prenom: 'Ayoub',
  poste: 'Full Stack Developer',
  ville: 'NYC',
  salaire: '200k'
});

// 4️⃣ Insert multiple employees
db.employes.insertMany([
  { nom: 'Rajeb', prenom: 'Hiba', poste: 'Electrical Engineer', ville: 'NYC', salaire: '120k' },
  { nom: 'Ouhmane', prenom: 'Sara', poste: 'Electrical Engineer', ville: 'NYC', salaire: '120k' },
  { nom: 'Zouitan', prenom: 'Houda', poste: 'Physicien', ville: 'NYC', salaire: '190k' }
]);

// 5️⃣ Display all employees
db.employes.find();

// 6️⃣ Create and populate "departements" collection
db.createCollection('departements');
db.departements.insertMany([
  {
    nom: "IT",
    responsable: "Marie Dupont",
    budget_annuel: 500000,
    nombre_employes: 15,
    localisation: "Bâtiment A, étage 3",
    date_creation: new Date("2020-01-15"),
    projets_actifs: ["Migration Cloud", "Refonte API", "Sécurité"]
  },
  {
    nom: "Ressources Humaines",
    responsable: "Isabelle Leroy",
    budget_annuel: 200000,
    nombre_employes: 8,
    localisation: "Bâtiment B, étage 1",
    date_creation: new Date("2019-03-10"),
    projets_actifs: ["Recrutement Digital", "Formation Leadership", "Bien-être"]
  },
  {
    nom: "Design",
    responsable: "Sophie Bernard",
    budget_annuel: 150000,
    nombre_employes: 6,
    localisation: "Bâtiment C, étage 2",
    date_creation: new Date("2021-06-20"),
    projets_actifs: ["Design System", "UX Research", "Brand Identity"]
  },
  {
    nom: "Management",
    responsable: "Pierre Martin",
    budget_annuel: 300000,
    nombre_employes: 12,
    localisation: "Bâtiment A, étage 4",
    date_creation: new Date("2018-11-05"),
    projets_actifs: ["Transformation Agile", "Gestion Performance", "Stratégie"]
  },
  {
    nom: "Marketing",
    responsable: "Thomas Renault",
    budget_annuel: 350000,
    nombre_employes: 10,
    localisation: "Bâtiment B, étage 2",
    date_creation: new Date("2022-02-28"),
    projets_actifs: ["Campagne Digital", "Analytics", "Content Marketing"]
  }
]);

// 7️⃣ Delete the "departements" collection
db.departements.drop();

// ✅ Verify existing collections
show collections;
