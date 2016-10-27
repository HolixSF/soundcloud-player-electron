import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ProgressSoundPlayer from './components/ProgressSoundPlayer'
import SC from 'node-soundcloud'
import Loading from 'react-loading'

var clientId = //soundcloud api
SC.init({
  id: clientId
})

class Main extends Component {
  constructor (props) {
    super()
  }
}
