import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';


export default class FoldedCell extends Component {

  render() {
    return (
     <View style={styles.container} >
      <View style={styles.sidebar} >
        <Text>Sidebar</Text>
      </View>
      <View style={styles.content}>
        <Text>Main Content</Text>
      </View>
    </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    height: 130,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  sidebar: {
    backgroundColor: '#5a4d94',
    flex: 2
  },
  content: {
    flex: 8
  }
})
