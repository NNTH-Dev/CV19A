import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Category, Scan, Summary } from '@/screens';

import { COLORS } from '@/constants/theme';

const Tab = createBottomTabNavigator();

type HomeProps = {};

const Home = (props: HomeProps) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Quét mã') {
            iconName = focused ? 'qrcode' : 'qrcode';
          } else if (route.name === 'Danh mục') {
            iconName = focused ? 'menu' : 'menu';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      })}
    >
      <Tab.Screen name="Trang chủ" component={Summary} />
      {/* <Tab.Screen name="Sức khỏe" component={Health} /> */}
      <Tab.Screen name="Quét mã" component={Scan} />
      {/* <Tab.Screen name="Vận chuyển" component={Transport} /> */}
      <Tab.Screen name="Danh mục" component={Category} />
    </Tab.Navigator>
  );
};

export default Home;
