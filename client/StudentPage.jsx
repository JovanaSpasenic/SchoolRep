import {useState} from "react";

export function StudentPage({students}) {


  return (
    <>
      <h1>The Students of Kristiania</h1>
      {students.map((student) => (
        <StudentListing name={student.name} program={student.studentProgram} />
      ))}
    </>
  );
}

function StudentListing(props) {
  return (
    <div>
      {props.name + ":"} {props.program}
    </div>
  );
}

export function AddNewStudent({onNewStudent}) {
  const [name, setName] = useState();
  const [studyProgram, setStudyProgram] = useState();
  function handleNewStudent(event) {
    //Når du trykker submit så handler
    event.preventDefault();
    onNewStudent({name, studyProgram});
  }
  return (
    <>
      <form onSubmit={handleNewStudent}>
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
        <pre>{JSON.stringify({name, studyProgram}, null, " ")}</pre>
      </form>
    </>
  );
}
