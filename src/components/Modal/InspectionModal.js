import DateTimeIcon from '@/assets/Icons/date-time.png'
import AnalysisTable from '@/components/InspectionPage/AnalysisTable'
import LaserProfile from '@/components/InspectionPage/LaserProfile'
import Image from 'next/image'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { HiLocationMarker } from 'react-icons/hi'
import InpectionCardLayout from '../InspectionPage/InpectionCardLayout'
import ParametersAndCondtions from '../InspectionPage/ParametersAndCondtions'
import OffcanvasWrapper from './OffcanvasWrapper'

const InspectionModal = ({ title, runNum, sectionNum, kmRangeStrt, kmRangeEnd, dateTime, MeasurementImage, isShow, handleClose, laserProfiles, analysisTableData }) => {
    return (
        <OffcanvasWrapper offCanvasStyle={{ minWidth: '90vw', zIndex:"99999" }} isShow={isShow} handleClose={handleClose}
        CloseButtonComponent={BackBtn}
        >
            <Container className='px-3 py-0 primary-bg' fluid >
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
                <Container fluid>
                    <Row className='mt-4 gap-3'>
                        <InpectionCardLayout colSpace={7}>
                            <LaserProfile profiles={laserProfiles} />
                        </InpectionCardLayout>
                        <InpectionCardLayout ><AnalysisTable tableData={analysisTableData} /></InpectionCardLayout>
                    </Row>
                    <Row className='mt-4 gap-3'>
                        <InpectionCardLayout colSpace={7}><Image src={MeasurementImage} width={0} height={0} className='w-100' alt='Measurement' /></InpectionCardLayout>
                        <InpectionCardLayout ><ParametersAndCondtions sectionId={sectionNum} /></InpectionCardLayout>
                    </Row>
                </Container>
            </Container>
        </OffcanvasWrapper>

    )
}

function BackBtn({ handleClose }){
return (
    <Button onClick={handleClose} style={{ backgroundColor: "#353E4B", color: "#3B82F6", }} size="sm">
      <FaArrowLeftLong /> Back
    </Button>
)
}

export default InspectionModal
