import "./drumpad.css";
// ! redux
import { useDispatch, useSelector } from "react-redux";
import { editDisplaySound } from "../DrumMachine/drumReducer";

interface component_type {
  label: string;
  display1: string;
  display2: string;
  btnNumber: number;
  arrOfAd: any;
}
export default function DrumPad({
  label,
  display1,
  display2,
  arrOfAd,
}: component_type) {
  let dispatch = useDispatch();
  let powerState = useSelector((state: any) => state.drumReducer.power);
  let bankState = useSelector((state: any) => state.drumReducer.bank);
  let arrOfDisplay = [display1, display2];

  document.body.addEventListener("keypress", handleKeyPress);
  // arrOfAudios
  let handleSoundText = () => {
    dispatch(editDisplaySound(arrOfDisplay[+bankState]));
  };
  function handleKeyPress(event) {
    if (event.key === label) {
      let btn = document.querySelector(`.btn-${label}`) as HTMLButtonElement;
      btn.click();
    }
  }
  return (
    <>
      <button
        onKeyUp={handleKeyPress}
        onClick={() => {
          let btn = document.querySelector(
            `.btn-${label}`
          ) as HTMLButtonElement;
          btn.classList.add("scale-up-center");
          setTimeout(() => {
            btn.classList.remove("scale-up-center");
          }, 400);
          if (powerState == true) {
            handleSoundText();
            let audio = document.querySelector(
              `#audio-${label}`
            ) as HTMLAudioElement;
            audio.play();
          }
        }}
        className={`btn-${label} bg-yellow-400 uppercase text-black shadow-lg rounded-lg h-[5rem] w-[6rem]`}
      >
        <audio src={arrOfAd[+bankState]} id={`audio-${label}`}></audio>
        {label}
      </button>
    </>
  );
}
