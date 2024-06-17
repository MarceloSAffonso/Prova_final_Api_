import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        paddingTop:60,
        paddingHorizontal: 30
    },
      login: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 28,
        marginTop: 30
        
    },
      contaGoogle: {
        color: '##000000',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20
    },
      email: {
        color: '#1886f4',
        fontSize: 16,
        marginTop: 90,
    },
      senha: {
        color: '#0676e5',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20
    },
      proxima: {
        textAlign: 'center',
        alignContent: 'center',
        width: 100,
        height: 48,
        top: 80,
        color: 'white',
        fontWeight: 'bold',
        left: 240,
        borderRadius: 6,
        backgroundColor: '#0676e5',
        padding: 13,
        overflow: 'hidden'
    },
      saiba:{
        color: '#191970',
        fontWeight: 'bold',
        top:3

    },
      text: {
        color: '#708090',
        fontSize: 14,
        marginTop: 20
    },
      criarConta: {
        color: '#0676e5',
        fontSize: 14,
        top: 110,
        fontWeight: 'bold'
    },
      linha:{
        color: '#1886f4',
        marginTop: -26,
        fontWeight: '900'
    },
      img:{
        width: 100,
        height: 40,
        alignSelf: 'center',
        top:-20
    },
      input: {
        backgroundColor:'#fff',
        color: '#000',
        fontSize: 19,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 0,
        borderRadius: 7,
    },
      confirme:{
        fontSize: 25,
        textAlign: 'center'
    },
      dispositivo:{
        color: '#708090',
        fontSize: 13,
        marginTop: 20,
        textAlign: 'center',
        top: -10
    },
      emailGmail:{
        textAlign: 'center',
    },
      imgIcon:{
        tintColor: '#6495ed',
        width: 25,
        height: 21,
    },
      emailIcon:{
        borderWidth: 1,
        borderRadius: 10,
        width:230,
        flexDirection: 'row',
        padding: 1,
        gap: 10,
        left: 45
    
    },
      tentarLogin:{
        fontSize: 18,
        top: 30,
        right: 13,
        fontWeight: 'bold'
    },
      codigo:{
        top: 30,
        paddingLeft: 50
    },
      ligar:{
        top: 60,
        paddingLeft: 50
    },
      ligarPhone:{
        top: -20
    },
      confirmarPhone:{
        top: -15
    }, 
      ajuda:{
        top: -10
    },
      imgPhone:{
        tintColor: '#000',
        width: 25,
        height: 21,
        top: 80
    },
      imgMessage:{
        tintColor: '#000',
        width: 25,
        height: 21,
        top: 70
    },
  
  })
  