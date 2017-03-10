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
console.log(height, width);
var SIZE = 4; // four-by-four grid
var CELL_SIZE = Math.floor(width * .2); // 20% of the screen width
var CELL_PADDING = Math.floor(CELL_SIZE * .05); // 5% of the cell size
var BORDER_RADIUS = CELL_PADDING * 2;
var TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
var LETTER_SIZE = Math.floor(TILE_SIZE * .75);

class App extends Component {
  render () {
    return (
      <View>
        <Box />
      </View>
    )
  }
}

class Box extends Component {
  constructor () {
    super()
    this.state = {
      x: width/20,
      y: -height/20,
      z: 0,
      vx: 32,
      vy: -16
    }
    this.loop = this.loop.bind(this)
  }

  loop (tick) {
    this.setState({
      z: this.state.z - tick,
      x: this.state.x + tick
    })
  }

  componentDidMount () {
    // let start = null
    // let step = (timestamp) => {
    //   if (!start) start = timestamp;
    //   let progress = timestamp - start;
    //   this.loop(Math.min(progress / 100, 200))
    //   if (progress < 2000) {
    //     window.requestAnimationFrame(step);
    //   }
    // }
    //
    // window.requestAnimationFrame(step);
    // setInterval(() => this.loop(5), 1)
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
      screenBackground: {
        flex: 1,
        flexDirection: 'row',
        left: this.state.z,
        alignItems: 'center'
      },
      imageBackground: {
        width: width,
        height: height,
        resizeMode: 'stretch'
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
        {
         images.map((img, index) => {
           return (
             <View key={index}>{img}</View>
           )
         })
        }
        <View style={styles.box}>
        </View>
      </View>
    )
  }
}

//{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}

export default App
