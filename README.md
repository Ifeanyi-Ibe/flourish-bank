# BANK ACCOUNT MANAGEMENT API

## About the service

This service exposes three endpoints, as follows:

- An endpoint to create a new account
- An endpoint to get all accounts
- An endpoint to retrieve account details using bank account number

## How to run the app locally
- Set the DB_URL environment variable. This variable contains a MongoDB connection string to enable database connection
- Run  ```npm install```  to install dependencies
- Then, run the command  ```npm run dev```  to get the app running

## Documentation
Click here https://flourish-bank-service.onrender.com/accounts/doc to see the hosted swagger documentation for this application.
See the documentation at "/doc" endpoint, for example: http://localhost:8000/api/account/doc if the app is running locally on port 8000.
