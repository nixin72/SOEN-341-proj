import messages from '../models/messages.json';

export default function sendMessage(channel, sender, body) {
  const timestamp = Date.now().toString();
  messages[channel][timestamp] = {
    sender, body
  }

  return messages;
}
