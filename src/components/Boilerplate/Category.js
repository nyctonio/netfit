import React from 'react'
import { withRouter } from 'react-router-dom'

function Category({name,img,history,match,link}) {
    return (
        <div>
        {/* the links are not hardcoded so if we us the component in any place it will still work  */}

        <div onClick={()=>{history.push(`${match.url}/${link}`)}} className="my-10 flex flex-col items-center justify-center max-w-sm w-96 mx-10 md:mx-16">
            <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{"background-image" : `url(${img})`}}></div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{name}</h3>
                
                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-200"></span>
                    <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">View Category</button>
                </div>
            </div>
        </div>

        </div>
    )
}

// withrouter helps us to get the history and match as props which we can use for routing
export default withRouter(Category);