import { IDeviceInfo } from '../components/ApplicationContext'
import { Dimensions, Platform } from 'react-native'
import { PlatformType } from '../contract/constants'
import * as Device from 'expo-device'

export const getDeviceInfo = (): IDeviceInfo => {
  let platformType = PlatformType.ANDROID

  if (Platform.OS === 'ios') {
    platformType = PlatformType.IOS
  }

  return {
    platform: platformType,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    version: Platform.Version,
    brand: Device.brand,
    manufacturer: Device.manufacturer,
    modelName: Device.modelName,
  }
}
