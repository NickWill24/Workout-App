import React, { Component } from 'react'
import '../styles/Card.css'
import axios from 'axios'


export default class EnduranceCard extends Component {
    constructor(){
        super()
        this.state={
            vis: true
        }
    }

    deleteEndurance= async (id) =>{
        console.log(id)
        try{
        const response = await axios.delete(`http://localhost:3001/api/deleteEndurance/${id}`)
        } catch(error){
        console.log('error')
        }
        this.setState({vis: false})
    }







    render(){
    const{ name, description, image, time, numOfRep, id}= this.props
    if(this.state.vis === true){
        return(
            <div className="card">
                <img className="Endexe" src={image} alt="exercise"></img>
                <p>{name}</p>
                <p>{description}</p>
                <p>{numOfRep}</p>
                <p>{time}</p>
                <button onClick={()=>this.deleteEndurance(id)}>delete</button>
            </div>
        )
    } else {
        return <div>Removed</div>
    }
        }
    }