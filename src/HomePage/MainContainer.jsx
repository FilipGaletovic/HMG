import React from 'react'
import Aos from 'aos';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css'
import { ProductInfo, SectionThree, SliderMain} from './componentExport'
import Product1 from '../assets/Product1.jpg'
import Product2 from '../assets/Product2.jpg'
import Product3 from '../assets/Product3.jpg'
import first_p_image from '../assets/first-p-image.png'
import section_one_image from '../assets/section-one-image.jpg'
import section_two_image from '../assets/section-two-image.jpg'
import arrow_up from '../assets/arrow_up.png'
import arrow_down from '../assets/arrow_down.png'
import '../CSS/HomeCSS/MainContainer.css'
import user_review_pfp_one from '../assets/user_reviews_pfp_1.png'
import user_review_pfp_two from '../assets/user_reviews_pfp_2.png'
import user_review_pfp_three from '../assets/user_reviews_pfp_3.jpeg'





const MainContainer = () => {
  

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])
  
    let ProductText1 = "Product1";
    let ProductText2 = "Product2";
    let ProductText3 = "Product3";

    const [slideCounter, setSlideCounter] = useState(0);



    const user_review_one = document.getElementById('user_review_one_Id')
    const user_review_two = document.getElementById('user_review_two_Id')
    const user_review_three = document.getElementById('user_review_three_Id')

    const btnSlideUp = document.getElementById('btn_slide_up_Id')
    const btnSlideDown = document.getElementById('btn_slidd_down_Id')

    const slideUp_one = {

        container_one: {
            'transform' : 'translateY(240px) translateX(50px)',
            'z-index' : 10,
            'box-shadow': 'none'
        },
        container_two : {
            'transform' : 'translateY(-50px) translateX(50px)',
            'z-index' : 10,
            'opacity': 0.5,
            'box-shadow': 'none'
        },
        container_three: {
            'opacity' : 1,
            'transform' : 'translateY(-200px)',
            'z-index' : 30,
            'box-shadow': '0 0 30px var(--blue-main)',
            'animation' : 'userSlide .5s ease-in-out'
        }    
    }
    const slideUp_two = {
        container_one: {
            'transform' : 'translateY(200px)',
            'z-index' : 30,
            'opacity': 1,
            'box-shadow': '0 0 30px var(--blue-main)',
            'animation' : 'userSlide .5s ease-in-out'
        },
        container_two : {
            'transform' : 'translateY(50px) translateX(50px)',
            'z-index' : 10,
            'box-shadow': 'none'
        },
        container_three: {
            'opacity' : .5,
            'transform' : 'translateY(-250px) translateX(50px)',
            'z-index' : 10,
            'box-shadow': 'none'
        }
    }
    const slideUp_three = {
        container_one: {
            'transform' : 'translateY(150px) translateX(50px)',
            'z-index' : 10,
            'opacity': 0.5,
            'box-shadow': 'none'
        },
        container_two : {
            'transform' : 'translateY(0px)',
            'z-index' : 30,
            'opacity': 1,
            'box-shadow': '0 0 30px var(--blue-main)',
            'animation' : 'userSlide .5s ease-in-out'
        },
        container_three: {
            'opacity' : .5,
            'transform' : 'translateY(-150px) translateX(50px)',
            'z-index' : 20,
            'box-shadow': 'none'
        }
    }
    const handleSlideup = () => {

        setSlideCounter(slideCounter + 1)
        switch (slideCounter){
            case 1:
               Object.assign(user_review_one.style, slideUp_one.container_one);
               Object.assign(user_review_two.style, slideUp_one.container_two);
               Object.assign(user_review_three.style, slideUp_one.container_three);
            break;
    
            case 2: 
                Object.assign(user_review_one.style, slideUp_two.container_one);
                Object.assign(user_review_two.style, slideUp_two.container_two);
                Object.assign(user_review_three.style, slideUp_two.container_three);
            break;
            case 3: 
                Object.assign(user_review_one.style, slideUp_three.container_one);
                Object.assign(user_review_two.style, slideUp_three.container_two);
                Object.assign(user_review_three.style, slideUp_three.container_three);
    
            setSlideCounter(1)
            break;
        }
    }
    const handleSlideDown = () => {
        if(slideCounter !== 1)
        setSlideCounter(slideCounter -1)
        else setSlideCounter(3)

        handleSlideup();
    }
  
    


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


            <div className="scroll-bar" id='progress'></div>

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

        <section className='section_five'>

            <h2 className='section_five_title'>User Reviews</h2>
            <div className="user_reviews_container">
              
                <div className="user_review_one user_div" id='user_review_one_Id'>
                    <img src={user_review_pfp_one} alt="" />
                    <h3>Mark Hanks</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, earum. Doloremque iste, voluptas velit animi hic atque nesciunt distinctio illum in facere repellendus ad assumenda deleniti magnam, cupiditate aperiam</p>
                </div>
                <div className="user_review_two user_div" id='user_review_two_Id'>
                    <img src={user_review_pfp_two} alt="" />
                        <h3>Ömer Asaf</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, earum. Doloremque iste, voluptas velit animi hic atque nesciunt distinctio illum in facere repellendus ad assumenda deleniti magnam, cupiditate aperiam</p>
                </div>
                <div className="user_review_three user_div" id='user_review_three_Id'>
                    <img src={user_review_pfp_three} alt="" />
                        <h3>Anita Williams</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, earum. Doloremque iste, voluptas velit animi hic atque nesciunt distinctio illum in facere repellendus ad assumenda deleniti magnam, cupiditate aperiam</p>
                </div>
             
                <div className="slider_button">
                    <button className="btnUp" id='btn_slide_up_Id' 
                    onClick={handleSlideup}>
                        <img src={arrow_up} alt="" />
                    </button>
                    <button className="btnDown" id='btn_slide_down_Id'
                    onClick={handleSlideDown}
                    >
                        <img src={arrow_down} alt="" />
                    </button>
                </div>
            </div>

        </section>
        

   </>
  )
}

export default MainContainer