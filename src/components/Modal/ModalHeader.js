import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { HiLocationMarker } from 'react-icons/hi';
import DateTimeIcon from '@/assets/Icons/date-time.png'
import Image from 'next/image';

const ModalHeader = ({ runNum, sectionNum, title, kmRangeStrt, kmRangeEnd, dateTime }) => {
  return (
    <>
      <Stack direction="horizontal" gap={3} className='mt-3 mb-2' style={{ color: "#9CA3AF" }}>
          <span>Run # {runNum}</span>
          <span className='mx-2'>{" > "}</span>
          <span>Section # {sectionNum}</span>
      </Stack>
      <h2 className='fw-bold text-white'>{title}</h2>

      <Row className='mt-3 mb-2' style={{ color: "#D1D5DB" }}>
          <Col xs='auto' className='d-flex align-items-baseline' ><HiLocationMarker className='me-1' color='#6b7280' /> Kilometrage start: {kmRangeStrt} km</Col>
          <Col xs='auto' className='d-flex align-items-baseline' ><HiLocationMarker className='me-1' color='#6b7280' /> Kilometrage End: {kmRangeEnd} km</Col>
          <Col xs='auto' className='d-flex align-items-baseline' ><Image src={DateTimeIcon} width={12} height={12} className='me-2' alt='Date Time Icon' /> <span>Date/ time: {dateTime}</span> </Col>
      </Row>
    </>
  );
};

export default ModalHeader;
