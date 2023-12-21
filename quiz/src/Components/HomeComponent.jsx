import React, { Component } from 'react'
import './component.css'
// import {Link} from 'react-router-dom'

export default class HomeComponent extends Component {
    render() {
        return (
            <>
                <div className='box'>
                    <h1 className='title'>Quiz App</h1>
                    <button className='play_btn'>Play</button>
                </div>
            </>
        )
    }
}
