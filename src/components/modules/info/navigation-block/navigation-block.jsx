import classes from './navigation-block.module.css'
import { Link } from "react-scroll";

export const NavigationBlock = ({navItems}) => {
  return (
    <ul className={classes.navigationBlock}>
    {navItems.map((item) => (
      <li key={item.title + item.link + "navigationBlock"} className={classes.item}>
        <Link
          className={classes.link}
          to={item.link}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
  )
}