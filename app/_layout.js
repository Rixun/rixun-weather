import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Drawer } from '../utility/Drawer';

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#161616',
          },
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#656565',
          swipeEdgeWidth: 48,
          drawerContentStyle: {
            borderRadius: 16,
          },
          headerStyle: {
            backgroundColor: '#161616',
            borderBottomColor: '#161616',
          },
          headerTintColor: '#fff',
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
