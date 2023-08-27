import "./style.css";
import PatientItem from "../../components/patient";

const Index = () => {
  return (
    <div className="patient-list">
      <h1 className="heading-primary">Patient Details</h1>
      <div className="patient-list__content">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
          <PatientItem />
        ))}
      </div>
    </div>
  );
};

export default Index;
