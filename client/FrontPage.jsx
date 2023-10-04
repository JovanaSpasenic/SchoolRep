import { Link } from "react-router-dom";

export function FrontPage() {
  return (
    <>
      <h2>Welcome to our Front Page</h2>
      <ul>
        <li>
          <Link to={"/students"}>List of Students</Link>
        </li>
        <li>
          <Link to={"/students/new"}>Add new Student</Link>
        </li>
      </ul>
    </>
  );
}
