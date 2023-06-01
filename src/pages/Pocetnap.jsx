import { Link } from 'react-router-dom';
import image1 from '../img/saturn.jpg';
import image2 from '../img/milkyway.jpg';


function Pocetna() {
    return(<div>
      <section className="company-section">
        <h1>The Unknown</h1>
        <div>
          <p>Did you ever dream of going into space.</p>
          <p>Did you ever dream of leaving the galaxy.</p>
          <p>Did you ever dream of visiting the galaxy far far away.</p>
          <p>If you are a dreamer</p>
          <p>If you want to see what no one else saw</p>
          <p>If you are an explorer</p>
          <p>Join us on a journey into the unknown</p>
          
        </div>
      </section>

      <section className="image-section">
        <div className="image-container">
          <img src={image1} alt="Image 1" style={{ width: '400px', height: '400px' }}/>
          <p>Does saturns ring intrigue you?</p>
        </div>
        <div className="image-container">
          <img src={image2}  alt="Image 2" style={{ width: '400px', height: '400px' }}/>
          <p>Do you perhaps want to travel all over the milky way?</p>
        </div>
      </section>
      <section>
      <div className="paragraphs">
        <p>Contact us and start your journey:</p>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
        <p>If you want to see more possibilities, click here:</p>
        <Link to="/destinations">
          <button>Explore Destinations</button>
        </Link>
      </div>
    </section>
    </div>
  )
}


export default Pocetna;