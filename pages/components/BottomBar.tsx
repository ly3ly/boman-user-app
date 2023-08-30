/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UserCenter from '../screens/UserCenter'
import { Feather } from '@expo/vector-icons'
import HomePage from '../screens/HomePage'

const Tab = createBottomTabNavigator()

const BottomBar: React.FC = () => {
  // console.log(weather)

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'lightblue'
        },
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato'
        }
      }}
    >
      <Tab.Screen
        name={'HomePage'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}
      >
        {() => <HomePage />}
      </Tab.Screen>
      <Tab.Screen
        name={'UserCenter'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'user'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}
      >
        {() => <UserCenter />}
      </Tab.Screen>

    </Tab.Navigator>
  )
}

export default BottomBar
