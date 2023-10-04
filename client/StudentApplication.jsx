import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FrontPage } from "./FrontPage.jsx";
import React, { Component } from "react";
import { AddNewStudent, StudentPage } from "./StudentPage.jsx";

class StudentPage extends Component {
  render() {
    return null;
  }
}

function StudentRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />}></Route>
      <Route path={"/students"} element={<StudentPage />}></Route>
      <Route path={"/students/new"} element={<AddNewStudent />}></Route>
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
