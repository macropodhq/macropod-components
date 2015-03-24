'use strict';

const React = require('react');

const Tray = require('./');
const Button = require('../button');
const BarItem = require('../bar-item');
const Bar = require('../bar');
const Icon = require('../icon');
const Link = require('../link');

module.exports = React.createClass({
  displayName: 'TrayExample',

  statics: {
    wide: true,
  },

  getInitialState() {
    return {
      show: true,
      stickyHeight: 0,
    }
  },

  handleToggle() {
    this.setState({
      show: !this.state.show
    })
  },

  handleStickyHeight(height) {
    this.setState({
      stickyHeight: height
    })
  },

  render() {
    const bubbleStyle = {
      background: 'rgba(199, 201, 209, 0.4)',
      borderRadius: 5,
      padding: '1px 10px',
      margin: '0 0 10px 0',
    };

    return (
      <div>
        <Button onClick={this.handleToggle}>{this.state.show ? 'Hide' : 'Show'}</Button>

        { this.state.show &&
            <div style={{
              position: 'relative',
              height: 400,
              overflow: 'hidden',
              marginTop: 40,
            }}>
              <Tray>
                <Tray.Group>
                  <Tray.Item>
                    <Link>Dashboard</Link>
                  </Tray.Item>
                  <Tray.Item>
                    <Link>Task List</Link>
                  </Tray.Item>
                </Tray.Group>

                <Tray.Group title="Projects">
                  <Tray.Item>
                    <Link>Design-o-rama</Link>
                  </Tray.Item>
                  <Tray.Item>
                    <Link>Macropod ID design</Link>
                  </Tray.Item>
                  <Tray.Item>
                    <Link>Macropod Website</Link>
                  </Tray.Item>
                  <Tray.Item>
                    <Link>Marketing and Comms</Link>
                  </Tray.Item>
                </Tray.Group>

                <Tray.Group title="Custom item rendering">
                  <Tray.Item>
                    <Link style={{
                      background: 'rgb(245, 247, 249)',
                      padding: 5,
                      textAlign: 'center',
                      borderRadius: 3,
                      display: 'inline-block',
                      width: '100%',
                  }}>There are no items here! Click to add</Link>
                  </Tray.Item>
                </Tray.Group>
              </Tray>
              <Tray right stickyHeight={this.state.stickyHeight}>
                <Tray.Sticky onCalculateHeight={this.handleStickyHeight}>
                  <Bar>
                    <BarItem left style={{border: 0}}>Comment Feed</BarItem>
                    <BarItem right><Icon type="refresh" /></BarItem>
                  </Bar>
                </Tray.Sticky>

                <Tray.Group>
                  <Tray.Item>
                    <div style={bubbleStyle}>
                      <p>I think this version is great, it probably doesn't need anything else?</p>
                    </div>
                  </Tray.Item>
                  <Tray.Item>
                    <div style={bubbleStyle}>
                      <p>This version is missing the blue background that we had in the earlier versions. Was there some reason it was removed?</p>
                    </div>
                  </Tray.Item>
                  <Tray.Item>
                    <div style={bubbleStyle}>
                      <p>How long until this gets released into production? We started work on it a while ago but it looks like no one has touched it in the last week?</p>
                    </div>
                  </Tray.Item>
                  <Tray.Item>
                    <div style={bubbleStyle}>
                      <p>I don't like this version as much as the earlier versions.</p>
                    </div>
                  </Tray.Item>
                </Tray.Group>
              </Tray>
            </div>
          }
      </div>
    );
  }
});

