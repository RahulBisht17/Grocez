import React, { useEffect, useRef, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { auth } from "../firebase/firebase";
import UserInfo from "../components/Account/UserInfo";
import OrderHistory from "../components/Account/OrderHistory";
import TrackOrder from "../components/Account/TrackOrder";
import GiftCards from "../components/Account/GiftCards";
import { useUserProfile } from "../Context/UserProfileContext";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

const Account = () => {
  const navigate = useNavigate();
  const { currentUser, loading } = useAuth();
  const { profileData } = useUserProfile();
  const [selected, setSelected] = useState("Personal Information");
  const [isOpen, setIsOpen] = useState(false);
  const AccountRef = useRef(null);

  const toggleAccount = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (AccountRef.current && !AccountRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSignOut = () => {
    const confirmBox = window.confirm("Do you really want to Sign Out?");
    if (confirmBox === true) {
      auth.signOut();
    }
  };

  useEffect(() => {
    if (!loading && !currentUser) {
      navigate("/login");
    }
  }, [currentUser, loading, navigate]);

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen md:justify-center gap-10 mt-4">
      {!loading && currentUser && profileData ? (
        <>
          <div
            onClick={toggleAccount}
            className=" cursor-pointer md:hidden flex justify-between w-full border-2 py-2 px-4"
          >
            <div className="flex items-center gap-2">
              {profileData.photoUrl ? (
                <img
                  src={profileData.photoUrl}
                  className="w-8 xs0:w-10 rounded-full "
                />
              ) : (
                <img
                  src="../../assets/images/userImg.avif"
                  className="w-8 xs0:w-10 rounded-full "
                />
              )}
              <h1 className="font-bold text-sm xs0:text-xl">
                {profileData.firstName}'s Account
              </h1>
            </div>
            <p className="border-2 p-2  overflow-x-clip text-sm xs0:text-base text-center font-semibold text-green-600 rounded-lg">
              {selected} <KeyboardArrowDownSharpIcon />
            </p>
          </div>

          {isOpen && (
            <div className="absolute md:hidden inset-0 bg-gray-800 bg-opacity-50 z-0"></div>
          )}

          <div
            ref={AccountRef}
            className={`${
              isOpen ? "grid grid-cols-2 " : "hidden"
            }  transition-opacity duration-300 ease-in absolute bg-white px-2 pb-4 top-0 md:relative  md:block w-full border-2 md:w-1/4 md:p-4 lg:p-6 xl:p-8 shadow-lg md:rounded-3xl`}
          >
            <div
              className="z-20 md:hidden my-2 col-span-2 text-right text-slate-500 mr-4 xs0:mr-8"
              onClick={toggleAccount}
            >
              <CloseOutlinedIcon />
            </div>
            <div>
              <h2 className="hidden md:block text-2xl lg1:text-3xl font-bold lg1:mb-4">
                My Account
              </h2>
              <div className="hidden xss:block pl-2 xs0:pl-8 md:pl-0 mt-1 md:mt-8 mb-3 lg1:mb-6">
                <div>
                  {profileData.photoUrl ? (
                    <img
                      src={profileData.photoUrl}
                      className="w-24 lg1:w-32 mb-1 rounded-full border-4 "
                    />
                  ) : (
                    <img
                      src="../../assets/images/userImg.avif"
                      className=" w-24 lg1:w-32 mb-1 rounded-full "
                    />
                  )}
                </div>
                <p className="text-xl lg1:text-2xl font-medium text-slate-700">
                  {profileData.firstName + " " + profileData.lastName}
                </p>
                <p className="text-xs xs0:text-sm md1:text-lg font-medium -mt-2 text-slate-700  ">
                  {profileData.email}
                </p>
              </div>
            </div>
            <ul className="col-span-2 px-4 xss:px-0 xss:col-span-1 space-y-2 lg1:space-y-4 text-base xs0:text-lg md1:text-xl lg1:text-2xl font-medium">
              <li>
                <Link
                  to="details"
                  onClick={() => {
                    setSelected("Personal Information");
                    toggleAccount();
                  }}
                  className={`flex gap-1 items-center md:tracking-tighter md:leading-5  md1:tracking-normal md1:leading-none hover:text-green-500 ${
                    selected == "Personal Information"
                      ? "text-green-700 font-semibold"
                      : ""
                  }`}
                >
                  <PersonOutlineOutlinedIcon />
                  Personal Information
                </Link>
              </li>
              <li>
                <Link
                  to="orders"
                  onClick={() => {
                    setSelected("Orders");
                    toggleAccount();
                  }}
                  className={`flex gap-1 items-center hover:text-green-500 ${
                    selected == "Orders" ? "text-green-700 font-semibold" : ""
                  }`}
                >
                  <LocalMallOutlinedIcon />
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  to="track-orders"
                  onClick={() => {
                    setSelected("Track Your Orders");
                    toggleAccount();
                  }}
                  className={`flex gap-1 items-center tracking-tighter md1:tracking-normal  hover:text-green-500 ${
                    selected == "Track Your Orders"
                      ? "text-green-700 font-semibold"
                      : ""
                  }`}
                >
                  <SearchOutlinedIcon />
                  Track Your Orders
                </Link>
              </li>

              <li>
                <Link
                  to="gift-cards"
                  onClick={() => {
                    setSelected("Gift Cards");
                    toggleAccount();
                  }}
                  className={`flex gap-1 items-center hover:text-green-500 ${
                    selected == "Gift Cards"
                      ? "text-green-700 font-semibold"
                      : ""
                  }`}
                >
                  <CardGiftcardRoundedIcon />
                  Gift Cards
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    toggleAccount();
                    setTimeout(() => {
                      handleSignOut();
                    }, 100);
                  }}
                  className=" hover:text-green-500 flex gap-1 items-center"
                >
                  <LogoutRoundedIcon />
                  Sign Out
                </button>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex p-6 md:w-1/2 min-h-96 border-2 md:rounded-3xl md:shadow-lg">
            <Routes>
              <Route index element={<UserInfo profileData={profileData} />} />
              <Route
                path="details"
                element={<UserInfo profileData={profileData} />}
              />
              <Route path="orders" element={<OrderHistory />} />
              <Route path="track-orders" element={<TrackOrder />} />
              <Route path="gift-cards" element={<GiftCards />} />
            </Routes>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Account;
