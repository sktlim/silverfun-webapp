import Header from "../components/Header";
import Footer from "../components/Footer";
import recommendationPic from "../assets/images/recommendationPic.png"
import RecommendedItem from "../components/Home/RecommendedItem";
import AED from "../components/AED";
import HealthStats from "../components/Home/HealthStats";


function Home() {
  return (
    <div>
      <div className="relative bg-blue-100 h-screen">
        <Header />
        <div className="absolute w-full flex justify-end">
          <AED />
        </div>
        <div className="flex w-full justify-center">
          <div >
            <h1 className="text-center mb-2">
              <text className="text-yellow">Silver</text>
              Fun
            </h1>
            <h4 className="text-center mb-5">Your one-stop platform for eldercare services</h4>
            <div className="flex justify-center">
              <p className="text-center text-gray-600 w-8/12">Click the filters on the right of the map to see what activities or healthcare facilities are around you! Otherwise, use the search bar for your specific needs.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-min w-full ">
        <h2 className="p-10 text-center italic">Recommended For <text className="text-yellow">You</text>
        </h2>
        <div className="flex justify-evenly">

          <RecommendedItem
            timing="3"
            title="Neighbourhood Fitness Corner"
            description="Clock in some exercises with the equipments available!"
            type="Fitness"
            pic={recommendationPic}
          />
          <RecommendedItem
            timing="10"
            title="National University Hospital"
            description="Book an appointment for your regular health checkup."
            type="Hospital"
            pic={recommendationPic}
          />
          <RecommendedItem
            timing="15"
            title="Clementi Public Library"
            description="Browse and enjoy the extensive collection of books here! "
            type="Library"
            pic={recommendationPic}
          />
        </div>
        <HealthStats />
      </div>
      <Footer />
    </div>
  );
}
export default Home;