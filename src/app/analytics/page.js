'use client';
import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap';
import DateTimeIcon from '@/assets/Icons/date-time.png'
import Image from 'next/image';
import BorderedCross from '/public/DummyData/Images/bordered-Cross.png'

const AnalyticsPage = () => {
  return (
    <Container className='p-4 primary-bg' fluid>
      <Stack direction="horizontal" gap={3} className='mt-3 mb-2' style={{ color: "#9CA3AF" }}>
        <span>Home</span>
        <span className='mx-2'>{" > "}</span>
        <span>Analytics</span>
      </Stack>
      <h2 className='fw-bold text-white'>Analytics</h2>
      <Row className='mt-4 mb-2' style={{ color: "#D1D5DB" }}>
        <Col xs='auto' className='d-flex align-items-baseline'>
          <Image src={DateTimeIcon} width={15} height={15} className='me-2' alt='Date Time Icon' />
          <span>Updated: 3 hours ago</span>
        </Col>
      </Row>
    <div className='mt-4 w-100'>
    <Image src={BorderedCross} className='w-100' width={0} height={0} alt='Bordered Cross' />
    </div>
    </Container>
  )
}

export default AnalyticsPage
