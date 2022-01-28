import Constants from 'expo-constants'

const ENVs = Constants.manifest?.extra?.env || {}

export default {
  name: ENVs.APP_NAME_TEMP,
}
