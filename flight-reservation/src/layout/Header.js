import { Earth, Tag } from "lucide-react";
import React from "react";
import logo from "../assets/company-logo.png";
import {  useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-300 h-[5rem]">
            <div className="flex justify-between items-center p-4">
                <div className=" flex flex-row gap-2 items-center font-bold text-lg">
                    <img src={logo} alt="logo" className="h-10" />
                    <h2>PLANE SCAPE</h2>
                    </div>
                <div onClick={()=>navigate('/my-reservations')} className="flex items-center gap-5">
                    <button className="flex flex-row items-center">
                        <Tag size={18} color="#6a1b9a" />
                        <strong>Reservations</strong>
                    </button>
                    <button className="flex flex-row items-center">
                        <Earth size={18} color="#6a1b9a" />
                        <strong>Discover</strong>
                    </button>
                    <button className="flex flex-row items-center">
                        
                        <strong>Sign In</strong>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;