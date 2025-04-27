import Landing from "./components/Landing"
import { SearchComponent } from "./components/searchcomponetn/Searchcomponent"
import Cardcomponent from "./components/Card/Cardcomponent"
import { Quastion } from "./components/Quastion"
import Supportcards from "./Supportcards/page"
import InfiniteMovingCardsDemo from "./ReviewCard/page"
import { Quations } from "./components/Quations"
import { ClientCard } from "./ClientCard/page";
export default function Home() {
  return (
  
<>
 <Landing />
 
 <SearchComponent />
 <Cardcomponent />
 <Quastion />
 <Supportcards />
 <InfiniteMovingCardsDemo />
 <Quations />
 <ClientCard />
</>

)
}
