import React from "react";

const averageScore = grades => {
  const sum = grades.reduce((accu, curr) => {
    return accu + Number(curr.grade);
  }, 0);
  return Math.floor(sum / grades.length);
};

const SingleStudent = props => {
  const { selectedStudent } = props;
  const { fullName, tests } = selectedStudent;
  return (
    <div>
      <h1>{fullName}</h1>
      <h2>{`Average Score ${averageScore(tests)}`}</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {tests.map(test => (
            <tr key={test.subject}>
              <td>{test.subject}</td>
              <td>{test.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SingleStudent;
