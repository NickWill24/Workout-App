import React, { Component } from 'react'
import axios from 'axios'

export default class EnduranceForm extends Component{
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
            let response = await axios.post('http://localhost:3001/api/createEndurance', this.state
            )
            this.props.addEndurance(response.data.endurance)
        } catch(error){
            console.log(error)
        }
    }
    render(){
    const{ name, time, description, image, numOfRep}= this.state
        return(
            <div>
                <h1>Endurance execrise</h1>
                <form onSubmit={this.handleSubmit}>
                <button className="subbutn">Back To Home</button>
        <input
            type="text"
            name="name"
            placeholder="Endurance exercise"
            value={name}
            onChange={this.handleChange}
            />
            
        <input
            type="text"
            name="image"
            value={image}
            placeholder="Endurance url exercise"
            onChange={this.handleChange}
            />
        <input
            type="text"
            name="time"
            placeholder="Endurance exercise time"
            value={time}
            onChange={this.handleChange}
            />
        <input
            type="text"
            name="description"
            placeholder="Endurance descrpiton"
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
            <button className="subbutn">Submit</button>
            </form>
            </div>
        )
    }
}

