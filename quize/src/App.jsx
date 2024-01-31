import React from "react";
// import Home from "./Components/HomeComponent";
import Quiz from "./quizQuestion.json";
import Quize from "./Components/QuizeComponent"


class App extends React.Component{
  constructor(){
    super();
    this.state={
      index:0,
    }
  }
    render(){
      
    
      return(
     <div>
      
<Quize value={Quiz}/>

     </div>
      ) 
    }
}
export default App;