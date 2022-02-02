import Constants from 'expo-constants'

const ENVs = Constants.manifest?.extra?.env || {}

export default {
  global: {
    app: {
      name: ENVs.APP_NAME,
    },
    imageBaseUrl: ENVs.APP_IMAGE_BASE_URL,
    apiBaseUrl: ENVs.APP_API_BASE_URL,
  },
}
