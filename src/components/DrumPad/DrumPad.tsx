import "./drumpad.css";
interface component_type {
  label: string;
  audio1?: string;
  audio2?: string;
}
export default function DrumPad({ label, audio1, audio2 }: component_type) {
  return (
    <>
      <button
        // onClick={() => alert(label)}
        className="bg-yellow-400 text-black shadow-lg rounded-lg h-[5rem] w-[6rem]"
      >
        {label}
      </button>
    </>
  );
}
