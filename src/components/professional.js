import React, { Component } from 'react'
import axios from 'axios';
import '../App.css';
import '../index.css'
import { Link } from 'react-router-dom';

export default class professional extends Component {
    constructor(props) {
        super(props)
        this.state = {
          professionalList:[]
        }
      }

      componentDidMount() {
        this.getProfessionalsData();
      }
    
      getProfessionalsData() {
        let {professionalList}=this.state;
        axios.get('https://dev.perfectprof.com/api/search').then(response => {
            this.setState({professionalList:response.data.data})
            for(let i=0;i<115;i++){
                professionalList.push(response.data.data[i])
              }
              professionalList.forEach((r,i)=>{
                professionalList.forEach((w,j)=>{
                  if(r.user_id === w.user_id){
                    professionalList.splice(i,1);
                    this.setState({professionalList:professionalList})
                  }
                })
              })
        })
      }

    render() { 
        if (!this.state.professionalList)
      return (<p>Loading data</p>)
    return (

<div className="content">
    <div className="container">
        <div className="row">
            <div className="col-sm-12" style={{textAlign:'center'}}><h2><b>Our Professionals</b></h2></div>
        </div>
        <div className="row"> 
        { 
            this.state.professionalList.map((item)=>
            <div className="col-lg-4">
                <div className="text-center card-box">
                    <div className="member-card pt-2 pb-2">
                        <div className="thumb-lg member-thumb mx-auto"><img src={"https://dev.perfectprof.com/storage/app/"+item.professional.profile_pic} className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                        <div className="">
                            <h4>{item.professional.first_name}&nbsp;{item.professional.last_name}</h4>
                            <p className="text-muted">@{item.professional.user_type} <span>| </span><span className="text-pink">{item.professional.email}</span></p>
                        </div>
                        <Link to={`profile/${item.slug}`} params={{ slug: "hello" }}><button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">More Info</button>
                        
                        </Link>
                        <div className="mt-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="mt-3">
                                        <h4>{item.professional.phone || <div style={{color:"skyblue"}}>Not Available</div>}</h4>
                                        <p className="mb-0 text-muted">Mobile No.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          )}
        </div>
    </div>
</div>
    )
    }
}
