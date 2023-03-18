/*Contact list page */
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import { deleteContact, getAllContacts } from "../Redux/ContactSlice";

const ContactList = () => {
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const {allContacts} = useSelector(
    (state) =>state.contactsData
  );
  const { userAuth } = useSelector((state) => state);
  const { loading } = useSelector((state) => state.contactsData);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteContact(modalData._id));
  };

  return (
    <>
      <div>
        <h4>Contact List</h4>
        <hr className="my-3" />
        {loading && <Spinner />}
        {!allContacts ? (
          <h4>No contacts found yet!</h4>
        ) : (
          <table className="table table-hover">
            <thead>
              <tr className="table table-dark">
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {userAuth?.userLoggedIn?.userFound? 
                allContacts?.map((el) => (
                    <tr
                      className="table-light"
                      key={el._id}
                      onClick={() => {
                        setModalData({});
                        setModalData(el);
                        setShowModal(true);
                      }}
                    >
                      <th scope="row">{el.name}</th>
                      <td>{el.address}</td>
                      <td>{el.email}</td>
                      <td>{el.phone}</td>
                    </tr>
                  ))
                : "Must Login to access contacts information! "}
            </tbody>
          </table>
        )}
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            <strong>Name</strong>: {modalData.name}
          </p>
          <p>
            <strong>Address</strong>: {modalData.address}
          </p>
          <p>
            <strong>Email</strong>: {modalData.email}
          </p>
          <p>
            <strong>Phone</strong>: {modalData.phone}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Link className="btn btn-info"  to={`/edit/${modalData._id}`}>
            Edit
          </Link>
          <Button variant="warning" onClick={deleteHandler}>
            Delete
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactList;