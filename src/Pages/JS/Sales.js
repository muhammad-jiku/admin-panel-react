import Chart from '../../Components/Chart';
import { productData } from '../../DummyData';
import '../Stylesheet/Sales.css';

export default function Sales() {
  return (
    <div className="sales">
      <h1 className="salesTitle">Sales Dashboard</h1>
      <div className="salesTop">
        <div className="salesCard">
          <h3>Total Revenue</h3>
          <span className="salesValue">$124,567</span>
          <span className="salesRate positive">+15.3%</span>
        </div>
        <div className="salesCard">
          <h3>Orders</h3>
          <span className="salesValue">1,842</span>
          <span className="salesRate positive">+8.7%</span>
        </div>
        <div className="salesCard">
          <h3>Avg. Order Value</h3>
          <span className="salesValue">$67.62</span>
          <span className="salesRate positive">+6.1%</span>
        </div>
        <div className="salesCard">
          <h3>Refunds</h3>
          <span className="salesValue">23</span>
          <span className="salesRate negative">-2.3%</span>
        </div>
      </div>
      <Chart
        data={productData}
        title="Monthly Sales Performance"
        dataKey="Sales"
        grid
      />
      <div className="salesBottom">
        <h2 className="salesSubtitle">Top Products This Month</h2>
        <table className="salesTable">
          <thead>
            <tr>
              <th>Product</th>
              <th>Revenue</th>
              <th>Units Sold</th>
              <th>Growth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wireless Bluetooth Headphones</td>
              <td>$13,048</td>
              <td>145</td>
              <td className="positive">+12%</td>
            </tr>
            <tr>
              <td>Smart Watch Pro</td>
              <td>$26,099</td>
              <td>87</td>
              <td className="positive">+18%</td>
            </tr>
            <tr>
              <td>Mechanical Keyboard RGB</td>
              <td>$11,959</td>
              <td>92</td>
              <td className="positive">+9%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
