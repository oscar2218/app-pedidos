import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

var myBackground = require('./assets/bingo.png');

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Image source={myBackground}/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS ==="android" ? 24 : 0
  },
});
