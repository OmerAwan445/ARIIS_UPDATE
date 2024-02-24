import { Button } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";

export function BackBtn({ handleClose }) {
    return (
        <Button onClick={handleClose} style={{ backgroundColor: "#353E4B", color: "#3B82F6", }} size="sm">
            <FaArrowLeftLong /> Back
        </Button>
    )
}
