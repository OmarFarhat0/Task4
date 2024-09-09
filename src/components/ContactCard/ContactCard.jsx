import "./contactCard.css";

export default function ContactCard({ data }) {
  return (
    <div className="contact-card text-center shadow py-2 bg-white">
      <div className="container-icon  rounded-circle w-fit-content mx-auto p-3 mb-2">
        {data.icon}
      </div>
      <h3 className="fs-5 text-light-emphasis">{data.title}</h3>
      <p className="text-light-emphasis">{data.text}</p>
    </div>
  );
}
