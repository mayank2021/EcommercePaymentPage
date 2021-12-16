import React from "react";
import "./Navbar.css";
import Text from "../Text/Text";
import AbcIcon from '@mui/icons-material/Abc';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Navbar = () => {
  return (
    <div className="nav-main--container">
        <div className="nav-logo--container">
           <AbcIcon/>
           <p><span>E-</span>Shop</p>
        </div>
        <div className="nav-text--container">
        <Text type="small" text="men"/>
        <Text type="small" text="women"/>
        <Text type="small" text="kids"/>
        </div>
        <div className="nav-icon--container">
     <SearchIcon/>
     <ShoppingCartOutlinedIcon/>
     <PersonOutlineOutlinedIcon/>
        </div>
    </div>
  );
};

export default Navbar;
