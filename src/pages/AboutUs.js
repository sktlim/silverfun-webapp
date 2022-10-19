import Header from "../components/Header";

function AboutUs() {
    return (
    <div>
    <Header />
    <div className = "flex justify-around">
        <h1>About Us</h1>
    </div>
    {/* 1st div */}
    <div class="flex justify-around my-24">
      <div class = "w-1/2 flex flex-col justify-center">
        <h1 class = "flex justify-center">
          Our
          <text className="text-yellow">Vision</text>
        </h1>
        <p class="whitespace-normal text-center mt-8 italic text-xl font-extrabold">
          For all senior citizens to be active citizens in society and overcome technological barriers
        </p>
      </div>
      <div class = "flex justify-center w-1/2">
        <img
        src="https://github.com/sktlim/silverfun-webapp/blob/hanyu/src/assets/images/Elderly1.png?raw=true"
        class="w-3/4"
        alt="elderly 1"
        />
      </div>
    </div>

    {/* 2nd div */}
    <div class="flex justify-around my-24">
      <div class = "flex justify-center w-1/2">
        <img
        src="https://github.com/sktlim/silverfun-webapp/blob/hanyu/src/assets/images/Elderly2.png?raw=true"
        class="w-3/4"
        alt="elderly 2"
        />
      </div>
      <div class = "w-1/2 flex flex-col justify-center">
        <h1 class = "flex justify-center">
          Our
          <text className="text-red-700">Mission</text>
        </h1>
        <p class="w-96 flex justify-center text-center mt-8 italic text-xl font-extrabold">
          To provide the elderly easy access to services and activities to live independently
        </p>
      </div>
    </div>

    {/* 3rd div */}
    <div>
      <h1 class = "flex justify-center">
        Our
        <text class = "text-blue-700">Team</text>
      </h1>
    </div>

    {/* 4th div */}
    <div class = "flex flex-center mt-10">
      <div class = "bg-blue-300 px-5 w-56 h-72 rounded-lg drop-shadow-lg shadow shadow-gray-500/40">
        <p class = "text-center">Sui Kiat</p>
      </div>
    </div>

    </div>
    );
  }
  export default AboutUs;
