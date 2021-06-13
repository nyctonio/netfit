import React from 'react'

export default function Cart() {
    return (
        <div>
            <div id="c" class="p-10 mt-5 mb-10">
            <div class="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div class="hidden bg-cover lg:block lg:w-1/2" style={{"background-image":"url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')"}}>
            </div>
        
            <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
                
                <h2 class="text-2xl font-semibold text-center text-gray-700 dark:text-white">Netfit</h2>
                <p class="text-xl text-center text-gray-600 dark:text-gray-200">Lets Sign Up!</p>
                <div class="flex items-center justify-between mt-4">
                    <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                    <p class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">Sign Up With You Email</p>
                    <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>

                <div class="mt-4">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
                    <input id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email"/>
                </div>

                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
                    </div>

                    <input id="loggingPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password"/>
                </div>

                <div class="mt-8">
                    <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Sign Up
                    </button>
                </div>
                
            </div>
            </div>
            </div>    
        </div>
    )
}
