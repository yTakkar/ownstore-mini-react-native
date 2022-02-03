import { Dispatch, useEffect, useReducer, useState } from 'react'
import { defaultApplicationContext, IApplicationContextProps, IAuthAttributes } from '../components/ApplicationContext'
import { ApplicationContextAction } from '../types/applicationContext'

// TODO: Break this into module-specific multiple reducers for scaling
// Redux will be a better choice here for scalable apps
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
