import "./style.css";
import patient from "../../assets/images/patient.png";

const Index = () => {
  return (
    <div className="section-patient-details">
      <div className="section-patient-details__content">
        <h1 className="heading-primary">Patient Details</h1>
        <form action="" className="section-patient-details__form">
          <div>
            <label htmlFor="name">
              name:
              <br />
              <input type="text" name="name" id="name" />
            </label>
          </div>
          <div>
            <label htmlFor="age">
              Age:
              <br />
              <input type="number" name="age" id="age" />
            </label>
          </div>
          <div>
            <label htmlFor="report">
              View Report:
              <br />
              <input
                type="button"
                name="report"
                id="report"
                value="View Report"
              />
            </label>
          </div>
          <div>
            <label htmlFor="gltf">
              View GLTF:
              <br />
              <input type="button" name="gltf" id="gltf" value="View GLTF" />
            </label>
          </div>
          <div>
            <label htmlFor="prescription">
              Add Prescription:
              <br />
              <input type="file" name="prescription" id="prescription" />
            </label>
          </div>
          <div>
            <button type="submit" className="btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="section-patient-details__img-box">
        <img src={patient} alt="patient details" />
      </div>
    </div>
  );
};

export default Index;
