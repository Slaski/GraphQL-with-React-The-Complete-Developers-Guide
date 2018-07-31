import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

class SongList extends Component {
  render() {
    return <ul className="collection">{this.renderSongs()}</ul>;
  }

  renderSongs() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return this.props.data.songs.map(song => {
      return (
        <li className="collection-item" key={song.id}>
          {song.title}
        </li>
      );
    });
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
