import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        fill: {
          type: 'gradient' 
        },
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-2",
          data: [1, 20, 45, 32, 56, 98, 12, 19]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="600"
              height = "300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Charto;