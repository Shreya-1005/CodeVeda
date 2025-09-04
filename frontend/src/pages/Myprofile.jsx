import React, { useState } from 'react'

const Myprofile = () => {
  // Mock profile image - replace with your actual asset
  const profileImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Ccircle cx='60' cy='60' r='60' fill='%23e5e7eb'/%3E%3Ccircle cx='60' cy='45' r='20' fill='%239ca3af'/%3E%3Cpath d='M25 100c0-20 15-35 35-35s35 15 35 35' fill='%239ca3af'/%3E%3C/svg%3E"

  const [userData, setUserData] = useState({
    name: "Jane Doe",
    image: profileImage,
    email: "janedoe@email.com",
    phone: "+91 9988775550",
    address: {
      line1: "Phase 1, 14 Lady Hardinge Road",
      line2: "Connaught Place, New Delhi"
    },
    gender: "Female",
    bloodgroup: "B+",
    dob: '21-07-2000'
  })

  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className='py-10 min-h-screen bg-primary'>
      <div className="pt-10 pb-20">
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>

          {/* Header */}
          <div className='py-6 sm:py-8'>
            <div className='flex items-center justify-between'>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                My Profile
              </h1>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                {isEditing ? 'Save' : 'Edit Profile'}
              </button>
            </div>
          </div>

          {/* Main Profile Card */}
          <div className='bg-white rounded-2xl shadow-2xl overflow-hidden'>
            {/* Profile Header Section */}
            <div className='bg-gray-300 px-8 py-12 text-center relative'>
              <div className='relative inline-block'>
                <img 
                  className='w-32 h-32 rounded-full border-4 border-gray-600 shadow-lg mx-auto' 
                  src={userData.image} 
                  alt="Profile picture" 
                />
                {isEditing && (
                  <button className='absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50'>
                    <svg className='w-4 h-4 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'></path>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'></path>
                    </svg>
                  </button>
                )}
              </div>
              {isEditing
              ? <></>
              : <><h2 className='text-3xl font-bold text-gray-800 mt-4 mb-2'>{userData.name}</h2>
                <p className='text-gray-600 text-lg'>{userData.email}</p></>}
              
              
            </div>

            {/* Information Section */}
            <div className='p-8'>
              <div className='mb-8'>
                <h3 className='text-2xl font-bold text-gray-800 mb-2'>Personal Information</h3>
                <div className='w-16 h-1 bg-gradient-to-r from-primary to-teal-700 rounded-full'></div>
              </div>

              {/* Profile Details Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Contact Information */}
                <div className='space-y-6'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-600 mb-2'>Full Name</label>
                    <div className='p-4 bg-gray-50 rounded-lg border-l-4 border-primary'>
                      {isEditing ? <input type="text" placeholder='Enter Full Name' />
                      : <p className='text-gray-800 font-medium'>{userData.name}</p>
                      }
                      
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-gray-600 mb-2'>Email Address</label>
                    <div className='p-4 bg-gray-50 rounded-lg border-l-4 border-primary'>
                      {isEditing
                      ? <input type="email" placeholder="Enter your email" />
                      : <p className='text-gray-800 font-medium'>{userData.email}</p>
                      }
                      
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-gray-600 mb-2'>Phone Number</label>
                    <div className='p-4 bg-gray-50 rounded-lg border-l-4 border-primary'>
                      {isEditing
                      ? <input type="tel" placeholder='Enter your number' />
                      : <p className='text-gray-800 font-medium'>{userData.phone}</p>}
                      
                    </div>
                  </div>
                </div>

                {/* Personal Details */}
                <div className='space-y-6'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-600 mb-2'>Date of Birth</label>
                    <div className='p-4 bg-gray-50 rounded-lg border-l-4 border-teal-700'>
                      {isEditing
                      ? <input type="date" id="" />
                      : <p className='text-gray-800 font-medium'>{userData.dob}</p> }
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-gray-600 mb-2'>Gender</label>
                    <div className='p-4 bg-gray-50 rounded-lg border-l-4 border-teal-700'>
                      {isEditing 
                      ? <select className=' bg-gray-50' name="gender options">
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="other">Other</option>
                      </select>
                      : <p className='text-gray-800 font-medium'>{userData.gender}</p>}
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-gray-600 mb-2'>Blood Group</label>
                    <div className='p-4 bg-gray-50 rounded-lg border-l-4 border-teal-700'>
                      {isEditing
                      ? <select className='bg-gray-50' name="bloodgrp">
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                      </select>
                      :<p className='text-gray-800 font-medium'>{userData.bloodgroup}</p>}
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div className='mt-8'>
                <label className='block text-sm font-semibold text-gray-600 mb-2'>Address</label>
                <div className='p-6 bg-gray-50 rounded-lg border-l-4 border-primary'>
                  <div className='space-y-1'>
                    {isEditing
                    ? <input type="text" name="line1" placeholder='Enter line 1 of address' />
                    : <p className='text-gray-800 font-medium'>{userData.address.line1}</p>
                    }

                    {isEditing
                    ? <><br/> <input className='' type="text" name="line1" placeholder='Enter line 2 of address' /></>
                    :<p className='text-gray-800 font-medium'>{userData.address.line2}</p>}

                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='mt-8 pt-6 border-t border-gray-200'>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <button className='px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-teal-800 transition-all duration-200 shadow-lg hover:shadow-xl'>
                    Update Profile
                  </button>
                  <button className='px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-teal-800 transition-all duration-200 shadow-lg hover:shadow-xl'>
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Myprofile