import React from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const {selectedMeal, closeModal} = useGlobalContext()
  const{strMealThumb:image,strMeal:title,strInstructions:text,strSource:source} = selectedMeal
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={image} className='img modal-img'></img>
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Cooking Instructions</p>
          <p>{text}</p>
          <a href={source} target='_blank'>original source</a>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>Close</button>
        </div>
      </div>
    </aside>
  )
}
export default Modal