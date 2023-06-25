import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { HORIZONTAL_CARDS, VERTICAL_LIST } from '../config/constants';

export const useWeatherStore = create((set) => ({
  forecast: {},
  current: {},
  weekly: [],
  setAllForecast: (forecast) =>
    set((state) => ({
      forecast: forecast,
      current: forecast.current,
      weekly: forecast.weekly,
    })),
}));

const defaultHourlyState = HORIZONTAL_CARDS;
const defaultWeeklyState = VERTICAL_LIST;
export const useSettingStore = create(
  persist(
    (set) => ({
      hourlyViewType: defaultHourlyState,
      weeklyViewType: defaultWeeklyState,
      setHourlyViewType: (hourlyViewType) =>
        set(() => ({ hourlyViewType: hourlyViewType })),
      setWeeklyViewType: (weeklyViewType) =>
        set(() => ({ weeklyViewType: weeklyViewType })),
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
