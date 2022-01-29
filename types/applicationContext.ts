import { IAuthAttributes } from '../components/ApplicationContext'

export type ApplicationContextAction =
  | {
      type: 'INIT'
      payload: {
        authAttributes: IAuthAttributes | null
      }
    }
  | {
      type: 'RESET_USER'
    }
  | {
      type: 'RESET'
    }
