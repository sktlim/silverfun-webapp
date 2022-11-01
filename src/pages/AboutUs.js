import Header from "../components/Header";
import htut from "../assets/images/htut.jpg";
import jingxuan from "../assets/images/jingxuan.jpg";
import hanyu from "../assets/images/hanyu.jpg";
import suikiat from "../assets/images/suikiat.jpg";
import yixuan from "../assets/images/yixuan.jpg";
import elderly1 from "../assets/images/aboutUs1.png";
import elderly2 from "../assets/images/aboutUs2.png";
import Footer from "../components/Footer";


function AboutUs() {
    return (
    <div>
    <Header />
    <div class = "text-center m-auto">
    
        <h1>About Us</h1>


    {/* 1st div */}
    <div class = "flex justify-center">
    <div class="flex m-auto my-12">
      <div class = "w-1/2 flex flex-col justify-center">
        <div class = "inline-block align-middle">
          <h1>Our
          
          <text className="text-yellow"> Vision</text>
          </h1>
          <p class="text-center m-auto mt-8 italic text-xl font-extrabold">
            For all senior citizens to be active citizens in society and overcome technological barriers
          </p>
        </div>
        </div>
      <div class = "flex justify-center w-1/2">
        <img
        src= {elderly1}
        class="w-3/4"
        alt="elderly 1"
        />
      </div>
    </div>
  </div>
    {/* 2nd div */}
    <div class = "flex justify-center">
    <div class="flex m-auto my-12">
      <div class = "w-1/2 bg-blue flex flex-col align-middle">
        <img
        src={elderly2}
        class="w-5/6"
        alt="elderly 2"
        />
      </div>
      <div class = "w-1/2 flex flex-col justify-center">
        <div class = "inline-block align-middle">
        <h1 class = "flex justify-center">
          <h1>Our
          <text className="text-red-700"> Mission</text></h1>
        </h1>
        <p class="text-center m-auto mt-8 italic text-xl font-extrabold">
          To provide the elderly easy access to services and activities to live independently
        </p>
      </div>
      </div>
    </div>
    </div>
    
    <br/>
    
    {/* 3rd div */}
    <div>
      <h1 class = "flex whitespace-pre justify-center ">
        <h1>Our
        <text class = "text-blue-700"> Team</text></h1>
      </h1>
    </div>

    {/* 4th div */}

    <div class = "flex justify-center">
      <div class = "flex-col space-y-28">
      
      <div class = "flex flex-row space-x-36 mt-10 mx-48">

        <div class = "bg-blue-300 px-5 w-56 h-96 rounded-lg drop-shadow-lg shadow shadow-gray-500/40 p-4">
          <img src = {suikiat}/>
          <br/>
            <div class = "flex-col text-center">
              <div class = "text-lg font-extrabold">Sui Kiat</div>
              <br/>
              <div>REP Y2</div>
              <div>Leader</div>
            </div>
        </div>

        <div class = "bg-blue-300 px-5 w-56 h-96 rounded-lg drop-shadow-lg shadow shadow-gray-500/40 p-4">
          <img src = {hanyu}/>
          <br/>
            <div class = "flex-col text-center">
              <div class = "font-extrabold text-lg">Han Yu</div>
              <br/>
              <div>REP Y2</div>
              <div>Sub-Leader</div>
            </div>
        </div>
        
      </div>

      <div class = "flex flex-row space-x-36 mt-10">
        <div class = "bg-blue-300 px-5 w-56 h-96 rounded-lg drop-shadow-lg shadow shadow-gray-500/40 p-4">
          <img src = {htut}/>
          <br/>
            <div class = "flex-col text-center">
              <div class = "font-extrabold text-lg">Htut</div>
              <br/>
              <div>REP Y2</div>
              <div>Member</div>
            </div>
        </div>

        <div class = "bg-blue-300 px-5 w-56 h-96 rounded-lg drop-shadow-lg shadow shadow-gray-500/40 p-4">
          <img src = {jingxuan}/>
          <br/>
            <div class = "flex-col text-center">
              <div class = "font-extrabold text-lg">Jing Xuan</div>
              <br/>
              <div>REP Y2</div>
              <div>Member</div>
            </div>
        </div>

        <div class = "bg-blue-300 px-5 w-56 h-96 rounded-lg drop-shadow-lg shadow shadow-gray-500/40 p-4">
          <img src = {yixuan}/>
          <br/>
            <div class = "flex-col text-center">
              <div class = "font-extrabold text-lg">Yi Xuan</div>
              <br/>
              <div>CE Y3</div>
              <div>Member</div>
            </div>
        </div>
      </div>
      <br/>
    </div>
    </div>



    </div>
      <br/>
      <Footer/>
    </div>
    );
  }
  export default AboutUs;
