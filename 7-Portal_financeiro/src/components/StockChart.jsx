import Chart from "react-apexcharts";
import {useState} from "react";

export const StockChart = ({ chartData, symbol }) => {
  const { day, week, year } = chartData
  const [dateFormat , setDateFormat] = useState("day");
  
  
  const options = {
    title: {
      text: symbol,
      align: "center",
      style: { fontSize: "24px" }
    },
    chart: {
      id: "stock data",
      animations: {
        speed: 1300
      }
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: false
      }
    }
  }
  const determineTime = ()=>{
    switch(dateFormat){
      case "day":
        return day;
      
      case "week":
        return week;
        
      case "year":
        return year;
        
      default:
        return day;
        
    }
  };
  const series = [{
    name: symbol,
    data: determineTime()
  }];
  const renderButton = (button) =>{
    const classes = "btn mx-1 "
    if(button==dateFormat){
      return classes + "btn-primary"
    }else{
      return classes + "btn-outline-primary"
    }
  }

  return (<div className='mt-5 p-4 shadow-sm bg-white'>
    <Chart width="100%" options={options} series={series} type="area" />
    <div>
      <button className={renderButton("day")} onClick={()=>setDateFormat("day")}>24h</button>
      <button  className={renderButton("week")} onClick={()=>setDateFormat("week")}>7days</button>
      <button  className={renderButton("year")} onClick={()=>setDateFormat("year")}>1year</button>
    </div>
  </div>
  )
}