import React from "react";
import { Col, Figure, FigureImage, Row } from "react-bootstrap";

const ProfileImages = ({ profiles, isLaserProfile }) => {
  return (
    <div className="">
      <h6 className="text-uppercase fw-bold mb-3">Raw Data</h6>
      {isLaserProfile && <h3 className="fw-lighter">Laser profile</h3>}
      <Row className="mt-5">
        {profiles.map((profile, index) => (
          <Col {...(profiles.length > 1 && { xs: "auto" })}  key={index}>
            <Figure>
              <FigureImage
              style={{maxHeight:"320px"}}
              className=""
                alt={profile.title}
                src={profile.imageUrl}
              />
              <Figure.Caption className="text-center">{profile.title}</Figure.Caption>
            </Figure>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProfileImages;
