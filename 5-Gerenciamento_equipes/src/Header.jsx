import logo from "./imgs/logo.svg";

const Header = ({ selectedTeam, teamMemberCount }) => {
  function handleSelectedTeam(team){
    switch(team){
      case "TeamA":
        return "Development Team"
      case "TeamB":
        return "Design Team"
      case "TeamC":
        return "Operations Team"
      case "TeamD":
        return "Marketing Team"
    }

  }

  return (
    <header className='container'>
    <img src={logo} className='img img-fluid rounded mx-auto d-block' style={{width:'200px'}} />
      <div className='row justify-content-center mt-3 mb-4'>
        
        <div className='col-8'>
          <h1>Team Member Allocation</h1>
          <h3>{handleSelectedTeam(selectedTeam)} has {teamMemberCount} members</h3>
        </div>

      </div>

    </header>
  )
}
export default Header