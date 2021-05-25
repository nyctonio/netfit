import React from 'react'
import Header from '../Boilerplate/Header'
import Footer from '../Boilerplate/Footer'
import Hero from '../Boilerplate/Hero'
import HeroFlip from '../Boilerplate/HeroFlip'
import ShopPreview from '../Boilerplate/ShopPreview'

export default function Home() {
    return (
       <>
       <Header/>
        <Hero/>
        <HeroFlip/>
        <ShopPreview/>
       <Footer/>
       </>
    )
}
