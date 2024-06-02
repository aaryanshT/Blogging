import React from 'react';
import Card from "../components/Card";
import Table from '../components/Table';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center p-10 h-screen bg-gray-100">
      <div className="space-y-10 w-full max-w-screen-lg">
        <Card />
        <Table />
      </div>
    </div>
  );
};

export default HomePage;
