import { create } from 'zustand';
export const useWeatherStore = create((set) => ({
  forecast: {},
  current: {},
  weekly: [],
  setForecast: (forecast) => set((state) => ({ forecast: forecast, current: forecast.current, weekly: forecast.weekly })),
}));
