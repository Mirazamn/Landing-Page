import './style.css'
import '../../components/variable.css'
import '../../index.css'

// Impoert Images
import {AirBnb, Google, Amazon, Microsoft, Fedex, Hubspot
} from '../../asstes/plan'

function Partners() {
    return (
        <>
        <section className="partners">
            <hr />
            <div className="container flex">
                <img data-aos="fade-up" data-aos-delay="100" src={AirBnb} alt="" />
                <img data-aos="fade-up" data-aos-delay="100" src={Google} alt="" />
                <img data-aos="fade-up" data-aos-delay="200" src={Amazon} alt="" />
                <img data-aos="fade-up" data-aos-delay="200" src={Microsoft} alt="" />
                <img data-aos="fade-up" data-aos-delay="300" src={Fedex} alt="" />
                <img data-aos="fade-up" data-aos-delay="300" src={Hubspot} alt="" />
            </div>
            <hr />
        </section>
        </>
    )
}


export default Partners;