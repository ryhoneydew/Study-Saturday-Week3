import React from "react";

const StudentList = props => {
  console.log(props);
  const { students, getStudent } = props;
  return (
    <tbody>
      {students.map(student => (
        <tr key={student.id}>
          <td>{student.fullName}</td>
          <td onClick={() => getStudent(student)}>Details</td>
        </tr>
      ))}
    </tbody>
  );
};

export default StudentList;
