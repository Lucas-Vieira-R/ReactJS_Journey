const Teams = ({ selectedTeam, handleTeamSelectionChange }) => {
  return (
    <select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamSelectionChange}>
      <option value='TeamA'>DevTeam</option>
      <option value='TeamB'>DesignTeam</option>
      <option value='TeamC'>OperationsTeam</option>
      <option value='TeamD'>MarketingTeam</option>
    </select>
  )
}
export default Teams