import React from 'react';
import {connect} from 'react-redux';
import { closeModal } from "../store/actions/closeAction";

const Modal = ({animal, closeModal, isOpen, animalmodal}) => {
  if(!isOpen) {
    return null;
  }

const today = new Date().getFullYear();
const birthday = new Date(animal.birth_date).getFullYear();
const age = today - birthday;

let attributes = animal.animal_attributes

let height = typeof(attributes.find(attribute => attribute.name === 'height')) !== "undefined"
?(attributes.find(attribute => attribute.name === 'height').value)
:("неизвестен");

let weight = typeof(attributes.find(attribute => attribute.name === 'weight')) !== "undefined"
?(attributes.find(attribute => attribute.name === 'weight').value)
:("неизвестен");

return (
    <div >
        <p>Кличка: {animal.name 
        ? animal.name
        : "неизвестна"}</p>
        <p>Рост: {height}</p>
        <p>Вес:{weight}</p>
        <p>Возраст: {animal.birth_date
        ? age
        : "неизвестен"}</p>
        <p>Подтип:{animal.spec_name
        ? animal.spec_name
        : "неизвестен"}</p>
        <p>Тип:{animal.spec_parent_name
        ? animal.spec_parent_name
        : "неизвестен"}</p>
        <button onClick={closeModal}>Закрыть</button>
    </div>
  )
}
const mapStateToProps = (state) => ({
  animal: state.animalmodal.animal, isOpen:state.animalmodal.isOpen
});

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal:(animal) => dispatch(closeModal(animal)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(Modal);