import React from 'react';

const students = [
  { id: 1, name: 'jayden', attend: true },
  { id: 2, name: 'jihyo', attend: true },
  { id: 3, name: 'sori', attend: false },
  { id: 4, name: 'hodu', attend: true },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} {`${student.attend}`}
        </li>
      ))}
    </ul>
  );
}

export default AttendanceBook;
