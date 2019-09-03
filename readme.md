### 运行步骤：

- 1.装sdk
- 2.装手机模拟器或者用真机
- 3.npm install or yarn
- 4.react-native run-android

### ui tool kit
> https://react-native-training.github.io/react-native-elements

### 写组件三部曲，建立component，建model，建service

- 有可能其他组件用得上的数据存model，reducer里操作数据
- effect写异步操作，put可调reducer里的方法，call可调用异步
- 想用其他组件的状态，在connect的时候加上对应组件的namespance即可
