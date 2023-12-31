# BANK ACCOUNT MANAGEMENT API

## About the service

This service exposes three endpoints, as follows:

- An endpoint to create a new account
- An endpoint to get all accounts
- An endpoint to retrieve account details using bank account number

## Online demo
To test this application, see the online [demo](https://flourish-bank-service.onrender.com/accounts/doc). The hosted site contains a swagger documentation that provides details regarding the payloads and expected responses for different scenarios. This helps to test the application easily.

## How to run the app locally
- Set the DB_URL environment variable. This variable contains a MongoDB connection string to enable database connection
- Run  ```npm install```  to install dependencies
- Then, run the command  ```npm run dev```  to get the app running

## Documentation

Click [here](https://flourish-bank-service.onrender.com/accounts/doc) to see the hosted swagger documentation for this application.

See the documentation at "/doc" endpoint, for example: http://localhost:8000/accounts/doc if the app is running locally on port 8000.
