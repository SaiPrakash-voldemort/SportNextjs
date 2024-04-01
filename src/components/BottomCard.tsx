import React from "react";
import { CardContainer } from "./ui/3d-card";

const BottomCard = () => {
  const spotlightData = [
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8450cd146850661.62b7ed592f749.jpg",
      title: "Las Vegas Aviators",
      add: "Las Vegas Ballpark,Las Vegas,Nevada",
      btnTxt: "Take Flight Collection",
    },
    {
      img: "https://i.pinimg.com/236x/e9/c8/17/e9c8174bbb39fa5c257590a796ffed60.jpg",
      title: "Sacramento River Cats",
      add: "Sutter Health Park,Sacramento,California",
      btnTxt: "Orange Collection",
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8450cd146850661.62b7ed592f749.jpg",
      title: "Las Vegas Aviators",
      add: "Las Vegas Ballpark,Las Vegas,Nevada",
      btnTxt: "Take Flight Collection",
    },
  ];
  return (
    <>
      {spotlightData.map((item) => (
        <CardContainer key={item.title}>
          <div  className="flex flex-col items-center justify-center  h-[280px] w-[120px]  box-border sm:h-[468px] sm:w-[208px] ">
            <div className="h-full w-full flex flex-col items-center rounded-b-xl bg-slate-800">
              <img
                className="h-full w-full object-contain p-2 rounded-xl"
                src={item.img}
              ></img>
            </div>
            <div className="w-4/5 border-b border-dashed"></div>
            <div className=" text-xs flex flex-col p-3 items-center justify-center text-center rounded-t-xl bg-slate-800 gap-2 sm:text-[0.9rem]">
              <h1 className="">{item.title}</h1>
              <h1 className="sm:text-[0.8rem]">OCT 15 | SUN | 4:30 PM</h1>
              <h1 className="sm:text-[0.8rem]">{item.add}</h1>
              <button className="bg-zinc-950 text-white p-2">
                {item.btnTxt}
              </button>
            </div>
          </div>
        </CardContainer>
      ))}
    </>
  );
};

export default BottomCard;
