/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UserCenter from '../screens/UserCenter'
import { Feather } from '@expo/vector-icons'
import HomePage from '../screens/HomePage'


const BottomBar: React.FC = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#f0f0f0'
        },
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        //   fontSize: 25,
        //   color: 'tomato'
        // }
      }}
    >
      <Tab.Screen
        name={'UserCenter'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'user'}
              size={25}
              color={focused ? '#3498db' : 'black'}
            />
          )
        }}
      >
        {() => <UserCenter />}
      </Tab.Screen>
      <Tab.Screen
        name={'HomePage'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? '#3498db' : 'black'}
            />
          )
        }}
      >
        {() => <HomePage />}
      </Tab.Screen>


    </Tab.Navigator>
  )
}

export default BottomBar
