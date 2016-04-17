/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import FoldingCell from './src/FoldingCell.js'


class RNFoldingCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{ title: 'Folding cell List View Example', tintColor: "white" }}
          tintColor="#5a4d94"
        />
        <Image
          source={{ uri: 'http://www.dailyfreepsd.com/wp-content/uploads/2013/09/underwater-blurred-background.jpg'}}
          style={{ flex: 1, width: null, height: null}}
        >
          <FoldingCell />
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNFoldingCell', () => RNFoldingCell);
