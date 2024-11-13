import Image from "next/image";
import Navbar from "./component/navbar";

export default function Home() {
  return(
    <div className="bg-blue-950">
    <Navbar/>
    
    <div className=" h-[500px] text-[16px]  flex flex-col justify-center items-center">
    <div className="text-center">
    <h5 className=" flex justify-center font-bold text-blue-500 pb-[50px] pt-[50px] font-arial">Welcome</h5>
    <h1 className=" mb-0flex justify-center items-center w-[542px] h-[160px] font-bold text-white text-[58px]">Selling on the internet like a pro</h1>
    <h4 className="weight-normal text-white flex justify-center items-center mt-0 w-[542px] h-[160px] text-[20px] font-normal ">We know how large objects will act, but things on a 
    small scale just do not act that way.</h4>
           
    <button className=" mr-[10px] rounded h-[52] w-[193] bg-blue-500 pr-[40px] pt-[15px] text-white pb-[15px] pl-[40px]">Get quote Now</button>
    <button className="  rounded h-[52] w-[163] bg-blue-950 pr-[40px] pt-[15px] border border-blue-500 border-style:solid text-white pb-[15px] pl-[40px]">Learn More</button>
              
    </div>
</div>






<div className="flex justify-between items-center p-[100px]">


<div className="flex justify-center items-center mt-[80px] ">
    <div className=" mr-[20px] pt-[35px] pr-[40px] pl-[40px] pb-[35px] w-[328px] h-[350px] bg-white">
      <div id="div1" className=" rounded-2xl w-[70px]  h-[75px] pt-[22px] pr-[19px] pb-[22px] pl-[19px]"></div>
      <h3 className="pt-[30px] pb-[50px] text-[16px] font-bold w-[135px] h-[24px] weight-800 text-black">training Courses</h3>
    
     <hr id="line" className="w-[50px] h-[20px]  font-bold"></hr>
        <p className=" font-arial pt-[20px] text-black">The gradual accumulation of information about atomic and small-scale behaviour...</p>
    </div>
</div>













<div className="flex justify-center items-center mt-[80px] ">
    <div className=" mr-[20px] pt-[35px] pr-[40px] pl-[40px] pb-[35px] w-[328px] h-[350px] bg-white">
      <div id="div2" className=" rounded-2xl w-[70px]  h-[75px] pt-[22px] pr-[19px] pb-[22px] pl-[19px]"></div>
      <h3 className=" flex pt-[30px] pb-[50px] text-[16px] font-bold w-[200px] h-[24px] weight-800 text-black">2,769 online courses</h3>
    
     <hr id="line" className="w-[50px] h-[20px]  font-bold"></hr>
        <p className="pt-[20px] text-black">The gradual accumulation of information about atomic and small-scale behaviour...</p>
    </div>
</div>









<div className="flex justify-center items-center mt-[80px] ">
    <div className=" mr-[20px] pt-[35px] pr-[40px] pl-[40px] pb-[35px] w-[328px] h-[350px] bg-blue-500">
      <div id="div3" className=" rounded-2xl w-[70px]  h-[75px] pt-[22px] pr-[19px] pb-[22px] pl-[19px]"></div>
      <h3 className="pt-[30px] pb-[50px] text-[16px] font-bold w-[135px] h-[24px] weight-800 text-white">training Courses</h3>
    
     <hr id="linee" className="w-[50px] h-[20px]  font-bold"></hr>
        <p className="pt-[20px] text-white">The gradual accumulation of information about atomic and small-scale behaviour...</p>
    </div>
</div>
</div>




</div>
  )
}
