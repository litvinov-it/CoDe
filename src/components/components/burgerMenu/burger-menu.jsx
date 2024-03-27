import classes from "./burger-menu.module.css";
import clsx from "clsx";

export const BurgerMenu = ({ wrapperClassName, isOpenMenu, setIsOpenMenu }) => {
  return (
    <div className={wrapperClassName}>
      <div
        className={classes.burger}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <span
          className={clsx(classes.topLine, isOpenMenu && classes.topLineOpen)}
        />
        <span
          className={clsx(
            classes.middleLine,
            isOpenMenu && classes.middleLineOpen
          )}
        />
        <span
          className={clsx(
            classes.bottomLine,
            isOpenMenu && classes.bottomLineOpen
          )}
        />
      </div>
    </div>
  );
};
