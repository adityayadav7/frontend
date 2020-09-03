import React, { Component } from 'react'
import '../style/style.css';
import axios from 'axios';
class AddDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Uid:'',
            uniname:'',
            regDate:'',
            expDate:'',
            weburl:'',
            imgUrl:'',
            students:'',
            email:'',
            contactNo:''

        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit(e){
          e.preventDefault()
         const details={
             "UID":this.state.Uid,
             "Uniname":this.state.uniname,
             "email":this.state.email,
             "registrationDate":this.state.regDate,
             "expirydate":this.state.expDate,
             "imageUrl":this.state.imgUrl,
             "Students":this.state.students,
             "contact":this.state.contactNo
         }
         axios.post('http://localhost:5000/kisanfeedback-b2c73/us-central1/api/add',details)
         .then(res=>{
             console.log('sent');
             this.props.history.push('/view');
         })
         .catch(err=>{
             console.log(err)
         })
    }

    render() {
        return (
            <div>
                <div className='fr'>
                    <div className="form">

                        <form >

                            <div>
                                <div className='same-line'>
                                    <div className="form-group1">
                                        <input
                                            className="input1"
                                            id="Uid"
                                            type="number"
                                            value={this.state.Uid}
                                            onChange={e=>this.onChange(e)}
                                           
                                            
                                            required />
                                        <label >Uid</label>
                                    </div>
                                    <div className="form-group1 ">
                                        <input
                                            className="input1"
                                            id="uniname"
                                            type="text"
                                            value={this.state.uniname}
                                            onChange={this.onChange}
                                            required />
                                        <label>University Name</label>
                                    </div>
                                </div>
                                <div className='same-line'>
                                    <div className="form-group1">
                                        <input
                                            className="input1"
                                            id="regDate"
                                            type="date"
                                            value={this.state.regDate}
                                            onChange={this.onChange}
                                            
                                            required />
                                        <label htmlFor="name">Registration Date</label>
                                    </div>
                                    <div className="form-group1 ">
                                        <input
                                            className="input1"
                                            id="expDate"
                                            type="date"
                                            value={this.state.expDate}
                                            onChange={this.onChange}
                                            required />
                                        <label >Expiry date</label>
                                    </div>
                                </div>
                                <div className='same-line'>
                                    <div className="form-group1 ">
                                        <input
                                            className="input1"
                                            id="imgUrl"
                                            type="url"
                                            value={this.state.imgUrl}
                                            onChange={this.onChange}
                                            required />
                                        <label >Image Url</label>
                                    </div>
                                    <div className="form-group1">
                                        <input
                                            className="input1"
                                            id="students"
                                            type="number"
                                            value={this.state.students}
                                            onChange={this.onChange}
                                            required />
                                        <label >No.of Student</label>
                                    </div>
                                </div>
                                <div className='same-line'>
                                    <div className="form-group1 ">
                                        <input
                                            className="input1"
                                            type="email"
                                            id="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            required />
                                        <label >Email</label>
                                    </div>
                                    <div className="form-group1 ">
                                        <input
                                            className="input1"
                                            id="contactNo"
                                            type="number"
                                            value={this.state.contactNo}
                                            onChange={this.onChange}
                                            required />
                                        <label >Contact No.</label>
                                    </div>
                                </div>
                            </div>
                            <div className='btn-submit'>
                                <button type='submit'onClick={this.onSubmit.bind(this)} > Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default AddDetails;