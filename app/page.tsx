import Landing from "./components/Landing"
import { SearchComponent } from "./components/searchcomponetn/Searchcomponent"
import Cardcomponent from "./components/Card/Cardcomponent"
import { Quastion } from "./components/Quastion"
import Supportcards from "./Supportcards/page"
import InfiniteMovingCardsDemo from "./ReviewCard/page"
import { Quations } from "./components/Quations"
import { ClientCard } from "./ClientCard/page";
import { ToastContainer,Bounce } from "react-toastify";
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
       <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
</>

)
}
