import "./style.css";

import doctor from "../../assets/images/doctor.png";

const Index = () => {
  return (
    <div className="section-patient">
      <div className="section-patient__profile">
        <div className="section-patient__profile__img-box">
          <img src={doctor} alt="patient" />
        </div>
        <div className="section-patient__profile__content-box">
          <h2 className="heading-secondary">John Doe</h2>
          <p className="paragraph-primary">Age: 21</p>
          <p className="paragraph-primary">Date: 21-June-2023</p>
          <p className="paragraph-primary">Doctor: Micky</p>
          <p className="paragraph-primary">Disease: Sleeptalking</p>
        </div>
      </div>
      <div className="section-patient__description">
        <p>
          Description:
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <div className="section-patient__btn-box">
        <p>
          View Report:
          <button>View Report</button>
        </p>
        <p>
          View GLTF:
          <button>View 3D</button>
        </p>
      </div>
    </div>
  );
};

export default Index;
