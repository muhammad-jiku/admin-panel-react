import React from 'react';
import {
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
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#82ca9d" />
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#8884d8" strokeDasharray="6 6" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
