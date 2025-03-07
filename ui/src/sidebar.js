import React from 'react';
import { Menu } from 'semantic-ui-react';

import Navigation from './navigation';

export default class Sidebar extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    fetch("http://localhost:8000/navigation")
      .then(response => response.json())
      .then(response => {
        this.setState({ results: response });
      });
  }

  render() {
    return <Menu vertical size="large" fluid={true}>
      <Navigation results={this.state.results} />
    </Menu>;
  }
}
