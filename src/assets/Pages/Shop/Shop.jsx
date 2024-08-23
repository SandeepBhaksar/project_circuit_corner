import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
import acer_al1541 from '../../images/Components/Accessories/acer-AL15-51.png';
import Lenovo_ThinkPad_E14 from '../../images/Components/Accessories/Lenovo ThinkPad E14.png';
import lenovo_v15_g2 from '../../images/Components/Accessories/Lenovo V15 G2.png';
import asus_X1605VAMB947WS from '../../images/Components/Accessories/asus_vivobook16_X1605VA-MB947WS.png';
import lenovoIdeaPadSlim82R400ERIN from '../../images/Components/Accessories/lenovoIdeaPadSlim82R400ERIN.png'
import AsusVivobook15_BR011W from '../../images/Components/Accessories/AsusVivobook15BR011W.png';
import './Shop.css';

const Shop = () => {
  const products = [
    {
      brand: 'HP',
      name: 'HP Victus Gaming Laptop, 12th Gen Intel Core i5-12450H, 4GB RTX 3050 GPU 15.6" FHD IPS 144Hz (16GB ddr4, 512GB SSD) fa0666TX',
      price: 'Rs.65,480',
      img: hp_victus_01,
      category: 'Laptop',
    },
    {
      brand: 'HP',
      name: 'HP Victus Gaming Laptop, 12th Gen AMD Ryzen 5 5600H , 4GB RTX 3050 GPU, 15.6" FHD IPS 144Hz (8GB ddr4, 512GB SSD) fb0050AX',
      price: 'Rs.55,990',
      img: hp_victus_02,
      category: 'Laptop',
    },
    {
      brand: 'HP',
      name: 'HP Pavilion Gaming 11th Gen Intel Core i5 15.6" FHD Gaming Laptop, RTX 3050 4GB Graphics(8GB RAM/512GB SSD//144 Hz), 15-dk2012TX',
      price: 'Rs.65,990',
      img: hp_pavillion,
      category: 'Laptop',
    },
    {
      brand: 'HP',
      name: 'HP HP Omen Gaming Laptop, AMD Ryzen™ 7 7840HS, 16.1" FHD,Micro-Edge, 16GB RAM,512GB SSD, NVIDIA GeForce RTX(4060 8GB GDDR6) 16-xf0059AX',
      price: 'Rs.1,11,990',
      img: hp_omen,
      category: 'Laptop',
    },
    {
      brand: 'ASUS',
      name: 'ASUS TUF Gaming F15, 15.6" FHD 144Hz, Intel Core i7-11800H 11th Gen, 4GB NVIDIA GeForce RTX 3050 Ti, (16GB/512GB SSD), FX506HE-HN382W',
      price: 'Rs.68,990',
      img: asus_tuf_FX506HE_HN382W,
      category: 'Laptop',
    },
    {
      brand: 'ASUS',
      name: 'ASUS TUF Gaming F17, Intel Core i5-11400H 11th Gen, 17.3"FHD 144Hz, 4GB NVIDIA GeForce RTX 2050 (8GB/512GB SSD), FX706HF-HX018W',
      price: 'Rs.68,990',
      img: asus_tuf_FX706HF_HX018W,
      category: 'Laptop',
    },
    {
      brand: 'Acer',
      name: 'Acer Nitro 5 Gaming 12th Gen Intel Core i5-12500H, 15.6" FHD 144Hz Display, NVIDIA GeForce RTX 3050 Graphics, (8GB/512GB SSD), AN515-58',
      price: 'Rs.68,990',
      img: acer_nitro_5,
      category: 'Laptop',
    },
    {
      brand: 'Dell',
      name: 'Dell G15-5530 Gaming Laptop, Intel Core i5-13450HX Processor, 16GB DDR5, 1TB, NVIDIA RTX 3050,6GB GDDR6, 15.6" FHD 120Hz',
      price: 'Rs.68,990',
      img: dell_g15,
      category: 'Laptop',
    },
   {
      brand: 'EvoFox',
      name: 'EvoFox Blaze Programmable Gaming Mouse with 500Hz Polling Rate | Gaming Grade Sensitive DPI 200 - 12800 | RGB lights',
      price: 'Rs.638',
      img: evoblaze_mouse,
      category: 'Accessories',
    },
   {
      brand: 'EvoFox',
      name: 'EvoFox Warhammer Full Size Gaming Keyboard with Breathing Effect LED Backlit | Metal Top | Floating Keycaps | 19 Anti Ghosting Keys | Windows Lock Key | Braided Cable | (Black)',
      price: 'Rs.1,099',
      img: evoblaze_keyboard,
      category: 'Accessories',
    },
   {
      brand: 'REDGEAR',
      name: 'Dell G15-5530 Gaming Laptop, Intel Core i5-13450HX Processor, 16GB DDR5, 1TB, NVIDIA RTX 3050,6GB GDDR6, 15.6" FHD 120Hz',
      price: 'Rs.68,990',
      img: redgear_controller,
      category: 'Accessories',
    },
   {
      brand: 'ANT',
      name: 'Dell G15-5530 Gaming Laptop, Intel Core i5-13450HX Processor, 16GB DDR5, 1TB, NVIDIA RTX 3050,6GB GDDR6, 15.6" FHD 120Hz',
      price: 'Rs.68,990',
      img: ant_keyboard_MK1400pro,
      category: 'Accessories',
    },
   {
      brand: 'DYNO',
      name: 'Dell G15-5530 Gaming Laptop, Intel Core i5-13450HX Processor, 16GB DDR5, 1TB, NVIDIA RTX 3050,6GB GDDR6, 15.6" FHD 120Hz',
      price: 'Rs.68,990',
      img: dyno_laptop_cooler,
      category: 'Accessories',
    },
   {
      brand: 'Lapcare',
      name: 'Dell G15-5530 Gaming Laptop, Intel Core i5-13450HX Processor, 16GB DDR5, 1TB, NVIDIA RTX 3050,6GB GDDR6, 15.6" FHD 120Hz',
      price: 'Rs.68,990',
      img: lapcare_lgm201,
      category: 'Accessories',
    },
   {
      brand: 'GSH',
      name: 'Dell G15-5530 Gaming Laptop, Intel Core i5-13450HX Processor, 16GB DDR5, 1TB, NVIDIA RTX 3050,6GB GDDR6, 15.6" FHD 120Hz',
      price: 'Rs.68,990',
      img: gsh_onehand_keyboardcombo,
      category: 'Accessories',
    },
   {
      brand: 'ANT',
      name: 'Dell G15-5530 Gaming Laptop, Intel Core i5-13450HX Processor, 16GB DDR5, 1TB, NVIDIA RTX 3050,6GB GDDR6, 15.6" FHD 120Hz',
      price: 'Rs.68,990',
      img: ant_racing_steering,
      category: 'Accessories',
    },
   {
      brand: 'Acer',
      name: 'Acer Aspire Lite AMD Ryzen 5 5500U Premium Thin and Light Laptop (16 GB RAM/512 GB SSD/Windows 11 Home) AL15-41, 39.62 cm (15.6") Full HD Display, Metal Body, Steel Gray, 1.59 KG',
      price: 'Rs.36,990',
      img: acer_al1541,
      category: 'Laptop',
    },
   {
      brand: 'Lenovo',
      name: 'Lenovo ThinkPad E14 AMD Ryzen 5 7530U 14" (35.56 cm) WUXGA IPS 300 Nits Thin and Light Laptop (8GB RAM/512GB SSD/Windows 11 Home/AMD Radeon Graphics/Backlit Keyboard/FPR/Black/1.41 kg), 21JRS00T00',
      price: 'Rs.47,990',
      img: Lenovo_ThinkPad_E14,
      category: 'Laptop',
    },
   {
      brand: 'Lenovo',
      name: 'Lenovo V15 G2 Laptop, 15.6" FHD Display, Free Microsoft Office 2021 with Lifetime License, Dual-core Intel Celeron N4500, 8GB RAM, 256GB SSD, Ethernet, 6.5 Hours Battery Life, Windows 11 , Black',
      price: 'Rs.24,980',
      img: lenovo_v15_g2,
      category: 'Laptop',
    },
   {
      brand: 'ASUS',
      name: 'ASUS Vivobook 16 (2023)Thin & Light Laptop,Intel Core i9-13900H 13th Gen, 16" (40.64 cm) FHD+(16GB RAM/512GB SSD/Intel Iris Xe/Win 11/Office 2021/Backlit KB/Fingerprint/Black/1.88 kg) X1605VA-MB947WS',
      price: 'Rs.84,990',
      img: asus_X1605VAMB947WS,
      category: 'Laptop',
    },
   {
      brand: 'Asus',
      name: 'ASUS VivoBook 15 (2021) Thin and Light Laptop, Dual Core Intel Celeron N4020, 15.6-inch (39.62 cm) HD, (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg), X515MA-BR011W',
      price: 'Rs.21,530',
      img: AsusVivobook15_BR011W,
      category: 'Laptop',
    },
   {
      brand: 'Lenovo',
      name: 'Lenovo IdeaPad Slim 1 AMD Ryzen 5 5500U 15.6" HD Thin and Light Laptop (16GB/512GB SSD/Windows 11 Home/MS Office 2021/1Yr ADP Free/Cloud Grey/1.61Kg), 82R400ERIN',
      price: 'Rs.38,990',
      img: lenovoIdeaPadSlim82R400ERIN,
      category: 'Laptop',
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    filterProducts();
  }, [selectedBrand, selectedCategory]);

  const filterProducts = () => {
    let filtered = products;
    if (selectedBrand !== 'All') {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }
    setFilteredProducts(filtered);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <div className="offer-banner">
        <h2>#gaminghub</h2>
        <p>Save more with coupons & up to 30% off!!</p>
      </div>
      <div className="filter-container">
        <div className="filter-dropdown">
          <label htmlFor="brand">Filter by Brand:</label>
          <select id="brand" value={selectedBrand} onChange={handleBrandChange}>
            <option value="All">All</option>
            <option value="HP">HP</option>
            <option value="ASUS">ASUS</option>
            <option value="Acer">Acer</option>
            <option value="Dell">Dell</option>
          </select>
        </div>
        <div className="filter-dropdown">
          <label htmlFor="category">Filter by Category:</label>
          <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="Laptop">Laptop</option>
            <option value="Monitor">Monitor</option>
            <option value="Computer">Computer</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
      </div>
      <div id="product1">
        <div className="pro-container">
          {filteredProducts.map((product, index) => (
            <div className="pro" key={index}>
              <img src={product.img} alt={product.name} />
              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.name}</h5>
                <h4>{product.price}</h4>
              </div>
              <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Shop;
