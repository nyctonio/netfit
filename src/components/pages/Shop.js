import React from 'react'
import Category from '../Boilerplate/Category'

const category=[
    ["Shoes","shoes","https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"],
    ["Shirt","shirt","https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"],
    ["Jeans","jeans","https://images.unsplash.com/photo-1542272604-787c3835535d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80"],
    ["Jackets","jackets","https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"],
    ["Watches","watches","https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80"],
    ["Sweaters","sweaters","https://images.unsplash.com/photo-1612636676503-77f496c96ef8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN3ZWF0ZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"]
]

export default function Cart() {
    return (
        <div>
            <div class="flex flex-wrap items-center justify-evenly">
            {category.map((e)=>{return <Category img={e[2]} link={e[1]} name={e[0]} />})}
            </div>
        </div>
    )
}