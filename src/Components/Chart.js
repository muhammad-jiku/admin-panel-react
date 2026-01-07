import
  {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
  } from 'recharts';
import '../Stylesheets/Chart.css';

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle"> {title} </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <XAxis dataKey="name" stroke="#82ca9d" />
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#8884d8" strokeDasharray="6 6" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
