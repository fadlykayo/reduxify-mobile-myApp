import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native'

let { height, width} = Dimensions.get('window')
// 375, 667

class App extends Component {
  constructor () {
    super()
    this.state = {
      x1: 20,
      y1: 175,
      x2: 545,
      y2: 100,
      z: 0,
      vx: 1,
      vy: -1
    }
    this.loop = this.loop.bind(this)
  }

  loop (tick) {
    this.setState({
      z: this.state.z - tick,
      x1: this.state.x1 + tick
    })

    if(this.state.y2 < 0 || this.state.y2 > 287) {
      this.setState({
        vy: this.state.vy * -1
      })
    }
  }

  componentDidMount () {
    // setInterval(() => this.loop(1), 1)
  }

  render () {
    const styles = {
      box: {
        width: 30,
        height: 30,
        top: this.state.y1,
        left: this.state.x1,
        position: 'absolute',
        backgroundColor: 'red'
      },
      box2: {
        width: 30,
        height: 30,
        top: this.state.y2,
        left: this.state.x2,
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
    let images = []
    let imgWidth = 10

    for(let i = 0; i < Math.ceil(width / imgWidth); i++) {
      images.push((
         <Image style={styles.imageBackground} source={require('./components/1.jpg')} />
      ))
    }

    return (
      <View style={styles.screenBackground}>

        <View style={styles.box}>
        </View>
        <View style={styles.box2}>
        </View>
      </View>
    )
  }
}

/*
{
 images.map((img, index) => {
   return (
     <View key={index}>{img}</View>
   )
 })
}
*/

export default App
