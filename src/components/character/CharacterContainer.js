import React, { Component } from 'react';
import axios from 'axios';
import CharacterCard from '../characters/CharacterCard';

export default class CharacterContainer extends Component {
  state = {
    character: {}
  };

  componentDidMount() {
    axios
      .get(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
      .then(({ data }) => {
        console.log(data);
        this.setState({ character: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { character } = this.state;
    console.log(this.props);
    return (
      <div>
        <CharacterCard character={character} />
        <button onClick={() => this.props.history.goBack()}>Go back</button>
      </div>
    );
  }
}
