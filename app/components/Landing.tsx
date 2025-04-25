import Image from "next/image"
import Landingimage from "../../public/Landingpage.png"
const Landing = ()=>{
   return(
    <div className=" ">
        <div className="w-full flex justify-center   ">
        <div className="font-bold text-5xl p-5">Find your Dream Home</div>
        <div className="bg-amber-300"><Image src={Landingimage} alt="Landingpage" width={1000} height={50}  /></div>
        </div>
        </div>

   )
}
export default Landing