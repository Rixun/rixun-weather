import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import { useThemeStore } from '../store/store';
export default function Layout() {
  const { textColor, backgroundColor } = useThemeStore((state) => ({
    textColor: state.textColor,
    backgroundColor: state.backgroundColor,
  }));

  return (
    <ThemeProvider value={DarkTheme}>
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: backgroundColor,
          },
          drawerActiveTintColor: textColor,
          drawerContentStyle: {
            borderRadius: 16,
          },
          headerStyle: {
            backgroundColor: backgroundColor,
            borderBottomColor: backgroundColor,
          },
          headerTintColor: textColor,
        }}
        initialRouteName="index"
        backBehavior="history"
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="Settings/index"
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
          }}
        />
        <Drawer.Screen
          name="Locations/index"
          options={{
            drawerLabel: 'Locations',
            title: 'Locations',
          }}
        />
        <Drawer.Screen
          name="Search/index"
          options={{
            drawerLabel: 'Search',
            title: 'Search',
          }}
        />
        <Drawer.Screen
          name="Settings/Section/Section"
          options={{
            drawerItemStyle: { display: 'none' },
          }}
        />
        <Drawer.Screen
          name="Search/SearchBar/SearchBar"
          options={{
            drawerItemStyle: { display: 'none' },
          }}
        />
      </Drawer>
    </ThemeProvider>
  );
}
