import classes from "./advantages-list.module.css";
import { ReactComponent as AdvantagesImg1 } from "../../../sprites/advantages/1.svg";
import { ReactComponent as AdvantagesImg2 } from "../../../sprites/advantages/2.svg";
import { ReactComponent as AdvantagesImg3 } from "../../../sprites/advantages/3.svg";
import { ReactComponent as AdvantagesImg4 } from "../../../sprites/advantages/4.svg";
import { ReactComponent as AdvantagesImg5 } from "../../../sprites/advantages/5.svg";
import { ReactComponent as AdvantagesImg6 } from "../../../sprites/advantages/6.svg";
import { ReactComponent as AdvantagesImg7 } from "../../../sprites/advantages/7.svg";

export const AdvantagesList = () => {
  const advantagesItems = [
    {
      title: <>Огромное количество практики</>,
      description: (
        <>
          Более 500 самостоятельных заданий и&nbsp;20&nbsp;полноценных больших
          проектов
        </>
      ),
      icon: <AdvantagesImg1 className={classes.img} />,
    },
    {
      title: <>Современные методики обучения</>,
      description: (
        <>
          Спиральное обучение: погружаемся в&nbsp;материал постепенно, виток
          за&nbsp;витком
        </>
      ),
      icon: <AdvantagesImg2 className={classes.img} />,
    },
    {
      title: <>Простое и&nbsp;понятное изложение</>,
      description: (
        <>Вместо заумных терминов&nbsp;&mdash; примеры из&nbsp;реального мира</>
      ),
      icon: <AdvantagesImg3 className={classes.img} />,
    },
    {
      title: <>Гибкий график занятий</>,
      description: <>Учитесь в&nbsp;любое время в&nbsp;удобном для вас темпе</>,
      icon: <AdvantagesImg4 className={classes.img} />,
    },
    {
      title: <>Прямая связь с&nbsp;опытными программистами</>,
      description: (
        <>Задавайте вопросы и&nbsp;отправляйте свой код на&nbsp;проверку</>
      ),
      icon: <AdvantagesImg5 className={classes.img} />,
    },
    {
      title: <>Оплата небольшими частями</>,
      description: (
        <>
          Платите только за&nbsp;тот материал, который сейчас изучаете,
          а&nbsp;не&nbsp;за&nbsp;весь курс сразу
        </>
      ),
      icon: <AdvantagesImg6 className={classes.img} />,
    },
    {
      title: <>Быстрый и&nbsp;легкий возврат</>,
      description: (
        <>
          Если передумаете учиться &mdash; вернем деньги за&nbsp;3&nbsp;рабочих
          дня
        </>
      ),
      icon: <AdvantagesImg7 className={classes.img} />,
    },
  ];

  return (
    <div id="advantages" className={classes.container}>
      <h3 className={classes.title}>
        Обучение в&nbsp;CoDe&nbsp;&mdash; это удобно и&nbsp;результативно
      </h3>
      <ul className={classes.list}>
        {advantagesItems.map((item, idx) => (
          <li key={"advantages" + idx} className={classes.item}>
            <div className={classes.imgWrapper}>{item.icon}</div>
            <div className={classes.inner}>
              <h4 className={classes.titleItem}>{item.title}</h4>
              <p className={classes.descriptionItem}>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
