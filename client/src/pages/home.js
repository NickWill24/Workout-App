import React, { Component } from 'react'
import "../styles/Home.css"
export default class Home extends Component {
    render(){
        return(
            <div className="home">
                <h1>Home</h1>
                <p>Pick A Category</p>
                <div className="row">
                    <div className="category">
                        Balance
                    </div>
                    <div className="category">
                        Endurance
                    </div>
                    <div className="category">
                        Strength
                    </div>
                </div>
            </div>
        )
    }
}