import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../assets/slider/Blue and Yellow Modern Give Away Banner Landscape.png'
import slider4 from '../../../assets/slider/Blue Orange World Pi Day Banner.png'
import slider3 from '../../../assets/slider/Green and White Illustrative Fishing Contest Banner.png'
import slider2 from '../../../assets/slider/Brown Simple Vlogger YouTube Banner.png'

const Slider = () => {
    return (
        <div className="">
            <Carousel className="text-center dark:text-black dark:bg-slate-700">
                <div className="">
                    <img src={slider1} />
                </div>
                <div className="">
                    <img src={slider2} />
                </div>
                <div className="">
                    <img src={slider3} />
                </div>
                <div className="">
                    <img src={slider4} />
                </div>
            </Carousel>

        </div>
    );
};

export default Slider;