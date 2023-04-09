import React from 'react'
import "./Tropic_cart.scss"
import screen from "../../../images/scren1.png"
import screen2 from "../../../images/scren2.png"
import scree3 from "../../../images/scren3.png"
import From2 from '../From2/From2'
function Tropic_cart() {
    return (
        <div>
            <div className='tropic'>
                <div className='tropic_carts'>
                    <div className="topic_cart">
                        <img src={screen} alt="" />
                        <h1>Tropical Plants + Herbs</h1>
                        <p>Our nuanced blends feature tropical fruits and veggies, packed with more vitamins, more antioxidants, and more fiber than the other leading brands. And, transparency is our love language – no added nasty preservatives, clean, easy to read labels, and plant-based PET bottles. Because…we love the planet just as much as we love you 💚</p>
                    </div>
                    <div className="topic_cart">
                        <img src={screen2} alt="" />
                        <h1>Functional Ingredients</h1>
                        <p>We don’t stop at nutrient-rich fruits and veggies because…we care about your health just as much as you do! Finding juices that provide a multitude of nutrients can be hard to find. We infuse functional ingredients like turmeric, maca root, ashwaghanda, ginger, and camu camu to give your body the extra boost it needs.</p>
                    </div>
                    <div className="topic_cart">
                        <img src={scree3} alt="" />
                        <h1>Just Made. Made Justly.®</h1>
                        <p>We may be hard at work blending and bottling, but if it wasn’t for our dedicated farmers, we wouldn’t be able to provide you with the highest quality juices. From vine to bottle, they ensure each crop is picked at peak freshness to deliver the most nutritious fruits and vegetables.</p>
                    </div>
                </div>
                <div className='tropic_btn'>
                    <button>Shop Now</button>

                </div>
            </div>
            <From2 />
        </div>
    )
}

export default Tropic_cart