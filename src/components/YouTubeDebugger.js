import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleChangeBitrate = () => {
    this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
      }
    });
  }

  handleChangeResolution = () => {
    // let newState = Object.assign({}, this.state)
    // newState.settings.video.resolution = '720p'
    // this.setState(newState);

    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button
          className="bitrate"
          onClick={this.handleChangeBitrate}
        >
          Change bitrate
        </button>
        <button
          className="resolution"
          onClick={this.handleChangeResolution}
        >
          Change resolution
        </button>
      </div>
    );
  }
}
