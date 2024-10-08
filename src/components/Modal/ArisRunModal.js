import { Button, Col, Row, Stack, Table } from "react-bootstrap";
import OffcanvasWrapper from "./OffcanvasWrapper";
import { IoClose } from "react-icons/io5";

const ArisRunModal = ({ show, handleClose, tableData, AriisRunSectionIds ,onRunIdClick,onSectionIdClick }) => {
    const isShowSectionIds = AriisRunSectionIds?.length > 0;
    const {columnArisDetail,rowArisDetail} = tableData;
    return (
        <OffcanvasWrapper
            offCanvasStyle={{ minWidth: isShowSectionIds ? `60vw` : '25vw', zIndex: "99999"}}
            isShow={show}
            handleClose={handleClose}
            bodyClassname={isShowSectionIds ? 'custom-offcanvas-body' : 'overflow-hidden'}
            CloseButtonComponent={CloseButton}
            toogleCanvas={true}
            toogleScroll={true}
        >
            <Row>
                <Col className={`${isShowSectionIds ? 'col-12 col-md-6 col-xl-7 col-xxl-8' : 'col-12'} order-2 order-md-1 h-100`}>
                    <h3 className="fw-medium fs-4">ARIIS runs</h3>
                    <Table responsive className='custom-table overflow-y-scroll' style={{ marginBottom: "150px", overflowY: "scroll" }}>
                        <thead className="sticky-top primary-bg mb-2">
                            <tr>
                                {columnArisDetail?.map((col,index) => (
                                    <th className="fs-5" key={index}>{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>

                        {rowArisDetail?.map((row,index) => (
                             <tr style={{cursor:'pointer'}} key={index} onClick={() => onRunIdClick(row[1])}>
                                 {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                         </tr>
                                ))}
                        </tbody>
                    </Table>
                </Col>
                {isShowSectionIds && <Col className="my-3 col-12 col-md-6 col-xl-5 col-xxl-4 order-1 order-md-2">
                    <h3> Sections Covered</h3>
                    <Stack direction="vertical" gap={4} className='mt-3 mb-2 secondary-bg p-3 p-xxl-4'>
                        {AriisRunSectionIds.map((id, index) => (
                            <>
                                {index !== 0 && index % 4 === 0 && <hr className="my-2 text-bg-light" />}
                                <span style={{cursor:'pointer'}} onClick={() => onSectionIdClick(id)} key={index}>Section ID #{id}</span>
                            </>
                        ))}
                    </Stack>
                    <Button className="mt-4 w-100" style={{ backgroundColor: "#3b82f6" }} size="lg">
                        View video footage
                    </Button>
                </Col>}
            </Row>
        </OffcanvasWrapper>
    )
}


function CloseButton({ handleClose }) {
    return (
        <button onClick={handleClose} className="p-0 border-0" style={{ backgroundColor: "#6C7889", borderRadius: "100%",width:"30px", height:"30px" }}>
            <IoClose className="text-white" />
        </button>
    )
}

export default ArisRunModal
