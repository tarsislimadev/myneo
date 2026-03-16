# 🌐 MyNEO

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Neo4j](https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white)](https://neo4j.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A premium, production-ready **Neo4j Enterprise** setup containerized with **Docker Compose**. This environment is pre-configured with **APOC** and **Neo4j Bloom**, making it an ideal boilerplate for advanced graph data science, visualization, and exploration.

---

## 👋 Welcome, Guests!

This repository provides a "one-click" environment to explore the power of graph databases. Whether you are a developer looking for a template or a data scientist wanting to test Neo4j Bloom, you've come to the right place.

> [!TIP]
> New to Cypher? Check out the [EXAMPLES.md](./EXAMPLES.md) file for a collection of ready-to-use queries!

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

## ✨ Key Features

- **🏆 Neo4j Enterprise:** Full access to enterprise features, including multi-database support and advanced security.
- **🎨 Neo4j Bloom:** High-performance graph visualization and exploration tool.
- **🛠️ APOC Plugin:** Awesome Procedures on Cypher are pre-enabled for advanced algorithms.
- **💾 Data Persistence:** Volumes mapped for `data`, `logs`, `import`, and `plugins` to ensure your work is never lost.
- **🏥 Health Checks:** Integrated monitoring ensures the database is ready before you start your work.

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

## 🛠️ Configuration & Ports

The container exposes the following ports for local development:

- `7474`: HTTP (Neo4j Browser & Bloom access)
- `7473`: HTTPS (Secure Neo4j Browser)
- `7687`: Bolt (For connecting database drivers like Python, Java, or JS)

---

## 🛑 Stopping the Services

To stop and remove the containers while keeping your data safe:
```bash
docker compose down
```

---

## 🤝 Contributing & Support

If you find this template useful, feel free to **Star** the repository! Contributions are always welcome—simply fork the project and submit a PR.

---

Developed with ❤️ by [Tarsis Lima](https://github.com/tarsislimadev)
