import React, { useState } from "react";
import "./quize.css";

class Quize extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.value)
    this.state = {
      currentQuestionIndex: 0,
    };
  }
  previousValue = () => {
    if(this.state.currentQuestionIndex==0){
        this.setState(0);
    }else{
        this.setState((prev) => ({
            currentQuestionIndex: prev.currentQuestionIndex - 1,
          }));
    }
    
    
  };
  
  handleNextClick = () => {
    if(this.state.currentQuestionIndex==14){
        this.setState(14);
    }else{
        this.setState((pre) => ({
            currentQuestionIndex: pre.currentQuestionIndex + 1,
          }));
    }
  };
  QuiteClick=()=>{
    alert("Are you sure you want to quit ?")
  }

  render() {
    let curIndex = this.state.currentQuestionIndex;
    let datas = this.props.value

    return (
      
     <div className="content">
      
        <h1>Question</h1>
        <h5>1 of 15</h5>
         <h4>{datas[curIndex].question}</h4>
         <ul className="ul">
            <li>{datas[curIndex].optionA}</li>
            <li>{datas[curIndex].optionB}</li>
            <li>{datas[curIndex].optionC}</li>
            <li>{datas[curIndex].optionD}</li>
         </ul>
         <div className="Buttons">
          <button onClick={this.previousValue}>Previous</button>
          <button onClick={this.handleNextClick}>Next</button>
          <button onClick={this.QuiteClick}>Quit</button>
        </div>
     </div>
    );
  }
}

export default Quize;
