import React, { Component } from 'react'
import './component.css'


export default class QuizComponent extends Component {
  render() {
    return (
      <>
        <div className='quiz_body'>
          <div className='quizbox'>
            <h1 className='topic'>Question</h1>
            <div className='q_no'>1 of 15</div>
            <div className='question'>Which is the only mammal that can jump ?</div>
            <button className='op1'>Dog</button>
            <button className='op2'>Elephant</button>
            <button className='op3'>Goat</button>
            <button className='op4'>Lion</button>
            <div className='choice'>
              <button className='btns prev' >Previous</button>
              <button className='btns next'>Next</button>
              <button className='btns quit'>Quit</button>
              <button></button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
