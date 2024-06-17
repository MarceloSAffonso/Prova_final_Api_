import { View, Text, Image, TouchableOpacity} from "react-native";
import { styles } from "./styles";
import Logo from '../src/assets/images/google.jpg';
import Icon from '../src/assets/images/icon.png';
import Phone from '../src/assets/images/phone.png';
import Chat from '../src/assets/images/chat.png';
import Help from '../src/assets/images/help.png';
export default function Index() {
  

  return (
    <View style={styles.container}>
      
      <Image style={styles.img} source={Logo}/>
      
      <Text style={styles.confirme}>
        Confirme que é você
      </Text>
      <Text style={styles.dispositivo}>
        Este dispositivo não foi reconhecido. Para sua segurança, o Google deseja confirmar se é realmente você. 
        <TouchableOpacity activeOpacity={0.2}>
        <Text style={styles.saiba}>
         Saiba mais 
      </Text>
      </TouchableOpacity>
      </Text>
      
      <TouchableOpacity activeOpacity={0.1}>
      <View style={styles.emailIcon}>
      <Image style={styles.imgIcon} source={Icon}/>
      <Text style={styles.emailGmail}>
        emailemailemail@gmail.com
      </Text>
      </View>
      </TouchableOpacity>

      <Text style={styles.tentarLogin}>
        Tente outra maneira de fazer login
      </Text>
      
      <View>
      <TouchableOpacity activeOpacity={0.1}>
      <Image style={styles.imgMessage} source={Chat}/>
      <Text style={styles.codigo}>
        Receber um código de verificação no número
        (**)*******-**40
        São cobradas taxas padrão
      </Text>
      </TouchableOpacity>
      </View>

      <View style={styles.ligarPhone}>
      <TouchableOpacity activeOpacity={0.1}>
      <Image style={styles.imgPhone} source={Phone}/>
      <Text style={styles.ligar}>
        Ligar para seu telefone registrado (**)*******-**40
      </Text>
      </TouchableOpacity>
      </View>

      <View style={styles.confirmarPhone}>
      <TouchableOpacity activeOpacity={0.1}>
      <Image style={styles.imgPhone} source={Phone}/>
      <Text style={styles.ligar}>
        Confirmar seu número de telefone de recuperação
      </Text>
      </TouchableOpacity>
      </View>

      <View style={styles.ajuda}>
      <TouchableOpacity activeOpacity={0.1}>
      <Image style={styles.imgPhone} source={Help}/>
      <Text style={styles.ligar}>
        Receber ajuda
      </Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};
