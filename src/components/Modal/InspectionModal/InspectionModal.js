import { fetchAnalysisAgainstThresholds } from '@/app/services/fetchAnalysisAgainstThresholds'
import AnalysisTable from '@/components/InspectionModal/AnalysisTable'
import ProfileImages from '@/components/InspectionModal/ProfileImages'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import InpectionCardLayout from '../../InspectionModal/InpectionCardLayout'
import ParametersAndCondtions from '../../InspectionModal/ParametersAndCondtions'
import ModalHeader from '../ModalHeader'
import OffcanvasWrapper from '../OffcanvasWrapper'
import { BackBtn } from './BackBtn'

const InspectionModal = ({ title, runNum, sectionNum, kmRangeStrt, kmRangeEnd, dateTime, MeasurementImage, isShow, handleClose, isLaserProfile, profilesImages, analysisTableData, apiRoute }) => {
    const [analysisAgainstThresholds, setAnalysisAgainstThresholds ] = useState([]);

    useEffect(()=>{
        if(isShow && analysisAgainstThresholds.length === 0 && apiRoute){
         // fetch rows data here and put them in cache so component don't send fetch request on every render
         (async ()=>{
           const data = await fetchAnalysisAgainstThresholds(apiRoute);
           const filteredData = data?.map(({id, horizontal, vertical})=>( { id, horizontal, vertical } )) ?? [];
           console.log(filteredData, 'filteredData');
           setAnalysisAgainstThresholds(filteredData);
         })();
        }
    })

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
                            <ProfileImages isLaserProfile={isLaserProfile} profiles={profilesImages} />
                        </InpectionCardLayout>
                        <InpectionCardLayout ><AnalysisTable
                        tableData={analysisAgainstThresholds.length >= 0 ? analysisAgainstThresholds : analysisTableData} /></InpectionCardLayout>
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
