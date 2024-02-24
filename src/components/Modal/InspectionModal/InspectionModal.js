import AnalysisTable from '@/components/InspectionPage/AnalysisTable'
import LaserProfile from '@/components/InspectionPage/LaserProfile'
import Image from 'next/image'
import { Container, Row } from 'react-bootstrap'
import InpectionCardLayout from '../../InspectionPage/InpectionCardLayout'
import ParametersAndCondtions from '../../InspectionPage/ParametersAndCondtions'
import { BackBtn } from './BackBtn'
import ModalHeader from '../ModalHeader'
import OffcanvasWrapper from '../OffcanvasWrapper'

const InspectionModal = ({ title, runNum, sectionNum, kmRangeStrt, kmRangeEnd, dateTime, MeasurementImage, isShow, handleClose, laserProfiles, analysisTableData }) => {
    return (
        <OffcanvasWrapper offCanvasStyle={{ minWidth: '90vw', zIndex:"99999" }} isShow={isShow} handleClose={handleClose}
        CloseButtonComponent={BackBtn}
        >
            <Container className='px-3 py-0 primary-bg' fluid >
            <ModalHeader
            runNum={runNum}
            sectionNum={sectionNum}
            title={title}
            kmRangeStrt={kmRangeStrt}
            kmRangeEnd={kmRangeEnd}
            dateTime={dateTime}
          />
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
export default InspectionModal
