"use client";
import React, { useState } from "react";
import Image from "next/image";

const AddAccountPage = () => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setProfilePicture(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 md:px-8">
      <div className="wrapper w-full max-w-4xl mx-auto p-6 rounded-2xl bg-black/20 shadow-lg">
        <div className="flex justify-between items-end mx-3 gap-2">
          <h2 className="uppercase text-xl sm:text-3xl md:text-4xl font-bold text-black/70">
            Add Account
          </h2>
          <Image
            src="/tinowlabel2.png"
            alt="Logo"
            width={80}
            height={80}
            className="w-12 sm:w-16 md:w-20 h-auto opacity-100"
          />
        </div>

        <p className="px-3 text-start text-[8px] sm:text-base md:text-lg font-medium text-black/50 mt-1">
          Add another member to the Big C Family!
        </p>

        <div className="flex justify-center mt-4">
          <label htmlFor="profile-upload" className="cursor-pointer relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/20 hover:bg-black/10 rounded-full flex items-center justify-center border-4 border-white/10 relative overflow-hidden">
              {profilePicture ? (
                <Image
                  src={profilePicture}
                  alt="Profile"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              ) : (
                <>
                  <Image
                    src="/accounts.png"
                    alt="Default Icon"
                    width={120}
                    height={120}
                    className="absolute opacity-100 blur-[3px]"
                  />
                  <span className="text-xs sm:text-sm text-center text-black relative">
                    Click to Add Profile Picture
                  </span>
                </>
              )}
            </div>
          </label>
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfilePictureChange}
          />
        </div>

        {/* Account Information Form */}
        <form className="mt-6 w-full mx-auto space-y-3 text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First Name*"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="input-field"
            />
          </div>
          <input
            type="text"
            placeholder="Social Security Number (SSS)*"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Pag-IBIG No.*"
            className="input-field"
          />
          <input
            type="text"
            placeholder="License No.*"
            className="input-field"
          />
          <input type="email" placeholder="Email*" className="input-field" />
          <input
            type="text"
            placeholder="Contact Number*"
            className="input-field"
          />
          <input type="text" placeholder="Role*" className="input-field" />
          <input type="text" placeholder="Username*" className="input-field" />
          <input
            type="password"
            placeholder="Password*"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Confirm Password*"
            className="input-field"
          />

          <button
            type="submit"
            className="w-full bg-[#668743] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#345216]"
          >
            Create New Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAccountPage;
