import "./drummachine.css";
// mui
import { Slider } from "@mui/material";
// components
import { DrumPad } from "../../components";
// assets
import logo from "/music-solid.svg";

export default function DrumMachine() {
  interface drumPads_type {
    label: string;
    audio1?: string;
    audio2?: string;
    displayText?: string;
  }
  let drumPads: drumPads_type[] = [
    { label: "Q" },
    { label: "W" },
    { label: "E" },
    { label: "A" },
    { label: "S" },
    { label: "D" },
    { label: "Z" },
    { label: "X" },
    { label: "C" },
  ];
  return (
    <>
      <article className="text-white border-2 px-[2rem] border-red-500 grid grid-cols-2 gap-x-[2rem] items-center">
        <section className="grid grid-cols-3 grid-rows-3 gap-[1rem] text-[1.5rem] font-bold">
          {drumPads.map((e, i) => {
            return <DrumPad key={i} label={e.label} />;
          })}
        </section>
        <section className="flex flex-col justify-between items-center space-y-[1rem]">
          <div className="flex justify-end pr-[1rem] w-full">
            <img src={logo} alt="logo" height={30} width={30} />
          </div>
          {/*  */}
          <div className="flex flex-col items-center">
            <p className="text-[1.4rem] font-bold ">Power</p>
            <div className="bg-black w-[4.5rem] h-[2rem] border-2 border-black">
              <div className="h-full w-[2rem] bg-blue-500"></div>
            </div>
          </div>
          {/*  */}
          <div
            id="display"
            className="bg-green-500 text-center w-[13rem] py-[1rem] text-[1.4rem] font-bold"
          >
            Something
          </div>
          {/*  */}
          <Slider defaultValue={30} aria-label="Disabled slider" />
          {/*  */}
          <div className="flex flex-col items-center">
            <p className="text-[1.4rem] font-bold ">Bank</p>
            <div className="bg-black w-[4.5rem] h-[2rem] border-2 border-black">
              <div className="h-full w-[2rem] bg-blue-500"></div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
