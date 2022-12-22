import React, { useState } from "react";
import "./table.css";
import { FaTrash } from "react-icons/fa";

export const Table = () => {
  const [show, setShow] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(initialState[0]);
  const [students, setStudents] = useState(initialState);

  const deleteStudent = (id) =>
    setStudents((state) => state.filter((student) => student.id !== id));

  const showStudent = (id) => {
    setShow(true);
    setSelectedStudent(students.filter((student) => student.id === id)[0]);
  };

  const getMeBackMyStudents = () => setStudents(initialState);
  const hideButton = () => setShow(false);
  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th className="table-text">Id</th>
          <th className="table-text">Name</th>
          <th className="table-text">Action</th>
          <th className="table-text"></th>
          <th className="table-text"></th>
        </tr>
      </thead>
    );
  };

  const TableRow = ({ students }) => {
    return (
      <tbody>
        {students.map((item) => {
          return (
            <tr key={item.id}>
              <td className="table-text">{item.id}</td>
              <td className="table-text">{item.name}</td>
              <td>
                <button
                  onClick={() => deleteStudent(item.id)}
                  id="delete-btn"
                  type="button"
                >
                  <FaTrash />
                </button>
              </td>
              <td>
                <button id="edit-btn" type="button">
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => showStudent(item.id)}
                  id="details-btn"
                  type="button"
                >
                  Details
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  const StudentDetails = ({ student, show }) => {
    return (
      <>
        {show ? (
          <div className="box">
            <div className="box-header">
              <h1 className="box-title">Student information</h1>
            </div>
            <h3 className="big-text">{student.address}</h3>
            <p>id: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Birth date: {student.birthDate}</p>

            <button onClick={hideButton} className="hide-button">
              Hide
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </>
    );
  };

  return (
    <div>
      {students.length > 0 ? (
        <>
          <table border="5">
            <TableHeader />
            <br />
            <TableRow students={students} setStudents={setStudents} />
          </table>
          <StudentDetails student={selectedStudent} show={show} />
        </>
      ) : (
        <div>
          <h1>No more students left..</h1>
          <button onClick={getMeBackMyStudents}>
            Get me back my students!
          </button>
        </div>
      )}
    </div>
  );
};

const initialState = [
  {
    id: 1,
    name: "Alex",
    address: "Sweden, Stockholm",
    birthDate: "01-01-1999",
  },
  {
    id: 2,
    name: "Sayeh",
    address: "Sweden, Stockholm",
    birthDate: "01-01-1999",
  },
  {
    id: 3,
    name: "Uzza",
    address: "Sweden, Stockholm",
    birthDate: "01-01-1999",
  },
  {
    id: 3,
    name: "Aladdin",
    address: "Sweden, Stockholm",
    birthDate: "01-01-1999",
  },
];