# 🚀 Cypher Query Examples

This guide provides a collection of useful Cypher queries to help you get started with your **MyNEO** environment. You can copy and paste these directly into the [Neo4j Browser](http://localhost:7474).

---

## 🏗️ Basic CRUD Operations

### Create Nodes
Create a simple "Person" node with properties.
```cypher
CREATE (p:Person {name: 'Tarsis Lima', occupation: 'Software Engineer', location: 'Brazil'})
RETURN p
```

### Create Multiple Nodes
```cypher
CREATE (:Person {name: 'Alice', age: 30}),
       (:Person {name: 'Bob', age: 25}),
       (:Company {name: 'Neo4j', industry: 'Database'})
```

### Find Nodes
Find a person by name.
```cypher
MATCH (p:Person {name: 'Tarsis Lima'})
RETURN p
```

### Update Properties
Add or change a property on an existing node.
```cypher
MATCH (p:Person {name: 'Alice'})
SET p.age = 31, p.status = 'Active'
RETURN p
```

---

## 🔗 Relationships

### Create a Relationship
Connect two existing nodes.
```cypher
MATCH (p:Person {name: 'Alice'}), (c:Company {name: 'Neo4j'})
CREATE (p)-[r:WORKS_AT {since: 2022}]->(c)
RETURN p, r, c
```

### Querying Connections
Find everyone who works at "Neo4j".
```cypher
MATCH (p:Person)-[:WORKS_AT]->(c:Company {name: 'Neo4j'})
RETURN p.name
```

### Deep Path Discovery
Find friends of friends (up to 3 levels deep).
```cypher
MATCH (p:Person {name: 'Alice'})-[:FRIEND*1..3]-(friend)
RETURN DISTINCT friend.name
```

---

## 🛠️ APOC (Awesome Procedures on Cypher)

Since this environment comes with **APOC** pre-installed, you can leverage advanced procedures.

### List All APOC Procedures
```cypher
CALL apoc.help('apoc')
```

### Format Values
```cypher
RETURN apoc.number.format(12345.67, '#,###.00') AS formatted
```

### Generate Sample Data (Periodic)
Create 1000 sample "Test" nodes efficiently.
```cypher
CALL apoc.periodic.iterate(
  "UNWIND range(1, 1000) AS id RETURN id",
  "CREATE (:Test {id: id, createdAt: datetime()})",
  {batchSize: 100}
)
```

---

## 📊 Analytics & Aggregation

### Count Nodes by Label
```cypher
MATCH (n)
RETURN labels(n) AS Label, count(*) AS Count
ORDER BY Count DESC
```

### Average Age of Persons
```cypher
MATCH (p:Person)
RETURN avg(p.age) AS AverageAge
```

---

## 🧹 Database Cleanup

> [!CAUTION]
> The following queries will delete data from your database.

### Delete Specific Nodes and Relationships
```cypher
MATCH (p:Person {name: 'Alice'})
DETACH DELETE p
```

### Wipe Entire Database
Clear everything to start fresh.
```cypher
MATCH (n)
DETACH DELETE n
```

---

## 🎨 Neo4j Bloom

To use **Neo4j Bloom**, navigate to [http://localhost:7474/bloom](http://localhost:7474/bloom).

- Use the **Search Bar** to type natural language queries like `Person WORKS_AT Company`.
- Use **Perspectives** to style your graph based on properties (e.g., color nodes by "Industry").
