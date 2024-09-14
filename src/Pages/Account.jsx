import React, { useEffect, useState } from "react";
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
const Account = () => {
  const navigate = useNavigate();
  const { currentUser, loading } = useAuth();
  const { profileData } = useUserProfile();
  const [selected, setSelected] = useState("personal-info");
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="flex flex-col md:flex-row min-h-screen justify-center gap-10 mt-4">
      {!loading && currentUser && profileData ? (
        <>
          {/* <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className=" md:hidden flex justify-between w-full border-2"
          >
            <div>
              {profileData.photoUrl ? (
                <img
                  src={profileData.photoUrl}
                  className="w-10 rounded-full "
                />
              ) : (
                <img
                  src="../../assets/images/userImg.avif"
                  className="lg1:w-32 mb-1 rounded-full border-4 "
                />
              )}
            </div>
            <h1>Rahul's Account</h1>
            <p>{selected}</p>
          </div> */}
          <div
            className={`${
              isOpen ? "flex justify-around" : "hidden"
            } md:block w-full border-2 md:w-1/4 p-4 lg:p-6 xl:p-8 shadow-lg rounded-3xl`}
          >
            <div>
              <h2 className="text-2xl lg1:text-3xl font-bold lg1:mb-4">
                My Account
              </h2>
              <div className=" mt-8 mb-3 lg1:mb-6">
                <div>
                  {profileData.photoUrl ? (
                    <img
                      src={profileData.photoUrl}
                      className="w-24 lg1:w-32 mb-1 rounded-full border-4 "
                    />
                  ) : (
                    <img
                      src="../../assets/images/userImg.avif"
                      className="lg1:w-32 mb-1 rounded-full border-4 "
                    />
                  )}
                </div>
                <p className="text-xl lg1:text-2xl font-medium text-slate-700">
                  {profileData.firstName + " " + profileData.lastName}
                </p>
                <p className="text-sm md1:text-lg font-medium -mt-2 text-slate-700  ">
                  {profileData.email}
                </p>
              </div>
            </div>
            <ul className="space-y-2 lg1:space-y-4 text-lg md1:text-xl lg1:text-2xl font-medium">
              <li>
                <Link
                  to="details"
                  onClick={() => setSelected("personal-info")}
                  className={`flex gap-1 items-center md:tracking-tighter md:leading-5  md1:tracking-normal md1:leading-none hover:text-green-500 ${
                    selected == "personal-info"
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
                  onClick={() => setSelected("orders")}
                  className={`flex gap-1 items-center hover:text-green-500 ${
                    selected == "orders" ? "text-green-700 font-semibold" : ""
                  }`}
                >
                  <LocalMallOutlinedIcon />
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  to="track-orders"
                  onClick={() => setSelected("track-orders")}
                  className={`flex gap-1 items-center tracking-tighter md1:tracking-normal  hover:text-green-500 ${
                    selected == "track-orders"
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
                  onClick={() => setSelected("gift-cards")}
                  className={`flex gap-1 items-center hover:text-green-500 ${
                    selected == "gift-cards"
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
                  onClick={handleSignOut}
                  className=" hover:text-green-500 flex gap-1 items-center"
                >
                  <LogoutRoundedIcon />
                  Sign Out
                </button>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex p-6 md:w-1/2 border-2 rounded-3xl shadow-lg">
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
