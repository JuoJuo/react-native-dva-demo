import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Hall extends React.Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>这是刚开始的图片</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Hall;
