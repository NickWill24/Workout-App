import React, { Component } from 'react'
import '../styles/Card.css'
import axios from 'axios'


export default class BalanceCard extends Component {
    constructor(){
        super()
        this.state={
            vis: true
        }
    }


    deleteBalance= async (id) =>{
        try{
        const response = await axios.delete(`http://localhost:3001/api/deleteBalance/${id}`)
        } catch(error){
        console.log('error')
        }
        this.setState({vis: false})
    }



    render(){
    const{ name, description, image, time, numOfRep, id}= this.props
    if (this.state.vis === true){
        return(
            <div className="card">
                <img className="Balexe" src={image} alt="exercise"></img>
                <p>{name}</p>
                <p>{description}</p>
                <p>{numOfRep}</p>
                <p>{time}</p>
                <button onClick={()=>this.deleteBalance(id)}>delete</button>
                
            </div>
        )
    } else {
        return <div>Removed</div>
    }
        }
    }