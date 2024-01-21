import { Col } from "react-bootstrap";

export const SkillCard = ({ title, imgUrl }) => {
  return (
    <Col>
        <div className="skill-imgbx">
            <div className="skill-box">
                <img src={imgUrl} />
            </div>
            <div className="skill-txtx">
                <span>{title}</span>
            </div>  
        </div>
    </Col>
    
  )
}


