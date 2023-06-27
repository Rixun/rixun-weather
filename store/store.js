import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { HORIZONTAL_CARDS, VERTICAL_LIST } from '../config/constants';

export const useWeatherStore = create((set) => ({
  forecast: {},
  current: {},
  daily: [],
  setAllForecast: (forecast) =>
    set((state) => ({
      forecast: forecast,
      current: forecast.current,
      hourly: forecast.hourly,
      daily: forecast.daily,
    })),
}));

const defaultHourlyState = HORIZONTAL_CARDS;
const defaultDailyState = VERTICAL_LIST;
export const useSettingStore = create(
  persist(
    (set) => ({
      hourlyViewType: defaultHourlyState,
      dailyViewType: defaultDailyState,
      setHourlyViewType: (hourlyViewType) =>
        set(() => ({ hourlyViewType: hourlyViewType })),
      setDailyViewType: (dailyViewType) =>
        set(() => ({ dailyViewType: dailyViewType })),
    }),
    { name: 'setting-storage', storage: createJSONStorage(() => AsyncStorage) }
  )
);

export const useLocationStore = create(
  persist(
    (set) => ({
      locations: [],
      defaultLocation: {},
      addNewLocation: (locationData) =>
        set((state) => ({ locations: [...state.locations, locationData] })),
      removeLocation: (locationId) =>
        set((state) => ({
          locations: state.locations.filter(
            (location) => location.id !== locationId
          ),
        })),
      setDefaultLocation: (locationData) =>
        set(() => ({ defaultLocation: locationData })),
    }),
    { name: 'location-storage', storage: createJSONStorage(() => AsyncStorage) }
  )
);

export const useSearchStore = create((set) => ({
  searchList: [],
  setSearchList: (searchListData) =>
    set(() => ({ searchList: searchListData })),
}));
