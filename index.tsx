import "./style.css";
import doctor from "../../assets/images/doctor.png";
import PrimaryButton from "../../components/primary-button";

const Index = () => {
  return (
    <div className="section-hero">
      <div className="section-hero__img-box">
        <img src={doctor} alt="doctor" />
      </div>
      <div className="section-hero__content-box">
        <h1 className="heading-primary">Heading</h1>
        <p className="paragraph-primary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <PrimaryButton title="Explore" destination="/" />
      </div>
    </div>
  );
};

export default Index;
