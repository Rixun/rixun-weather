import { Drawer } from '../Drawer';

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#161616',
        },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#555',
        swipeEdgeWidth: 48,
        drawerContentStyle: {
          padding: 16,
        },
      }}
      initialRouteName="index"
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
        name="Settings/Section/index"
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer>
  );
}
