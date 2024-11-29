// components/InfoSection.js
import Image from "next/image";

const InfoSection = ({
  image = null,
  title,
  desc,
  desc_p_two,
  row_direction,
  bulletPoints,
  card_tag,
}) => {
  return (
    <section className="info-section">
      <div
        className="info-container"
        style={
          row_direction
            ? { flexDirection: "row-reverse" }
            : { flexDirection: "row" }
        }
      >
        <div className="info-image-wrapper relative">
          <Image
            src={image}
            alt="Modern atrium with digital signage displays, architectural photography"
            width={800}
            height={533}
            className="w-full h-auto"
          />
          <div className="info-overlay absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="info-content p-6">
          {card_tag && <span className="card-tag">{card_tag}</span>}

          <h2 className="text-2xl font-bold mb-4 leading-normal ">
            {title}
            {/* Our team are here to provide the right digital signage system */}
          </h2>

          <p className=" mb-4 font-extralight ">
            {desc}
            {/* Our experts have the knowledge and experience to develop and provide
            high quality signage solutions that bring the flexibility you need
            to convey compelling content. */}
          </p>

          {desc_p_two && <p className="font-extralight ">{desc_p_two}</p>}

          {bulletPoints && bulletPoints.length > 0 && (
            <ul>
              {bulletPoints.map((point, index) => (
                <li className="font-extralight " key={index}>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
