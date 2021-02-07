import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Web extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // moment.locale("zh-CN", x.MOMENT_CONFIG);
  }

  render() {
    return <App />;
  }
}

ReactDOM.render(<Web />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA