import { userRows } from '../DummyData';
import '../Stylesheets/WidgetLg.css';

function Button({ type }) {
  return <button className={type}>{type}</button>;
}

function WidgetLg() {
  const transactions = [
    { user: userRows[0], date: '2026-01-07', amount: userRows[0].transaction, status: 'Approved' },
    { user: userRows[1], date: '2026-01-06', amount: userRows[1].transaction, status: 'Declined' },
    { user: userRows[2], date: '2026-01-05', amount: userRows[2].transaction, status: 'Pending' },
    { user: userRows[3], date: '2026-01-04', amount: userRows[3].transaction, status: 'Approved' },
    { user: userRows[4], date: '2026-01-03', amount: userRows[4].transaction, status: 'Approved' },
  ];

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr className="widgetLgTr" key={`${transaction.user.id}-${transaction.date}`}>
              <td className="widgetLgUser">
                <img
                  src={transaction.user.avatar}
                  alt={transaction.user.username}
                  className="widgetLgImg"
                />
                <span className="widgetLgName">{transaction.user.username}</span>
              </td>
              <td className="widgetLgDate">{transaction.date}</td>
              <td className="widgetLgAmount">{transaction.amount}</td>
              <td className="widgetLgStatus">
                <Button type={transaction.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLg;
