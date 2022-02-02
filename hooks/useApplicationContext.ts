import useApplicationContextReducer from './useApplicationContextReducer'

const useApplicationContext = () => {
  const { applicationContext, dispatchApplicationContext } = useApplicationContextReducer()

  // useEffect(() => {
  //   if (isLoggedIn()) {
  //     dispatchApplicationContext({
  //       type: 'INIT',
  //       payload: {
  //         authAttributes: {
  //           authToken: getAuthToken(),
  //           authUserId: getAuthUserId(),
  //         },
  //       },
  //     })
  //   }
  // }, [])

  const logout = () => {
    return
  }

  applicationContext.logout = logout
  applicationContext.dispatch = dispatchApplicationContext

  return {
    applicationContext,
    dispatchApplicationContext,
  }
}

export default useApplicationContext
