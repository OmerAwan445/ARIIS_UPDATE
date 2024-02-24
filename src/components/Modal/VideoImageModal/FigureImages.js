import React from 'react'
import { Col, Figure, FigureImage, Row } from "react-bootstrap";

const FigureImages = ({ imageUrls }) => {
  return (
    <Row className="mt-4">
        {imageUrls.map((url, index) => (
          <Col xs="auto" className={index !== imageUrls.length -1 ? "mr-3" : ""} key={index}>
            <Figure>
              <FigureImage
              className="w-auto"
                alt=''
                src={url}
              />
            </Figure>
          </Col>
        ))}
      </Row>
  )
}

export default FigureImages
