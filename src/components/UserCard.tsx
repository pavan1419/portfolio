import React from 'react';

interface UserCardProps {
  name: string;
  status: string;
  role: string;
  imageUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  status,
  role,
  imageUrl,
}) => {
  return (
    <div className='bg-gray-800 rounded-lg p-6 shadow-lg max-w-sm mx-auto'>
      <div className='relative w-24 h-24 mx-auto mb-4'>
        <img
          src={imageUrl}
          alt={name}
          className='rounded-full w-full h-full object-cover'
        />
        <div className='absolute bottom-0 right-0 bg-green-500 rounded-full w-4 h-4 border-2 border-gray-800'></div>
      </div>
      <h2 className='text-white text-xl font-semibold text-center'>{name}</h2>
      <p className='text-green-500 text-sm text-center mb-2'>{status}</p>
      <p className='text-gray-400 text-center'>{role}</p>
    </div>
  );
};

export default UserCard;
