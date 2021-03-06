import React from "react";
import { connect } from "react-redux";
import { getAnimal } from "../store/actions/animalAction";
import {Redirect} from 'react-router-dom';
import { getCurrentAnimal } from "../store/actions/modalAction";
import Modal from "../component/Modal"

class Animals extends React.Component {

  componentDidMount() {
    this.props.getAnimal();
  }
 
  render() {
    let {isAuth} = this.props.isAuth;
    if(!isAuth) return <Redirect to={"/LoginForm"}/>
    const  {animals}  = this.props.animals;
    return (
      <div>
        <Modal/>
        {animals.map(u => 
          <React.Fragment key={u.id}>
              <h5 onClick={ev => this.props.getCurrentAnimal(u.id)}>Кличка: {u.name}</h5> 
              <h6 >Животное: {u.spec_parent_name}</h6>
              <h6 >Порода: {u.spec_name}</h6>
              <br/>
          </React.Fragment>)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getAnimal: (animals, loading) => dispatch(getAnimal(animals, loading)),
      getCurrentAnimal:(idAnimal, isOpen) => dispatch(getCurrentAnimal(idAnimal,isOpen)),
  }
}; 

const mapStateToProps = (state) => ({ isAuth: state.isAuth, animals: state.animals, animalmodal:state.animal});

export default connect(mapStateToProps, mapDispatchToProps )(Animals);




