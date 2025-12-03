# Gestion des stagiaires avec MongoDB et PyMongo

Ce projet présente un script Python complet pour la gestion des utilisateurs, des rôles et des données d'étudiants/stagiaires dans MongoDB, utilisant l'interface PyMongo.

## 📁 Structure du projet

- **Script.py** : Script principal contenant toutes les opérations MongoDB
- **README.md** : Documentation du projet (ce fichier)

## 📋 Prérequis

- MongoDB installé et fonctionnel localement
- Python 3.x
- Bibliothèque PyMongo (`pip install pymongo`)

## 🔧 Configuration de la base de données

### 1. Connexion
Le script se connecte à MongoDB avec les identifiants suivants :
- Utilisateur : `Ayoub`
- Mot de passe : `123456`
- Hôte : `localhost:27017`
- Base de données : `ISTA_OZTE`
- Collection : `stagiaire`

### 2. Gestion des utilisateurs (Partie 1)
Deux utilisateurs sont créés :
1. **gestionStock** : Accès en lecture/écriture à la collection `produits` de la base `shop`
2. **superAdmin** : Rôle root pour un accès complet

### 3. Index créés
- Index unique sur le champ `username` de la collection `users`
- Index composé sur (`categorie`, `prix`) dans la collection `produits`

## 📊 Structure des données (stagiaires)

Chaque document stagiaire contient :
- **Informations personnelles** : nom, prénom, âge, ville
- **Informations académiques** : date d'inscription, statut de bourse
- **Modules suivis** : liste des modules (ex: BD, Front-end, Cloud)
- **Notes** : tableau d'objets avec module, note et coefficient
- **Absences** : tableau d'objets avec date et motif

## 🚀 Fonctionnalités implémentées

### Requêtes de recherche
1. Stagiaires d'une ville spécifique (Ouarzazate)
2. Stagiaires bénéficiant d'une bourse
3. Stagiaires de plus de 20 ans
4. Stagiaires suivant un module spécifique (BD)
5. Stagiaires avec une note > 16 en Front-end
6. Stagiaires avec au moins une absence
7. Stagiaires avec absence pour motif "Retard"
8. Stagiaires inscrits après une date donnée
9. Stagiaires suivant le module "Cloud"
10. Affichage sélectif des champs (nom, prénom, ville)

### Opérations de mise à jour
1. Augmentation de +2 points pour toutes les notes du module "BD"
2. Ajout du champ "filière" pour les stagiaires suivant le module "BD"

### Agrégations avancées
1. **Note moyenne par module** : Calcul de la moyenne des notes pour chaque module
2. **Nombre d'absences par motif** : Comptage des absences groupées par stagiaire et motif
3. **Date de la dernière absence** : Identification de l'absence la plus récente

## 📝 Exemple de données insérées

Le script insère trois stagiaires avec des profils différents :
- Yassine Karin (21 ans, Ouarzazate, avec bourse)
- Fatima Alami (22 ans, Marrakech, sans bourse)
- Karim Bennani (19 ans, Ouarzazate, avec bourse)

## ▶️ Exécution

Pour exécuter le script :
```bash
python Script.py
```
## 📈 Résultats attendus

Le script affichera :

- Confirmation de l'insertion des données
- Résultats de toutes les requêtes de recherche
- Résultats des agrégations (moyennes, absences, etc.)

## 🔐 Sécurité

⚠️ **Note importante** : Les mots de passe dans ce script sont à des fins éducatives uniquement. En production, utilisez :

- Variables d'environnement
- Fichiers de configuration sécurisés
- Authentification MongoDB avec rôles appropriés

## 🛠️ Personnalisation

Pour adapter le script à votre environnement :

1. Modifiez les paramètres de connexion dans `MongoClient`
2. Ajustez les données des stagiaires selon vos besoins
3. Modifiez les requêtes pour correspondre à votre schéma de données

## 📚 Technologies utilisées

- **MongoDB** : Base de données NoSQL
- **PyMongo** : Driver Python pour MongoDB
- **Python** : Langage de programmation

## 👤 Auteur

Ayoub Aguezar

## 📄 Licence

Projet éducatif - Libre d'utilisation pour l'apprentissage

---

*Ce fichier README documente clairement toutes les fonctionnalités de votre script, les prérequis d'installation, les structures de données, et fournit des instructions d'utilisation complètes.*
