import React from "react";
import { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import HealthcarePin from "../../assets/icons/HealthcarePin.svg"
import Button from "../Button";
Chart.register(...registerables);

const Cancers = () => {
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
        fetch(`https://data.gov.sg/api/action/datastore_search?resource_id=82a47c6d-0539-4f1d-bdf9-ff96b9ed6cf2`)
            .then(res => res.json())
            .then((usefulData) => {
                console.log(usefulData.result);
                setLoading(false);
                setData({
                    datasets: [
                        {
                            label: "type of cancer",
                            data: usefulData.result.records.map((result) => result),
                            backgroundColor: [
                                "#EC5863",
                                "#39619B",
                                "#FBDEE0",
                                "#DBE9FD",
                                "#E1AD01",
                                // "#EC5863",
                                // "#39619B",

                            ],
                            barThickness: 20,
                            lineWidth : 0
                        },
                        //   {
                        //     label:"liver",
                        //     data: usefulData.result.records.map((result) => result.type_of_cancer === "liver"? result : null),
                        //     backgroundColor: [
                        //       "#ecf0f1",
                        //       "#50AF95",
                        //       "#f3ba2f",
                        //       "#2a71d0"
                        //     ]
                        //   },
                        //   {
                        //     label:"prostate",
                        //     data: usefulData.result.records.map((result) => result.type_of_cancer === "prostate"? result:null),
                        //     backgroundColor: [
                        //       "#50AF95",
                        //       "#f3ba2f",
                        //       "#2a71d0"
                        //     ]
                        //   }
                    ]

                });
                console.log(data)
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);

    return (
        <div className="mx-20 ">
            <div className="">
                {loading === true ? <div className="w-full flex justify-center text-center">loading...</div> :
                    <Bar
                        data={data}
                        options={{
                            parsing: {
                                xAxisKey: 'type_of_cancer',
                                yAxisKey: 'incidence_rate',
                            },
                            plugins: {
                                title: {
                                    display: true,
                                    text: "Top Leading Causes of Cancers (2013-2017)"
                                },
                                legend: {
                                    display: true,
                                    position: "bottom"
                                }
                            }
                        }}
                    />}
                {/* to do: limit data to last 10 (show 2013-2017 only) and differentiate gender */}

            </div>
            <div className="bg-white w-full h-min rounded-xl my-10 py-5 px-10">
                <div className="flex justify-between items-center mb-5">
                    <h3>When do you go for cancer check-up?</h3>
                    <Button classNames="text-lg" text="Schedule appointment" icon={HealthcarePin}></Button>
                </div>
                <div className="flex justify-between">
                    <div className="bg-yellow w-80 h-78 rounded-xl p-5">
                        <div className="w-full flex justify-center mb-4">
                            <h5 className="bg-white w-10 h-10 text-center py-1.5 rounded-3xl text-yellow">1</h5>
                        </div>
                        <p className="text-center">If you do not show any symptoms and are not considered to be at high risk, you should undergo screening for colorectal cancer from the age of 50.</p>

                    </div>
                    <div className="bg-yellow w-80 h-78 rounded-xl p-5">
                        <div className="w-full flex justify-center mb-4">
                            <h5 className="bg-white w-10 h-10 text-center py-1.5 rounded-3xl text-yellow">2</h5>
                        </div>
                        <p className="text-center">Women age 45 to 54 should get mammograms every year. Women 55 and older should switch to mammograms every 2 years, or can continue yearly screening.</p>

                    </div>
                    <div className="bg-yellow w-80  h-78 rounded-xl p-5">
                        <div className="w-full flex justify-center mb-4">
                            <h5 className="bg-white w-10 h-10 text-center py-1.5 rounded-3xl text-yellow">3</h5>
                        </div>
                        <p className="text-center">If you have a family history of cancer, it puts you at a higher risk. Being overweight can also increase your risk of developing certain types of cancer.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cancers;
