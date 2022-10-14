import React from 'react';

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid grey',
    borderRadius: 16,
  },
  messageText: {
    color: 'black',
    fontSize: 16,
  },
};

export default class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(`${this.props.id} Mount!`);
  }
  componentDidUpdate() {
    console.log(`${this.props.id} Update!`);
  }
  componentWillUnmount() {
    console.log(`${this.props.id} UnMount!`);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}
