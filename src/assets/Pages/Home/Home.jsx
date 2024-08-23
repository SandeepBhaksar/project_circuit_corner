import React from 'react';
import Navbar from '../NavBar/Navbar';
import cc_logo from '../../images/others/cc_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'; 
import { faFacebookF, faXTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import free_shipping from '../../images/others/free shipping.png';
import save_money from '../../images/others/save money.png';
import order_online from '../../images/others/order online.png';
import promotion from '../../images/others/Promotion.png';
import exchange_offer from '../../images/others/Exchange Offer.png';
import support from '../../images/others/Support.png';
import background_image from '../../images/Components/background_image.png';
import hp_victus_01 from '../../images/Components/HP Victus/hp_victus_01.png';
import hp_victus_02 from '../../images/Components/HP Victus 2/hp_victus_02.png';
import hp_pavillion from '../../images/Components/HP Pavillion/hp_pavillion.png';
import asus_tuf_FX506HE_HN382W from '../../images/Components/ASUS Tuf Gaming/asus_tuf_01.png';
import asus_tuf_FX706HF_HX018W from '../../images/Components/ASUS Tuf Gaming 02/asus_tuf_02.png';
import acer_nitro_5 from '../../images/Components/Acer Nitro 5/acer_nitro_5.png';
import dell_g15 from '../../images/Components/Dell G15-5530/dell_g15.png';
import hp_omen from '../../images/Components/Hp Omen/hp_omen.png';
import evoblaze_mouse from '../../images/Components/Accessories/EvoFoxBlazeMouse.png';
import evoblaze_keyboard from '../../images/Components/Accessories/EvoFoxDeathrayKeyboard.png';
import redgear_controller from '../../images/Components/Accessories/redgear_controller.png';
import ant_keyboard_MK1400pro from '../../images/Components/Accessories/Ant_Esports_MK1400_Pro.png';
import dyno_laptop_cooler from '../../images/Components/Accessories/dyazo_laptop_cooler.png';
import lapcare_lgm201 from '../../images/Components/Accessories/lapcare_lgm201.png';
import gsh_onehand_keyboardcombo from '../../images/Components/Accessories/gsh_onehand_keyboardcombo.png';
import ant_racing_steering from '../../images/Components/Accessories/ant_racing_steering.png';
import appstore from '../../images/others/asngp.png';
import visa from '../../images/others/visa.png';
import './Home.css'; 

function Home() {
    return (
        <div className="container">
            <div className="background-image"></div>
            <div className="welcome-note">
                <section id="Heroffer">
                    <h3>Trade in Offer</h3>
                    <h2>Super Value deals</h2>
                    <h1>On all our products</h1>
                    <p>Save more with coupons & up to 70% off! </p>
                    <button>Shop Now</button>
                </section>
            </div>

            <div className="banner">
                <section id="feature">
                    <div className="fe-box">
                        <img src={free_shipping} alt="" />
                        <h6>Free Shipping</h6>
                    </div>

                    <div className="fe-box">
                        <img src={save_money} alt="" />
                        <h6>Save Money</h6>
                    </div>

                    <div className="fe-box">
                        <img src={order_online} alt="" />
                        <h6>Order Online</h6>
                    </div>

                    <div className="fe-box">
                        <img src={promotion} alt="" />
                        <h6>Promotion</h6>
                    </div>

                    <div className="fe-box">
                        <img src={exchange_offer} alt="" />
                        <h6>Exchange Offer</h6>
                    </div>

                    <div className="fe-box">
                        <img src={support} alt="" />
                        <h6>24/7 Customer Support</h6>
                    </div>
                </section>

                <section id="product1" className="section-p1">
                    <h2>Featured Products</h2>
                    <p>Office and Gaming Collection</p>
                    <div className="pro-container">
                        <div className="pro">
                            <img src={hp_victus_01} alt="" />
                            <div className="des">
                                <span>HP</span>
                                <h5>HP Victus Gaming Laptop, 12th Gen Intel Core i5-12450H, 4GB RTX 3050 GPU 15.6" FHD IPS 144Hz (16GB ddr4, 512GB SSD) fa0666TX</h5>
                                <h4>Rs.65,480</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={hp_victus_02} alt="" />
                            <div className="des">
                                <span>HP</span>
                                <h5>HP Victus Gaming Laptop, 12th Gen AMD Ryzen 5 5600H , 4GB RTX 3050 GPU, 15.6" FHD IPS 144Hz (8GB ddr4, 512GB SSD) fb0050AX</h5>
                                <h4>Rs.55,990</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={hp_pavillion} alt="" />
                            <div className="des">
                                <span>HP</span>
                                <h5>HP Pavilion Gaming 11th Gen Intel Core i5 15.6" FHD Gaming Laptop, RTX 3050 4GB Graphics(8GB RAM/512GB SSD//144 Hz), 15-dk2012TX</h5>
                                <h4>Rs.65,990</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={hp_omen} alt="" />
                            <div className="des">
                                <span>HP</span>
                                <h5>HP HP Omen Gaming Laptop, AMD Ryzen™ 7 7840HS, 16.1" FHD,Micro-Edge, 16GB RAM,512GB SSD, NVIDIA GeForce RTX(4060 8GB GDDR6) 16-xf0059AX</h5>
                                <h4>Rs.1,11,990</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={asus_tuf_FX506HE_HN382W} alt="" />
                            <div className="des">
                                <span>ASUS</span>
                                <h5>ASUS TUF Gaming F15, 15.6" FHD 144Hz, Intel Core i7-11800H 11th Gen, 4GB NVIDIA GeForce RTX 3050 Ti, (16GB/512GB SSD), FX506HE-HN382W</h5>
                                <h4>Rs.68,990</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={asus_tuf_FX706HF_HX018W} alt="" />
                            <div className="des">
                                <span>ASUS</span>
                                <h5>ASUS TUF Gaming F17, Intel Core i5-11400H 11th Gen, 17.3"FHD 144Hz, 4GB NVIDIA GeForce RTX 2050 (8GB/512GB SSD), FX706HF-HX018W</h5>
                                <h4>Rs.68,990</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={acer_nitro_5} alt="" />
                            <div className="des">
                                <span>Acer</span>
                                <h5>Acer Nitro 5 Gaming 12th Gen Intel Core i5-12500H, 15.6" FHD 144Hz Display, NVIDIA GeForce RTX 3050 Graphics, (8GB/512GB SSD), AN515-58</h5>
                                <h4>Rs.68,990</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={dell_g15} alt="" />
                            <div className="des">
                                <span>Dell</span>
                                <h5>Dell G15-5530 Gaming Laptop, Intel Core i5-13450HX Processor, 16GB DDR5, 1TB, NVIDIA RTX 3050,6GB GDDR6, 15.6" FHD 120Hz</h5>
                                <h4>Rs.68,990</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                    </div>
                </section>

                <section id="banner" className="section-m1">
                    <h4>Repair Services</h4>
                    <h2>Upto <span>70% off</span> - All Laptops and Accessories</h2>
                    <button className="normal">Explore More</button>
                </section>

                <section id="product1" className="section-p1">
                    <h2>New Arrivals</h2>
                    <p>Gaming Accessories</p>
                    <div className="pro-container">
                        <div className="pro">
                            <img src={evoblaze_mouse} alt="" />
                            <div className="des">
                                <span>EvoFox</span>
                                <h5>EvoFox Blaze Programmable Gaming Mouse with 500Hz Polling Rate | Gaming Grade Sensitive DPI 200 - 12800 | RGB lights</h5>
                                <h4>Rs.638</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={evoblaze_keyboard} alt="" />
                            <div className="des">
                                <span>EvoFox</span>
                                <h5>EvoFox Warhammer Full Size Gaming Keyboard with Breathing Effect LED Backlit | Metal Top | Floating Keycaps | 19 Anti Ghosting Keys | Windows Lock Key | Braided Cable | (Black)</h5>
                                <h4>Rs.1,099</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={redgear_controller} alt="" />
                            <div className="des">
                                <span>Readgear</span>
                                <h5>Redgear Pro Wireless Gamepad with 2.4GHz Wireless Technology, Integrated Dual Intensity Motor, Illuminated Keys for PC(Compatible with Windows 7/8/8.1/10 only)</h5>
                                <h4>Rs.1,899</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={ant_keyboard_MK1400pro} alt="" />
                            <div className="des">
                                <span>ANT</span>
                                <h5>Ant Esports MK1400 Pro Backlit Membrane Wired Gaming Keyboard with Mixed Colour Lighting, White & Black Keycaps, Double Injection Key Caps - Black</h5>
                                <h4>Rs.579</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={dyno_laptop_cooler} alt="" />
                            <div className="des">
                                <span>DYAZO</span>
                                <h5>Dyazo Gaming Laptop Cooler/Cooling pad with Dual USB Powered Fan Compatible with All Notebooks 11.6, 13.3, 15.6, 17 inch with Real RGB Rim Lights (Black)</h5>
                                <h4>Rs.1,499</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={lapcare_lgm201} alt="" />
                            <div className="des">
                                <span>LAPCARE</span>
                                <h5>LAPCARE Champ Voyager 7200 DPI Optical Sensor Gaming Mouse with Dazzling RGB Light | Marco 7G Keys | 5m Clicks | ABS Material | Rubber Oil + Laser Carving (LGM 201)</h5>
                                <h4>Rs.749</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={gsh_onehand_keyboardcombo} alt="" />
                            <div className="des">
                                <span>GSH</span>
                                <h5>GSH One Hand Non Mechanical Gaming Keyboard and Backlit Mouse Combo, USB Wired Rainbow Letters Glow Single Hand Mechanical Keyboard,Gaming Keyboard Set for Laptop PC Game and Work (Combo)</h5>
                                <h4>Rs.3,999</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                        <div className="pro">
                            <img src={ant_racing_steering} alt="" />
                            <div className="des">
                                <span>ANT</span>
                                <h5>Ant E Sports Gw170 Competition Racing Steering Wheel With Universal Usb Port And With Pedal, Suitable For Pc, Ps3, Ps4, Xbox One, Xbox Series S&X, Nintendo Switch And Android Tv Red Black</h5>
                                <h4>Rs.4,399</h4>
                            </div>
                            <a href="#"><i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBagShopping} /></i></a>
                        </div>
                    </div>
                </section>

                <section id='newsletter' className='section-p1'>
                    <div className="newstext">
                        <h4>Sign Up for Newsletter</h4>
                        <p>Get E-mail Update About Our Latest Offer and Special Offers.</p>
                    </div>
                    <div className="contactinfo">
                        <input type="text" placeholder='Your E-mail Address' />
                        <button className='normal'>SignUp</button>
                    </div>
                </section>

                <footer>
    <div className="contact-section">
        <img className='contact-logo' src={cc_logo} alt="Company-logo" />
        <h4>Contact</h4>
        <p><strong>Address: </strong> #242, MG Road, Chickmagaluru - 577101</p>
        <p><strong>Phone: </strong> +91 7204774695 , +91 8073414255 </p>
        <h4>Follow Us</h4>
        <div className="contact-icons-container">
            <a href="https://www.facebook.com/ssandeepachari"><i className="contact-icons"><FontAwesomeIcon icon={faFacebookF} size='2x' /></i></a>
            <a href="#"><i className="contact-icons"><FontAwesomeIcon icon={faInstagram} size='2x' /></i></a>
            <a href="#"><i className="contact-icons"><FontAwesomeIcon icon={faYoutube} size='2x' /></i></a>
            <a href="#"><i className="contact-icons"><FontAwesomeIcon icon={faXTwitter} size='2x' /></i></a>
            <a href="#"><i className="contact-icons"><FontAwesomeIcon icon={faPinterest} size='2x' /></i></a>
        </div>
    </div>
    
    <div className="section-o1">
        <h4>About</h4>
        <a href="">About Us</a>
        <a href="">Delivery Information</a>
        <a href="">Privacy Policy</a>
        <a href="">Terms and Conditions</a>
        <a href="">Contact Us</a>
    </div>
    
    <div className="section-o1">
        <h4>My Account</h4>
        <a href="">Sign In</a>
        <a href="">View Cart</a>
        <a href="">My Wishlist</a>
        <a href="">Track My Order</a>
        <a href="">Help</a>
    </div>
    
    <div className="install-section">
        <h4>Install App</h4>
        <p>From Appstore or Google Play</p>
        <div className="row">
            <img src={appstore} alt="Appstore" />
            <p>Secure Payment gateways</p>
            <img src={visa} alt="" />
        </div>
    </div>

    <div className="copyright">
            <p>© 2021, Tech2 etc - React E-Commerce Template</p>
        </div>
</footer>

            </div>
        </div>
    );
}

export default Home;
