// components/ModalMap.js
"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import { Table } from "../Table/Table";
import { ColArisDetail, columnDetail, inspection, rowArisDetail, rowDetail } from "@/app/api";
import TabContent from "../Tabs/TabContent";
import Link from "next/link";

function ModalMap({ show, handleClose, title }) {
  // console.log(columnDetail)
  return (
    <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop='static'
          keyboard={false}
          className='customModalMap'>
          <Modal.Body>
            <div className='row'>
              <p onClick={handleClose} className="col-12 d-flex justify-content-start mb-3"><span className="close">X</span></p>
              <div className='header d-flex align-items-baseline col-12'>
                <h3 className="mb-3">{title}</h3>
                <span className="tag">
                  Non Complaint
                </span>
              </div>
              <div className='tableSection col-12'>
                <Table title="Section" column={columnDetail} row={rowDetail} name={'Section details'} />
              </div>
              <div className='tableSection col-8'>
                <Table title="Section" column={ColArisDetail} row={rowArisDetail} name={'ARIIS runs'} />
                <div>
                  <h4 className="mt-5">TCI</h4>
                  <TabContent />
                </div>
              </div>
              <div className="col-4">
                  <h4 className="mt-4 mb-4">Inspections</h4>
                  <div className="inspectionBox">
                  <ul>
                  {
                    inspection?.map ( record => (
                      <Link href="/inspection">
                      <li key={record?.id}>{record?.title}</li>
                      </Link>
                      ))
                    }
                    </ul>
                  </div>

                </div>
            </div>

          </Modal.Body>
        </Modal>
    </>
  );
}

export default ModalMap;
