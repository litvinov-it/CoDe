import classes from "./advantages-blocks.module.css";
import advantageBlockImg1 from "../../../sprites/advantages/block-1.png";
import advantageBlockImg2 from "../../../sprites/advantages/block-2.png";
import { AdvantagesBlock } from "../../components/advantages-block/advantages-block";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const AdvantagesBlocks = () => {
  const advantagesItems = [
    {
      title: <>Помощь и&nbsp;поддержка</>,
      descriptions: [
        <>
          Если в&nbsp;процессе обучения возникнут сложности, вы&nbsp;всегда
          сможете задать вопрос своему наставнику.
        </>,
        <>
          Раз в&nbsp;несколько уроков вы&nbsp;будете получать большое задание,
          которое нужно будет сдавать на&nbsp;проверку код-ревьюеру.
          Он&nbsp;внимательно изучит ваш код, найдет ошибки и&nbsp;поможет вам
          стать лучше.
        </>,
      ],
      reverse: false,
      imgSrc: advantageBlockImg1,
    },
    {
      title: <>Методика обучения</>,
      descriptions: [
        <>
          Весь учебный материал структурирован по&nbsp;принципу
          &laquo;спирального обучения&raquo;. Сначала вы&nbsp;получаете базовые
          знания, а&nbsp;затем на&nbsp;каждом витке спирали углубляетесь
          в&nbsp;изученные темы, доводя их&nbsp;понимание до&nbsp;совершенства.
          Такой подход упрощает обучение и&nbsp;гарантирует, что
          вы&nbsp;не&nbsp;пропустите ничего важного.
        </>,
      ],
      reverse: true,
      imgSrc: advantageBlockImg2,
    },
  ];
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} id="advantagesBlock" className={classes.container}>
      {advantagesItems.map((advantagesItem, index) => (
        <AdvantagesBlock advantagesItem={advantagesItem} key={index + advantagesItem.title} index={index} />
      ))}
    </div>
  );
};
