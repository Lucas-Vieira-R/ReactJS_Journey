import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import finnHub from "../apis/finnHub";
import {StockChart} from "../components/StockChart"
import {StockData} from "../components/StockData"


const formatData = (data)=>{
  return data.t.map((el, index) =>{
    return {
      x: el * 1000,
      y:(data.c[index]).toFixed(2)
    }
  })
}

export const StockDetailPage = () => {
  const { symbol } = useParams()
  const [chartData,setChartData] = useState()

  

  useEffect(() => {
    const fetchData = async () => {
      const date = new Date()
      const currentTime = Math.floor(date.getTime() / 1000);
      let oneDayAgo;
      if (date.getDay() === 6) {
        oneDayAgo = currentTime - 24 * 60 * 60 * 2;
      } else if (date.getDay() === 0) {
        oneDayAgo = currentTime - 24 * 60 * 60 * 3;
      } else {
        currentTime - 24 * 60 * 60;
      }
      const oneWeekAgo = currentTime - 24 * 60 * 60 * 7;
      const oneYarAgo = currentTime - 24 * 60 * 60 * 365;

      try{
        const responses = await Promise.all([finnHub.get("/stock/candle", {
        params: {
          symbol: symbol,
          from: oneDayAgo,
          to: currentTime,
          resolution: 30
        }
      }), finnHub.get("/stock/candle", {
        params: {
          symbol: symbol,
          from: oneWeekAgo,
          to: currentTime,
          resolution: 60
        }
      }), finnHub.get("/stock/candle", {
        params: {
          symbol: symbol,
          from: oneYarAgo,
          to: currentTime,
          resolution: "W"
        }
      })])
      
      setChartData({
        day:formatData(responses[0].data),
        week:formatData(responses[1].data),
        year:formatData(responses[2].data)
      })
      }catch(err){
        console.log(err)
      }

    }
    fetchData()
  }, [symbol])
  return <div>
    {chartData && (<div>
      <StockChart chartData={chartData} symbol={symbol} />
      <StockData symbol = {symbol} />
    </div>)}
  </div>
}

