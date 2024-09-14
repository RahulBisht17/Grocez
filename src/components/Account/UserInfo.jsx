import React from "react";

const UserInfo = ({ profileData }) => {
  return (
    <div className="w-full p-4">
      {profileData ? (
        <>
          <h2 className="underline underline-offset-4 text-2xl font-bold mb-6">
            Personal Information
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={profileData.firstName}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="dob">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={profileData.lastName}
                  readOnly
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="country">
                  Country/Region
                </label>
                <input
                  type="text"
                  id="country"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value="New Delhi, India"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="language">
                  Language
                </label>
                <input
                  type="text"
                  id="language"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value="English (UK)"
                  readOnly
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Contactable at
              </label>
              <input
                type="text"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={profileData.email}
                readOnly
              />
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserInfo;
