import { Star, StarBorder } from '@mui/icons-material';
import '../Stylesheet/Feedback.css';

export default function Feedback() {
  const feedbackList = [
    {
      id: 1,
      customer: 'Sarah Johnson',
      rating: 5,
      comment: 'Excellent service! The product exceeded my expectations. Fast shipping and great quality.',
      product: 'Wireless Bluetooth Headphones',
      date: '2026-01-07',
    },
    {
      id: 2,
      customer: 'Michael Chen',
      rating: 4,
      comment: 'Good product overall, but the delivery took a bit longer than expected.',
      product: 'Smart Watch Pro',
      date: '2026-01-06',
    },
    {
      id: 3,
      customer: 'Emily Davis',
      rating: 5,
      comment: 'Love this backpack! Perfect size and very comfortable to carry.',
      product: 'Laptop Backpack',
      date: '2026-01-05',
    },
    {
      id: 4,
      customer: 'James Wilson',
      rating: 3,
      comment: 'The keyboard is nice but a bit loud. RGB lighting is great though.',
      product: 'Mechanical Keyboard RGB',
      date: '2026-01-04',
    },
    {
      id: 5,
      customer: 'Sophia Martinez',
      rating: 5,
      comment: 'Best wireless mouse I have ever used. Highly recommend!',
      product: 'Wireless Mouse',
      date: '2026-01-03',
    },
    {
      id: 6,
      customer: 'David Thompson',
      rating: 4,
      comment: 'Good value for money. Works well with my MacBook.',
      product: 'USB-C Hub Adapter',
      date: '2026-01-02',
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="feedbackStars">
        {[1, 2, 3, 4, 5].map((star) => (
          star <= rating ? <Star key={star} className="starFilled" /> : <StarBorder key={star} className="starEmpty" />
        ))}
      </div>
    );
  };

  const avgRating = (feedbackList.reduce((acc, curr) => acc + curr.rating, 0) / feedbackList.length).toFixed(1);

  return (
    <div className="feedback">
      <h1 className="feedbackTitle">Customer Feedback</h1>
      <div className="feedbackStats">
        <div className="feedbackStat">
          <h3>Average Rating</h3>
          <span className="feedbackValue">{avgRating}/5.0</span>
        </div>
        <div className="feedbackStat">
          <h3>Total Reviews</h3>
          <span className="feedbackValue">{feedbackList.length}</span>
        </div>
        <div className="feedbackStat">
          <h3>5 Star</h3>
          <span className="feedbackValue">{feedbackList.filter(f => f.rating === 5).length}</span>
        </div>
        <div className="feedbackStat">
          <h3>Response Rate</h3>
          <span className="feedbackValue">98%</span>
        </div>
      </div>
      <div className="feedbackList">
        {feedbackList.map((feedback) => (
          <div key={feedback.id} className="feedbackItem">
            <div className="feedbackItemHeader">
              <div className="feedbackCustomerInfo">
                <span className="feedbackCustomer">{feedback.customer}</span>
                <span className="feedbackProduct">{feedback.product}</span>
              </div>
              <div className="feedbackRating">
                {renderStars(feedback.rating)}
                <span className="feedbackDate">{feedback.date}</span>
              </div>
            </div>
            <p className="feedbackComment">{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
