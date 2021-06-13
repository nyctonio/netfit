import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Header,Footer,Home,Cart,Diet,Shop,Workout,CategoryPage,SignInPage,SignUpPage} from './components'
import {auth,createUserProfileDocument} from './components/firebase/firebase.utils'

export default class App extends Component {
  constructor(){
    super();
    
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
     
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
    
      userRef.onSnapshot(snapShot=>{
        this.setState({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        },()=>{
          console.log(this.state)
        })
      })
    }else{
      this.setState({currentUser:userAuth})
    }
    
  })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
      <Router>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/diet" exact component={Diet} />
          <Route path="/workout" exact component={Workout} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/signin" exact component={SignInPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/shop/:ctg" exact component={CategoryPage} />
        </Switch>
        <Footer/>
      </Router>
    </div>
    )
  }
}