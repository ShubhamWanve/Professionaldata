import React, { Component } from 'react'
import '../index.css'
import axios from 'axios';
import { TwitterIcon } from 'react-share';

export default class profile extends Component {
    constructor(){
        super();
        this.state={
            profileList:[],
            id:''
        }
    }
    componentDidMount(){
        this.getProfileData();
    }
    getProfileData(){
        let profileList1=[];
        let id=window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
            this.setState({id:id})
        axios.get('https://dev.perfectprof.com/api/professional-profile?slug='+id).then(response => {
            profileList1.push(response.data.data)
            this.setState({profileList:profileList1})
        })
    }

    
    render() {
        console.log("data",this.state.profileList)
        return (
            <div className="container emp-profile">
             {this.state.profileList.map((item)=>
                <form method="post">
               
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={"https://dev.perfectprof.com/storage/app/"+item.professional.profile_pic} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>
                                    {item.professional.first_name}
                                </h5>
                                <h5>
                                    {item.professional.last_name}
                                </h5>
                                <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a href="">Website Link</a><br />
                                <a href="">Bootsnipp Profile</a><br />
                                <a href="">Bootply Profile</a>
                                <p>SKILLS</p>
                                <a href="">Web Designer</a><br />
                                <a href="">Web Developer</a><br />
                                <a href="">WordPress</a><br />
                                <a href="">WooCommerce</a><br />
                                <a href="">PHP, .Net</a><br />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{item.user_id}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{item.professional.first_name} {item.professional.last_name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{item.professional.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{item.professional.phone || <div style={{color:"skyblue"}}>Not Available</div>}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{item.professional.user_type}</p>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop:'2rem',padding:'2rem'}}>
                                        <div className="col-md-4">
                                            <ul className="social-links list-inline">
                                                <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                            </ul>
                                        </div>

                                        <div className="col-md-4">
                                            <ul className="social-links list-inline">
                                            <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-twitter"></i></a></li>
                                            </ul>
                                        </div>

                                        <div className="col-md-4">
                                            <ul className="social-links list-inline">
                                                <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Linkin"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                )}
            </div>
        )
    }
}
