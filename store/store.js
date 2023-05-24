import { create } from 'zustand';
import { HORIZONTAL_CARDS, VERTICAL_LIST } from '../config/constants';
export const useWeatherStore = create((set) => ({
  forecast: {},
  current: {},
  weekly: [],
  setAllForecast: (forecast) => set((state) => ({ forecast: forecast, current: forecast.current, weekly: forecast.weekly })),
}));

const defaultHourlyState = HORIZONTAL_CARDS;
const defaultWeeklyState = VERTICAL_LIST;
export const useSettingStore = create((set) => ({
  hourlyViewType: defaultHourlyState,
  weeklyViewType: defaultWeeklyState,
  setHourlyViewType: (hourlyViewType) => set(() => ({ hourlyViewType: hourlyViewType })),
  setWeeklyViewType: (weeklyViewType) => set(() => ({ weeklyViewType: weeklyViewType })),
}));
