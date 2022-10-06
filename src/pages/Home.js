import Header from "../components/Header";
import Footer from "../components/Footer";
import recommendationPic from "../assets/images/recommendationPic.png"
import RecommendedItem from "../components/RecommendedItem";
import searchIcon from "../assets/icons/search.svg"

function Home() {
  return (
    <div>
      <div className="bg-blue-100 h-screen">
        <Header />
        <div className="flex w-full justify-center">
          <div>
            <h1 className="text-center mb-2">
              <text className="text-yellow">Silver</text>
              Fun
            </h1>
            <h4 className="text-center mb-5">Your one-stop platform for eldercare services</h4>
            <p className="text-center text-gray-600">Click the filters on the right of the map to see what activities or healthcare facilities are around you! Otherwise, use the search bar for your specific needs.</p>
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
        <div className="bg-blue-100 h-96 w-5/6 m-auto my-20 rounded-2xl drop-shadow-lg flex p-1">
          <div className="bg-white h-full w-1/5 rounded-2xl drop-shadow flex flex-col p-3">
            <div className="flex items-center bg-gray-100 h-10  pr-16 w-full rounded-lg">
              <img src={searchIcon} className="p-3" alt="search" />
              <input
                class="h-full bg-gray-100 text-gray-900 text-sm focus:outline-none font-['Rubik']"
                type="text"
                id="header-search"
                placeholder="Search..."
                name="s" />
            </div>
            <p className="pt-8 px-5 text-gray-600 font-['Rubik']">
              Cancers
            </p>
            <p className="pt-8 px-5 text-gray-600 font-['Rubik']">
              Hypertension
            </p>
            <p className="pt-8 px-5 text-gray-600 font-['Rubik']">
              DALYs
            </p>
          </div>
          <div className="w-full">
            <h2 className="p-10 text-center text-yellow">Health Statistics</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;