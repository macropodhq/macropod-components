'use strict';

var React = require('react');

var Table = require('./');

var statusDisplay = status => {
  var style = {};
  if (status === 'Airing') {
    style.color = 'lightGreen';
    style.fontWeight = 'bold';
  }

  if (status === 'Upcoming') {
    style.color = 'orange';
  }

  return <span style={style}>{status}</span>;
};

var episodeDisplay = (name, episode) => {
  return (
    <div>
      <img src={episode.thumbnail} style={{width: '50px', height: '50px', float: 'left'}}/>
      <h4 style={{display: 'inline-block', fontWeight: 'normal', fontSize: '20px', color: '#555', margin: '0px 0px 0px 20px', lineHeight: '50px'}}>{name}</h4>
    </div>
  );
};

var columns = [
  {title: 'Episode', prop: 'episode', render: episodeDisplay, sortable: false},
  {title: 'Number', prop: 'number'},
  {title: 'Directed by', prop: 'director'},
  {title: 'Status', prop: 'status', render: statusDisplay},
  {title: 'US Viewers', prop: 'viewers'},
];

var data = [
  {episode: 'Blood Money', number: 55, director: 'Bryan Cranston', status: 'Aired', viewers: 5.92, thumbnail: require('./images/1.jpg')},
  {episode: 'Buried', number: 56, director: 'Michelle MacLaren', status: 'Aired', viewers: 4.77, thumbnail: require('./images/2.jpg')},
  {episode: 'Confessions', number: 57, director: 'Michael Slovis', status: 'Aired', viewers: 4.85, thumbnail: require('./images/3.jpg')},
  {episode: 'Rabid Dog', number: 58, director: 'Sam Catlin', status: 'Aired', viewers: 4.41, thumbnail: require('./images/4.jpg')},
  {episode: 'To\'hajiilee', number: 59, director: 'Michelle MacLaren', status: 'Airing', thumbnail: require('./images/5.jpg')},
  {episode: 'Ozymandias', number: 60, director: 'Rian Johnson', status: 'Upcoming', thumbnail: require('./images/6.jpg')},
  {episode: 'Granite State', number: 61, director: 'Peter Gould', status: 'Upcoming', thumbnail: require('./images/7.jpg')},
  {episode: 'Felina', number: 62, director: 'Vince Gilligan', status: 'Upcoming', thumbnail: require('./images/8.jpg')}
];

module.exports = React.createClass({
  displayName: 'TableExample',

  render() {
    return (
      <Table
        keys={[ 'number' ]}
        columns={columns}
        initialData={data}
        initialSortBy={{prop: 'number', order: 'asc'}} />
    );
  }
});
