import React from 'react';
import { connect } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import { createAction, NavigationActions } from '../utils'

class Login extends React.Component {

  login = () => {
    const param = {
      uname: '李人际',
      pwd: 'fdsfa',
    };
    this.props.dispatch(createAction('login/login')(param));
  };

  render() {
    return (
      <View style={styles.center}>
        <Text>Logo图片</Text>


        <Input
          placeholder='用户名'
        />

        <Input
          placeholder='密码'
        />

        <View>
          <Button
            buttonStyle={styles.widFull}
            title="登录"
            onPress={this.login}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  widFull: {
    width : '100%',
    marginTop: 50,
  }
});

export default connect(state => state.login)(Login);
