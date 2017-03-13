import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native'

let { height, width } = Dimensions.get('window')
// 375, 667
// 287, 537

class App extends Component {
  constructor () {
    super()
    this.state = {
      x: 20,
      y: -15,
      xEnemy: 650,
      yEnemy: 0,
      z: 0,
      vx: 1,
      vy: -1
    }
    this.loop = this.loop.bind(this)
  }

  loop (tick) {
    this.setState({
      xEnemy: this.state.xEnemy - (this.state.vx * tick * 2),
      yEnemy: this.state.yEnemy + (this.state.vy * tick * 2)
    })
    if(this.state.yEnemy < -187 || this.state.yEnemy >= 155) {
      this.setState({
        vy: this.state.vy * -1
      })
    }
  }

  componentDidMount () {
    setInterval(() => this.loop(1), 1)
  }

  render () {
    const styles = {
      box: {
        width: 30,
        height: 30,
        top: this.state.y,
        left: this.state.x,
        position: 'absolute',
        backgroundColor: 'red'
      },
      box2: {
        width: 30,
        height: 30,
        top: this.state.yEnemy,
        left: this.state.xEnemy,
        position: 'absolute',
        backgroundColor: 'blue'
      },
      screenBackground: {
        flex: 1,
        flexDirection: 'row',
        left: this.state.z,
        alignItems: 'center'
      },
      imageBackground: {
        width: width,
        height: height,
        resizeMode: 'contain'
      }
    }

    return (
      <View>
        <View style={styles.box}>
        </View>
        <View style={styles.box2}>
        </View>
      </View>
    )
  }
}

export default App
