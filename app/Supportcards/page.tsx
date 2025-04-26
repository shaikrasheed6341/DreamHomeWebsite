import { Supportcard } from "../components/Supportcard/Supportcard";
const Supportcards =()=>{
    return(
        <div className=" grid sm:grid-cols-1 md:grid-cols-3 p-5 lg:grid-cols-4 ">
            <div className="m-2"><Supportcard tittle={"hello"} icons={"asdfa"} descripation={"asdfasdf"} /></div>
            <div className="m-2"><Supportcard tittle={"hello"} icons={"asdfa"} descripation={"asdfasdf"} /></div>
            <div className="m-2"><Supportcard tittle={"hello"} icons={"asdfa"} descripation={"asdfasdf"} /></div>
            <div className="m-2"><Supportcard tittle={"hello"} icons={"asdfa"} descripation={"asdfasdf"} /></div>

        </div>
    )
}

export default Supportcards;