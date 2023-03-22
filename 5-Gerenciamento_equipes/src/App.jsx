import * as React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from './GroupedTeamMembers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import NotFound from './NotFound'
import man1 from './imgs/man1.png';
import man2 from './imgs/man2.png';
import man3 from './imgs/man3.png';
import man4 from './imgs/man4.png';
import woman1 from './imgs/woman1.png';
import woman2 from './imgs/woman2.png';
import woman3 from './imgs/woman3.png';
import woman4 from './imgs/woman4.png';


export default function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB')

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeesList')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA",
    src: man1
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA",
    src: woman1
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA",
    src: woman2
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB",
    src: man2
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB",
    src: man3
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB",
    src: woman3
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC",
    src: man4
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC",
    src: woman4
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC",
    src: woman2
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD",
    src: man1
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD",
    src: man3
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD",
    src: man3
  }])

  useEffect(() => {
    localStorage.setItem('employeesList', JSON.stringify(employees))
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam]);

  function handleTeamSelectionChange(e) {
    setTeam(e.target.value)
  }
  function handleEmployeeCardClick(e) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(e.currentTarget.id) ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam } : employee)
    setEmployees(transformedEmployees)
  }

  return (
    <Router>
      <Nav />
      <Header selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
      />
      <Routes>
        <Route path="/"
          element={<Employees employees={employees}
            selectedTeam={selectedTeam}
            handleEmployeeCardClick={handleEmployeeCardClick}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />}>

        </Route>
        <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers employees={employees}
          selectedTeam={selectedTeam} setTeam={setTeam} />}>
        </Route>
        <Route path="*" element={<NotFound />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
