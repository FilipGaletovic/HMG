import React from "react";
import AutoCadBackground from "../assets/AutoCadBackground.png";
import "../CSS/AutoCadCSS/AutoCadPage.css";
import builiding_card_img from "../assets/building_card.png";
import oil_pump_card_img from "../assets/oil_pump_card.png";
import product_card_img from "../assets/product_card.png";
import oil_rig_card_img from "../assets/oil_rig_card.png";
import Aos from 'aos';
import AutoCadOrder from "./AutoCadOrder";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AutoCadPageContent = () => {


  let title_one = 'Building Designs'
  let title_two = 'Oil Rig Designs'
  let title_three = 'Oil Pumps Designs'
  let title_four = 'Product Design'

  useEffect(() => {
    Aos.init({duration: 1000});
}, [])

  return (
    <>
      <div className="AutoCad_container">
        <img src={AutoCadBackground} alt="" />
        <div className="AutoCad_first_p"
             data-aos="fade"
             data-aos-once="true"
             data-aos-duration='2000'>
          <h2>Highest rated designs</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            consectetur blanditiis vel perferendis doloribus aliquam beatae,
            ullam laudantium, ipsum quis vero aspernatur dolorum ducimus a
            voluptates unde officiis cumque corrupti non dolores id similique.
            Aliquam commodi nulla aut dolorem quae? Ad, nobis! Voluptate eaque
            commodi culpa dignissimos placeat, inventore soluta consequatur
            adipisci itaque obcaecati! Commodi iste maxime ad quo perferendis
            voluptatem placeat fugiat repudiandae explicabo ducimus quas
            pariatur sunt temporibus culpa impedit in, rem exercitationem aut
            eos, itaque iure est! Mollitia nemo labore harum commodi. Sunt iste
            at voluptatem suscipit rerum enim quia distinctio beatae aperiam
            nesciunt, vitae quaerat autem ut. Vel rerum iure quisquam rem
            explicabo est alias nihil consequatur ab tempora corrupti, dolorem
            fuga, 
          </p>
          <a href="#AutoCad_second_p_Id">
          <button className="btn_ckeck_out_more">Order now</button>
          </a>
        </div>

        <div className="AutoCad_second_p" id="AutoCad_second_p_Id">
          <h2>Types of AutoCad Drawings</h2>
          <div className="second_p_card_grid">
            <div className="second_p_card_container"
                 data-aos="fade-right"
                 data-aos-once="true"
            >
              <div className="second_p_card"
                  id="slice_left"
              >
                  <img src={builiding_card_img} alt="" />
                  <h3>Builiding Design</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque ipsam porro quas distinctio sed ex sunt delectus
                    voluptatum at, autem consequuntur officia eos incidunt iure iste
                    placeat commodi atque excepturi.
                  </p>
                <a href="#order_one_id">
                  <button className="second_p_card__button">Order</button>
                </a>
              </div>
            </div>
            <div className="second_p_card_container"
                 data-aos="fade-right"
                 data-aos-once="true"
                 data-aos-delay={100}>
              <div className="second_p_card">
                <img src={oil_rig_card_img} alt="" />
                <h3>Oil Rig Designs</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque ipsam porro quas distinctio sed ex sunt delectus
                  voluptatum at, autem consequuntur officia eos incidunt iure iste
                  placeat commodi atque excepturi.
                </p>
                <a href="#order_two_id">
                  <button className="second_p_card__button">Order</button>
                </a>
              </div>
            </div>
            <div className="second_p_card_container"
                 data-aos="fade-right"
                 data-aos-once="true"
                 data-aos-delay={200}
            >
              <div className="second_p_card">
                <img src={oil_pump_card_img} alt="" />
                <h3>Oil Pumps Designs</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque ipsam porro quas distinctio sed ex sunt delectus
                  voluptatum at, autem consequuntur officia eos incidunt iure iste
                  placeat commodi atque excepturi.
                </p>
                <a href="#order_three_id">
                  <button className="second_p_card__button">Order</button>
                </a>
              </div>
            </div>
            <div className="second_p_card_container" 
                 data-aos="fade-right"
                 data-aos-once="true"
                 data-aos-delay={300}
            >
              <div className="second_p_card"
                   id="slice_right"
              >
                <img src={product_card_img} alt="" />
                <h3>Product Design</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque ipsam porro quas distinctio sed ex sunt delectus
                  voluptatum at, autem consequuntur officia eos incidunt iure iste
                  placeat commodi atque excepturi.
                </p>
                <a href="#order_four_id">
                  <button className="second_p_card__button">Order</button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="order_containers">
      <div id="order_one_id">
        <AutoCadOrder title={title_one} image={builiding_card_img}/>
      </div>
      <div id="order_two_id">
      <AutoCadOrder title={title_two} image={oil_rig_card_img}/>
      </div>
      <div id="order_three_id">
      <AutoCadOrder title={title_three} image={oil_pump_card_img}/>
      </div>
      <div id="order_four_id">
      <AutoCadOrder title={title_four} image={product_card_img}/>
      </div>
      </div>
      

    </>
  );
};
export default AutoCadPageContent;
