import { StyleSheet, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';
import { sortRoutes } from 'expo-router/build/sortRoutes';

export default function TabOneScreen() {
  const [nome, atualizaNome] = useState('Nome');
  const [sobrenome, atualizaSobrenome] = useState('Sobrenome');
  const [cpf, atualizaCpf] = useState('CPF');
  const [email, atualizaEmail] = useState('Email');
  const [telefone, atualizaTelefone] = useState('Telefone');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insira seus dados</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image
        source={require('@/assets/images/woman-icon.png')}
      />
      <TextInput
        value={nome}
        onChangeText={atualizaNome}
      />
      <TextInput
        value={sobrenome}
        onChangeText={atualizaSobrenome}
      />
      <TextInput
        value={cpf}
        onChangeText={atualizaCpf}
        inputMode='numeric'
      />
      <TextInput
        value={telefone}
        onChangeText={atualizaTelefone}
        inputMode='numeric'
      />
      <TextInput
        value={email}
        onChangeText={atualizaEmail}
        inputMode='email'
      />
      <Button
        title='ENVIAR'
        onPress={() => { alert(nome + '/n ' + sobrenome + '/n ' + cpf + '/n ' + telefone + '/n ' + email) }}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
