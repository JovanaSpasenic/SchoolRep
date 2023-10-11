import { students } from "./studentData.js";
import * as app from "mongodb/src/client-side-encryption/providers/utils.js";

app.get("/api/students", (req, res) => {
  res.send(students);
});
