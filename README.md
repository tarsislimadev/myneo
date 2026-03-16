# 🌐 MyNEO

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Neo4j](https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white)](https://neo4j.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A premium, production-ready **Neo4j** setup containerized with **Docker Compose**. This environment is pre-configured with the **APOC** (Awesome Procedures on Cypher) plugin and persistent storage, making it perfect for rapid graph database development and exploration.

---

## 🚀 Quick Start

Get your graph database up and running in seconds:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tarsislimadev/myneo.git
   cd myneo
   ```

2. **Launch the services:**
   ```bash
   docker compose up -d
   ```

3. **Access the Neo4j Browser:**
   Open your browser and navigate to:
   - **Local:** [http://localhost:7474](http://localhost:7474)

---

## 🔐 Credentials

Use the default credentials to log in:

| Key | Value |
| :--- | :--- |
| **Username** | `neo4j` |
| **Password** | `test12345` |

> [!TIP]
> You can change these by modifying the `NEO4J_AUTH` environment variable in the `docker-compose.yaml` file.

---

## ✨ Features

- **⚡ Latest Neo4j:** Running on the latest official Neo4j image.
- **🛠️ APOC Plugin:** Pre-enabled for advanced graph algorithms and data integration.
- **💾 Data Persistence:** Volumes mapped for data, logs, and plugins to ensure your work persists across restarts.
- **🏥 Health Checks:** Integrated health checks to ensure the service is fully ready before use.

---

## 📂 Project Structure

```text
myneo/
├── neo4j_data/     # Persistent database storage
├── neo4j_import/   # CSV/JSON import directory
├── neo4j_logs/     # Neo4j system logs
├── neo4j_plugins/  # Custom plugins and extensions
└── docker-compose.yaml
```

---

## 🛠️ Configuration

The following ports are exposed:

- `7474`: HTTP (Neo4j Browser)
- `7473`: HTTPS (Neo4j Browser)
- `7687`: Bolt (Database Drivers)

---

## 🤝 Contributing

Feel free to fork this project, open issues, or submit pull requests to help improve this template!

---

Developed with ❤️ by [Tarsis Lima](https://github.com/tarsislimadev)
