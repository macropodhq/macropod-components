'use strict';

const React = require('react');
const Avatar = require('../avatar');

const Card = require('./');
require('./example.scss');

module.exports = React.createClass({
  displayName: 'CardExample',

  statics: {
    wide: true,
  },

  render() {
    return (
      <div className="CardContainer">
        <Card
          title="Card with actions"
          actions={[
            <dl key={1}>
              <dd><a href="#">primary action 1</a></dd>
              <dd><a href="#">primary action 2</a></dd>
            </dl>,
            <dl key={2}>
              <dd><a href="#">secondary action</a></dd>
            </dl>
          ]}
        >
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </Card>

        <Card
          title="Card with header content"
          headerContent="something goes here"
        >
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </Card>
        <Card
          title="Project in Stack"
          headerContent="20 Tasks · 15 Members"
          actions={[
            <dl key={1}>
              <dd><a href="#">edit project</a></dd>
              <dd><a href="#">delete project</a></dd>
            </dl>
          ]}
        >
          <div className="ProjectsCard-stats">
            <div className="ProjectsCard-stat">
              <strong className="ProjectsCard-stat-count">0</strong>
              <span className="ProjectsCard-stat-title">Overdue</span>
            </div>
            <div className="ProjectsCard-stat">
              <strong className="ProjectsCard-stat-count">0</strong>
              <span className="ProjectsCard-stat-title">Due soon</span>
            </div>
          </div>
          <div className="ProjectsCard-members">
            <Avatar src="http://www.gravatar.com/avatar/82dccacb221d0a037aa2b60f3cf94d5d?s=50" firstName="Nathan" lastName="Hutchison" size="s" />
            <Avatar src="http://www.gravatar.com/avatar/d27bae51ba163785869161126434ea56?s=35" firstName="Conrad" lastName="Pankoff" size="s" />
            <Avatar src="http://www.gravatar.com/avatar/12c884c7f3e99ac579e120318eb9d888?s=20" firstName="Matt" lastName="Milosavljevic" size="s" />
            <Avatar src="http://www.gravatar.com/avatar/31314479ddd7c881144bfe54d400bb22?s=20" firstName="James" lastName="Coleman" size="s" />
          </div>
        </Card>
      </div>
    );
  }
});
