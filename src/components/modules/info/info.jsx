import classes from "./info.module.css";
import { SocialMediablock } from "./social-media-block/social-media-block";
import { NavigationBlock } from "./navigation-block/navigation-block";
import { ContactsBlock } from "./contacts-block/contacts-block";

export const Info = () => {
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
    <div className={classes.container}>
      <SocialMediablock />
      <NavigationBlock navItems={navItems} />
      <ContactsBlock />
    </div>
  );
};
