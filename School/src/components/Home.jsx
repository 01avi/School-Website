import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <img src="https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-school-logo-design-template-vector-png-image_6705854.png" alt="School Logo" className="logo" />
        <h1>Welcome to Coading School</h1>
        <p>A place for Knowledge and growth.</p>
      </header>
      <Carousel>
        <Carousel.Item>
          <img src="https://5.imimg.com/data5/GK/LR/EH/SELLER-1469653/college-event-management-service.jpg" alt="Event 1" />
          <Carousel.Caption>
            <h3>Event 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis laudantium reiciendis dolorem officiis, molestiae magni ipsa aliquid debitis fuga eligendi, distinctio tempore inventore nobis, velit assumenda omnis illum. Asperiores, rem?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sunt suscipit repellendus eaque nesciunt, at quisquam voluptatibus excepturi officia id illo reprehenderit ratione explicabo, quas odit atque delectus. Doloribus, corporis.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.ticketleap.com/wp-content/uploads/2024/01/62a8e9a50f19b73012512a91_college-students-hanging-out-on-campus.jpg" alt="Event 2" />
          <Carousel.Caption>
            <h3>Event 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque quaerat inventore aspernatur fugit veritatis ab dicta libero similique rem accusantium porro quibusdam, provident dolorum repellendus tempora nam perspiciatis <quae className="lore"></quae></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-4c8ec82a2e2215fd3935844c5952ff28-lq" alt="Event 3" />
          <Carousel.Caption>
            <h3>Event 3</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, laudantium. Expedita quo deserunt quia numquam veritatis nulla aliquam voluptates, earum magni repellat ab, nostrum animi sapiente beatae quibusdam, qui tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint, nulla modi, adipisci atque maxime aliquam officia pariatur, rem unde dignissimos! Nostrum quae, rem non nihil praesentium perferendis aspernatur corporis?</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePage;
