import React from 'react'
import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap'
import { FaArrowLeftLong } from "react-icons/fa6";
import { RailProfile } from '@/DummyData'
import { HiLocationMarker } from "react-icons/hi";
import DateTimeIcon from '@/assets/Icons/date-time.png'
import Image from 'next/image';
import LaserProfile from '@/components/InspectionPage/LaserProfile';
import AnalysisTable from '@/components/InspectionPage/AnalysisTable';
import InpectionCardLayout from '@/components/InspectionPage/InpectionCardLayout';
import MeasurementImage from '/public/DummyData/Images/Measuremnet.png'
import ParametersAndCondtions from '@/components/InspectionPage/ParametersAndCondtions';

const InspectionPage = () => {

    return (
        <Container className='p-4 primary-bg' fluid>
            <Button style={{ backgroundColor: "#353E4B", color: "#3B82F6" }} size="sm">
                <FaArrowLeftLong /> Back
            </Button>
            <Stack direction="horizontal" gap={3} className='mt-3 mb-2' style={{ color: "#9CA3AF" }}>
                <span>Run # {RailProfile.runNum}</span>
                <span className='mx-2'>{" > "}</span>
                <span>Section # {RailProfile.sectionNum}</span>
            </Stack>
            <h2 className='fw-bold text-white'>Rail Profile Wear</h2>

            <Row className='mt-3 mb-2' style={{ color: "#D1D5DB" }}>
                <Col xs='auto' className='d-flex align-items-baseline' ><HiLocationMarker className='me-1' color='#6b7280' /> Kilometrage start: {RailProfile.kmRangeStrt} km</Col>
                <Col xs='auto' className='d-flex align-items-baseline' ><HiLocationMarker className='me-1' color='#6b7280' /> Kilometrage End: {RailProfile.kmRangeEnd} km</Col>
                <Col xs='auto' className='d-flex align-items-baseline' ><Image src={DateTimeIcon} width={12} height={12} className='me-2' alt='Date Time Icon' /> <span>Date/ time: {RailProfile.dateTime}</span> </Col>
            </Row>
        <Container fluid>
            <Row className='mt-4 gap-3'>
            <InpectionCardLayout colSpace ={7}><LaserProfile /></InpectionCardLayout>
            <InpectionCardLayout ><AnalysisTable /></InpectionCardLayout>
            </Row>
            <Row className='mt-4 gap-3'>
            <InpectionCardLayout colSpace ={7}><Image src={MeasurementImage} width={0} height={0} className='w-100' alt='Measurement'/></InpectionCardLayout>
            <InpectionCardLayout ><ParametersAndCondtions sectionId={RailProfile.sectionNum} /></InpectionCardLayout>
            </Row>

        </Container>
        </Container>
    )
}

export default InspectionPage
