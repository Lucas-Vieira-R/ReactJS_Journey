import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import finnHub from '../apis/finnHub'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useContext } from 'react';
import { WatchListContext } from '../context/WatchListContext';


export const StockList = () => {
  const [stock, setStock] = useState()
  const { watchList, deleteStock } = useContext(WatchListContext)

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {

        const responses = await Promise.all(watchList.map((stock) => {
          return finnHub.get('/quote', {
            params: {
              symbol: stock
            }
          })
        }))

        const data = responses.map((response) => {
          return {
            data: response.data,
            symbol: response.config.params.symbol
          }
        })
        if (isMounted) {
          setStock(data)
        }

      } catch (err) {
        console.log(err)
      }
    }
    fetchData()


    return () => (isMounted = false)
  }, [watchList])

  const handleStockSelect = (symbol) => {
    navigate(`detail/${symbol}`)
  }

  return (
    <div>
      <table className='table hover mt-5'>
        <thead style={{ color: 'rgb(79,89,102)' }}>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Last</th>
            <th scope='col'>Change</th>
            <th scope='col'>Change%</th>
            <th scope='col'>High</th>
            <th scope='col'>Low</th>
            <th scope='col'>Open</th>
            <th scope='col'>Pclose</th>
          </tr>
        </thead>
        <tbody>
          {stock ? stock.map((stockData) => {
            return (
              <tr style={{ cursor: 'pointer' }} onClick={() => handleStockSelect(stockData.symbol)} key={stockData.symbol} className='table-row'>
                <th scope='row'>{stockData.symbol}</th>
                <td>{stockData.data.c}</td>

                {(stockData.data.d) >= 0 ? <td style={{ color: 'green' }}>{stockData.data.d}<FaArrowUp /></td> : <td style={{ color: 'red' }}>{stockData.data.d}<FaArrowDown /></td>}
                {(stockData.data.p) >= 0 ? <td style={{ color: 'green' }}>{stockData.data.dp}<FaArrowUp /></td> : <td style={{ color: 'red' }}>{stockData.data.dp}<FaArrowDown /></td>}

                <td>{stockData.data.h}</td>
                <td>{stockData.data.l}</td>
                <td>{stockData.data.o}</td>
                <td>{stockData.data.pc}<button onClick={(e)=>{e.stopPropagation();deleteStock(stockData.symbol)}} className='btn btn-danger btn-sm ml-3 d-inline-block delete-button'>delete</button></td>
              </tr>)
          }) : null}

        </tbody>
      </table>
    </div>)
}