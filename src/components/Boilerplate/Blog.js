import React from 'react'

export default function Fit({img,heading,content}) {
    console.log({content})
    return (
        <div className="my-10">
            
    <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img className="object-cover w-full h-auto" src={img} alt="Article" />

        <div className="p-6">
            <div>
                <p className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">{heading}</p>
                <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
                {content.map((e)=>{return e.map((c)=>{return <li style={{"list-style-type":"none"}}>{c}</li>})})}
                </p>
            </div>

        </div>
    </div>
        </div>
    )
}
