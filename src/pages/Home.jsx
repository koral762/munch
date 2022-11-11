import img1 from '../assets/imgs/1.jpg';
import img2 from '../assets/imgs/2.jpg';
import img3 from '../assets/imgs/3.jpg';
import img4 from '../assets/imgs/4.jpg';
import img5 from '../assets/imgs/5.jpg';
import img6 from '../assets/imgs/6.jpg';
import Carousel from '../cmps/Carousel';
import { Item } from '../cmps/components';
import { Footer } from '../cmps/Footer';

export const Home = () => {

    return (
        <div className="home-container">
            <p className="headline"><span>?!</span>מה במאנץ' שלך </p>
            <div className="imgsContainer">

                <Carousel autoPlay={true}	 title="Carousel">
                    <Item img={img5} />
                    <Item img={img2} style={{backgroundPositionY:'-131px'}} />
                    <Item img={img1} style={{backgroundPositionY:'-120px'}} />
                    <Item img={img4} />
                    <Item img={img6} style={{backgroundSize: 'contain'}} />
                    <Item img={img3} />
                </Carousel>

            </div>
            <a className="a-icon i-whatsapp" href="https://wa.me/972552643155" target="_blank" rel="noreferrer noopener"><p className="order-now">לחצו להזמנה</p></a>
            <div className="info">
            <p className="hours-title">:שעות פעילות</p>
            <p>17:00-23:00 <span>:'א'-ה</span></p>
            <p><span>23:00</span> : מוצ"ש<span> מצאת שבת ועד </span></p>
            </div>
            
            <Footer />
        </div>

    )

}