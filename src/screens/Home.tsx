import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useAuth } from '../context/AuthContext';
import styles from './styles';
export const HomeScreen = () => {
  const { logout } = useAuth();
  const [use, setUse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleRegister = async () => {
      try {
        
       
      } catch (error) {
        setErrorMessage(error.message);
      }
  };
  return (
    <View style={styles.container}>
      <Text style={{color:'#fff', fontSize: 16, marginBottom:5}} >Buscar Repositórios do Github</Text>
      <TextInput
        placeholder="Digite o nome de usuário"
        value={use}
        onChangeText={setUse}
        style={styles.inputText}
      />
      <Button title="Buscar" onPress={handleRegister} />
        {errorMessage ? <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text> : null}
      <Button title="Sair" onPress={logout} />
    </View>
  );
};

export default HomeScreen;