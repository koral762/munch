import myLogo from '../assets/imgs/logoBorder.jpg';
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
            <img src={myLogo} className="logo" width="100px" height="100px"></img>
            <p className="headline"><span>?!</span>מה במאנץ' שלך 6 </p>
            <div className="imgsContainer">


                <Carousel title="Carousel">
                    <Item img={img1} style={{backgroundPositionY:'-120px'}} />
                    <Item img={img4} />
                    <Item img={img6} style={{backgroundSize: 'contain'}} />
                    <Item img={img3} />
                    <Item img={img5} />
                    <Item img={img2} style={{backgroundPositionY:'-131px'}} />
                </Carousel>

            </div>
            <a className="a-icon i-whatsapp" href="https://wa.me/972507624411" target="_blank" rel="noreferrer noopener"><p className="order-now">הזמנת כנאפה</p></a>
            <div className="info">
            <p>:שעות פעילות</p>
            <p>17:00-23:00<span>'ב'-ה</span></p>
            <p>23:00 מצאת שבת ועד<span>מוצ"ש</span></p>
            </div>
            
            <Footer />
        </div>

    )

}
