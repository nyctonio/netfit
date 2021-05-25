import React from 'react'
import {Link} from 'react-router-dom'

export default function ShopPreview() {
    return (
        <div>
            <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Find The Best Outfit for You</h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">In Our Store we can help you choosing the best for you checkout our store.</p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Authentic Products</span>
                </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Cash On Delivery</span>
                </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Fast Delivery</span>
                </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Easy Returns</span>
                </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Secured Payments</span>
                </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Live Tracking</span>
                </div>
            </div>
            </div>
            <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
               <Link to="/shop">View Our Shop</Link> 
            </button>
        </div>
        </section>
        </div>
    )
}
