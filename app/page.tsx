import Landing from "./components/Landing"
import { SearchComponent } from "./components/searchcomponetn/Searchcomponent"
import Cardcomponent from "./components/Card/Cardcomponent"
import { Quastion } from "./components/Quastion"
import Supportcards from "./Supportcards/page"
import InfiniteMovingCardsDemo from "./ReviewCard/page"
import { Quations } from "./components/Quations"
import ClientCard from "./ClientCard/page"
import Cartcomponent from "./components/Cartcomponent/Cartcomponet"
import Aboutus from "./components/Aboutme"
export default function Home() {
  return (
  
<>
<section id="/">
 <Landing  />
 </section>
 <section id="search">
 <SearchComponent />
 </section>
 <Cardcomponent />
 <section id="projects">
 <Cartcomponent />
 </section>
 <Quastion />
 <Supportcards />
 <section id="reviews">
 <InfiniteMovingCardsDemo />
 </section>
 <Quations />
 
 <section id="cotactus">
 <ClientCard  />
 </section>
 <section id="aboutus">
 <Aboutus />
 </section>      
</>

)
}
