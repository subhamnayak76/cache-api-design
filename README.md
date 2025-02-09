# Cache API

A simple cache API built using Node.js, Express, Redis, and Zod for validation. This API allows storing, retrieving, and deleting key-value pairs in a Redis cache.

## Features

- Store key-value pairs in Redis.
- Retrieve values by key.
- Delete keys from the cache.
- Enforce a maximum cache size limit.
- Global error handling.
- Route not found handler.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cache-api.git
cd cache-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configuration

Create a `.env` file in the root of the project and add the following configuration:

```env
REDIS_URL=redis://localhost:6379
```

If your Redis server is running on a different host or port, update `REDIS_URL` accordingly. If using a cloud Redis provider like Upstash, provide the correct connection URL.

### 4. Start the Redis Server

If you have Redis installed locally, start the server with using Docker:

```bash
docker run --name redis-cache -d -p 6379:6379 redis
```

### 5. Start the Application

Run the application in development mode:

```bash
npm run dev
```

The API will be available at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### 1. Store a Key-Value Pair

**Endpoint:** `POST /api/cache`

**Request Body:**

```json
{
  "key": "exampleKey",
  "value": "exampleValue"
}
```

**Response:**

- `201 Created` if the key-value pair is successfully stored.

### 2. Retrieve a Value by Key

**Endpoint:** `GET /api/cache/:key`

**Response:**

- `200 OK` with the value if found.
- `404 Not Found` if the key does not exist.

### 3. Delete a Key from the Cache

**Endpoint:** `DELETE /api/cache/:key`

**Response:**

- `200 OK` if the key is successfully deleted.
- `404 Not Found` if the key does not exist.

## Error Handling

- The API includes a global error handler that responds with a `500 Internal Server Error` for unexpected issues.
- A "Route not found" handler responds with a `404 Not Found` for undefined routes

Happy caching! 🚀

