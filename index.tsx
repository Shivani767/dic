import "./style.css";
import { Link } from "react-router-dom";

type PropsType = {
  title: string;
  destination: string;
};

const Index = ({ title, destination }: PropsType) => {
  return (
    <Link to={`/${destination}`} className="btn-primary">
      {title}
    </Link>
  );
};

export default Index;
