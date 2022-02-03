import Constants from 'expo-constants'

const ENV = Constants.manifest?.extra?.env || {}

export default {
  global: {
    app: {
      name: ENV.APP_NAME,
    },
    imageBaseUrl: ENV.APP_IMAGE_BASE_URL,
    apiBaseUrl: ENV.APP_API_BASE_URL,
  },
  integrations: {
    imageTransformation: {
      enabled: ENV.APP_INTEGRATION_CLOUDINARY_ENABLED === 'true',
      variants: {
        // square (1:1)
        SQUARE_300: 't_s_300', //c_fill,h_300,w_300
        SQUARE_150: 't_s_150', //c_fill,h_150,w_150
        SQUARE_500: 't_s_500', //c_fill,h_500,w_500

        // wide (16:9)
        WIDE_620: 't_w_620', // c_fill,w_620,h_350

        // full screen
        FULL_1280: 't_full_1280', // c_fill,w_1280
      },
    },
  },
}
