import React, {
  Component,
  View,
  Text,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';
import FoldedCell from './FoldedCell';


export default class FoldingCell extends Component {

  state = {
    folded: false,
    show: false
  }

  componentWillMount = () => {
    this.rotateX = new Animated.Value(-180)
    this.rotateY = new Animated.Value(0)
    this.rotateZ = new Animated.Value(0)

    this.translateY = new Animated.Value(35)
    this.bg = new Animated.Value(0)
  }

  onPress() {
    console.log('pressed');
    this.setState({ show: true })
    Animated.timing(this.rotateX, {
      toValue: 0,
      duration: 3000
    }).start()

    Animated.timing(this.rotateY, {
      toValue: 180,
      duration: 3000
    }).start()

    Animated.timing(this.rotateZ, {
      toValue: 180,
      duration: 3000
    }).start()

    Animated.timing(this.translateY, {
      toValue: 140,
      duration: 3000,
      // easing:
    }).start()
    Animated.timing(this.bg, {
      toValue: 1,
      duration: 3000,
      // easing:
    }).start()
  }

  render() {
    const degInterpolate = {
      inputRange: [-180, 0],
      outputRange: ['0deg', '-180deg']
    }

    const translateYInterpolate = {
      inputRange: [0, 140],
      outputRange: [-75, 0]
    }

    const colorInterpolate = {
      inputRange: [0, 1],
      outputRange: ['red', 'blue']
    }

    return (
      <Animated.View style={[{
        // backgroundColor: 'yellow',
        margin: 10,
        position: 'relative'
      }, ]}>
        <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
          <Animated.View style={{
          }}>
            <FoldedCell style={{
              backgroundColor: 'red'
            }}/>
          </Animated.View>
        </TouchableWithoutFeedback>
        { this.state.show
          ? <Animated.View style={{
              position: 'absolute',
              // borderColor: 'black',
              backgroundColor: this.bg.interpolate(colorInterpolate),
              // borderWidth: 2,
              // top: 70,
              width: 355,
              transform: [
                { perspective: 500 },
                // { skewZ: '180deg'},
                // { skewY: '30deg'}
                // { skewX: interpolatedSkew },
                // { scaleY: this.scale },
                // { skewX: this.rotateX.interpolate(degInterpolate) },
                { rotateX: this.rotateX.interpolate(degInterpolate) },
                // { rotateY: this.rotateY.interpolate(degInterpolate) },
                // { rotateZ: this.rotateZ.interpolate(degInterpolate) },

                { translateY: this.translateY.interpolate(translateYInterpolate) }
                // { translateY: -120 }
              ]
            }}>
              <FoldedCell style={{
              backgroundColor: 'transparent'
            }}/>
            </Animated.View>
          : null
        }

      </Animated.View>
    )
  }

}
