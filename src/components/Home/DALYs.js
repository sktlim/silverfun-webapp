import React from "react";
import {useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const DALYs = () => {
    const [data, setData] = useState({
        labels: [],
        datasets:[{
            data:[]
        }]
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`https://data.gov.sg/api/action/datastore_search?resource_id=051f815e-326e-4973-b62f-61cad9ed3284`)
                .then(res => res.json())
                .then((usefulData) => {
                    console.log(usefulData);
                    setLoading(false);
                    setData({
                        datasets: [
                          {
                            label:"type of disease",
                            data: usefulData.result.records.map((result) => result),
                            backgroundColor: [
                              "#E1AD01",
                              "#ecf0f1",
                              "#50AF95",
                              "#f3ba2f",
                              "#2a71d0"
                            ]
                          }
                        ]
                      });
                      console.log(data)
                })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);

  return (
    <div>
    {/* to do: limit data to last 10 (show 2013-2017 only) and differentiate gender */}
    <Bar
        data={data}
        options={{
            parsing:{
                xAxisKey: 'broad_cause_group',
                yAxisKey: 'percentage',
            },
          plugins: {
            title: {
              display: true,
              text: "Distribution of Disability-Adjusted Life Years by Broad Cause Group"
            },
            legend: {
              display: true,
              position: "bottom"
           }
          }
        }}
      />
      </div>
  );
};

export default DALYs;
