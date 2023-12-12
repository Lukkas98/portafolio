"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import OverlayDiv from "../components/animates/pageProyects/overlayDiv";
import JobWindow from "../components/animates/pageProyects/jobWindow";
import data from "./data";
import Link from "next/link";
import AnimatedText from "../components/animates/animateText";

export default function Proyects() {
  const [selectedId, setSelectedId] = useState(null);
  const [item, setItem] = useState({});

  const overlaysData = data;

  const handleDeleteItem = () => {
    setSelectedId(null);
    setItem(null);
  };

  return (
    <section className="my-5 mx-2 relative">
      <div className="flex flex-col items-center">
        <motion.h2
          className="text-4xl h-fit w-fit bg-orange-600 rounded-3xl py-2 px-5 my-0 mx-auto"
          whileHover={{
            color: "#18dcff",
            textShadow: "1px 1px 1px #000",
            backgroundColor: "#272727",
            scale: 1.1,
          }}
        >
          <AnimatedText text={"Proyectos"} />
        </motion.h2>
        <Link className="mt-4" href={"/"}>
          Volver
        </Link>
      </div>
      {selectedId && (
        <div
          className="fixed top-0 left-0 w-screen h-full bg-opacity-10 bg-black z-20"
          onClick={() => handleDeleteItem()}
        ></div>
      )}
      <section className="relative flex flex-wrap justify-evenly items-center gap-10 text-xl mt-12">
        {overlaysData.map((overlay) => (
          <motion.div key={overlay.id} layoutId={overlay.id} className="grid gap-4">
            <div className="flex justify-between items-center">
              <p className="text-lg">{overlay.title}</p>
              <motion.a
                className="text-base"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                title="Repositorio"
                whileHover={{scale:1.1}}
              >
                <img
                  src="/icons/github.svg"
                  alt="logo Github"
                  className="w-10 mr-5"
                />
              </motion.a>
            </div>
            <OverlayDiv
              setSelectedId={setSelectedId}
              setItem={setItem}
              overlay={overlay}
            />
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <JobWindow
              selectedId={selectedId}
              handleDeleteItem={handleDeleteItem}
              item={item}
            />
          )}
        </AnimatePresence>
      </section>
    </section>
  );
}