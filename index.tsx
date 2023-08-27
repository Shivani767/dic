import "./style.css";
import doctor from "../../assets/images/doctor.png";

const Index = () => {
  return (
    <div className="patient-item__profile">
      <div className="patient-item__profile__img-box">N
        <img src={doctor} alt="patient" />
      </div>
      <div className="patient-item__profile__content-box">
        <h2 className="heading-secondary">John Doe</h2>
        <p className="paragraph-primary">Age: 21</p>
        <p style={{ marginTop: "1rem" }} className="paragraph-primary">
          Description:
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className="patient-item__profile__content-box__btn">
          Details
        </button>
      </div>
    </div>
  );
};

export default Index;
