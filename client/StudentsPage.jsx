import { useState } from "react";

export function StudentsPage({ students }) {
  return (
    //For hver student gjør det her..
    //når man først får students inn her, så vil det vøre undefined
    <>
      <h1>The Students of Kristiania</h1>
      {students.map((student) => (
        <StudentListing name={student.name} program={student.studyProgram} />
      ))}
    </>
  );
}

function StudentListing({ students }) {
  return (
    <div>
      {students.name + ":"} {students.program}
    </div>
  );
}

export function AddNewStudent({ onNewStudent }) {
  const [name, setName] = useState();
  const [studyProgram, setStudyProgram] = useState();
  const newStudent = { name, studyProgram };

  function handleSubmitNewStudent(event) {
    //Når du trykker submit så handler
    event.preventDefault();
    onNewStudent({ name, studyProgram });
  }
  return (
    <>
      <form onSubmit={handleSubmitNewStudent}>
        <h2>Add a new Student</h2>
        <div>
          Name: <br />
          <input
            type="text"
            autoFocus={true} //Går rett i input feltet
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          StudyProgram: <br />
          <input
            type="text"
            value={studyProgram}
            onChange={(event) => setStudyProgram(event.target.value)}
          />
        </div>
        <button>Submit</button>
        <pre>{JSON.stringify(newStudent, null, " ")}</pre>
      </form>
    </>
  );
}
