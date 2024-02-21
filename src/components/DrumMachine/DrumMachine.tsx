import "./drummachine.css";
// mui
import { Slider } from "@mui/material";
// components
import { DrumPad } from "../../components";
// !redux
import { useDispatch, useSelector } from "react-redux";
import { togglePower, toggleBank } from "./drumReducer";
// assets
import logo from "/music-solid.svg";

export default function DrumMachine() {
  let powerState = useSelector((state: any) => state.drumReducer.power);
  let bankState = useSelector((state: any) => state.drumReducer.bank);
  let arrOfAudios = useSelector((state: any) => state.drumReducer.arrOfAudios);
  let audio = document.createElement("audio") as HTMLAudioElement;
  audio.volume = 30 / 100;
  document.body.append(audio);
  let displayState = useSelector(
    (state: any) => state.drumReducer.displaySound
  );
  let dispatch = useDispatch();
  interface drumPads_type {
    label: string;
    display1?: string;
    display2?: string;
    audio1?: string;
    audio2?: string;
  }
  let drumPads: drumPads_type[] = [
    { label: "q", display1: "Heater 1", display2: "Chord 1" },
    { label: "w", display1: "Heater 2", display2: "Chord 2" },
    { label: "e", display1: "Heater 3", display2: "Chord 3" },
    { label: "a", display1: "Heater 4", display2: "Shaker" },
    { label: "s", display1: "Clap", display2: "Open HH" },
    { label: "d", display1: "Open HH", display2: "Closed HH" },
    { label: "z", display1: "Kick n' Hat", display2: "Punchy Kick" },
    { label: "x", display1: "Kick", display2: "Side Stick" },
    { label: "c", display1: "Closed HH", display2: "Snare" },
  ];

  return (
    <>
      <article className="text-white bg-slate-900 rounded-xl px-[2rem] grid grid-cols-2 gap-x-[2rem] items-center">
        <section className="grid grid-cols-3  grid-rows-3 gap-[1rem] text-[1.5rem] font-bold">
          {drumPads.map((e, i) => {
            return (
              <DrumPad
                key={i}
                display1={e.display1}
                display2={e.display2}
                label={e.label}
                arrOfAd={arrOfAudios[i]}
              />
            );
          })}
        </section>
        <section className="flex flex-col justify-between items-center space-y-[1rem]">
          <div className="flex justify-end mt-[1rem] w-full">
            <img src={logo} alt="logo" height={30} width={30} />
          </div>
          {/*  */}
          <div className="flex flex-col items-center cursor-pointer">
            <p className="text-[1.4rem] font-bold ">Power</p>
            <div
              onClick={() => dispatch(togglePower())}
              className={`bg-black w-[4.5rem] h-[2rem] border-2 border-black ${
                powerState ? "pl-[2.2rem]" : "pl-[0rem]"
              }`}
            >
              <div className="h-full w-[2rem] bg-blue-500"></div>
            </div>
          </div>
          {/*  */}
          <div
            id="display"
            className="bg-green-500 text-center w-[13rem] py-[1rem] text-[1.4rem] font-bold"
          >
            {displayState}
          </div>
          {/*  */}
          <Slider
            defaultValue={30}
            aria-label="Disabled slider"
            onChange={(e: any) => {
              let audioPanel = document.querySelectorAll("audio");
              audioPanel.forEach((audio) => {
                audio.volume = parseFloat(e.target.value) / 100;
              });
            }}
          />
          {/*  */}
          <div className="flex flex-col items-center">
            <p className="text-[1.4rem] font-bold ">Bank</p>
            <div
              onClick={() => dispatch(toggleBank())}
              className={`bg-black w-[4.5rem] h-[2rem] border-2 border-black cursor-pointer ${
                bankState ? "pl-[2.2rem]" : "pl-[0rem]"
              }`}
            >
              <div className="h-full w-[2rem] bg-blue-500"></div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
