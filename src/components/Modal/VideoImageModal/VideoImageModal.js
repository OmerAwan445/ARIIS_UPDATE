import Image from 'next/image'
import { Container, Stack } from 'react-bootstrap'
import FigureImages from './FigureImages'
import ModalHeader from '../ModalHeader'
import OffcanvasWrapper from '../OffcanvasWrapper'
import { BackBtn } from '../InspectionModal/BackBtn'

export default function VideoImageModal({title, runNum, sectionNum, kmRangeStrt, kmRangeEnd, dateTime, MeasurementImage, isShow, handleClose, imageUrls, videoUrl}) {
  const isVideoModal = videoUrl !== undefined;

  return (
    <OffcanvasWrapper offCanvasStyle={{ minWidth: '90vw', zIndex:"99999" }} isShow={isShow} handleClose={handleClose}
    CloseButtonComponent={BackBtn}>
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
        <Stack direction='vertical' gap={4} className='mt-4'>
            <div style={{backgroundColor:"#111827"}} className='text-white px-3 py-4' >
            {!isVideoModal && <FigureImages imageUrls={imageUrls} />}
            {isVideoModal && <video src={videoUrl} className="w-100" height={500} autoPlay controls></video>}
            </div>
            <div style={{backgroundColor:"#111827"}} className='text-white px-3 py-4'>
                <Image src={MeasurementImage} width={0} height={0} className='w-auto' alt='Measurement' />
            </div>
        </Stack>
    </Container>
</Container>
    </OffcanvasWrapper>
  )
}
