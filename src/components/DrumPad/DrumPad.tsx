import "./drumpad.css";
// ! redux
import { useDispatch, useSelector } from "react-redux";
import { editDisplaySound, editSelectedBtn } from "../DrumMachine/drumReducer";

interface component_type {
  label: string;
  display1: string;
  display2: string;
  btnNumber: number;
}
export default function DrumPad({
  label,
  display1,
  display2,
  btnNumber,
}: component_type) {
  let dispatch = useDispatch();
  let powerState = useSelector((state: any) => state.drumReducer.power);
  let bankState = useSelector((state: any) => state.drumReducer.bank);
  let arrOfDisplay: string[] = [display1, display2];
  let audio = document.querySelector("audio") as HTMLAudioElement;
  let arrOfAudios = useSelector((state: any) => state.drumReducer.arrOfAudios);
  // arrOfAudios
  function handleKeyPress(event) {
    if (event.key === label) {
      audio.pause();
      dispatch(editDisplaySound(arrOfDisplay[+bankState]));
      // playing sound effect section
      dispatch(editSelectedBtn(+btnNumber));
      audio.src = arrOfAudios[+btnNumber][+bankState];
      // console.log(arrOfAudios[+bankState][+btnNumber]);
      // console.log(+bankState);
      // console.log(btnNumber);
      audio.play();
    }
  }
  document.body.addEventListener("keydown", handleKeyPress);
  let arrOfSounds = [display1, display2];
  return (
    <>
      <button
        onKeyUp={handleKeyPress}
        onClick={() => {
          if (powerState) {
            // dispatch(editDisplaySound(arrOfDisplay[+bankState]));
            // playing sound effect section
            // dispatch(editSelectedBtn(+btnNumber));
            // audio.src = arrOfAudios[+btnNumber][+bankState];
            // console.log(arrOfAudios[+bankState][+btnNumber]);
            // console.log(+bankState);
            // console.log(btnNumber);

            audio.play();
          }
        }}
        className="bg-yellow-400 uppercase text-black shadow-lg rounded-lg h-[5rem] w-[6rem]"
      >
        <audio
          src={arrOfAudios[+bankState]}
          className={`audio-${label}`}
        ></audio>
        {label}
      </button>
    </>
  );
}
