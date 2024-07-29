import React, { useRef } from "react";
import Card from "./Card";

function Forground() {
  const ref = useRef(null)
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpened: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpened: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpened: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <div>
      <div ref={ref} className="fixed top-0 z-3  w-full h-full flex gap-10  p-5 ">
        {data.map((item,index)=>(
          <Card key={index} data={item} reference={ref}/>
        ))}
      </div>
    </div>
  );
}

export default Forground;
