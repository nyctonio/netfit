import React, { Component } from 'react'
import { Switch, Route,Redirect } from "react-router-dom"
// importing all the pages from the pages folder
import {Header,Footer,Home,Cart,Diet,Shop,Workout,CategoryPage,SignInPage,SignUpPage} from './components'

// importing auth for authentication and createUserProfileDocument for firebase database
import {auth,createUserProfileDocument} from './components/firebase/firebase.utils'

// connecting redux
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'


class App extends Component {

  // USED BEFORE ADDITION OF REDUX

  
  
  // constructor(){
  //   super();
    
  //   this.state={
  //     currentUser:null
  //   }
  // }

  // unsubscribeFromAuth = null;

  // componentDidMount(){
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
     
  //     if(userAuth){
  //     const userRef = await createUserProfileDocument(userAuth);
    
  //     userRef.onSnapshot(snapShot=>{
  //       this.setState({
  //         currentUser:{
  //           id:snapShot.id,
  //           ...snapShot.data()
  //         }
  //       },()=>{
  //         console.log(this.state)
  //       })
  //     })
  //   }else{
  //     this.setState({currentUser:userAuth})
  //   }
    
  // })
  // }

  // componentWillUnmount(){
  //   this.unsubscribeFromAuth();
  // }




  // AFTER ADDITION OF REDUX

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
           
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
    
      userRef.onSnapshot(snapShot=>{
        setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
        })
      })
    }else{
      setCurrentUser(userAuth)
    }
    
  })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/diet" exact component={Diet} />
          <Route path="/workout" exact component={Workout} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/signin" render={()=>this.props.currentUser ? (<Redirect to="/"/>):(<SignInPage/>)} />
          <Route path="/signup" render={()=>this.props.currentUser ? (<Redirect to="/"/>):(<SignUpPage/>)} />
          <Route path="/shop/:ctg" exact component={CategoryPage} />
        </Switch>
        <Footer/>
    </div>
    )
  }
}


// redux mapStateToProps connection
const mapStateToProps = ({user}) =>({
  currentUser:user.currentUser
})


// dispatch is a function which helps redux to know that whateveris being passed is going to be an action
// object 
const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})


// passing a function in the props so that we can change the currentUser
export default connect(mapStateToProps,mapDispatchToProps)(App)