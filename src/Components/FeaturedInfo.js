import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import React from 'react';
import '../Stylesheets/FeaturedInfo.css';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <h6 className="featuredTitle">Revenue</h6>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$364,164</span>
          <span className="featuredMoneyRate">
            -12.786
            <ArrowDownward
              className="featuredIcon negative"
              style={{ fontSize: 14 }}
            />
          </span>
        </div>
        <span className="featuredSub">Compared to previous month!</span>
      </div>
      <div className="featuredItem">
        <h6 className="featuredTitle">Sales</h6>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$884,981</span>
          <span className="featuredMoneyRate">
            -5.631
            <ArrowDownward
              className="featuredIcon negative"
              style={{ fontSize: 14 }}
            />
          </span>
        </div>
        <span className="featuredSub">Compared to previous month!</span>
      </div>
      <div className="featuredItem">
        <h6 className="featuredTitle">Cost</h6>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$391,714</span>
          <span className="featuredMoneyRate">
            +1.6
            <ArrowUpward className="featuredIcon" style={{ fontSize: 14 }} />
          </span>
        </div>
        <span className="featuredSub">Compared to previous month!</span>
      </div>
    </div>
  );
}
