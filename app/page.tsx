import Landing from "./components/Landing"
import { SearchComponent } from "./components/searchcomponetn/Searchcomponent"
import Cardcomponent from "./components/Card/Cardcomponent"
import { Quastion } from "./components/Quastion"
import Supportcards from "./Supportcards/page"
export default function Home() {
  return (
  
<>
 <Landing />
 
 <SearchComponent />
 <Cardcomponent />
 <Quastion />
 <Supportcards />
</>

)
}
