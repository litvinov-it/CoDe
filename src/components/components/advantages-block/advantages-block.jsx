import classes from './advantages-block.module.css' 
import clsx from "clsx";

export const AdvantagesBlock = ({advantagesItem, index}) => {
  return (
    <div
      className={clsx(classes.item, {
        [classes.reverse]: advantagesItem.reverse,
      })}
      key={index + advantagesItem.title}
    >
      <div className={classes.imgWrapper}>
        <img
          className={classes.img}
          src={advantagesItem.imgSrc}
          alt={advantagesItem.title}
        />
      </div>

      <div className={classes.content}>
        <h2 className={classes.title}>{advantagesItem.title}</h2>

        <div className={classes.descriptions}>
          {advantagesItem.descriptions.map((description, index) => (
            <div className={classes.description} key={index + description}>
              {description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
