import classes from "./contacts-block.module.css";

export const ContactsBlock = () => {
  return (
    <div className={classes.contactsBlock}>
    <a className={classes.phone} href="tel:+7 (499) 348 93 96">
      +7 (499) 348 93 96
    </a>
    <a className={classes.email} href="mailto:info@code.ru">
      info@code.ru
    </a>
  </div>
  )
}