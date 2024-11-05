  import React, { useState } from 'react';
  import { View, StyleSheet, Image , ImageBackground } from 'react-native';
  import { TextInput, Button } from 'react-native-paper';


  const PasswordRecoveryScreen = () => {
    const [email, setEmail] = useState('');

    const handlePasswordRecovery = () => {
      // Handle password recovery logic here
      console.log('Recover password for:', { email });
    };

    return (
      <ImageBackground
      
        source={{uri:'https://www.canvasprintsaustralia.net.au/wp-content/uploads/2017/01/Hokusai-A-big-wave-off-Kanagawa-Triptych-Panel-02.jpg'}}
        style={styles.background}
          resizeMode="stretch">
      
      
      
      <View style={styles.container}>
        <View style={styles.LogoSection}>
        <Image
          source={{uri : 'https://png.pngtree.com/png-clipart/20230916/original/pngtree-the-great-wave-off-kanagawa-vector-logo-image-clipart-png-image_12246118.png'}}
          style={styles.LogoImage}/>

          

        </View>
        
        
        
        
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          left={<TextInput.Icon icon="email"/>}
        />
        <Button mode="contained" onPress={handlePasswordRecovery}
        styles={styles.Button}
        buttonColor='#a47f47'>
          Recover Password
        </Button>
      </View>
      </ImageBackground>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: 'rgba(40,40,40,0.5)',
    },
    input: {
      marginBottom: 16,
    },
    background:{
      flex:1,
      resizeMode: 'cover',
    },
    LogoImage:{
      height:200,
      width:200,
      borderRadius:50,
    },
    LogoSection:{
      alignItems:'center',
    }

  });

  export default PasswordRecoveryScreen;
