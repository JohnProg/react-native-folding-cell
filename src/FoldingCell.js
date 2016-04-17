import React, {
  Component,
  View,
  Text
} from 'react-native';
import FoldedCell from './FoldedCell';


export default class FoldingCell extends Component {

  state = {
    folded: false
  }

  render() {
    return (
      <View style={{ backgroundColor: 'transparent', padding: 10 }}>
        <FoldedCell />
      </View>
    )
  }

}
