import React from "react";
import { cookies } from "next/headers";
import ProfileButton from "./ProfileButton";
import { CiLogin } from "react-icons/ci";
const LoginNavButton = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken");

  if (!token || token == undefined) {
    return <CiLogin size={25} className="me-3"/>;
  } 

  return(<ProfileButton token={token.value} />)
 
  
};

export default LoginNavButton;
