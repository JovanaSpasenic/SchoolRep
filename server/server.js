import express from "express";
import { MongoClient } from "mongodb";

const app = express();

app.use(express.static("../client/dist")); //
app.listen(3000);

/*
app.post("/api/students", (req, res) => {
    const {name} = req.body;
    const newTask = {title, status: "todo", id: tasks.length};
    tasks.push(newTask);
    res.send();
});
 */

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

client.connect().then((connection) => {
  const db = connection.db("studentdatabase");
  functionName(db);
});

app.listen(process.env.PORT || 3000);
