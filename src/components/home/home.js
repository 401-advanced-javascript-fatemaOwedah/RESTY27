import React from 'react';

import '../../app.scss';

import Form from '../form/form';
import Results from '../results/results';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0,
        results: []
    };
}
  handleForm = (count, headerss,data, results) => {
  this.setState({count, headerss,data, results});
}
  render(){
    return (
      <React.Fragment>
        <Form handler={this.handleForm}/>
        <Results count={this.state.count} headerss={this.state.headerss} results={this.state.results} />
      </React.Fragment>
    );
  }
}

export default Home;