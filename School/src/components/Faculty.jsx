import React from 'react';
import "./Faculty.css";
const Faculty = () => {
  const facultyMembers = [
    { name: 'Mr. Rakesh Sharma', qualification: 'M.Sc. English', experience: '20 years' },
    { name: 'Mr. H. C. Verma', qualification: 'M.A. Physics', experience: '22 years' },
       { name: 'Mr. Rakesh Sharma', qualification: 'M.Sc. English', experience: '20 years' },
    { name: 'Mr. H. C. Verma', qualification: 'M.A. Physics', experience: '22 years' },
       { name: 'Mr. Rakesh Sharma', qualification: 'M.Sc. English', experience: '20 years' },
    { name: 'Mr. H. C. Verma', qualification: 'M.A. Physics', experience: '22 years' },
  ];

  return (
    <div className="faculty">
      <h2>Faculty</h2>
      <div className="faculty-list">
        {facultyMembers.map((member, index) => (
          <div key={index} className="faculty-member">
            <h3>{member.name}</h3>
            <p>Qualification: {member.qualification}</p>
            <p>Experience: {member.experience}</p>
            <br />
            <hr />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
