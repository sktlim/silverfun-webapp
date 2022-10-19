import React from "react";
import { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

//https://data.gov.sg/api/action/datastore_search?resource_id=051f815e-326e-4973-b62f-61cad9ed3284
//Distribution of Disability-Adjusted Life Years by Broad Cause Group(2019)

const DALYs = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [{
            label: '',
            data: [],
        }]
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`https://data.gov.sg/api/action/datastore_search?resource_id=051f815e-326e-4973-b62f-61cad9ed3284`)
            .then(res => res.json())
            .then((usefulData) => {
                console.log(usefulData.result);
                setLoading(false);
                setData({
                    datasets: [
                        {
                            label: "type of disease",
                            data: usefulData.result.records.map((result) => result),
                            backgroundColor: [
                                "#EC5863",
                            ],
                            barThickness: 20,
                            lineWidth : 0
                        },
                    ]

                });
                console.log("data")
                console.log(data)
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);

    return (
        <div className="mx-20 w-5/6">
            <div className="">
                {loading === true ? <div className="w-full flex justify-center text-center">loading...</div> :
                    <Bar
                        data={data}
                        options={{
                            parsing: {
                                xAxisKey: 'broad_cause_group',
                                yAxisKey: 'percentage',
                            },
                            plugins: {
                                title: {
                                    display: true,
                                    text: "Distribution of Disability-Adjusted Life Years by Broad Cause Group(2019)"
                                },
                                legend: {
                                    display: true,
                                    position: "bottom"
                                }
                            }
                        }}
                    />}

            </div>
        </div>
    );
};

export default DALYs;
