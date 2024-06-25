import React from "react";
import { useContext } from "react";
import "./SuccessModal.css";
import AppContext from "../../Context/AppContext";
import { Modal, ModalBody, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes, { checkPropTypes } from "prop-types";

const Success_modal = ({ message, back, fieldEmptied }) => {
  const { success, setSuccess } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <>
      <Modal
        show={success}
        onHide={() => setSuccess(false)}
        className="p-5 success_modal"
      >
        <Modal.Body className="text-center success_modal_body">
          {message}
          <div>
            <Button
              variant="success"
              className="mt-3"
              onClick={() => {
                setSuccess(false);
                // if (back != "") {
                //   navigate(-1);
                // } else {
                //   setFieldEmptied(true);
                // }
              }}
            >
              OK
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
// Success_modal.propTypes = {
//     message: PropTypes.string
// }
export default Success_modal;
