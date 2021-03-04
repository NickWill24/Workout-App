import React, { Component } from 'react'
import '../styles/Card.css'

export default class BalanceCard extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    render(){
    const{ name, description, image, time, numOfRep}= this.props
        return(
            <div className="card">
                <p>{name}</p>
                <p>{description}</p>
                <p>{numOfRep}</p>
                <p>{time}</p>
                
            </div>
        )
        }
    }