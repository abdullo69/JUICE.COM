
import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { ProductContext } from '../context/ProductContext'
import "./add_to_cart.scss"
import { FaTimes } from 'react-icons/fa'
import Rogstar from "../images/rogstar.jpg"
function Add_to_cart() {
    const { cart } = useContext(ProductContext)
    console.log(cart)

    function incCount() {
        setCount(count + 8)
    }
    const [count, setCount] = useState(8)

    function uCount() {
        if (count < 9) {
            setCount(count)
        } else {
            setCount(count - 8)
        }
    }
    return (
        <div>
            <Navbar />

            <div className="you">
                <p className='if'>If you are experiencing an issue with your order, please contact Customer Support at 855-456-JUST (5878) or hello@justmadejuice.com</p>
                <p className='per'>5¢ per bottle gives back to teachers in our farming communities.
                    Just Made. Made Justly.™</p>
            </div>

            <div className="box">
                <p style={{ width: "30%" }}>Product</p>
                <div className="box_p">
                    <p>Price</p>
                    <p>Quantily</p>
                    <p>Subtotal</p>
                </div>
            </div>
            {cart.map(product => (

                <div className='product'>
                    <div className='fa_img'>
                        <div className='fa_times'>
                            <FaTimes />
                        </div>

                        <img src={product.img} alt="" />

                        <div className="pro">
                            <h2>{product.title}</h2>
                        </div>


                    </div>
                    <div className="price_q">
                        {cart.map(product => (
                            <div>
                                <p>{product.price}</p>
                            </div>
                        ))}

                        <div className='pluss'>
                            <div onClick={uCount} className="plus">-</div>
                            <h1>{count}</h1>
                            <div onClick={incCount} className='plus'>+</div>
                        </div>
                        <p>$4.24</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Add_to_cart