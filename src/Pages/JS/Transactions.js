import '../Stylesheet/Transactions.css';

export default function Transactions() {
  const transactions = [
    {
      id: 'TXN001234',
      customer: 'Sarah Johnson',
      date: '2026-01-07',
      amount: '$245.89',
      status: 'completed',
      method: 'Credit Card',
    },
    {
      id: 'TXN001235',
      customer: 'Michael Chen',
      date: '2026-01-07',
      amount: '$189.50',
      status: 'completed',
      method: 'PayPal',
    },
    {
      id: 'TXN001236',
      customer: 'Emily Davis',
      date: '2026-01-06',
      amount: '$312.25',
      status: 'pending',
      method: 'Debit Card',
    },
    {
      id: 'TXN001237',
      customer: 'James Wilson',
      date: '2026-01-06',
      amount: '$428.60',
      status: 'completed',
      method: 'Credit Card',
    },
    {
      id: 'TXN001238',
      customer: 'Sophia Martinez',
      date: '2026-01-05',
      amount: '$156.75',
      status: 'failed',
      method: 'PayPal',
    },
    {
      id: 'TXN001239',
      customer: 'David Thompson',
      date: '2026-01-05',
      amount: '$98.40',
      status: 'completed',
      method: 'Credit Card',
    },
    {
      id: 'TXN001240',
      customer: 'Olivia Garcia',
      date: '2026-01-04',
      amount: '$534.20',
      status: 'completed',
      method: 'Debit Card',
    },
    {
      id: 'TXN001241',
      customer: 'Daniel Anderson',
      date: '2026-01-04',
      amount: '$276.95',
      status: 'pending',
      method: 'PayPal',
    },
  ];

  return (
    <div className="transactions">
      <h1 className="transactionsTitle">Recent Transactions</h1>
      <div className="transactionsStats">
        <div className="transactionsStat">
          <h3>Total Volume</h3>
          <span className="transactionsValue">$2,242.54</span>
        </div>
        <div className="transactionsStat">
          <h3>Completed</h3>
          <span className="transactionsValue">5</span>
        </div>
        <div className="transactionsStat">
          <h3>Pending</h3>
          <span className="transactionsValue">2</span>
        </div>
        <div className="transactionsStat">
          <h3>Failed</h3>
          <span className="transactionsValue">1</span>
        </div>
      </div>
      <div className="transactionsTableWrapper">
        <table className="transactionsTable">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.customer}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.method}</td>
                <td>
                  <span className={`transactionStatus ${transaction.status}`}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
