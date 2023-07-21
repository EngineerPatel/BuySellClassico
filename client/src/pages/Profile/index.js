import React, { useState } from 'react'
import { Tabs } from 'antd'
import Products from "./Products/index"
import UserBids from "./UserBids/index";
import { useSelector } from 'react-redux';
import moment from 'moment';
export const Profile = () => {
  const {user} =useSelector((state)=>state.users);

  return (
    <div>
         <Tabs defaultActiveKey='1'>
                  <Tabs.TabPane tab="Products" key="1">
                        <Products/>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="My Bids" key="2">
                  <UserBids/>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="General" key="3">
             {/*   <div className='flex flex-col w-1/3'>
                  <div>
                  <span className='text-primary text-xl flex justify-between'>
                    Name: <span className='text-xl'>{user.name}</span></span>
                  <span className='text-primary text-xl flex justify-between'>
                    Email: <span className='text-xl'>{user.email}</span></span>
                  <span className='text-primary text-xl flex justify-between'>
                    CreatedAt :{" "} <span className='text-xl'>{moment(user.createdAt).format("MMM D, YYYY hh:mm A")}</span></span>
                  </div>
  </div> */}
     <div className="flex flex-col w-1/3">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">Profile Information</h2>
              <div className="border rounded-lg p-4 bg-white shadow-md">
                <div className="mb-2">
                  <span className="text-primary font-semibold">Name:</span>{' '}
                  <span className="text-xl">{user.name}</span>
                </div>
                <div className="mb-2">
                  <span className="text-primary font-semibold">Email:</span>{' '}
                  <span className="text-xl">{user.email}</span>
                </div>
                <div>
                  <span className="text-primary font-semibold">Created At:</span>{' '}
                  <span className="text-xl">
                    {moment(user.createdAt).format('MMM D, YYYY hh:mm A')}
                  </span>
                </div>
              </div>
            </div>
          </div>
                  </Tabs.TabPane>
                  </Tabs>
    </div>
  )
}
