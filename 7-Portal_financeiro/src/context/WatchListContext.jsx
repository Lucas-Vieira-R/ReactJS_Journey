import { createContext, useState } from "react";

export const WatchListContext = createContext()

export const WatchListContextProvider = (props) => {
  const items = localStorage.getItem("watchList")
  const [watchList, setWatchList] = useState(items?items.split(','):["AMZN","TSLA"]);
  const addStock = (stock) => {
    if (!watchList.includes(stock)) {
      setWatchList([...watchList, stock])
      localStorage.setItem("watchList", [...watchList, stock])

    }
  }
  const deleteStock = (stock) => {
    setWatchList(watchList.filter((el) => {
      return el !== stock
    }))
    localStorage.setItem("watchList", [watchList.filter((el) => {
      return el !== stock
    })])
  }

  return (
    <WatchListContext.Provider value={{ watchList, addStock, deleteStock }}>
      {props.children}
    </WatchListContext.Provider>
  )
}
