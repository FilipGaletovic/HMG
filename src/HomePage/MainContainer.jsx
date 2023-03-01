import React from 'react'
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import { ProductInfo, SectionThree} from './componentExport'
import Product1 from '../assets/Product1.jpg'
import Product2 from '../assets/Product2.jpg'
import Product3 from '../assets/Product3.jpg'
import first_p_image from '../assets/first-p-image.png'
import section_one_image from '../assets/section-one-image.jpg'
import section_two_image from '../assets/section-two-image.jpg'
import '../CSS/HomeCSS/MainContainer.css'





const MainContainer = () => {
  

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])
  
    let ProductText1 = "Product1";
    let ProductText2 = "Product2";
    let ProductText3 = "Product3";

    return (
   
        
    <>
        <section className='section-one'>
        
            <div className='Container-One'>
                <div className="section-one__p_container">
                <div className='first-p' data-aos="fade-right" data-aos-once="true">
                    <h2>Quality-Precision-Authentic</h2>
                    <p className='first-p1'>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Minus quos ullam explicabo sed
                         consequatur sequi quis maxime libero optio nisi? Mollitia f
                         uga tempora molestiae <br /> <br /></p><p className='first-p2'> adipisci repellendus doloribus molestias 
                         excepturi hic. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Accusamus facilis illum at blanditiis, minus, 
                         temporibus error eius eveniet ut optio enim repellat maiores 
                         pariatur qui soluta. Adipisci qui voluptas maiores.</p>
                         
                </div>
                </div>

            <span className='section-one__underline'></span>
                <div className='section-one__image'>
                    <img src={section_one_image} alt="" data-aos="fade" data-aos-once="true"/>
                </div>
            
            </div>
            </section>


            <div className="scroll-bar" id='progress'>

            </div>

            <section className="section-two" id='section-two_id'>
                <img src={section_two_image} alt="" data-aos="fade" data-aos-once="true"/>
                <div className="section-two__text" data-aos="fade-left" data-aos-once="true">
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,</h3> <br /> <br /><p> numquam accusantium perferendis repellat quos soluta qui totam consectetur natus magni tempora unde quibusdam, amet distinctio quis nostrum praesentium facilis veritatis consequuntur. Placeat libero nam in. Laborum, repudiandae. Beatae tenetur iste error doloribus sequi repellat, rem laboriosam optio exercitationem sed obcaecati hic doloremque voluptatem dolores, ullam quo itaque suscipit quod quam id fugiat quasi recusandae odio? Id commodi, </p>

                    <button className='section-two__button'>Order here</button>
                </div>
            </section>


            <section className='section-three'>
            </section>
           
            <SectionThree />

            <section className='section-four'>
                <div className='Container-Four'>
                <div className='second-p'>
                    <h2>Pre-Modified Products</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Minus quos ullam explicabo sed
                         consequatur sequi quis maxime libero optio nisi? Mollitia f
                         uga tempora molestiae <br /> <br /> adipisci repellendus doloribus molestias 
                         excepturi hic. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Accusamus facilis illum at blanditiis, minus, 
                         temporibus error eius eveniet ut optio enim repellat maiores 
                         pariatur qui soluta. Adipisci qui voluptas maiores.</p>

                        
                         
                </div>
                <div className='product-list'>
                    <a href='#' data-aos="fade-right" data-aos-once="true">
                        <ProductInfo image={Product1} text={ProductText1}/>
                    </a>

                    <a href='#' data-aos-delay={100} data-aos="fade-right" data-aos-once="true">
                        <ProductInfo image={Product2} text={ProductText2}/>
                    </a>

                    <a href='#' data-aos-delay={200} data-aos="fade-right" data-aos-once="true" className='product-three'>
                        <ProductInfo image={Product3} text={ProductText3}/>
                    </a>
                    
                </div>

                </div>
                </section>
        

   </>
  )
}

export default MainContainer