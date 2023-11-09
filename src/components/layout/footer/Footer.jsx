import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <Outlet />
      <div style={{ width: "100%", backgroundColor: "black", height: "true" }}>
        <h4 style={{ color: "white" }}>Este es el footer</h4>
      </div>
     
    </>
  );
};

export default Footer;