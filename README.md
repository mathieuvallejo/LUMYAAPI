# LUMYA — API

## Prérequis

- Node.js >= 18
- MariaDB (ou Docker)

## Installation

```bash
npm install
```

## Configuration

Créer un fichier `.env.dev` à la racine :

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=lumya

JWT_SECRET=your_jwt_secret
```

## Base de données

```bash
docker-compose up -d
```

## Lancer le serveur

```bash
# Développement
npm run dev

# Production
npm start
```

Serveur disponible sur **http://localhost:3000**
