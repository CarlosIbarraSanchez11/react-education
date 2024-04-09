import "./Programs.css";
import programa_1 from "../../assets/program-1.png";
import programa_2 from "../../assets/program-2.png";
import programa_3 from "../../assets/program-3.png";
import programa_icon_1 from "../../assets/program-icon-1.png";
import programa_icon_2 from "../../assets/program-icon-2.png";
import programa_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={programa_1} alt="" />
        <div className="caption">
          <img src={programa_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={programa_2} alt="" />
        <div className="caption">
          <img src={programa_icon_2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={programa_3} alt="" />
        <div className="caption">
          <img src={programa_icon_3} alt="" />
          <p>Post Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
