import { Delete, MarkEmailRead, Send, Star } from '@mui/icons-material';
import '../Stylesheet/Mail.css';

export default function Mail() {
  const emails = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      subject: 'Order Confirmation #1234',
      preview: 'Thank you for your recent purchase. Your order has been confirmed...',
      time: '2 hours ago',
      isRead: false,
      isStarred: true,
    },
    {
      id: 2,
      sender: 'Michael Chen',
      subject: 'Support Ticket #5678',
      preview: 'I am having an issue with my recent order. Could you please help...',
      time: '4 hours ago',
      isRead: false,
      isStarred: false,
    },
    {
      id: 3,
      sender: 'Emily Davis',
      subject: 'Product Inquiry',
      preview: 'I would like to know more about the Smart Watch Pro features...',
      time: '1 day ago',
      isRead: true,
      isStarred: true,
    },
    {
      id: 4,
      sender: 'James Wilson',
      subject: 'Refund Request',
      preview: 'I would like to request a refund for my recent purchase...',
      time: '2 days ago',
      isRead: true,
      isStarred: false,
    },
    {
      id: 5,
      sender: 'Sophia Martinez',
      subject: 'Partnership Opportunity',
      preview: 'We are interested in exploring a partnership with your company...',
      time: '3 days ago',
      isRead: true,
      isStarred: false,
    },
  ];

  return (
    <div className="mail">
      <div className="mailHeader">
        <h1 className="mailTitle">Mailbox</h1>
        <button className="mailComposeBtn">
          <Send className="mailIcon" />
          Compose
        </button>
      </div>
      <div className="mailStats">
        <div className="mailStat">
          <span className="mailStatLabel">Unread</span>
          <span className="mailStatValue">2</span>
        </div>
        <div className="mailStat">
          <span className="mailStatLabel">Starred</span>
          <span className="mailStatValue">2</span>
        </div>
        <div className="mailStat">
          <span className="mailStatLabel">Total</span>
          <span className="mailStatValue">5</span>
        </div>
      </div>
      <div className="mailList">
        {emails.map((email) => (
          <div key={email.id} className={`mailItem ${email.isRead ? 'read' : 'unread'}`}>
            <div className="mailItemActions">
              <Star className={`starIcon ${email.isStarred ? 'starred' : ''}`} />
            </div>
            <div className="mailItemContent">
              <div className="mailItemHeader">
                <span className="mailItemSender">{email.sender}</span>
                <span className="mailItemTime">{email.time}</span>
              </div>
              <div className="mailItemSubject">{email.subject}</div>
              <div className="mailItemPreview">{email.preview}</div>
            </div>
            <div className="mailItemButtons">
              <button className="mailItemBtn">
                <MarkEmailRead />
              </button>
              <button className="mailItemBtn">
                <Delete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
