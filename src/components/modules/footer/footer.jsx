import classes from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.security}>
        <p className={classes.text}>
          &copy;&nbsp;2023&nbsp;&mdash; Все права защищены
        </p>
      </div>
      <div className={classes.agreement}>
        <p className={classes.text}>Пользовательское соглашение</p>
      </div>
      <div className={classes.privacy}>
        <p className={classes.text}>Политика конфиденциальности</p>
      </div>
    </div>
  );
};
