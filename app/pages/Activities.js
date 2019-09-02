import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Activities extends React.Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>Activities!</Text>
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

export default Activities;
