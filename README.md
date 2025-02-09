# Cache API

This project is a simple cache API built using Node.js, Express, Redis, and Zod for validation. It allows you to store, retrieve, and delete key-value pairs in a Redis cache.



## Features

- Store key-value pairs in Redis.
- Retrieve values by key.
- Delete keys from the cache.
- Maximum cache size limit.
- Global error handling.
- Route not found handler.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/cache-api.git
   cd cache-api
Install the dependencies:


npm install
Configuration
Create a .env file in the root of the project:


REDIS_URL=redis://localhost:6379 or upstach url 
Customize the REDIS_URL if your Redis server is running on a different host or port.

Usage
Start the Redis server:


redis-server
Start the Node.js application:


npm run dev
The API will be available at http://localhost:3000.

API Endpoints
POST /api/cache: Store a key-value pair.

Request Body: {"key": "exampleKey", "value": "exampleValue"}
Response: 201 Created
GET /api/cache/: Retrieve a value by key.

Response: 200 OK with the value or 404 Not Found if the key does not exist.
DELETE /api/cache/: Delete a key from the cache.

Response: 200 OK or 404 Not Found if the key does not exist.
Error Handling
The API includes a global error handler that catches and responds to errors with a 500 Internal Server Error status code.
A "Route not found" handler responds with a 404 Not Found status code for undefined routes.
