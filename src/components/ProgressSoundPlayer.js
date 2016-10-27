import React, { Component, PropTypes as T } from 'react'
import { SoundPlayerContainer } from 'react-soundplayer/addons'
import Track from './Track'

export default class ProgressSoundPlayer extends Component {
  render () {
    const { resolveUrl, clientId } = this.props

    return (
      <SoundPlayerContainer resolveUrl={resolveUrl} clientId={clientId}>
        <Track />
      </SoundPlayerContainer>
    )
  }
}

ProgressSoundPlayer.propTypes = {
  resolveUrl: T.string.isRequired,
  clientId: T.string.isRequired
}
