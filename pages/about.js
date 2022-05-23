// components
import AboutUs from "../components/About/AboutUs";
import LayOut from "../components/common/LayOut";

const About = () => {
  return (
    <LayOut
      title={"About Us"}
      keywords={"About Us page"}
      description={"Developed by Parham Abolghasemi"}
    >
      <AboutUs />
    </LayOut>
  );
};

export default About;
