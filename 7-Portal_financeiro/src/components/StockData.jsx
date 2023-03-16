import {useState, useEffect} from "react";
import finnHub from "../apis/finnHub";


export const StockData = ({symbol})=>{
  const [stockData, setStockData] = useState()
  let isMounted=true;
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await finnHub.get("/stock/profile2",{
          params:{
            symbol:symbol
          }
        })
        
        if(isMounted){
          setStockData(response.data)
          console.log(stockData)
        }
      } catch(e){
          console.log(e)
      }
    }
    fetchData()
    console.log(stockData)
    return () => (isMounted = false);
  },[symbol])
  
  return(<div>
    {stockData && (
    <div className="row border bg-white rounded shadow-sm p-4 mt-5">
      <h2><img  src={stockData.logo} style = {{width:"50px"}} />{stockData.name} : {symbol}</h2>
      <div className="row border bg-white rounded shadow-sm p-4 mt-5">
        <div className='col'>
          <div><span className='fw-bold'>Name: {stockData.name}</span></div>
          <div><span className='fw-bold'>Country: {stockData.country}</span></div>
          <div><span className='fw-bold'>Ticker: {stockData.ticker}</span></div>
        </div>
        <div className='col'>
          <div><span className='fw-bold'>Exchange: {stockData.exchange}</span></div>
          <div><span className='fw-bold'>Industry: {stockData.funnhubIndustry}</span></div>
          <div><span className='fw-bold'>IPO: {stockData.ipo}</span></div>
        </div>
        <div className='col'>
          <div><span className='fw-bold'>MarketCap: {stockData.marketCapitalization}</span></div>
          <div><span className='fw-bold'>Shares Outstanding: {stockData.shareOutstanding}</span></div>
          <div><span className='fw-bold'>url: <a  target="_blank" href={stockData.weburl}>{stockData.weburl}</a></span></div>
        </div>
        
        </div>
      </div>
    )}
  </div>
    
  )
}