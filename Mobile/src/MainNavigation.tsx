
import { useAppSelector } from "./hooks/useRedux";
import AuthNavigator from "./screens/Auth/authStack";
import ContentNavigator from "./screens/Content/contentStack";


export const MainNavigation = () => {
  const { auth: { isLogged } } = useAppSelector()
  if(isLogged) {
    return <ContentNavigator />
  }

  return <AuthNavigator />


}

export default MainNavigation;