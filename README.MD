🌟 Express MySQL CRUD Application

This project is a beautiful and simple Node.js application that uses Express and MySQL to perform basic CRUD (Create, Read, Update, Delete) operations. The application provides endpoints for managing records in a MySQL database.

🚀 Requirements

Node.js (v14 or higher)

MySQL (v8 or higher)

npm (Node Package Manager)

📦 Installation

Clone the repository

git clone <repository-url>
cd <repository-folder>

Install dependencies

npm install

Set up MySQL Database

Log in to your MySQL server and create a new database:

CREATE DATABASE my_database;
USE my_database;

Create a table named my_table:

CREATE TABLE my_table (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL
);

Configure Database Connection

Update the db connection settings in index.js:

const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'your_password',
database: 'my_database'
});

🎮 Running the Application

Start the server

node index.js

Test the CRUD endpoints

You can test the CRUD operations using a tool like Postman or your browser.

Create a record: POST /add

Example body: { "name": "John Doe", "email": "john@example.com" }

Get all records: GET /records

Get a specific record: GET /record/:id

Update a record: PUT /update/:id

Example body: { "name": "Jane Doe", "email": "jane@example.com" }

Delete a record: DELETE /delete/:id

🔗 Example Endpoints

POST /add - Add a new record (e.g., name, email).

GET /records - Get all records from the table.

GET /record/:id - Get a specific record by its id.

PUT /update/:id - Update a record's fields (e.g., name, email).

DELETE /delete/:id - Delete a record by its id.

🛠️ Troubleshooting

If you encounter ER_NOT_SUPPORTED_AUTH_MODE, consider using the mysql2 library instead of mysql:

npm install mysql2

Update the import in index.js:

const mysql = require('mysql2');

📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Created by Louison Sillon for the Advanced Web Programming course.

