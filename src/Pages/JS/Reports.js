import { Assessment, Description, GetApp } from '@mui/icons-material';
import '../Stylesheet/Reports.css';

export default function Reports() {
  const reports = [
    {
      id: 1,
      title: 'Monthly Sales Report',
      description: 'Comprehensive sales data for the current month',
      date: '2026-01-01',
      type: 'Sales',
      size: '2.4 MB',
    },
    {
      id: 2,
      title: 'User Activity Report',
      description: 'User engagement and activity metrics',
      date: '2026-01-01',
      type: 'Analytics',
      size: '1.8 MB',
    },
    {
      id: 3,
      title: 'Inventory Status Report',
      description: 'Current stock levels and inventory analysis',
      date: '2025-12-31',
      type: 'Inventory',
      size: '3.2 MB',
    },
    {
      id: 4,
      title: 'Financial Summary Q4 2025',
      description: 'Quarterly financial performance summary',
      date: '2025-12-31',
      type: 'Finance',
      size: '4.1 MB',
    },
    {
      id: 5,
      title: 'Customer Satisfaction Report',
      description: 'Customer feedback and satisfaction metrics',
      date: '2025-12-28',
      type: 'Customer',
      size: '1.5 MB',
    },
  ];

  return (
    <div className="reports">
      <h1 className="reportsTitle">Reports</h1>
      <div className="reportsActions">
        <button className="reportsButton generate">
          <Assessment className="reportsIcon" />
          Generate New Report
        </button>
      </div>
      <div className="reportsGrid">
        {reports.map((report) => (
          <div key={report.id} className="reportCard">
            <div className="reportCardHeader">
              <Description className="reportCardIcon" />
              <span className="reportType">{report.type}</span>
            </div>
            <h3 className="reportCardTitle">{report.title}</h3>
            <p className="reportCardDescription">{report.description}</p>
            <div className="reportCardFooter">
              <span className="reportDate">{report.date}</span>
              <span className="reportSize">{report.size}</span>
            </div>
            <button className="reportDownload">
              <GetApp className="downloadIcon" />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
