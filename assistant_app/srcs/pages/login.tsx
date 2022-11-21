import {Platform, StyleSheet, Text, View, Button, Linking} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import { useEffect } from 'react';

function Login() {
  const login = () => {
    const authorizationUrl = `https://github.com/login/oauth/authorize?client_id=${Config.CLIENT_ID}`
    Linking.openURL(authorizationUrl);
  };

  useEffect(() => {
    Linking.addEventListener('url', (url) => {
      console.log(url);
    })
  }, []);

  return (
    <View>
      <Button title="login" onPress={login} />
    </View>
  )
};

export default Login;
