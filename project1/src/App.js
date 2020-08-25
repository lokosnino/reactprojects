import React, { Component}  from 'react';
import './App.css';

class App extends Component { 
    constructor(props) {
        super(props) ;
        this.state= { 
            languages: [ 
              {name: "PHP", votes: 0 },
              {name: "Python", votes: 0 },
              {name: "Go", votes: 0 },
              {name: "Java", votes: 0 }
                
            ]
        }
    }

    vote(i) {
      let newLanguages = [...this.state.languages]
      newLanguages[i].vote++;
      function swap(array,i,j){
        var temp = array[i];
        array[i]= array[j];
        array[j] = temp;
      }
      this.setState({languages: newLanguages})
    }
    render(){
      return ( 
        <>
        <h1> vote your Language!</h1>
        <div className="languages">
      {
        this.state.languages.map((lang,i) =>
        <div key={i} className ="language">
        <div className="voteCount">
        {lang.votes}
        </div>
        <div className="languageName">
        {lang.name}
        </div>
        <button onClick={this.vote.bind(this, i)}>Click here </button>
        </div>
        )
    }
     </div>
     </>
     );
  }
}
export default App;