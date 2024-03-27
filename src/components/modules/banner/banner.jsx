import classes from "./banner.module.css";
import { Navigation } from "swiper/modules";
import { BannerItem } from "../../components/banner-item/banner-item";
import bannerImg1 from "../../../sprites/banners/1.png";
import bannerImg2 from "../../../sprites/banners/2.png";
import bannerImg3 from "../../../sprites/banners/3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Banner = () => {
  const bannerItems = [
    {
      title: (
        <>
          Школа <span className={classes.accent}>{"{"}</span>
          <span className={classes.bold}>программирования</span>
          <span className={classes.accent}>{"}"}</span> для тех, кому нужны
          реальные навыки, а&nbsp;не&nbsp;просто сертификат
        </>
      ),
      description: (
        <>
          Закажите звонок и&nbsp;наш специалист свяжется с&nbsp;вами
          в&nbsp;ближайшее время
        </>
      ),
      imgSrc: bannerImg1,
    },
    {
      title: <>Обучение через практику</>,
      description: (
        <>
          Всё, что вы&nbsp;узнали, вы&nbsp;тут&nbsp;же начинаете применять
          на&nbsp;практике. Вы сразу видите результаты своего труда.
        </>
      ),
      imgSrc: bannerImg2,
    },
    {
      title: <>Весь материал разбит на&nbsp;небольшие уроки</>,
      description: (
        <>
          Теория и практика подаются маленькими порциями. Так вам будет легче
          усваивать новые знания.
        </>
      ),
      imgSrc: bannerImg3,
    },
  ];

  return (
    <Swiper
      id="banner"
      modules={[Navigation]}
      slidesPerView={1}
      navigation
      className={classes.swiper}
    >
      {bannerItems.map((item) => (
        <SwiperSlide style={{ height: "auto" }} key={item.title + item.imgSrc}>
          <BannerItem
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
