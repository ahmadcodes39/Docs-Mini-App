import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{scale:1.2}}
      className="relative flex-shrink-0 w-60 h-72 bg-zinc-600 rounded-[40px] p-5 text-white overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="mt-5 font-semibold mb-5">{data.desc}</p>
      <div className="footer text-black w-full absolute bottom-0 left-0 ">
        <div className="p-8 flex justify-between items-center  mb-9">
          <h5 className="text-white font-semibold">{data.fileSize}</h5>
          <span className="rounded-full p-3 bg-slate-900 text-white">
            {data.close ? <IoClose /> : <FaDownload size="0.8em" />}
          </span>
        </div>
      </div>
      {data.tag.isOpened && (
        <div
          className={` absolute bottom-0 left-0 tag ${
            data.tag.tagColor === "blue" ? "bg-blue-700" : "bg-green-700"
          } w-full py-5  text-white`}
        >
          <p className="text-center">{data.tag.tagTitle}</p>
        </div>
      )}
    </motion.div>
  );
}

export default Card;
