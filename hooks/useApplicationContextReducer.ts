import { Dispatch, useEffect, useReducer, useState } from 'react'
import { defaultApplicationContext, IApplicationContextProps, IAuthAttributes } from '../components/ApplicationContext'
import { ApplicationContextAction } from '../types/applicationContext'

// TODO: Break this into module-specific multiple reducers for scaling
const applicationReducer = (
  state: IApplicationContextProps,
  action: ApplicationContextAction
): IApplicationContextProps => {
  switch (action.type) {
    case 'INIT': {
      const { authAttributes } = action.payload

      return {
        ...state,
        authAttributes,
      }
    }

    case 'RESET_USER': {
      const { device } = state
      return {
        ...defaultApplicationContext,
        device: device,
      }
    }

    case 'RESET': {
      const { device } = state
      return {
        ...defaultApplicationContext,
        device: device,
      }
    }

    default:
      return state
  }
}

const useApplicationContextReducer = (): {
  applicationContext: IApplicationContextProps
  dispatchApplicationContext: Dispatch<ApplicationContextAction>
} => {
  const [applicationContext, dispatchApplicationContext] = useReducer(applicationReducer, defaultApplicationContext)

  return {
    applicationContext,
    dispatchApplicationContext,
  }
}

export default useApplicationContextReducer
