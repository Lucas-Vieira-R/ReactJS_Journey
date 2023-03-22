

const TeamMemberCard = ({employees, handleEmployeeCardClick, selectedTeam,employee})=>{


  return(
    <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout opacity-100' : 'card m-2')} style={{ cursor: 'pointer' }} onClick={handleEmployeeCardClick}>
                  <img src={employee.src} className='card-img-top opacity-75' />
                  <div className='card-body'>
                    <h5 className='card-title'>Full name: {employee.fullName}</h5>
                    <p className='card-text'><b>Designation: </b>{employee.designation}</p>
                  </div>
                </div>
  )
}
export default TeamMemberCard