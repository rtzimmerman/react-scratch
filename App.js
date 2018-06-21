import React from 'react';
import './styles/app.scss';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            headline: "I am a ridiculed vegetarian"
        }
        this.displayName = this.displayName.bind(this);
    }
    displayName(){
        console.log('peace');
        this.setState({headline: "Dammit, Bobby! How could you?"});
    }
   render() {
      return (
         <div>
            <h1 className="headline" onClick={this.displayName}>{this.state.headline}</h1>
         </div>
      );
   }
}
export default App;
