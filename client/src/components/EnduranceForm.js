import React, { Component } from 'react'

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
        this.setState({enduranceArr: event.target.value})
    }
    render(){
    const{ name, time, description, image, numOfRep}= this.state
        return(
            <div>
                <h1>Balance execrise</h1>
                <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="Endurance exercise"
            value={name}
            onChange={handleChange}
            />
            
        <input
            type="text"
            name="image"
            value={image}
            placeholder="Endurance url exercise"
            onChange={handleChange}
            />
        <input
            type="text"
            name="time"
            placeholder="Endurance exercise time"
            value={time}
            onChange={handleChange}
            />
        <input
            type="text"
            name="description"
            placeholder="Endurance descrpiton"
            value={description}
            onChange={handleChange}
            />
        <input
            type="text"
            name="numOfRep"
            placeholder="Number of rep"
            value={numOfRep}
            onChange={handleChange}
            />
            </form>
            </div>
        )
    }
}

