import React,{Component} from 'react';
import './App.css';
import Login from './components/login/login';
import Register from './components/Register/register';
// import axios from 'axios';
import Navigation from './components/Navigation/navigation';
import Welcome from './components/welcoming/welcome';




class App extends Component {
constructor(){
  super();
  this.state={
    route : 'signin',
    isSignedIn: false,
  }
}

onRouteChange =(route)=>{
  if (route === 'signout'){
    this.setState({isSignedIn:false})
  }else if (route ==='home'){
    this.setState({isSignedIn : true})
  }

  
  this.setState({route:route})
}



  render(){
  return (
    <div className="App">
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      {this.state.route==='home'

      ?<Welcome/>
      :(
        this.state.route === 'signin'
        ?<Login onRouteChange={this.onRouteChange}/>
        :<Register onRouteChange={this.onRouteChange}/>

      )
      
      
      
    }

    </div>
  );
  }
}

export default App;
