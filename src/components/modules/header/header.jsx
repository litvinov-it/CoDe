import classes from "./header.module.css";
import { ReactComponent as Logo } from "../../../sprites/icons/logo.svg";
import { BurgerMenu } from "../../components/burgerMenu/burger-menu";
import { useState } from "react";
import { Nav } from "../../components/nav/nav";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <Logo className={classes.logo} />
        <Nav isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      </div>

      <div className={classes.wrapper}>
        <a className={classes.phone} href="tel:+7 (499) 348 93 96">+7 (499) 348 93 96</a>
        <BurgerMenu
          wrapperClassName={classes.burger}
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
        />
      </div>
    </header>
  );
};
