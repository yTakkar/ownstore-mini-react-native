import { ImageSourcePropType } from 'react-native'
import { ImageSourceType } from '../components/core/CoreImage'
import appConfig from '../config/appConfig'

// Each image url should be wrapped with this function
export const prepareExternalImageUrl = (
  urlPath: string,
  source: ImageSourceType,
  variant?: string
): ImageSourcePropType => {
  if (source === ImageSourceType.CLOUD) {
    if (variant && appConfig.integrations.imageTransformation.enabled) {
      return {
        uri: `${appConfig.global.imageBaseUrl}/${variant}${urlPath || ''}`,
      }
    } else {
      return {
        uri: `${appConfig.global.imageBaseUrl}${urlPath || ''}`,
      }
    }
  }

  return {
    uri: urlPath,
  }
}
