import "./aboutCards.css";

export default function AboutCards({ data }) {
  return (
    <div className="about-cards">
      {data.map((element, index) => {
        return (
          <div key={index} className="d-flex gap-3 pb-3 pb-lg-5 ">
            <div className="shadow-lg h-fit-content p-2">{element.icon}</div>
            <div>
              <h4 className="text-light-emphasis fs-5">{element.feature}</h4>
              <p className="descFeature">{element.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
