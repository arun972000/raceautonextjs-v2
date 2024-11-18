'use client'
import { jwtDecode } from 'jwt-decode';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProfileButton = ({ token }: { token: string }) => {
    const decoded: any = jwtDecode(token);
  return (
    <DropdownButton id="dropdown-basic-button" title="test">
    {(decoded.role == 'admin' || decoded.role == 'ad team' || decoded.role == 'moderator') && <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>}
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </DropdownButton>
);
}

export default ProfileButton