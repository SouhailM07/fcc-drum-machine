import { createSlice } from "@reduxjs/toolkit";
// ?
import a1_1 from "../../music/v1/Heater-1.mp3";
import a2_1 from "../../music/v1/Heater-2.mp3";
import a3_1 from "../../music/v1/Heater-3.mp3";
import a4_1 from "../../music/v1/Heater-4_1.mp3";
import a5_1 from "../../music/v1/Cev_H2.mp3";
import a6_1 from "../../music/v1/Heater-6.mp3";
import a7_1 from "../../music/v1/Kick_n_Hat.mp3";
import a8_1 from "../../music/v1/Dsc_Oh.mp3";
import a9_1 from "../../music/v1/RP4_KICK_1.mp3";

let initialState = {
  power: false,
  bank: false,
  displaySound: "Something",
  selectedBtn: 0,
  arrOfAudios: [
    [a1_1, "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"],
    [a2_1, "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"],
    [a3_1, "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"],
    [a4_1, "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"],
    [a5_1, "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"],
    [a6_1, "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"],
    [a7_1, "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"],
    [a8_1, "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"],
    [a9_1, "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"],
  ],
};

let drumSlicer = createSlice({
  name: "drum slicer",
  initialState,
  reducers: {
    togglePower: (state) => {
      state.power = !state.power;
    },
    toggleBank: (state) => {
      state.bank = !state.bank;
    },
    editDisplaySound: (state, action) => {
      state.displaySound = action.payload;
    },
    editSelectedBtn: (state, action) => {
      state.selectedBtn = action.payload;
    },
  },
});

export const { toggleBank, togglePower, editDisplaySound, editSelectedBtn } =
  drumSlicer.actions;
export default drumSlicer.reducer;
