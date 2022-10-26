import React from "react";
import Button from "../Button";
import HealthcarePin from "../../assets/icons/HealthcarePin.svg"

const Hypertension = () => {
  return (
    <div className="mx-20 w-5/6">
      <div className="bg-white justify-center pt-10 pb-5 rounded-xl mb-20">
        <h6 className="text-center mb-10 mx-20">Prevalence of Hypertension, Diabetes, High Total Cholesterol, Obesity and Daily Smoking</h6>
        <div className="flex justify-center w-full"><iframe width="600" height="400" src="https://data.gov.sg/dataset/prevalence-of-hypertension-diabetes-high-total-cholesterol-obesity-and-daily-smoking/resource/c5f26f19-b6aa-4f4f-ae5b-ee62d840f8e7/view/36a54ebf-3db6-48c8-84c8-c15e48ed5c0a" frameBorder="0"></iframe></div>
      </div>
      <div className="bg-white w-full h-min rounded-xl my-10 py-5 px-10">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h4>When should I check for Hyperlipidemia</h4>
            <h4>(High Cholesterol)?</h4>
          </div>
          <Button classNames="text-lg" text="Schedule appointment" icon={HealthcarePin}></Button>
        </div>
        <div className="flex justify-between">
          <div className="bg-yellow mx-10 h-78 rounded-xl p-5">
            <div className="w-full flex justify-center mb-4">
              <h5 className="bg-white w-10 h-10 text-center py-1.5 rounded-3xl text-yellow">1</h5>
            </div>
            <p className="text-center">If you are 40 years old or oder, you should be screening for high cholesterol once every three years.</p>
          </div>

          <div className="bg-yellow h-78 rounded-xl p-5">
            <div className="w-full flex justify-center mb-4">
              <h5 className="bg-white w-10 h-10 text-center py-1.5 rounded-3xl text-yellow">2</h5>
            </div>
            <p className="text-center">High cholesterol, a major factor of heart disease, can be detected with a fasting blood lipid test. Before the screening, you should fast for 8 - 10 hours.</p>
          </div>
          <div className="bg-yellow mx-10  h-78 rounded-xl p-5">
            <div className="w-full flex justify-center mb-4">
              <h5 className="bg-white w-10 h-10 text-center py-1.5 rounded-3xl text-yellow">3</h5>
            </div>
            <p className="text-center">If you have a family history of high cholesterol, it puts you at a higher risk. If you do, go for screenings more often.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hypertension;
