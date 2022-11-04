import AboutBigImg from "./AboutBigImg";
import AboutImg from "../assets/images/biglogo.png";
import AboutContent from "./AboutContent";

function AboutSection() {
  return (
    <div className="relative py-64 px-20">
      <AboutBigImg img={AboutImg} />
      <AboutContent />
    </div>
  );
}
export default AboutSection;
