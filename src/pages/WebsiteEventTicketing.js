import CreateEvents from "../components/CreateEvents";
import FirstFold from "../components/FirstFold";
import Brand from "../components/Brand";
import SearchBox from "../components/SearchBox";
import UpcomingEvents from "../components/UpcomingEvents";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const WebsiteEventTicketing = () => {
  return (
    <div className="relative bg-white w-full h-[248.81rem] overflow-hidden">
      <CreateEvents />
      <FirstFold />
      <Brand />
      <SearchBox />
      <UpcomingEvents />
      <Blog />
      <Footer />
    </div>
  );
};

export default WebsiteEventTicketing;
