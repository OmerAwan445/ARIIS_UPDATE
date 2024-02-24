import React from "react";
import { Col, Figure, FigureImage, Row } from "react-bootstrap";

const LaserProfile = ({ profiles }) => {
  return (
    <div>
      <h6 className="text-uppercase fw-bold mb-3">Raw Data</h6>
      <h3 className="fw-lighter">Laser profile</h3>
      <Row className="mt-4">
        {profiles.map((profile, index) => (
          <Col {...(profiles.length > 1 && { xs: "auto" })}  key={index}>
            <Figure>
              <FigureImage
              className="w-auto"
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

export default LaserProfile;
