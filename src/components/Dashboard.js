import React, { Component } from 'react'
import '../style/style.css';
import { Link } from 'react-router-dom';
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import firebase from '../Firebase';
import AddDetails from './AddDetails';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  logout(e) {
    e.preventDefault();
    firebase.auth().signOut().then(res => {
      toast.notify("Logout user", {
        position: "bottom",
        duration: 2000
      });
      console.log("signout yay!");
      localStorage.clear();
      this.props.history.push(`/`)
    });
  }

  render() {
    return (
      <div>
        <header className="_h" data-reactid=".0.0">
          <span data-reactid=".0.0"></span>
          <div className="_h12" data-reactid=".0.0.1">
            <div className="_h13" data-reactid=".0.0.1.0">
              <span className="_h131" data-reactid=".0.0.1.0.0"></span>
              <div className="_q12" data-reactid=".0.0.1.1.0">

                <Link to='/add' className="_q131" data-reactid=".0.0.1.1.0.0">Add</Link>

              </div>
              <div className="_q12 padd-left" data-reactid=".0.0.1.1.0">

                <Link to='/view' className="_q131" data-reactid=".0.0.1.1.0.0">View</Link>

              </div>


            </div>

            <div className="_q1" data-reactid=".0.0.1.1">
              <div className="_q12" data-reactid=".0.0.1.1.0">
                <a className="userId">{localStorage.getItem('userId')}</a>

              </div>
              <div className="_q12" data-reactid=".0.0.1.1.0">

                <a type="submit" onClick={this.logout.bind(this)} className="_q13" data-reactid=".0.0.1.1.0.0">Logout</a>

              </div>
            </div>
          </div>
        </header>
        <div className='mg'>
          <AddDetails {...this.props} />
        </div>
      </div>
    )
  }
}

export default Dashboard