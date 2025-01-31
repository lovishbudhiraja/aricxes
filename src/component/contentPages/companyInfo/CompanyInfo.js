import OurTeam from "./OurTeam";
import WhoWeAre from "./WhoWeAre";
import ChooseUs from "../../homeContent/whychoose/ChooseUs";

function CompanyInfo() {
  return (
    <>
      <div className="h-auto lg:h-[500px] pt-28 pb-20 lg:pb-0 bg-[url('https://res.cloudinary.com/dfvonhupq/image/upload/v1735457385/Group_23_h4kcrs.png')] bg-cover flex align-middle border-b-4 -border--base-color">
        <div className="wrapper">
          <h1 className="text-white lg:text-7xl text-3xl font-extrabold">
            About Aricxes
          </h1>
        </div>
      </div>
      <WhoWeAre />
      <OurTeam />
      <ChooseUs />
    </>
  );
}

export default CompanyInfo;
