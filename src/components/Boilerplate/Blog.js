import React from 'react'

export default function Fit({img,heading,content}) {
    console.log({content})
    return (
        <div class="my-10">
            
    <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img class="object-cover w-full h-auto" src={img} alt="Article" />

        <div class="p-6">
            <div>
                <p class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">{heading}</p>
                <p class="mt-2 text-md text-gray-600 dark:text-gray-400">
                {content.map((e)=>{return e.map((c)=>{return <li style={{"list-style-type":"none"}}>{c}</li>})})}
                </p>
            </div>

        </div>
    </div>
        </div>
    )
}
