import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {
  render() {
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
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

export default graphql(query)(SongList);
