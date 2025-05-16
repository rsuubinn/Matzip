import MainDrawerNavigator from '../drawer/MainDrawerNavigator';
import AuthStackNavigator from '../stack/AuthStackNavigator';

const RootNavigator = () => {
  const isLoggedIn = true;

  return isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />;
};

export default RootNavigator;
