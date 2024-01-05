import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import Sidebar from "../Components/Sidebar";

export const CreateForm = () => {
  return (
    <div>
      <Row className="m-0">
        <Col lg={3} md={12}>
          <Sidebar />
        </Col>
        <Col lg={9} md={12}>
          <Form>
            <Row className="MainForm">
              <Col lg={6} md={12} sm={12} >
                <Form.Group controlId="formBasicTitle">
                  <Form.Label className="myFormLabel">Job Title</Form.Label>
                  <Form.Control type="text" placeholder="Java Developer" />
                </Form.Group>
              </Col>
              <Col lg={6} md={12} sm={12}></Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
