import socket from './ws-client';
import {ChatForm} from './dom';

const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';

class ChapApp {
  constructor() {
    // console.log('Hello ES6!');
    this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);

    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      // let message = new ChatMessage({ message: 'pow!' });
      // socket.sendMessage(message.serialize());
      this.chatForm.init((data) => {
        let message = new ChatMessage({message:data});
        socket.sendMessage(message.serialize());
      })
    });
    socket.registerMessageHandler((data) => {
      console.log(data);
    });
  }
}

class ChatMessage {
  /**
   * case1
  constructor(message, user, timestamp) {
    this.message = message;
    this.user = user || 'batman';
    this.timestamp = timestamp || (new Date()).getTime();
  }
  */
  /**
   * case2
  constructor(message, user = 'batman', timestamp = (new Date().getTime())) {
    this.message = message;
    this.user = user;
    this.timestamp = timestamp;
  }
  */
  /**
   * case3
  constructor({message: m, user: u, timestamp: t}) {
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }
  */
  constructor({
    message: m,
    user: u = 'batman',
    timestamp: t = (new Date().getTime())
  }) {
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }
  serialize() {
    return {
      user : this.user,
      message : this.message,
      timestamp: this.timestamp
    };
  }
}

export default ChapApp;
