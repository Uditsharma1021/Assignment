# Backend - Slot Machine Game

## Pre-requisites

- [Node.js](https://nodejs.org/) (v18 or above)

## Setup & Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node index.js
   ```

- The server will run on port 4000 by default.
- Endpoint: `POST /spin`

## Dependencies

- express
- cors

---

## API

### POST /spin

Returns a JSON object:

```
{
  "slots": [number, number, number],
  "isWin": boolean
}
```

# Frontend - Slot Machine Game

## Pre-requisites

- [Node.js](https://nodejs.org/) (v18 or above)

## Setup & Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

- The app will run on [http://localhost:3000](http://localhost:3000) by default.

## Dependencies

- Next.js
- React
- Tailwind CSS
- TypeScript
