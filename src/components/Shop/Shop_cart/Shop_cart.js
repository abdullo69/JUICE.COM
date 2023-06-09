import React from 'react'
import "./Shop_cart.scss"
import { AiFillEye } from "react-icons/ai"
import { BiShoppingBag } from "react-icons/bi"
import shop from '../../../Static-data/StaticDataShop'
import Footer from "../../Footer/Footer"
import { Link } from 'react-router-dom'
function Shop_cart({ product2 }) {
    console.log(product2);
    return (
        <div>
            <div className="shop_carts">
                {
                    shop.map((shop, inx) => {
                        return (
                            <Link to={`/product/${(inx + 1)}`} state={shop} className="link">
                                <div className="shop_cart">
                                    <div className="shop_img">
                                        <img src={shop.img} alt="" />
                                    </div>
                                    <div className="shop_text">
                                        <h1>{shop.title}</h1>
                                        <p>{shop.price}</p>
                                    </div>

                                    <div className="card_icon">
                                        <h3><BiShoppingBag style={{ color: "aqua" }} /> Read More</h3>
                                        <h3 style={{ marginLeft: "30px" }}><AiFillEye color='aqua' /> Quick View</h3>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
            <Footer />
        </div>
    )
}

export default Shop_cart