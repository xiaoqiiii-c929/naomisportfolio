import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, previewUrl }) => {
  return (
    <Col>
      <div className="proj-imgbx">
        <div className="proj-box">
          <img src={imgUrl} />
        </div>
        <a href={previewUrl} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </a>
        
      </div>
    </Col>
    
  )
}


