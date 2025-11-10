# Cinema MongoDB Python Project

This project contains a Python script that connects to a MongoDB database and performs various **CRUD operations** on a `cinema` database with a `films` collection.

It uses the Python library **PyMongo** to manage MongoDB data.

---

## 🔧 Prerequisites

- Python 3.x
- MongoDB installed locally or a MongoDB Atlas cluster
- PyMongo library

Install PyMongo:

```bash
python -m pip install pymongo
```



---

## ⚡ Project Structure

- `script.py` : Main Python script with all CRUD operations.


---

## 📝 Operations in the Script

1. Display all movies in the collection.
2. Display only the title and genre of each movie.
3. Display movies of a specific genre.
4. Display movies directed by a specific director.
5. Display movies released before a certain year.
6. Display movies shown in a specific city.
7. Display movies with a duration greater than a certain number of minutes.
8. Sort movies by release year (descending).
9. Display movies with ratings above a threshold.
10. Display movies of specific genres (e.g., Action or Drama).
11. Exclude movies of a certain genre.
12. Limit the results to the first N movies.
13. Add a `version` field to all movies.
14. Increase the `prix` field by 5 in all movies.
15. Delete movies directed by a specific director.

---

## 🔗 Connecting to MongoDB

Example connection (replace with your credentials):

```python
from pymongo import MongoClient
# Generic MongoDB connection string
# Replace the values with your own if testing locally
client = MongoClient("mongodb://testuser:testpass@127.0.0.1:27017/?authSource=admin")
db = client["cinema"]
```

**⚠️ Security note**: Never hard-code credentials in your scripts for GitHub. Use a `.env` file or environment variables for safe management.

---

## 📚 Useful Links

- [PyMongo Documentation](https://pymongo.readthedocs.io/en/stable/)
- [MongoDB Python Documentation](https://www.mongodb.com/docs/python/)

---

## 🏁 Running the Script

```bash
python script.py
```

---

## 🧹 Closing the Connection

Always close the database connection at the end:

```python
client.close()
```

---

## 🔒 Tips

- Use limited permissions for database users when possible.
- Secure credentials before publishing code to GitHub.
