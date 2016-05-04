import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';


export default class FoldedCell extends Component {

  render() {
    return (
     <View style={[styles.container, this.props.style]} >

    </View>
    )
  }

}

// <View style={styles.sidebar} >
//         <Text style={styles.sidebarMoney}>$23</Text>
//         <Text style={styles.sidebarTime}>TODAY 11:10 AM</Text>
//       </View>
//       <View style={styles.content}>
//         <Text>Main Content</Text>
//       </View>

const styles = StyleSheet.create({
  container: {
    height: 120,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  sidebar: {
    backgroundColor: '#5a4d94',
    flex: 2,
    padding: 15,
    paddingTop: 20,
    justifyContent: 'space-between'
  },
  sidebarMoney: {
    color: 'white',
    fontSize: 19
  },
  sidebarTime: {
    color: 'white',
    fontSize: 10
  },
  content: {
    flex: 9,
    padding: 10
  }
})
