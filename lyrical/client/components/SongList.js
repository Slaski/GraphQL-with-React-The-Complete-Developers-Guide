import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

class SongList extends Component {
  render() {
    console.log(this.props);
    return <div>{this.renderSongs()}</div>;
  }

  renderSongs() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return this.props.data.songs.map(song => {
      return <li key={song.title}>{song.title}</li>;
    });
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
