import React from 'react';
import Chart from '../../Components/Chart';
import FeaturedInfo from '../../Components/FeaturedInfo';
import WidgetLg from '../../Components/WidgetLg';
import WidgetSm from '../../Components/WidgetSm';
import { userData } from '../../DummyData';
import '../Stylesheet/HomePage.css';

export default function HomePage() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        dataKey="Active User"
        grid
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
