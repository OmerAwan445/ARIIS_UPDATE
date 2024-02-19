"use client";
import { Col, Figure, FigureImage, Row } from "react-bootstrap";

const LaserProfile = () => {
  return (
    <div>
      <h6 className="text-uppercase fw-bold mb-3">Raw Data</h6>
      <h3 className="fw-lighter">Laser profile</h3>
      <Row className="mt-4">
        <Col xs="auto">
          <Figure>
            <FigureImage
              width={230}
              height={250}
              alt="Left Rail Profile"
              src={"/DummyData/Images/Left Rail Profile.png"}
            />
            <Figure.Caption className="text-center">Left Rail Profile</Figure.Caption>
          </Figure>
          {/* <Image src={LeftRailProfile} alt='LeftRail Profile' className='' /> */}
        </Col>
        <Col xs="auto">
          <Figure>
            <FigureImage
              width={230}
              height={250}
              alt="Right Rail Profile"
              src={"/DummyData/Images/Right Rail Profile.png"}
            />
            <Figure.Caption className="text-center">Right Rail Profile</Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </div>
  );
};

export default LaserProfile;
