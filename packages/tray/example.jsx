'use strict';

const React = require('react');

const Tray = require('./');
const Button = require('../button');
const Bar = require('../bar');
const Icon = require('../icon');
const Link = require('../link');

import styles from './example.mcss';

const style = {
  bubble: {
    background: 'rgba(199, 201, 209, 0.4)',
    borderRadius: 5,
    padding: '10px 10px',
    margin: '0 0 10px 0',
  },

  bubbleAlt: {
    background: 'rgba(255, 255, 255, 1)',
    borderRadius: 5,
    padding: '10px 10px',
    margin: '0 0 10px 0',
  },

  link: {
    fontSize: 13,
    display: 'block',
    color: '#3e465c',
  },
};

module.exports = React.createClass({
  displayName: 'TrayExample',

  statics: {
    wide: true,
  },

  getInitialState() {
    return {
      show: true,
    };
  },

  handleToggle() {
    this.setState({
      show: !this.state.show,
    });
  },

  render() {
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
                    <Link style={style.link}>Dashboard</Link>
                  </Tray.Item>
                  <Tray.Item>
                    <Link style={style.link}>Task List</Link>
                  </Tray.Item>
                </Tray.Group>

                <Tray.Group title="Projects">
                  <Tray.Item>
                    <Link style={style.link}>Design-o-rama</Link>
                  </Tray.Item>
                  <Tray.Item>
                    <Link style={style.link}>Macropod ID design</Link>
                  </Tray.Item>
                  <Tray.Item>
                    <Link style={style.link}>Macropod Website</Link>
                  </Tray.Item>
                  <Tray.Item>
                    <Link style={style.link}>Marketing and Comms</Link>
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
                    }}>
                      There are no items here! Click to add
                    </Link>
                  </Tray.Item>
                </Tray.Group>
              </Tray>
              <Tray align={Tray.align.RIGHT}>
                <Bar sticky>
                  <span className={styles.item} align={Bar.align.LEFT}>Comment Feed</span>
                  <Icon className={styles.item} align={Bar.align.RIGHT} type="refresh" />
                </Bar>

                <Tray.Group>
                  <Tray.Item>
                    <div style={style.bubble}>
                      <p>Is he a bad guy?</p>
                    </div>
                  </Tray.Item>
                  <Tray.Item>
                    <div style={style.bubbleAlt}>
                      <p>Yeah.</p>
                    </div>
                  </Tray.Item>
                  <Tray.Item>
                    <div style={style.bubble}>
                      <p>How can you tell?</p>
                    </div>
                  </Tray.Item>
                  <Tray.Item>
                    <div style={style.bubbleAlt}>
                      <p>Because he's a shark.</p>
                    </div>
                  </Tray.Item>
                  <Tray.Item>
                    <div style={style.bubble}>
                      <p>There's no good sharks?</p>
                    </div>
                  </Tray.Item>
                </Tray.Group>
              </Tray>
            </div>
          }
      </div>
    );
  },
});

