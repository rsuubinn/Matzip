import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';

interface LoginScreenProps {

}

function LoginScreen({}: LoginScreenProps) {
  return (
    <SafeAreaView>
        <View>
            <Button title='회원가입 화면으로 이동' />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default LoginScreen;