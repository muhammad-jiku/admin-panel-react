import Chart from '../../Components/Chart';
import { productData, userData } from '../../DummyData';
import '../Stylesheet/Analytics.css';

export default function Analytics() {
  return (
    <div className="analytics">
      <h1 className="analyticsTitle">Analytics Dashboard</h1>
      <div className="analyticsCharts">
        <Chart
          data={userData}
          title="User Activity Trends"
          dataKey="Active User"
          grid
        />
        <Chart
          data={productData}
          title="Product Sales Performance"
          dataKey="Sales"
          grid
        />
      </div>
      <div className="analyticsInfo">
        <div className="analyticsCard">
          <h3>Total Users</h3>
          <span className="analyticsValue">12,800</span>
          <span className="analyticsRate positive">+12.5%</span>
        </div>
        <div className="analyticsCard">
          <h3>Conversion Rate</h3>
          <span className="analyticsValue">91.3%</span>
          <span className="analyticsRate positive">+8.2%</span>
        </div>
        <div className="analyticsCard">
          <h3>Avg. Session Time</h3>
          <span className="analyticsValue">8:42</span>
          <span className="analyticsRate positive">+2.1%</span>
        </div>
        <div className="analyticsCard">
          <h3>Bounce Rate</h3>
          <span className="analyticsValue">24.7%</span>
          <span className="analyticsRate negative">-3.4%</span>
        </div>
      </div>
    </div>
  );
}
