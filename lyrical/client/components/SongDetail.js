import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;

    if (loading) {
      return <div />;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
      </div>
    );
  }
}

const query = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;

export default graphql(query, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
