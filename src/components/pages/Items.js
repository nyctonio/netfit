
// //    this is not used yet
// import React from 'react'
// import Header from '../Boilerplate/Header'
// import Footer from '../Boilerplate/Footer'
// import Card from '../Boilerplate/Card'

const items=[
	["Nike","The Best shoes in the market","₹1,280","https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"],
    ["Nike Sportswear","Nike Long Sleeve Mock Neck","₹1,299","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98c8725f-915d-41cf-8ec7-23596b286350/sportswear-t-shirt-Gc63tX.png"],
    ["Nike Citymade","Nike Short Sleeve Top","₹1,199","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3968f8aa-1293-41a9-ae71-51f3f5a8b158/sportswear-city-made-short-sleeve-top-qDX8Rn.png"],
    ["Nike Sportswear","Nike Long Sleeve Top","₹1,799","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3968f8aa-1293-41a9-ae71-51f3f5a8b158/sportswear-city-made-short-sleeve-top-qDX8Rn.png"],
    ["Nike Sportswear","Nike T-shirt","₹1,199","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3968f8aa-1293-41a9-ae71-51f3f5a8b158/sportswear-city-made-short-sleeve-top-qDX8Rn.png"],
    ["Nike Tech Fleece","Nike Full-Zip Hoodie","₹2,199","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a81feba0-6db4-4929-8ff2-8e4e16b2ef3c/sportswear-tech-fleece-hoodie-bxk5v8.png"],
    ["Nike Sportswear","Nike Full-Sleeve T-Shirt","₹1,199","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8924d935-0280-43d5-a7ad-cf6d719f15f2/sportswear-long-sleeve-t-shirt-mJ3CRn.png"],
    ["Nike Air Zoom","HIIT Class Shoes","₹10,199","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43d1c3b1-a0a4-4b2f-872c-5fda1c4e43c6/air-zoom-superrep-2-hiit-class-shoe-tKPcgR.png"],
    ["Nike Air SuperRep","HIIT Class Shoes","₹10,199","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9fbd6cd9-86f6-4132-9f1f-4eefc0a5248c/air-zoom-superrep-2-hiit-class-shoe-fG7bRN.png"],
    ["Nike Metcon","Training Shoes","₹12,199","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9fbd6cd9-86f6-4132-9f1f-4eefc0a5248c/air-zoom-superrep-2-hiit-class-shoe-fG7bRN.png"],
    ["Nike SpeedRep","Training Shoes","₹7,199","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/484587f3-175b-4bb4-812d-a3d89b36710a/speedrep-training-shoe-3XGMTG.png"],
    ["Nike SB","Full-On Skate China Shorts","₹3,199","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f77dc544-5697-4e0a-8902-3ecd39b7c606/sb-pull-on-skate-chino-shorts-lx4cZ3.png"],
    ["Nike Tech Fleece","Joggers","₹3,599","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cf83de3e-cb24-4d1f-9200-3ccce9dfbe63/tech-fleece-joggers-h1ntxv.png"],
    ["Nike Flex Stride","Brief-Lined Shorts","₹3,599","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38c5abdd-5913-473c-b689-c03352ee46bc/flex-stride-run-division-brief-lined-running-shorts-Jlhk29.png"],
    ["Nike Dri-Fit","Brief-Lined Shorts","₹3,599","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5f48313c-0447-424f-906d-3da2d71e7d11/dri-fit-basketball-shorts-WzV8TF.png"],
    ["Nike Dri-Fit","Football Trousers","₹3,799","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/52e10f35-65a5-4fbf-9992-f7e3b13d3923/sportswear-jersey-shorts-KmJNbM.png"],
    ["Nike Tech Fleece","Joggers","₹3,599","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cf83de3e-cb24-4d1f-9200-3ccce9dfbe63/tech-fleece-joggers-h1ntxv.png"]
]

// function Items() {
//     return (
//         <div>
//             <Header/>
//                 <div class="text-5xl mt-10 ml-10">Shop</div>
//                 <div class="flex flex-wrap pl-10">
//                     {items.map((e)=>{return <Card name={e[0]} details={e[1]} price={e[2]} img={e[3]}/>})}
//                 </div>
//             <Footer/>
//         </div>
//     )
// }