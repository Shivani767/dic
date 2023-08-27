import "./style.css";
import doctor from "../../assets/images/doctor.png";
 // eslint-disable-next-line
import PrimaryButton from "../../components/primary-button";

const Index = () => {
  return (
    <div className="login">
      <div className="login__img-box">
        <img src={doctor} alt="doctor" />
      </div>
      <div className="login__content-box">
        <h1 className="heading-primary">Login</h1>
        <form action="" className="login__content-box__form">
          <div>
            <label htmlFor="username">
              Username:
              <br />
              <input type="text" name="username" id="username" />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <br />
              <input type="password" name="password" id="password" />
            </label>
          </div>
          <div>
            <label htmlFor="department">
              Department:
              <br />
              <select name="department" id="department">
                <option>Department</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
              </select>
            </label>
          </div>
          <div>
            <button type="submit" className="btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
