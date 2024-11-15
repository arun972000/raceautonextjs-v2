'use client'
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FaUserCircle, FaUser, FaBook, FaQuestionCircle, FaCog, FaSignOutAlt, FaPen } from 'react-icons/fa';

function ProfileCard() {
  return (
    <Card style={{ borderRadius: '1rem' }} className="text-center shadow">
      <Card.Body>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <FaUserCircle
            size={200}
            color="#ccc"
          />
          <FaPen
            style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              backgroundColor: '#fff',
              borderRadius: '50%',
              padding: '0px',
              cursor: 'pointer'
            }}
          />
        </div>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item action><FaUser className="me-2 my-2" /> My Profile</ListGroup.Item>
        <ListGroup.Item action><FaBook className="me-2 my-2" /> Magazine</ListGroup.Item>
        <ListGroup.Item action><FaQuestionCircle className="me-2 my-2" /> Help & Support</ListGroup.Item>
        <ListGroup.Item action><FaCog className="me-2 my-2" /> Account Setting</ListGroup.Item>
        <ListGroup.Item action><FaSignOutAlt className="me-2 my-2" /> Logout</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ProfileCard;
