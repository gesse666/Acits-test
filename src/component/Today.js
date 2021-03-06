import React, { Component } from "react";
import { connect } from "react-redux";
import { getToday } from "../store/actions/todayAction";
import {Redirect, WithRouter} from 'react-router-dom';
import { getCurrentAnimal } from "../store/actions/modalAction";
import Modal from "../component/Modal"


class Today extends React.Component {


  componentDidMount() {
    if(!this.props.isAuth) return <Redirect to={"/LoginForm"}/>
    this.props.getToday();
  }
 
  
  render() {
    let {isAuth} = this.props.isAuth;
    if(!isAuth) return <Redirect to={"/LoginForm"}/>
    const  {today}  = this.props.today;
    
    return (
      <div>
        <Modal/>
        {today.map(u => 
          <React.Fragment key={u.animal.id}>
              <h5 onClick={ev => this.props.getCurrentAnimal(u.animal.id)}>Кличка: {u.animal.name}</h5> 
              <h6 >Вид лечения: {u.my_type}</h6>
              <br/>
          </React.Fragment>)}
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
      // getToken: (loading, token) => dispatch(getToken(loading, token)),
      // getAnimal: (animals, loading) => dispatch(getAnimal(animals, loading)),
      getToday: (loading, today) => dispatch(getToday(loading, today)),
      getCurrentAnimal:(idAnimal, isOpen) => dispatch(getCurrentAnimal(idAnimal,isOpen)),
  }
}

// const mapStateToProps = (state) => ({ users: state.users, token: state.token, data: state.data, animals: state.animals});
const mapStateToProps = (state) => ({ isAuth: state.isAuth, today: state.today, animalmodal:state.animal});
export default connect(mapStateToProps, mapDispatchToProps )(Today);
// { getUsers, getToken, getToday, getAnimal }



