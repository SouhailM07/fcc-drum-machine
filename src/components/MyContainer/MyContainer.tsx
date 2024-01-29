import "./mycontainer.css";
// components
import { DrumMachine } from "../../components";

export default function MyContainer() {
  return (
    <>
      <main className="flex items-center justify-center h-screen bg-gray-800">
        <DrumMachine />
      </main>
    </>
  );
}
