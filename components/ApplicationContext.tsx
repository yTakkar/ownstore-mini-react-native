import React from 'react'
import { ICartDetail } from '../contract/cart'
import { PlatformType } from '../contract/constants'
import { IUserDetail } from '../contract/user'
import { getDeviceInfo } from '../utils/applicationContext'

export interface IDeviceInfo {
  platform: PlatformType
  width: number
  height: number
  version: string | number
  brand: string | null
  manufacturer: string | null
  modelName: string | null
}

export interface IAuthAttributes {
  authToken: string | null
  authUserId: string | null
}

export interface IApplicationContextProps {
  device: IDeviceInfo
  user: IUserDetail | null
  cart: ICartDetail | null
  userGlobalDetailLoaded: boolean
  authAttributes: IAuthAttributes | null

  logout: () => void
}

export const defaultApplicationContext: IApplicationContextProps = {
  device: getDeviceInfo(),
  user: null,
  cart: null,
  userGlobalDetailLoaded: true,

  authAttributes: {
    authToken: null,
    authUserId: null,
  },

  logout: () => null,
}

const ApplicationContext = React.createContext<IApplicationContextProps>(defaultApplicationContext)

export default ApplicationContext
