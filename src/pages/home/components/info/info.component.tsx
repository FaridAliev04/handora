// import { useInfoStyle } from "./info.style";

// const InfoComponent = () => {
//   const classes = useInfoStyle();

//   return (
//     <div className={classes.info_main}>
//       <div></div>
//       <div className={classes.textDiv}>
//         <h1>Lorem ipsum dolor sit amet.</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
//           corporis obcaecati voluptate. Necessitatibus, ducimus! Provident
//           dolorum soluta aspernatur omnis adipisci nobis facilis unde minima
//           error.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default InfoComponent;
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { useInfoStyle } from "./info.style";

const InfoComponent = () => {
  const classes = useInfoStyle();
  const [slides] = useState([
    { title: "Lorem ipsum dolor sit amet.", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { title: "Second header text here.", text: "Provident dolorum soluta aspernatur omnis adipisci nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { title: "Third title comes here.", text: "Necessitatibus, ducimus! Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur adipisicing elit." }
  ]);

  return (
    <div className={`${classes.info_main}`} >
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop
        fadeEffect={{ crossFade: true }} 
        className={`${classes.textDiv} `}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={classes.slider}>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default InfoComponent;