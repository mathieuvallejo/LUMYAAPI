# Procédure d'installation — LUMYA API

## Prérequis

- **Node.js** v18+ (testé avec v22)
- **Docker** & **Docker Compose**
- **npm**

---

## 1. Cloner le dépôt

```bash
git clone <url-du-repo>
cd LUMYAAPI
```

---

## 2. Installer les dépendances Node.js

```bash
npm install
```

---

## 3. Configurer les variables d'environnement

Copier le fichier exemple et remplir les valeurs :

```bash
cp .env.exemple .env
```

Éditer `.env` :

```env
# MariaDB
DB_HOST=localhost
DB_PORT=3306
DB_USER=lumya_user
DB_PASSWORD=lumya_secure_pass
DB_NAME=lumya

# JWT — clé secrète (chaîne aléatoire longue)
JWT=change_me_with_a_strong_secret

# Port d'écoute de l'API
PORT=3000
```

> Pour le développement, un fichier `.env.dev` peut être créé avec les mêmes clés (la commande `npm run dev` le chargera automatiquement).

---

## 4. Démarrer la base de données (Docker)

```bash
docker compose up -d
```

Cela démarre un conteneur **MariaDB** (`lumya_db`) avec :
- Utilisateur : `lumya_user` / `lumya_secure_pass`
- Base : `lumya`
- Port exposé : `3306`
- Le schéma est initialisé automatiquement via `init.sql`

Vérifier que le conteneur est prêt :

```bash
docker compose ps
```

---

## 5. (Optionnel) Charger les données de développement

Pour peupler la base avec des données de test :

```bash
docker exec -i lumya_db mariadb -u lumya_user -plumya_secure_pass lumya < init-dev.sql
```

> Mot de passe de tous les comptes de test : `Password123!`

---

## 6. Démarrer l'API

### Production
```bash
npm start
```

### Développement (rechargement automatique)
```bash
npm run dev
```

L'API est accessible sur : `http://localhost:<PORT>` (ex. `http://localhost:3000`)

La documentation Swagger est disponible sur : `http://localhost:<PORT>/api-docs`

---

## Commandes utiles

| Commande | Description |
|---|---|
| `npm start` | Démarre avec `.env` |
| `npm run dev` | Démarre avec `.env.dev` + watch |
| `docker compose up -d` | Démarre la base de données |
| `docker compose down` | Arrête la base de données |
| `docker compose down -v` | Arrête et supprime les données |

---

## Structure du projet

```
LUMYAAPI/
├── src/
│   ├── config/        # Connexion base de données
│   ├── controllers/   # Logique métier
│   ├── middleware/    # Authentification JWT, etc.
│   ├── models/        # Requêtes SQL
│   ├── routes/        # Définition des routes
│   └── services/      # Services externes
├── uploads/           # Fichiers uploadés en local
├── index.js           # Point d'entrée
├── init.sql           # Schéma de base de données
├── init-dev.sql       # Données de test
└── docker-compose.yml # Configuration Docker
```
