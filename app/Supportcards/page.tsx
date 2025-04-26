import { Supportcard } from "../components/Supportcard/Supportcard";
import { IoLocationSharp } from "react-icons/io5";
import { MdPersonSearch } from "react-icons/md";
import { BiSolidNotepad } from "react-icons/bi";
import { FaHandshakeSimple } from "react-icons/fa6";




const Supportcards = () => {
    return (
        <div className=" grid sm:grid-cols-1 md:grid-cols-3 p-5 lg:grid-cols-4 bg-[#FBF5F1] ">
            <div className="m-2"><Supportcard tittle={"Expert Guidance"} icons={<IoLocationSharp className="" />
            } descripation={"Benefit from our team's seasoned expertise for a smooth buying experience"} /></div>
            <div className="m-2"><Supportcard tittle={"Personalized Service"} icons={<MdPersonSearch />
} descripation={"Our services adapt to your unique needs, making your journey stress-free"} /></div>
            <div className="m-2"><Supportcard tittle={"Transparent Process"} icons={<BiSolidNotepad />} descripation={"Stay informed with our clear and honest approach to buying your home"} /></div>
            <div className="m-2"><Supportcard tittle={"Exceptional Support"} icons={<FaHandshakeSimple />} descripation={"Providing peace of mind with our responsive and attentive customer service"} /></div>

        </div>
    )
}

export default Supportcards;