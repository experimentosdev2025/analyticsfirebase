import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#2f00ff',
      flex: 1, justifyContent: 'center', padding: 16,
      alignItems: 'center',
    },
    logotipo:{
      justifyContent: 'center', 
      width:203,height:76, marginBottom:16,
    },
    inputText:{
      height: 36, borderColor: '#ccc', 
      borderWidth: 1, marginBottom: 8,
      width: 361,backgroundColor: '#fff',
      borderRadius:4,padding: 5,
      color: '#727171',
    },
    linkbtn:{
      color: '#ffffff',
      marginTop: 16,
      textAlign: 'center',
    }
});

export default styles