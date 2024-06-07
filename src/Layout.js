import React, { useState } from 'react';
import './App1.css';
import logo from './logo.png';
import Login from './Login.js'
const App = () => {
  const [page, setPage] = useState('home');

  const navigateTo = (pageName) => {
    setPage(pageName);
  };

  let content;
  switch (page) {
    case 'home':
      content = <Home />;
      break;
    case 'about':
      content = <About />;
      break;
    case 'contact':
      content = <Contact />;
      break;
    case 'login':
      content = <Login />;
      break;
    case 'book':
      content = <Book />;
      break;  
    default:
      content = <Home />;
  }

  return (
    <div>
      <nav>
        <ul className='head'>
        <li> <img src={logo} alt='killer miller caption miller' className='logo'></img></li>
          <li className='l' onClick={() => navigateTo('home')}>Home</li>
          <li className='l'onClick={() => navigateTo('about')}>About</li>
          <li className='l'onClick={() => navigateTo('book')}>Book cafe</li>
          <li className='l'onClick={() => navigateTo('contact')}>Contact</li>
          <li className='l'onClick={() => navigateTo('login')}>Login</li>
        </ul>
      </nav>
      {content}
    </div>
  );
};




const Book = () => (
  <div>
    <div className='showcase1' height="100px">
   
    <div class="grid-container">
    <div class="grid-item">
      cafe 1
      <button class="book-button">Book</button>
    </div>
    <div class="grid-item">
      cafe 2
      <button class="book-button">Book</button>
    </div>
    <div class="grid-item">
      cafe 3
      <button class="book-button">Book</button>
    </div>
    <div class="grid-item">
      cafe 4
      <button class="book-button">Book</button>
    </div>
    <div class="grid-item">
      cafe 5
      <button class="book-button">Book</button>
    </div>
    <div class="grid-item">
      cafe 6
      <button class="book-button">Book</button>
    </div>
  </div>


    </div>
    
  </div>
);



const Home = () => (
  <div>
    <div className='showcase'>
    <img src={logo} alt='killer miller caption miller' className='logo2'></img>
    <center>
    <p className='RES'>Rooster Restrodent</p></center>
    <div className='about'>
    <h1>About Restrodent</h1>
    <h4 >Welcome to Restrodent, where delectable flavors meet cozy ambiance to create unforgettable dining experiences.</h4>
    <h2>Our Story
</h2>
    <h4>Nestled in the heart of the bustling city, Restrodent was born out of a passion for culinary excellence and a desire to redefine the dining landscape. Established in [year], our journey began with a vision to craft dishes that not only tantalize the taste buds but also tell a story of tradition, innovation, and creativity.</h4>
  
  <h2>Our Philosophy</h2>  
  <h4>At Restrodent, we believe in the power of food to bring people together, to evoke memories, and to spark joy. Every dish that leaves our kitchen is a labor of love, meticulously prepared using the finest ingredients sourced from local farmers and producers. We strive to honor the rich tapestry of flavors from around the world while adding our own unique twist to each recipe.</h4>
  <h2>Our Cuisine</h2>
  <h4>Inspired by global flavors and local ingredients, our culinary team crafts dishes that are as visually stunning as they are delicious. From classic favorites to innovative creations, each dish is a reflection of our commitment to quality, creativity, and sustainability.</h4>
  <h2>Our Commitment</h2>
 <h4>At Restrodent, we are committed to sourcing the freshest, highest quality ingredients available. We work closely with local farmers, fishermen, and artisans to ensure that every dish we serve is a testament to the richness and diversity of our region's bounty.</h4>
  <h2>Our Team</h2>
  <h4>Behind every exceptional dining experience is a dedicated team of professionals who share a commitment to excellence. Led by our award-winning chefs, our culinary artisans bring passion, skill, and creativity to every plate. Our front-of-house staff is equally dedicated, ensuring that each guest is warmly welcomed and attentively cared for from the moment they step through our doors.</h4>
  <h2>Our Promise</h2>
  <h4>At Restrodent, we promise to deliver more than just a meal. Whether you're joining us for a casual brunch with friends, a romantic dinner for two, or a celebratory gathering with loved ones, we strive to create moments that linger long after the last bite is savored. From our kitchen to your table, we invite you to savor the flavors, share the laughter, and make memories that will last a lifetime.</h4>
  
  <h2>Join Us</h2>
  <h4>Whether you're looking for a romantic dinner for two, a casual meal with friends, or a special celebration with loved ones, we invite you to join us at Restrodent. Experience the magic of exceptional cuisine, warm hospitality, and unforgettable moments.</h4>
  <h2>Our Vision</h2>
  <h4>Our vision is to be more than just a restaurant – we aspire to be a destination where every meal is a celebration, every dish is a work of art, and every guest feels like family. We strive to create an atmosphere where culinary excellence meets warm hospitality, leaving a lasting impression on everyone who walks through our doors.</h4>
  
<center>
  <h1>Thank you for choosing Restrodent. <br></br>We look forward to serving you soon.</h1>
  </center></div>
  </div></div>
);



const About = () => (
  <div>
    <div className='showcase2'>
    <div className='about'>
    <h1>About Restrodent</h1>
    <h4 >Welcome to Restrodent, where delectable flavors meet cozy ambiance to create unforgettable dining experiences.</h4>
    <h2>Our Story
</h2>
    <h4>Nestled in the heart of the bustling city, Restrodent was born out of a passion for culinary excellence and a desire to redefine the dining landscape. Established in [year], our journey began with a vision to craft dishes that not only tantalize the taste buds but also tell a story of tradition, innovation, and creativity.</h4>
  
  <h2>Our Philosophy</h2>  
  <h4>At Restrodent, we believe in the power of food to bring people together, to evoke memories, and to spark joy. Every dish that leaves our kitchen is a labor of love, meticulously prepared using the finest ingredients sourced from local farmers and producers. We strive to honor the rich tapestry of flavors from around the world while adding our own unique twist to each recipe.</h4>
  <h2>Our Cuisine</h2>
  <h4>Inspired by global flavors and local ingredients, our culinary team crafts dishes that are as visually stunning as they are delicious. From classic favorites to innovative creations, each dish is a reflection of our commitment to quality, creativity, and sustainability.</h4>
  <h2>Our Commitment</h2>
 <h4>At Restrodent, we are committed to sourcing the freshest, highest quality ingredients available. We work closely with local farmers, fishermen, and artisans to ensure that every dish we serve is a testament to the richness and diversity of our region's bounty.</h4>
  <h2>Our Team</h2>
  <h4>Behind every exceptional dining experience is a dedicated team of professionals who share a commitment to excellence. Led by our award-winning chefs, our culinary artisans bring passion, skill, and creativity to every plate. Our front-of-house staff is equally dedicated, ensuring that each guest is warmly welcomed and attentively cared for from the moment they step through our doors.</h4>
  <h2>Our Promise</h2>
  <h4>At Restrodent, we promise to deliver more than just a meal. Whether you're joining us for a casual brunch with friends, a romantic dinner for two, or a celebratory gathering with loved ones, we strive to create moments that linger long after the last bite is savored. From our kitchen to your table, we invite you to savor the flavors, share the laughter, and make memories that will last a lifetime.</h4>
  
  <h2>Join Us</h2>
  <h4>Whether you're looking for a romantic dinner for two, a casual meal with friends, or a special celebration with loved ones, we invite you to join us at Restrodent. Experience the magic of exceptional cuisine, warm hospitality, and unforgettable moments.</h4>
  <h2>Our Vision</h2>
  <h4>Our vision is to be more than just a restaurant – we aspire to be a destination where every meal is a celebration, every dish is a work of art, and every guest feels like family. We strive to create an atmosphere where culinary excellence meets warm hospitality, leaving a lasting impression on everyone who walks through our doors.</h4>
  
<center>
  <h1>Thank you for choosing Restrodent. <br></br>We look forward to serving you soon.</h1>
  </center></div></div>
  </div>
);

const Contact = () => (
  <div>
    <div className='showcase2'>
    <div className='about'>
    
      <h1>Contact Restrodent</h1>
      <iframe
      align="right"
      title="Location Map"
      width="600"
      height="450"
      frameborder="0"
      style={{ border: 0 }}
      src="https://www.google.com/maps/place/Rooster+Restaurant/@11.3999015,77.6447921,17z/data=!4m6!3m5!1s0x3ba96bc7a427e4df:0x923964b19f7d1475!8m2!3d11.3998963!4d77.647367!16s%2Fg%2F11kbz2j6kl?entry=ttu"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
      <h2>Location</h2>
      <h4>📍Utthukadu,Bus Stop,<br /> Chithode, <br />Tamil Nadu, <br />India</h4>
      <h2>Hours of Operation</h2>
      <h4>🕒 Monday - Friday: 11:00 AM - 10:00 PM<br />
🕒 Saturday - Sunday: 10:00 AM - 11:00 PM</h4>
<h2>Contact Information</h2>
<h4>📞 Phone: 8838261676<br />
📧 Email: info@restdrodent.com<br />
📱 Instagram: @restdrodent<br />
💻 Website: www.restdrodent.com</h4>

<h2>Reservations</h2>
<h4>For reservations, please call us at [Your Phone Number] or use our online booking system available on our website.</h4>
<h2>Private Events & Catering</h2>
<h4>Planning a special event or celebration? Let Restrodent host your next private event or provide catering services tailored to your needs. Contact our events team at [Your Email Address] for more information.</h4>
   <h2>Feedback & Inquiries</h2>
   <h4>We value your feedback and are here to assist you with any inquiries you may have. Please don't hesitate to reach out to us via phone, email, or social media.</h4>
   <h2>Stay Connected
</h2>
<h4>Follow us on Instagram and Facebook to stay up-to-date with our latest menu offerings, special events, and promotions.</h4>
   
    </div>
  </div></div>
);

export default App;
