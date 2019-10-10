import React from 'react';
import Message from './Message';
import axios from 'axios';

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      channel: props.channel
    }

    this.willUpdate = false;

    axios.get("http://localhost:3001/messages?channel=" + props.channel)
      .then(data => {
        this.setState({ messages: data.data });
      })
      .catch(err => {
        console.error("ERROR", err)
      });
  }

  createMessageComponents(messages) {
    return Object.keys(messages).map(m =>
      <Message time={(d =>
        `${d.getHours()}:${d.getMinutes()}`)(new Date(parseInt(m)))}
        sender={messages[m].sender}
        body={messages[m].body} />)
  }

  shouldComponentUpdate() {
    return this.willUpdate;
  }

  componentDidMount() {
    setInterval(() => {
      axios.get(`http://localhost:3001/messages/latest?timestamp=${Date.now()}&channel=${this.props.channel}`)
        .then(data => {
          console.log(data);
          this.willUpdate = data.data.update;
          console.log(this.willUpdate);
        })
    }, 1000);
  }

  render() {
    return (
      <div className="messages">
        {this.createMessageComponents(this.state.messages)}
      </div>
    );
  }
}
