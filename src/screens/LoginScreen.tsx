import React, { useState } from 'react';
import { View, TextInput, Button, Text,Image } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useLinkTo, useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo-rio-on.png';
import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth();

  const navigation = useNavigation();
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      login(auth.currentUser); // Atualiza o estado de autenticação
    } catch (error) {
      setErrorMessage('Credenciais inválidas');
    }
  };

  const handleNewUser = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logotipo} />
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.inputText}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.inputText}
      />
      <Button title="Entrar" onPress={handleLogin}  />
      <Text style={styles.linkbtn} onPress={() => navigation.navigate('Register')} >
        Criar uma conta
      </Text>
      {errorMessage ? <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text> : null}
    </View>
  );
};

export default LoginScreen;

