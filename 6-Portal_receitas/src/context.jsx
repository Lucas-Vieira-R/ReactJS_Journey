import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'

const AllMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'


const AppContext = React.createContext()

export const useGlobalContext = () => {
  return useContext(AppContext)
}

const AppProvider = ({ children }) => {

  const getFavoritesFromLocalStorage = () => {
    let favorites = localStorage.getItem('favorites')
    if (favorites) {
      favorites = JSON.parse(localStorage.getItem('favorites'))
    } else {
      favorites = []
    }
    return favorites
  }

  const [meals, setMeals] = useState([])
  const [loading, setloading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage())

  const addToFavorites = (idMeal) => {
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const alreadyFavorite = favorites.find((meal) => {
      meal.idMeal === idMeal
    })
    if (alreadyFavorite) { return }
    const updatedFavorites = [...favorites, meal]
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    if (favoriteMeal) {
      meal = favorites.find((meal) => meal.idMeal === idMeal)
    } else {
      meal = meals.find(meal => meal.idMeal === idMeal)
    }
    setSelectedMeal(meal)
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  const fetchMeals = async (url) => {
    setloading(true)
    try {
      const { data } = await axios.get(url)
      if (data.meals) {
        setMeals(data.meals)
      } else {
        setMeals([])
      }

    } catch (e) {
      console.log(e.response)
    }
    setloading(false)
  }

  useEffect(() => {
    fetchMeals(AllMealsUrl)
  }, [])

  useEffect(() => {
    if (!searchTerm) return
    fetchMeals(`${AllMealsUrl}${searchTerm}`)

  }, [searchTerm])

  const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl)
  }

  return (
    <AppContext.Provider

      value={{ meals, loading, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal, addToFavorites, removeFromFavorites, favorites }}
    >
      {children}
    </AppContext.Provider>
  )
}
export { AppContext, AppProvider }