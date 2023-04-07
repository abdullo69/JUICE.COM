import React from 'react'
import Footer from '../../Footer/Footer'
import "./Check.scss"
function Check() {
    return (
        <div>
            <div className='check'>
                <div className="check_navbar">
                    <p>
                        CHECK THIS OUT
                    </p>
                    <h1>We Get People Talking</h1>
                </div>


                <div className="check_carts">
                    <div className="check_cart">
                        <p>“"Sampled many different flavors and LOVED each one I tried. So excited for this brand to be at HEB. If you've never tried it, do it! Pick up a bottle -- you won't be disappointed."</p>
                        <h5>Cathlena C.</h5>
                    </div>
                    <div className="check_cart">
                        <p>"Delicious! Just tried the turmeric one. It's very refreshing with the right amount of sweetness. The flavor of the fruit is real and fresh! Looking forward to trying more."”</p>
                        <h5>Francia V.</h5>
                    </div>
                    <div className="check_cart">
                        <p>“"Tasted every juice and loved them. I'm a huge juicer myself and really liked the blends created here. You must try the papaya ginger!"”</p>
                        <h5>Bradley M.</h5>
                    </div>
                </div>

                <div className="check_btn"><button>Try if Yourself!</button></div>
            </div>
            <Footer />
        </div>
    )
}

export default Check