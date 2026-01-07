import { Description, GetApp, People } from '@mui/icons-material';
import '../Stylesheet/StaffReports.css';

export default function StaffReports() {
  const reports = [
    {
      id: 1,
      title: 'Monthly Performance Review',
      description: 'Staff performance metrics and KPIs for the current month',
      date: '2026-01-01',
      department: 'All Departments',
      size: '3.2 MB',
    },
    {
      id: 2,
      title: 'Attendance Report',
      description: 'Detailed attendance and leave records',
      date: '2026-01-01',
      department: 'HR',
      size: '1.5 MB',
    },
    {
      id: 3,
      title: 'Payroll Summary',
      description: 'Monthly payroll breakdown and salary reports',
      date: '2025-12-31',
      department: 'Finance',
      size: '2.8 MB',
    },
    {
      id: 4,
      title: 'Training & Development Report',
      description: 'Staff training completion and development progress',
      date: '2025-12-30',
      department: 'HR',
      size: '2.1 MB',
    },
    {
      id: 5,
      title: 'Team Productivity Analysis',
      description: 'Department-wise productivity metrics and analysis',
      date: '2025-12-28',
      department: 'Management',
      size: '3.7 MB',
    },
  ];

  return (
    <div className="staffReports">
      <div className="staffReportsHeader">
        <h1 className="staffReportsTitle">Staff Reports</h1>
        <button className="staffReportsGenerate">
          <People className="staffReportsIcon" />
          Generate Report
        </button>
      </div>
      <div className="staffReportsGrid">
        {reports.map((report) => (
          <div key={report.id} className="staffReportCard">
            <div className="staffReportHeader">
              <Description className="staffReportIcon" />
              <span className="staffReportDept">{report.department}</span>
            </div>
            <h3 className="staffReportTitle">{report.title}</h3>
            <p className="staffReportDescription">{report.description}</p>
            <div className="staffReportFooter">
              <div className="staffReportInfo">
                <span className="staffReportDate">{report.date}</span>
                <span className="staffReportSize">{report.size}</span>
              </div>
              <button className="staffReportDownload">
                <GetApp />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
