import { Footer } from '../cmps/Footer';

export const KeepInTouch = () => {

    return (
        <div>

            <div className="keep-container">
                <h1 className="keep-title" >זמינים עבורכם להזמנת משלוחים ולכל נושא אחר</h1>


                <a className="" href="tel:972545422256">
                    <p className="p-keep">  055-2643155 חייגו
                        <i style={{ fontSize: '28px' }} aria-hidden="true" className="fa fa-phone"></i>
                    </p>
                </a>

                <a className="" href="https://wa.me/972545422256" target="_blank" rel="noreferrer noopener"><p className="p-keep">
                    כתבו לנו בוואטסאפ
                    <i className="fa fa-whatsapp btn" style={{ fontSize: "30px"}}></i>
                </p></a>


                <a className="" href="https://www.facebook.com/profile.php?id=100087373868637" target="_blank" rel="noreferrer noopener"><p className="p-keep">

                    עקבו אחרינו בפייסבוק
                    <i class="fa fa-facebook-square" style={{ fontSize: "xx-large" }} aria-hidden="true"></i>
                </p>
                </a>

                <a className="" href="https://www.instagram.com/munch_knafa" target="_blank" rel="noreferrer noopener" ><p className="p-keep">

                    עקבו אחרינו באינסטגרם

                    <i className="fa fa-instagram" style={{ fontSize: "xx-large" }}></i>
                </p>
                </a>



            </div>
            <div className="info keep-info">
                <p className="hours-title">:שעות פעילות</p>
                <p>17:00-23:00 <span>:'א'-ה</span></p>
                <p><span>23:00</span> : מוצ"ש<span> מצאת שבת ועד </span></p>
            </div>
            <Footer />
        </div>
    )

}