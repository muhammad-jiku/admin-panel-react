import Chart from '../../Components/Chart';
import '../Stylesheet/StaffAnalytics.css';

export default function StaffAnalytics() {
  const performanceData = [
    { name: 'Jan', Performance: 85 },
    { name: 'Feb', Performance: 88 },
    { name: 'Mar', Performance: 82 },
    { name: 'Apr', Performance: 90 },
    { name: 'May', Performance: 87 },
    { name: 'Jun', Performance: 92 },
    { name: 'Jul', Performance: 89 },
    { name: 'Aug', Performance: 94 },
    { name: 'Sep', Performance: 91 },
    { name: 'Oct', Performance: 95 },
    { name: 'Nov', Performance: 93 },
    { name: 'Dec', Performance: 96 },
  ];

  const attendanceData = [
    { name: 'Jan', Attendance: 95 },
    { name: 'Feb', Attendance: 93 },
    { name: 'Mar', Attendance: 97 },
    { name: 'Apr', Attendance: 94 },
    { name: 'May', Attendance: 96 },
    { name: 'Jun', Attendance: 98 },
    { name: 'Jul', Attendance: 92 },
    { name: 'Aug', Attendance: 95 },
    { name: 'Sep', Attendance: 97 },
    { name: 'Oct', Attendance: 99 },
    { name: 'Nov', Attendance: 96 },
    { name: 'Dec', Attendance: 98 },
  ];

  return (
    <div className="staffAnalytics">
      <h1 className="staffAnalyticsTitle">Staff Analytics</h1>
      <div className="staffAnalyticsMetrics">
        <div className="staffMetricCard">
          <h3>Avg Performance</h3>
          <span className="staffMetricValue">90.2%</span>
          <span className="staffMetricChange positive">+5.3%</span>
        </div>
        <div className="staffMetricCard">
          <h3>Avg Attendance</h3>
          <span className="staffMetricValue">96.3%</span>
          <span className="staffMetricChange positive">+2.1%</span>
        </div>
        <div className="staffMetricCard">
          <h3>Productivity</h3>
          <span className="staffMetricValue">88.7%</span>
          <span className="staffMetricChange positive">+3.8%</span>
        </div>
        <div className="staffMetricCard">
          <h3>Satisfaction</h3>
          <span className="staffMetricValue">92.5%</span>
          <span className="staffMetricChange positive">+1.2%</span>
        </div>
      </div>
      <div className="staffAnalyticsCharts">
        <Chart
          data={performanceData}
          title="Staff Performance Trends"
          dataKey="Performance"
          grid
        />
        <Chart
          data={attendanceData}
          title="Attendance Rate"
          dataKey="Attendance"
          grid
        />
      </div>
    </div>
  );
}
