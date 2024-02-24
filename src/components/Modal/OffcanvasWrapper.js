import { Offcanvas } from 'react-bootstrap'

const OffcanvasWrapper = ({ children, offCanvasStyle, bodyClassname, isShow, handleClose, CloseButtonComponent }) => {
    return (
        <Offcanvas className="primary-bg text-white p-1 w-auto container-fluid" style={offCanvasStyle ?? { minWidth: "60vw" }} show={isShow} onHide={handleClose} backdrop="static" placement="end">
            <Offcanvas.Header>
                {CloseButtonComponent && <CloseButtonComponent handleClose={handleClose} />}
            </Offcanvas.Header>
            <Offcanvas.Body className={bodyClassname ?? ''}>
                {children}
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffcanvasWrapper
