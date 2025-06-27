import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import CustomButton from '../../components/CustomButton';
import { AuthStackParamList } from '../../navigations/stack/AuthStackNavigator';
import { authNavigations } from '../../constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <CustomButton
          label="로그인하기"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          label="회원가입하기"
          variant="outlined"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

export default AuthHomeScreen;
