import React from "react";
import { useGlobalContext } from '../context';
import { FaThumbsUp } from "react-icons/fa";

const Meals = () => {
  const { meals, loading, selectMeal, addToFavorites } = useGlobalContext()
  console.log(meals)
  if (loading) {
    return <section className="section">
      <h4>Loading...</h4>
    </section>
  }
  if (meals.length < 1) {
    return <section className="section">
      <h4>No meals matched your search term. please try again</h4></section>
  }

  return (

    <section className='section-center'>
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal
        return (<article key={idMeal} className='single-meal'>
          <img src={image} style={{ width: '100%' }} className='img' onClick={() => selectMeal(idMeal)} />
          <footer>
            <h5>{title}</h5>
            <button className='like-btn' onClick={() => { addToFavorites(idMeal) }}><FaThumbsUp /></button>
          </footer>
        </article>)
      })}
    </section>
  )
}
export default Meals