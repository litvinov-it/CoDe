import React, { useRef, useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const MyFancybox = (props) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    },
    { scope: containerRef }
  );
  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <div className={props.className} ref={containerRef}>
      {props.children}
    </div>
  );
};
