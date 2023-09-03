"use client";

import React, { useState } from "react";

import Intro from "./scenes/Intro";
import Stage from "./scenes/Intro";
import Result from "./scenes/Result";

export default function Home() {
  const [scene, setScene] = useState<string>("intro");

  const handleClickChangeScene = (name: string) => {
    setScene(name);
  };

  return (
    <div className="relative flex flex-col justify-start items-center w-full h-screen pt-10 box-border">
      <div className="overflow-hidden">
        <div className="w-[600px] h-[800px]">
          {scene === "intro" && (
            <Intro onClickStart={() => setScene("stage")} />
          )}
          {scene === "stage" && <Stage />}
          {scene === "result" && <Result />}
        </div>
      </div>
    </div>
  );
}
