
import slide1 from '../assets/home/01.jpg'
import slide2 from '../assets/home/02.jpg'
import slide3 from '../assets/home/03.png'
import slide4 from '../assets/home/04.jpg'
import slide5 from '../assets/home/05.png'
import slide6 from '../assets/home/06.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={slide1} />
                 
                </div>
              
                <div>
                    <img src={slide2} />
                 
                </div>
              
                <div>
                    <img src={slide3} />
                 
                </div>
              
                <div>
                    <img src={slide4} />
                 
                </div>
              
                <div>
                    <img src={slide5} />
                 
                </div>
                <div>
                    <img src={slide6} />
                 
                </div>
              
            </Carousel>
    );
};

export default Banner;