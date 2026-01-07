import { Send } from '@mui/icons-material';
import { useState } from 'react';
import '../Stylesheet/Messages.css';

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: 1,
      user: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      lastMessage: 'Thanks for the quick response!',
      time: '5 min ago',
      unread: 2,
    },
    {
      id: 2,
      user: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      lastMessage: 'When will my order arrive?',
      time: '1 hour ago',
      unread: 1,
    },
    {
      id: 3,
      user: 'Emily Davis',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      lastMessage: 'Perfect, thank you!',
      time: '3 hours ago',
      unread: 0,
    },
    {
      id: 4,
      user: 'James Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      lastMessage: 'Can I get a refund?',
      time: '1 day ago',
      unread: 0,
    },
  ];

  const messages = [
    {
      id: 1,
      senderId: 1,
      text: 'Hello, I have a question about my recent order.',
      time: '10:30 AM',
      isOwn: false,
    },
    {
      id: 2,
      senderId: 'admin',
      text: 'Hi Sarah! I would be happy to help. What is your question?',
      time: '10:32 AM',
      isOwn: true,
    },
    {
      id: 3,
      senderId: 1,
      text: 'When will my headphones be delivered?',
      time: '10:33 AM',
      isOwn: false,
    },
    {
      id: 4,
      senderId: 'admin',
      text: 'Your order is scheduled to arrive on January 10th. You will receive tracking information soon!',
      time: '10:35 AM',
      isOwn: true,
    },
    {
      id: 5,
      senderId: 1,
      text: 'Thanks for the quick response!',
      time: '10:36 AM',
      isOwn: false,
    },
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Handle send message logic here
      setMessageText('');
    }
  };

  return (
    <div className="messages">
      <div className="messagesSidebar">
        <h2 className="messagesTitle">Conversations</h2>
        <div className="conversationsList">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className={`conversationItem ${selectedChat === conv.id ? 'active' : ''}`}
              onClick={() => setSelectedChat(conv.id)}
              onKeyPress={(e) => e.key === 'Enter' && setSelectedChat(conv.id)}
              role="button"
              tabIndex={0}
            >
              <img src={conv.avatar} alt={conv.user} className="conversationAvatar" />
              <div className="conversationInfo">
                <div className="conversationHeader">
                  <span className="conversationUser">{conv.user}</span>
                  <span className="conversationTime">{conv.time}</span>
                </div>
                <div className="conversationLastMessage">
                  {conv.lastMessage}
                  {conv.unread > 0 && (
                    <span className="conversationUnread">{conv.unread}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="messagesMain">
        <div className="messagesHeader">
          <img
            src={conversations.find(c => c.id === selectedChat)?.avatar}
            alt="User"
            className="messagesHeaderAvatar"
          />
          <span className="messagesHeaderName">
            {conversations.find(c => c.id === selectedChat)?.user}
          </span>
        </div>
        <div className="messagesContent">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.isOwn ? 'own' : ''}`}>
              <div className="messageText">{message.text}</div>
              <span className="messageTime">{message.time}</span>
            </div>
          ))}
        </div>
        <div className="messagesInput">
          <input
            type="text"
            placeholder="Type a message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="messageInputField"
          />
          <button onClick={handleSendMessage} className="messageSendBtn">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
}
