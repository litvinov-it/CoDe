import classes from "./nav.module.css";
import clsx from "clsx";
import { Link } from "react-scroll";

export const Nav = ({ className, isOpenMenu, setIsOpenMenu }) => {
  const navItems = [
    {
      title: "Чему вы научитесь",
      link: "banner",
    },
    {
      title: "Процесс обучения",
      link: "advantages",
    },
    {
      title: "Стоимость",
      link: "advantagesBlock",
    },
    {
      title: "Контакты",
      link: "map",
    },
  ];

  return (
    <nav
      className={clsx(
        classes.navigation,
        isOpenMenu && classes.navigationOpen,
        className && className
      )}
    >
      <ul className={classes.list}>
        {navItems.map((item) => (
          <li
            key={item.title + item.link}
            className={classes.item}
            onClick={() => setIsOpenMenu && setIsOpenMenu(false)}
          >
            <Link
              onClick={() => setIsOpenMenu && setIsOpenMenu(false)}
              className={classes.link}
              activeClass={classes.active}
              to={item.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
