import Header from "../components/Header";

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
      <div className="h-min flex w-full justify-center">
        <h2 className="p-10">Recommended For <text className="text-yellow">You</text></h2>
      </div>
    </div>
  );
}
export default Home;