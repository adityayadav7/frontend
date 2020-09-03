import React, { Component } from 'react'
import '../style/style.css';

import fire from '../Firebase';
// import { browserHistory} from "react-router";
import Loader from './Loader';
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.state = {
      email: '',
      password: '',
      error: '',
      step: true,
      load: false

    }
  }
  componentDidMount() {

    // [START signout]
    fire.auth().signOut();
    // [END signout]

  }


  login(e) {
    if (fire.auth().currentUser) {

      fire.auth().signOut();

    }
    this.setState({ load: true });
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    fire.auth().signInWithEmailAndPassword(email.trim(), password)
      .then(res => {
        toast.notify("Logged In", {
          duration: 2000
        })
        console.log('Successfully Logged In');
        this.props.history.push('/dashboard');
        localStorage.setItem('userId', email)
        this.setState({ load: false });
      })
      .catch((err) => {
        this.setState({ load: false });
        if (err.code === "auth/wrong-password") {

          this.setState({ error: "incorrect password" });

        }
        // this.state.error=err;
        toast.notify("Incorrect Password")
        console.log('Error: ' + err.toString());
      })
  }



  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }


  prev() {
    this.setState({ step: true });
  }
  next() {
    this.setState({ step: false });
  }
  sess() {
    this.setState({ load: !false });
    setTimeout(() => {
      this.setState({ load: !true });
    }, 5000);
  }
  onhandle() {
    this.login();
    //this.sess()
  }




  render() {
    //   const [email,setEmail]=useState('');
    //   const [password,setPassword]=useState('');
    //   const [showLoading, setShowLoading] = useState(false);
    // const login=async()=>{
    //   setShowLoading(true);
    //   try{
    //     const doLogin= await fire.auth().signInWithEmailAndPassword(email,password);
    //     setShowLoading(false);
    //     if(doLogin.user){
    //       this.onNavigate("/home")
    //     }
    //   } catch(e){
    //     setShowLoading(false);
    //     Alert.alert(
    //       e.message
    //     );
    //   }

    // };
    // if(this.state.loggedIn){
    //   return <Redirect to="/desktop/"/>
    // }

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="xb">
          {this.state.load ? <Loader /> :
            <div>
              <div className="form" onSubmit={this.login}>
                <div className="header">Login</div>
                <div className="in_pswd">{this.state.error}</div>
                <div className="form-group" >
                  <label >Email address</label>
                  <input id="email" type="text" name="email" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label >Password</label>
                  <input type="password" id="password" name="password" placeholder="Password" />
                </div>
                <div className='footer'>
                  <button type="submit" onClick={this.onhandle.bind(this)} className="btn1">Login</button>
                </div>
              </div>


            </div>
          }
        </div>
      </div>
    );
  }
}
// const clickOutsideConfig = {
//   handleClickOutside: () => Login.handleClickOutside,
// };
export default Login;