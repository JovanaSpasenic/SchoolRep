import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FrontPage } from "./FrontPage.jsx";
import React, {Component, useState} from "react";
import { AddNewStudent, StudentPage } from "./StudentPage.jsx";

class StudentPage extends Component {
  render() {
    return null;
  }
}

function StudentRoutes() {
    /*


      const [tasks, setTasks] = useState();
    useEffect(() => {
        loadTasks();
    }, []);

    async function loadTasks() {
        const res = await fetch("/api/todos")
        setTasks(await res.json());
    }

    function handleNewStudent() |
            await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify({title: taskTitle}),
            headers: {
                "content-type": "application/json"
            }
        })
        reload();

     */
    const [students, setStudents] = useState([
        {
            name: "Jovana",
            studentProgram: "Programming",
        },
        {
            name: "Johan",
            studentProgram: "Drama",
        },
        {
            name: "William",
            studentProgram: "Frontend",
        },
    ]);

    function handleNewStudent(student){
        setStudents(old => [
            //array som består av gamle studentene og den nye studenten
            ...old, student
        ])
    }

  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />}></Route>
      <Route path={"/students"} element={<StudentPage students={students}/>}></Route>
      <Route path={"/students/new"} element={<AddNewStudent onNewStudent={handleNewStudent}/>}></Route>
    </Routes>
  );
}

export function StudentApplication() {
  return (
    <BrowserRouter>
      <header>
        <h1>Student Data App</h1>
      </header>
      <nav>
        <Link to={"/"}>FrontPage</Link>
      </nav>
      <main>
        <StudentRoutes />
      </main>
      <footer>Made By Jovana with 🥰</footer>
    </BrowserRouter>
  );
}
