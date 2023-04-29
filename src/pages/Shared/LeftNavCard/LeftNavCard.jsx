import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import { FaCalendar } from "react-icons/fa";

const LeftNavCard = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" className="" src={img1} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>
          <div className="d-flex gap-5 mt-4">
            <Card.Text className="fw-semibold">sports</Card.Text>
            <div className="d-flex align-items-center gap-2">
              <p><FaCalendar style={{ color: "#8b8989" }} /></p>
              <p style={{ color: "#8b8989" }}>Jan 4, 2022</p>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>
          <div className="d-flex gap-5 mt-4">
            <Card.Text className="fw-semibold">sports</Card.Text>
            <div className="d-flex align-items-center gap-2">
              <p><FaCalendar style={{ color: "#8b8989" }} /></p>
              <p style={{ color: "#8b8989" }}>Jan 4, 2022</p>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>
          <div className="d-flex gap-5 mt-4">
            <Card.Text className="fw-semibold">sports</Card.Text>
            <div className="d-flex align-items-center gap-2">
              <p><FaCalendar style={{ color: "#8b8989" }} /></p>
              <p style={{ color: "#8b8989" }}>Jan 4, 2022</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeftNavCard;
