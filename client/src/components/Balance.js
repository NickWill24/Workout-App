import React, { Component } from 'react'

export default class Balance extends Component{
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
    
    render(){
    const{ name, time, description, image, numOfRep}= this.state
        return(
            <div>
                <h1>Balance execrise</h1>
                <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="Balance exercise"
            value={name}
            onChange={handleChange}
            />
            
        <input
            type="text"
            name="image"
            value={image}
            placeholder="Balance url exercise"
            onChange={handleChange}
            />
        <input
            type="text"
            name="time"
            placeholder="Balance exercise time"
            value={time}
            onChange={handleChange}
            />
        <input
            type="text"
            name="description"
            placeholder="Balance descrpiton"
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

