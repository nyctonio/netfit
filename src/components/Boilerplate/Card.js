import React from 'react'
import {connect} from 'react-redux'         
import { addItem } from '../../redux/cart/cart.actions'

function Card({item,addItem}) {
    const {name,details,price,img} = item;
    return (   
        <div className="m-5">        
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="px-4 py-2">
            <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">{name}</h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{details}</p>
        </div>

        <img className="object-cover w-full h-48 mt-2" src={img} alt="NIKE AIR" />

        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">{price[0]}</h1>
            <button onClick={()=>{addItem(item)}} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
        </div>
    </div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(Card)