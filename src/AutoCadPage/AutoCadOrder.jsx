import React from 'react'
import { useState, useEffect, useContext} from 'react'
import '../CSS/AutoCadCSS/AutoCadPage.css'
import add_to_cart_icon from '../assets/add_to_cart_icon.png'
import { ErrorResponse } from '@remix-run/router'
const LOCAL_STORAGE_KEY_AUTOCAD = 'AutoCad_order'


const AutoCadOrder = ({title, image}) => {

        const [elemntContainer, setElementContainer] = useState();
        const [orderContainer, setOrderContainer] = useState();
        const [useImage, setUseImage] = useState();
        const [order, setOrder] = useState();
        
        let titleOrder = title;
        
        
        useEffect(() => {
            if(titleOrder === 'Building Designs'){
                setOrderContainer('building_container')
                setElementContainer('building_section')
                setOrder('Building AutoCad')
            } 
            else if(titleOrder === 'Oil Pumps Designs'){
                setOrderContainer('oil_pump_container')
                setElementContainer('oil_pump_section')
                setOrder('Oil Pump AutoCad')
        } 
        else if(titleOrder === 'Oil Rig Designs'){
            setOrderContainer('oil_rig_container')
            setElementContainer('oil_rig_section')
            setOrder('Oil Rig AutoCad')
        } 
        else{
            setOrderContainer('product_design_container')
            setElementContainer('product_design')
            setOrder('Product Design AutoCad')
        } 
        
        setUseImage(image);
    }, [])
    
    const sampleOrder = {
        orderName: 'building_autoCad'
    }
    const [orderJSON, setOrderJson] = useState ( () =>  {
        
        const AutoCadJSON = localStorage.getItem(LOCAL_STORAGE_KEY_AUTOCAD)
        if(AutoCadJSON==null){
            return ''
        }else{
        return JSON.parse(AutoCadJSON)  
        }
}
)
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_AUTOCAD, JSON.stringify(orderJSON))
    }, [orderJSON])


    const handleAddToCart = () => {
        const newCart = {
        orderName: order
       }
       setOrderJson([...orderJSON, newCart])
       
    }
  return (
    <>
        <section className={`AutoCad_order_container ${orderContainer}`}>
                <h2>{titleOrder}</h2>
            <div className={`elements_container ${elemntContainer}`} >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fuga reprehenderit. Nihil maxime consectetur autem cupiditate consequuntur est vel consequatur quam eos! Est tempora, quis rem ratione asperiores nesciunt ducimus iste quaerat! Saepe, quos minus vitae necessitatibus at non ducimus ab expedita? Animi, obcaecati ratione fugiat officia dignissimos <br /> <br /> delectus esse?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, aut dicta recusandae modi in repudiandae iure fuga sit sapiente dolorum iste dolor neque nobis molestiae? Delectus dolorem, minus voluptate nulla itaque accusamus veritatis impedit, magnam quae voluptas necessitatibus et? Nisi at explicabo, quibusdam blanditiis modi inventore officia dolore quisquam repudiandae.</p>
                <button className='autoCad_btn_add_cart' id='autoCad_btn_add_cart_id'
                onClick={handleAddToCart}>
                    Add To Cart
                </button>
                    <img src={add_to_cart_icon} alt />
            </div>
            <img src={useImage} alt="" />
        </section>
    </>
  )
}

export default AutoCadOrder