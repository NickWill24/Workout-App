import React, { Component } from 'react'
import axios from 'axios'


export default class BalanceForm extends Component{
    constructor(){
        super()
        this.state={
            name: "",
            time:"",
            image:"",
            description:"",
            numOfRep:""
        }
    }

    handleChange= (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit= async (e) =>{
        e.preventDefault()
        try{
            let response = await axios.post('http://localhost:3001/api/createBalance', this.state
            )
            this.props.addBalance(response.data.balance)
        } catch(error){
            console.log(error)
        }
    }

    render(){
    const{ name, time, description, image, numOfRep}= this.state
        return(
            <div>
                <h1>Balance execrise</h1>
                <form onSubmit={this.handleSubmit}>
                <button className="subbutn">Back To Home</button>
        <input
            type="text"
            name="name"
            placeholder="Balance exercise"
            value={name}
            onChange={this.handleChange}
            />
            
        <input
            type="text"
            name="image"
            value={image}
            placeholder="Balance url exercise"
            onChange={this.handleChange}
            />
        <input
            type="text"
            name="time"
            placeholder="Balance exercise time"
            value={time}
            onChange={this.handleChange}
            />
        <input
            type="text"
            name="description"
            placeholder="Balance descrpiton"
            value={description}
            onChange={this.handleChange}
            />
        <input
            type="text"
            name="numOfRep"
            placeholder="Number of rep"
            value={numOfRep}
            onChange={this.handleChange}
            />
            <button className="subbutn" >Submit</button>
            </form>
            </div>
        )
    }
}

