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
      xPlayer: 20,
      yPlayer: -15,
      obstacles: [],
      z: 0,
      vx: 1,
      vy: -1
    }
    this.loop = this.loop.bind(this)
  }

  createObstacle () {
    let obstaclesContainer = []
    let initYPos = [-187, 100]
    let obstacleXPos = Math.floor(Math.random() * 600 + 600)
    let obstacleYPos = initYPos[Math.floor(Math.random() * 2)]
    let obstacleHeight = Math.floor(Math.random() * 160 + 60)
    setInterval(() => {
      obstaclesContainer.push({
        x: obstacleXPos,
        y: obstacleYPos,
        height: obstacleHeight
      })
      this.setState({
        obstacles: obstaclesContainer
      })
    }, 1500)
  }

  loop (tick) {
    this.createObstacle()
    // if(this.state.yObstacle < -187 || this.state.yObstacle >= 155) {
    //   this.setState({
    //     vy: this.state.vy * -1
    //   })
    // }
    // TODO: shift() the obstacles
  }

  componentDidMount () {
    // setInterval(() => this.loop(1), 1000)
  }

  render () {
    const styles = {
      boxPlayer: {
        width: 30,
        height: 30,
        top: this.state.yPlayer,
        left: this.state.xPlayer,
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
        resizeMode: 'contain'
      }
    }

    return (
      <View>
        <View style={styles.boxPlayer}>
        </View>
        {this.state.obstacles.length > 0
          ?
          <View
            style={{
              width: 30,
              height: this.state.obstacles[0].height,
              top: this.state.obstacles[0].y,
              left: this.state.obstacles[0].x-600,
              position: 'absolute',
              backgroundColor: 'blue'
            }}
          >
          </View>
          : <View></View>
        }
      </View>
    )
  }
}

/*
this.state.obstacles.map((obstacle, index) => {
  (

  )
})
*/
export default App
