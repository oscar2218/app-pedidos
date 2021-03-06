import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class Pedidos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

 async componentDidMount() {
  await Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });
  this.setState({ isReady: true });
}
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        <ImageBackground source={require('../assets/picks/fondo3.jpg')} style={styles.img}>
        
        <Content>
          <List>
            <ListItem >
              
              <Body>
                <Text style={styles.font} >Kumar Pratik</Text>
                
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
       </ImageBackground> 

      </Container>
    );
  }
}

const styles = StyleSheet.create({
 

     img : {
      flex: 1,   
      backgroundColor:'#D0D6D8',
        opacity: 0.8,
      flexDirection: 'column',

    },
    font : {
      color : '#8018F5',
      fontSize: 30,
      left: 30,
      fontFamily: 'lob-font',
      top : 6,
    },

});