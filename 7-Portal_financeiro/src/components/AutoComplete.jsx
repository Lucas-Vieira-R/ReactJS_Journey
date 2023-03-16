import { useState, useEffect, useContext } from "react"
import finnHub from "../apis/finnHub"
import { WatchListContext } from "../context/WatchListContext"


export const AutoComplete = () => {

  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const { addStock } = useContext(WatchListContext)

  const showDropdown = () => {
    const dropDownClass = (search ? "show" : null)
    return (
      <ul style={{ height: '500px', overflowY: 'scroll', overflowX: 'hidden', cursor: 'pointer' }} className={`dropdown-menu ${dropDownClass}`}>
        {results.map((item) => {
          return (
            <li onClick={() => {
              addStock(item.symbol)
              setSearch('')
            }} key={item.symbol} className='dropdown-item'>{item.description}({item.symbol})</li>
          )
        })}
      </ul>
    )
  }

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/search", {
          params: {
            q: search
          }
        })

        setResults(response.data.result)
      } catch (err) {
      }
    }
    if (search.length >= 1) {
      fetchData()
    } else {
      setResults([])
    }
    return () => (isMounted = false)
  }, [search])

  return <div className="w-50 p-5 rounded mx-auto">
    <div className='form-floating dropdown'>
      <input value={search} onChange={(e) => setSearch(e.target.value)} autoComplete="off" className='form-control' placeholder='Search' type='text' id='search' style={{ backgroundColor: 'rgba(145,158,171,0.04' }}>
      </input>
      <label htmlFor='search'>Search</label>
      {showDropdown()}
    </div>
  </div>
}