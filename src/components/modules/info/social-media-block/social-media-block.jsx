import classes from './social-media-block.module.css'
import { ReactComponent as Logo } from "../../../../sprites/icons/logo.svg";
import { ReactComponent as Insta } from "../../../../sprites/icons/insta.svg";
import { ReactComponent as Facebook } from "../../../../sprites/icons/fb.svg";
import { ReactComponent as Vk } from "../../../../sprites/icons/vk.svg";
import { ReactComponent as Yt } from "../../../../sprites/icons/yt.svg";

export const SocialMediablock = () => {
  return (
    <div className={classes.socialmediaBlock}>
    <div className={classes.logoWrapper}>
      <Logo className={classes.logo} />
      <div className={classes.subtitle}>
        <p className={classes.subtitle}>Школа</p>
        <p className={classes.subtitle}>программирования</p>
      </div>
    </div>
    <ul className={classes.list}>
      <li className={classes.item}>
        <a className={classes.link} href="##">
          <Insta className={classes.insta} />
        </a>
      </li>
      <li className={classes.item}>
        <a className={classes.link} href="##">
          <Vk />
        </a>
      </li>
      <li className={classes.item}>
        <a className={classes.link} href="##">
          <Facebook className={classes.fb} />
        </a>
      </li>
      <li className={classes.item}>
        <a className={classes.link} href="##">
          <Yt className={classes.yt} />
        </a>
      </li>
    </ul>
  </div>
  )
}