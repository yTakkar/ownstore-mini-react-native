import Constants from 'expo-constants'

const ENVs = Constants.manifest?.extra?.env || {}

export default {
  global: {
    app: {
      name: ENVs.APP_NAME,
    },
    imageBaseUrl: process.env.APP_IMAGE_BASE_URL,
    apiBaseUrl: process.env.APP_API_BASE_URL,
  },
}
