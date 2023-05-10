import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero py-10 bg-base-200 my-20 rounded-lg">
      <div className="hero-content flex-col lg:flex-row gap-4">
        <div className="w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
        </div>
        <div className="w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-[#FF3811]">About Us</h3>
          <h1 className="text-5xl font-bold w-3/4">We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. 
          </p>
          <p>the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable. </p>
          <button className="btn bg-[#FF3811] outline-none border-none">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
