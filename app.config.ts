import { getAbsPath } from './scripts/fileSystem'

const appEnv = process.env.APP_ENV

if (!appEnv) {
  console.error('APP_ENV env variable is not set', process.env.APP_ENV)
  process.exit(1)
}

const { parsed: parsedEnvs } = require('dotenv').config({
  path: getAbsPath(`env/.secret/${appEnv}.env`),
})

export default {
  name: 'own-store-mini-app-rn',
  slug: 'own-store-mini-app-rn',
  platforms: ['android', 'ios'],
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.takkar.ownstoreminirn',
    buildNumber: '1.0.0',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.takkar.ownstoreminirn',
    versionCode: 1,
  },
  web: {
    favicon: './assets/images/favicon.png',
  },
  extra: {
    env: {
      APP_ENV: process.env.APP_ENV,
      ...parsedEnvs,
    },
  },
}
