import classes from "./gallery.module.css";
import galleryimg1 from "../../../sprites/gallery/1.png";
import galleryimg2 from "../../../sprites/gallery/2.png";
import galleryimg3 from "../../../sprites/gallery/3.png";
import galleryimg4 from "../../../sprites/gallery/4.png";
import galleryimg5 from "../../../sprites/gallery/5.png";
import { MyFancybox } from "../fancybox/fancybox";

export const Gallery = () => {
  const galleryItem = [
    galleryimg1,
    galleryimg2,
    galleryimg3,
    galleryimg4,
    galleryimg5,
  ];

  return (
    <MyFancybox
      className={classes.container}
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      {galleryItem.map((item, idx) => (
        <a
          href={item}
          data-fancybox="gallery"
          className={classes.item}
          key={idx + classes.item}
        >
          <img className={classes.img} src={item} alt={`img ${idx}`} />
        </a>
      ))}
    </MyFancybox>
  );
};
