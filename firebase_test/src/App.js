import React, { Component } from 'react';
import firebase from './firebase'
class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    const messaging =firebase.messaging()
    messaging.requestPermission().then((token)=>{
      return messaging.getToken()
    }).then(token=>{
      console.log('Token:  ',token)
    }).catch((error)=>{
      console.log(error);
    })
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;