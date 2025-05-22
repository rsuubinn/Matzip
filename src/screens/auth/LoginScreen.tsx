import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import InputField from '../../components/InputField';

interface LoginScreenProps {}

function LoginScreen({}: LoginScreenProps) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  console.log(touched);
  const handleChangeText = (name: string, text: string) => {
    setValues({...values, [name]: text});
  };
  const handleBlur = (name: string) => {
    setTouched({...touched, [name]: true});
  };
  return (
    <SafeAreaView style={styles.container}>
      <InputField
        placeholder="이메일"
        error={'이메일을 입력하세요'}
        touched={touched.email}
        inputMode="email"
        value={values.email}
        onChangeText={text => handleChangeText('email', text)}
        onBlur={() => handleBlur('email')}
      />
      <InputField
        placeholder="비밀번호"
        error={'비밀번호를 입력하세요'}
        touched={touched.password}
        secureTextEntry
        value={values.password}
        onChangeText={text => handleChangeText('password', text)}
        onBlur={() => handleBlur('password')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    gap: 10,
  },
});

export default LoginScreen;
