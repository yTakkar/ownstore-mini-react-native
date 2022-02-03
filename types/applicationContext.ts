import { IAuthAttributes } from '../components/ApplicationContext'
import { ISectionInfo } from '../contract/section'

export type ApplicationContextAction = {
  type: 'INIT'
  payload: {
    authAttributes: IAuthAttributes | null
  }
}
