import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class StarLife extends React.Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>StarLife!</Text>
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

export default StarLife;
