/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import '../Stylesheets/WidgetLg.css';

function WidgetLg() {
  const Button = ({ typed }) => {
    return <button className={typed}>{typed}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.wrestling-world.com/imge/8349/drew-mcintyre-on-wwe-s-testing-policy.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Drew McIntyre</span>
          </td>
          <td className="widgetLgDate">12th Oct 2021</td>
          <td className="widgetLgAmount">$135.89</td>
          <td className="widgetLgStatus">
            <Button typed="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.wrestling-world.com/imge/8349/drew-mcintyre-on-wwe-s-testing-policy.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Drew McIntyre</span>
          </td>
          <td className="widgetLgDate">12th Oct 2021</td>
          <td className="widgetLgAmount">$135.89</td>
          <td className="widgetLgStatus">
            <Button typed="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.wrestling-world.com/imge/8349/drew-mcintyre-on-wwe-s-testing-policy.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Drew McIntyre</span>
          </td>
          <td className="widgetLgDate">12th Oct 2021</td>
          <td className="widgetLgAmount">$135.89</td>
          <td className="widgetLgStatus">
            <Button typed="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
