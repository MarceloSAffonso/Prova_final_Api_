import { View, Text, Image, TouchableOpacity, TextInput} from "react-native";
import { styles } from "./styles";
import Image1 from '../src/assets/images/google.jpg';
export default function Index() {
  
  return (
    <View style={styles.container}>
      
      <Image style={styles.img} source={Image1}/>
      
      <Text style={styles.login}>
        Login
      </Text>

      <Text style={styles.contaGoogle}>
        Use sua conta do Google
      </Text>

      <Text style={styles.email}>
        Insira seu e-mail
      </Text>

      <TextInput style={styles.input} placeholder={''} placeholderTextColor={'#000'} />

      <Text style={styles.linha}>_____________________________________</Text>

      <TouchableOpacity activeOpacity={0.2}>
      <Text style={styles.senha}>
        Esqueceu a senha?
      </Text>
      </TouchableOpacity>
      
      <Text style={styles.text}>
        Não está no seu computador? Use o modo visitante para fazer login com privacidade. Saiba mais
      </Text>

      <TouchableOpacity activeOpacity={0.2}>
      <Text style={styles.criarConta}>
        Criar conta
      </Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.2}>
      <Text style={styles.proxima}>
        Proxima
      </Text>
      </TouchableOpacity>
    </View>
  );
};
