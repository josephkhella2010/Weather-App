import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface InitialStateType {
  city: string | null;
  isCityCorrect: boolean;
  weatherInfo: any | null;
  isLoading: boolean;
}
const initialState: InitialStateType = {
  city: JSON.parse(localStorage.getItem("city") || "null"),
  isCityCorrect: JSON.parse(localStorage.getItem("isCity") || "false"),
  weatherInfo: null,
  isLoading: false,
};

const CitySlice = createSlice({
  name: "CitySlice",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string | null>) => {
      state.city = action.payload;
      if (action.payload) {
        localStorage.setItem("city", JSON.stringify(action.payload)); // ✅ wrap in quotes
      } else {
        localStorage.removeItem("city");
      }
    },
    setIsCityCorrect: (state, action: PayloadAction<boolean>) => {
      state.isCityCorrect = action.payload;
      if (action.payload) {
        localStorage.setItem("isCity", JSON.stringify(action.payload)); // store as boolean
      } else {
        localStorage.removeItem("isCity");
      }
    },
    setWeatherInfo: (state, action: PayloadAction<any | null>) => {
      state.weatherInfo = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCity, setWeatherInfo, setIsCityCorrect, setIsLoading } =
  CitySlice.actions;
export default CitySlice.reducer;
