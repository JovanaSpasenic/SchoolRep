import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FrontPage } from "./FrontPage.jsx";
import React, { useEffect, useState } from "react";
import { AddNewStudent, StudentsPage } from "./StudentsPage.jsx";

//sender state i komponentene under
function StudentRoutes() {
  //student listen er undefined og når den har lastet listen , så vil den være det svaret fra serveren
  //useState([]) = Dette gjør at students ALDRI blir undefined før den loader
  const [students, setStudents] = useState([]);
  useEffect(() => {
    //Legge til Loading...
    loadStudents();
  }, []);

  //henter fra server siden, tolker som json og setter state (useState)
  async function loadStudents() {
    //res: svaret på http kallet
    const res = await fetch("/api/students");
    setStudents(await res.json());
  }

  //Denne handleNewStudent er en annen måte å gjøre det på, og den under med async bruker vi
  //når vi skal poste til serveren.
  //oppdaterer new student ved å bruke setStudent fra arrayet oppe
  //legger til en ny student i listen over students
  /* function handleNewStudent(student) {
        setStudents(old => [
            //array som består av gamle studentene og den nye studenten
            ...old, student
        ])
    }*/

  //sendes en student inn og gjøres om til json, og sendes/postes til serveren og loader på nytt
  async function handleNewStudent(student) {
    //sender til Express (sendes videre derfra til mongoDB)
    await fetch("/api/students", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        "content-type": "application/json",
      },
    });
    await loadStudents(); //henter fra serveren
  }

  return (
    //students = {props} sendes videre etter å ha loadet (fordi først er den undefined og så
    //etter å ha loadet, så får man studentene)
    <Routes>
      <Route path={"/"} element={<FrontPage />}></Route>
      <Route
        path={"/students"}
        element={<StudentsPage students={students} />}
      ></Route>
      <Route
        path={"/students/new"}
        element={<AddNewStudent onNewStudent={handleNewStudent} />}
      ></Route>
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
      <footer>Made By Jovana Spasenic 🥰</footer>
    </BrowserRouter>
  );
}
