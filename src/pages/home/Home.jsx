import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout"
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";

import { addToCart } from "../../redux/cartSlice";
import { deleteFromCart } from "../../redux/cartSlice";

function Home(){
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart)

    console.log(cartItem)

    const addCart = () => {
        dispatch(addToCart("shirt"))
    }

    const deleteCart = () => {
        dispatch(deleteFromCart("shirt"))
    }

    return(
        <Layout>
            <button className="bg-gray-400 p-5" onClick={addCart}>add</button>
            <button className="bg-gray-400 p-5" onClick={deleteCart}>delete</button>
            <HeroSection/>
            <Filter/>
            <ProductCard/>
            <Track/>
            <Testimonial/>
        </Layout>
    )
}

export default Home