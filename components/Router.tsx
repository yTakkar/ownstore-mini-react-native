import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/global/HomeScreen'
import ProductDetailScreen from '../screens/global/ProductDetailScreen'
import CartScreen from '../screens/cart/CartScreen'
import ProfileDetailScreen from '../screens/profile/ProfileDetailScreen'
import MenuScreen from '../screens/menu/MenuScreen'
import { Ionicons } from '@expo/vector-icons'
import { useTailwind } from 'tailwind-rn'
import WishlistScreen from '../screens/wishlist/WishlistScreen'

const GlobalStack = createNativeStackNavigator()

function GlobalStackScreen() {
  return (
    <GlobalStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <GlobalStack.Screen name="Home" component={HomeScreen} />
      <GlobalStack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </GlobalStack.Navigator>
  )
}

const CartStack = createNativeStackNavigator()

function CartStackScreen() {
  return (
    <CartStack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerShown: false,
      }}
    >
      <CartStack.Screen name="Cart" component={CartScreen} />
    </CartStack.Navigator>
  )
}

const WishlistStack = createNativeStackNavigator()

function WishlistStackScreen() {
  return (
    <WishlistStack.Navigator
      initialRouteName="Wishlist"
      screenOptions={{
        headerShown: false,
      }}
    >
      <WishlistStack.Screen name="Wishlist" component={WishlistScreen} />
    </WishlistStack.Navigator>
  )
}

const ProfileStack = createNativeStackNavigator()

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      initialRouteName="ProfileDetail"
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
    </ProfileStack.Navigator>
  )
}

const MenuStack = createNativeStackNavigator()

function MenuStackScreen() {
  return (
    <MenuStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Menu"
    >
      <MenuStack.Screen name="Menu" component={MenuScreen} />
    </MenuStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const Router: React.FC = () => {
  const tw = useTailwind()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {},
        tabBarShowLabel: false,
      }}
      initialRouteName="GlobalStack"
    >
      <Tab.Screen
        name="GlobalStack"
        component={GlobalStackScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} />
          },
        }}
      />
      <Tab.Screen
        name="WishlistStack"
        component={WishlistStackScreen}
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={focused ? 'heart' : 'heart-outline'} size={size} />
          },
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStackScreen}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} />
          },
          tabBarBadge: '9+',
          tabBarBadgeStyle: tw('bg-primary'),
        }}
      />
      <Tab.Screen
        name="UserStack"
        component={ProfileStackScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={focused ? 'person' : 'person-outline'} size={size} />
          },
        }}
      />
      <Tab.Screen
        name="MenuStack"
        component={MenuStackScreen}
        options={{
          title: 'Menu',
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={focused ? 'menu' : 'menu-outline'} size={32} />
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default Router
