import express from "express";

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

app.listen(process.env.PORT || 3000);
