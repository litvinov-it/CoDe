import classes from "./banner-item.module.css";
import BackgroundSrc from "../../../sprites/banners/bg.png";
import BackgroundMobileSrc from "../../../sprites/banners/bg-mobile.png";
import { Button } from "../../ui/button/button";
import { useState } from "react";
import { ModalForm } from "../../components/modal/modal";
import { FormCall } from "../../components/form-call/form-call";

export const BannerItem = ({ title, description, imgSrc }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.bottomContent}>
          <span className={classes.line} />
          <p className={classes.description}>{description}</p>
        </div>
        <div>
          <Button
            onClick={() => setIsOpenModal(true)}
            text={"Заказать звонок"}
          />
        </div>
      </div>
      <div className={classes.imgWrapper}>
        <img className={classes.img} src={imgSrc} alt={title} />
      </div>

      <img className={classes.bg} src={BackgroundSrc} alt={title} />
      <img className={classes.bgMobile} src={BackgroundMobileSrc} alt={title} />
      <ModalForm isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
        <FormCall />
      </ModalForm>
    </div>
  );
};
