import React, { Component } from 'react'
import { PlayButton, Progress, Timer } from 'react-soundplayer/components'

export default class Track extends Component {
  render () {
    const {
      track,
      soundCloudAudio,
      playing,
      seeking,
      currentTime,
      duration
    } = this.props
  }
}
