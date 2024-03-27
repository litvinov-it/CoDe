import { Header } from "../header/header";
import { Banner } from "../banner/banner";
import { AdvantagesList } from "../advantages-list/advantages-list";
import { AdvantagesBlocks } from "../advantages-blocks/advantages-blocks";
import { Gallery } from "../../components/gallery/gallery";
import { Map } from "../map/map";
import { Info } from "../info/info";
import { Footer } from "../footer/footer";
import classes from './app.module.css'

export function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Banner />
      <AdvantagesList />
      <AdvantagesBlocks />
      <Gallery />
      <Map />
      <Info />
      <Footer />
    </div>
  );
}
