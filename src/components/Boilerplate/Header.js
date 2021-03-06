import {React,useState} from 'react'

// for routing
import {Link} from 'react-router-dom'

// authentication
import {auth} from '../firebase/firebase.utils'

// connecting redux
import {connect} from 'react-redux'

const Header = ({currentUser})=> {
    const [toggle,setToggle] = useState(true)
    
    return (
        <div>
            
    <nav className="bg-black shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-2xl font-bold text-white dark:text-white md:text-2xl hover:text-gray-300 dark:hover:text-gray-300" >
                      <Link to="/">Netfit</Link></p>
                </div>
                
                <div className="flex md:hidden">
                    <button onClick={()=>{setToggle(!toggle)}} type="button" className="text-white dark:text-gray-200 hover:text-white dark:hover:text-gray-400 focus:outline-none focus:text-white dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>


            {
            toggle?<div className="items-center hidden md:flex">
            <div className="flex flex-col md:flex-row md:mx-6 md:justify-items-center md:items-center">
                {
                    currentUser ? <div onClick={()=>{auth.signOut()}} className="my-1 text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0 cursor-pointer">SignOut</div>:
                    <p className="my-1 text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0" ><Link to="/signin">SignIn</Link></p>
                }
                <p className="my-1 text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0" ><Link to="/shop">Shop</Link> </p>
                <p className="my-1 text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0" ><Link to="/diet">DietPlan</Link></p>
                <p className="my-1 text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0" ><Link to="/workout">WorkOut</Link> </p>
            </div>

            <div className="flex justify-center md:block">
                <p className="relative text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-300" >
                    <Link to="/cart">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </Link>
                    <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-400 rounded-full"></span>
                </p>
            </div>

        </div>:
            <div className="items-center mt-3 md:flex">
                <div className="flex flex-col md:flex-row md:mx-6 md:justify-items-center md:items-center">
                    {
                        currentUser ? <div onClick={()=>{auth.signOut()}} className="my-1 text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0 cursor-pointer">SignOut</div>:
                        <p className="my-1 text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0" ><Link to="/signin">SignIn</Link></p>
                    }
                    <p className="my-1 text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0" ><Link to="/shop">Shop</Link> </p>
                    <p className="my-1 text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0" ><Link to="/diet">DietPlan</Link></p>
                    <p className="my-1 text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0" ><Link to="/workout">WorkOut</Link> </p>
                </div>

                <div className="flex justify-center md:block">
                    <p className="relative text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-300" >
                        <Link to="/cart">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Link>
                        <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-400 rounded-full"></span>
                    </p>
                </div>

            </div>
            }

        </div>
    </nav>
        </div>
    )
}

// redux mapStateToProps connection
const mapStateToProps = state =>({
    currentUser:state.user.currentUser
})

// pasing currentUser in the props of Header from redux store connect is a higher level component
export default connect(mapStateToProps)(Header);