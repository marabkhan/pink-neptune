import Marquee from "react-fast-marquee";
import "~/index.css";

const ReactMarquee = () => {
  return (
    <div className="container mx-auto">
      <Marquee speed={300} autoFill={true}>
        <div className="flex text-6xl text-lightGray	">
          <p className="text-5xl p-3 font-bold text-lightGray">
            ~UPCOMING EVENTS
          </p>
          <p className="text-5xl p-3 font-bold text-lightGray">
            ~UPCOMING EVENTS{" "}
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default ReactMarquee;
