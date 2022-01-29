import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/global/HomeScreen'
import ProductDetailScreen from '../screens/global/ProductDetailScreen'
import CartScreen from '../screens/cart/CartScreen'
import ProfileDetailScreen from '../screens/profile/ProfileDetailScreen'
import MenuScreen from '../screens/menu/MenuScreen'

const GlobalStack = createNativeStackNavigator()

function GlobalStackScreen() {
  return (
    <GlobalStack.Navigator>
      <GlobalStack.Screen name="Home" component={HomeScreen} />
      <GlobalStack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </GlobalStack.Navigator>
  )
}

const CartStack = createNativeStackNavigator()

function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={CartScreen} />
    </CartStack.Navigator>
  )
}

const ProfileStack = createNativeStackNavigator()

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
    </ProfileStack.Navigator>
  )
}

const MenuStack = createNativeStackNavigator()

function MenuStackScreen() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Menu" component={MenuScreen} />
    </MenuStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const Router: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="GlobalStack" component={GlobalStackScreen} />
      <Tab.Screen name="CartStack" component={CartStackScreen} />
      <Tab.Screen name="UserStack" component={ProfileStackScreen} />
      <Tab.Screen name="MenuStack" component={MenuStackScreen} />
    </Tab.Navigator>
  )
}

export default Router
