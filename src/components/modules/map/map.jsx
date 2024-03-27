import classes from "./map.module.css";

export const Map = () => {
  return (
    <div id="map" className={classes.container}>
      <iframe
        title="карта"
        className={classes.map}
        src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=82.926493%2C55.028894&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzA5MjgwMxJL0KDQvtGB0YHQuNGPLCDQndC-0LLQvtGB0LjQsdC40YDRgdC6LCDQlNC10L_Rg9GC0LDRgtGB0LrQsNGPINGD0LvQuNGG0LAsIDQ2IgoNXdqlQhWWHVxC&z=17.1"
      />
    </div>
  );
};
