# Example-CRUD-React-18-FastAPI
- The example shows how to Building a React CRUD App with a FastAPI and using MySQL as a database.
- The article of this repository https://blog.stackpuz.com/building-a-react-crud-app-with-a-fastapi
- To find more resources, please visit https://stackpuz.com

## Prerequisites
- Node.js
- Python 3.10
- MySQL

## Installation
- Clone this repository `git clone https://github.com/stackpuz/Example-CRUD-React-18-FastAPI .`
- Change directory to React project. `cd view`
- Install the React dependencies. `npm install`
- Change directory to FastAPI project. `cd ../api`
- Activate virtual environment and install packages. `pip install -r requirements.txt`
- Create a new database and run [/database.sql](/database.sql) script to create tables and import data.
- Edit the database configuration in [/api/.env](/api/.env) file.

## Run project

- Run React project. `npm run dev`
- Run FastAPI project `uvicorn app.main:app`
- Navigate to http://localhost:5173