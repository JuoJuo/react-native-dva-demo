import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

class Activities extends React.Component {
  render() {
    const {name, avatar_url,} = this.props.navigation.state.params;

    return (
      <View style={styles.center}>
        <Text>Activities! dmeo登录是取我github的头像跟名字，完了跳转路由，获取url对应的头像</Text>
        <Avatar
          rounded
          source={{ uri: avatar_url }}
        />
        <Text>{ name }</Text>
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
