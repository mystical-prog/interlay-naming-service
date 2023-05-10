import React, { useState, useEffect } from 'react';
import { FiCopy } from 'react-icons/fi';
import { BounceLoader } from 'react-spinners';
import RegisterTab from './RegisterTab';
import DetailsTab from './DetailsTab';
import SubdomainsTab from './SubdomainsTab';
import AuctionTab from './AuctionTab'; // Import the new AuctionTab component

const DomainInfo = () => {
  const [activeTab, setActiveTab] = useState('register');
  const [isLoading, setIsLoading] = useState(false);

  const handleTabClick = (tabName) => {
    setIsLoading(true);
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'register':
        return <RegisterTab />;
      case 'details':
        return <DetailsTab />;
      case 'subdomains':
        return <SubdomainsTab />;
      case 'auction': // Add a new case for the 'auction' tab
        return <AuctionTab />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  return (
    <div className="bg-gray-700 text-white pb-10 mt-4 poppins rounded">
      <div className="container mx-auto px-4">
        <div className="flex items-center pt-4">
          {/* Domain Name */}
          <div className="flex-shrink-0">
            <h2 className="text-4xl font-bold">vrjdesai.eth</h2>
          </div>
          {/* Copy Icon */}
          <div className="ml-2">
            <button
              className="text-2xl focus:outline-none hover:text-blue-500 transition duration-300"
              onClick={() => {
                // Handle copy logic here
              }}
            >
              <FiCopy />
            </button>
          </div>
          {/* Tabs */}
          <div className="flex-grow">
            <ul className="flex justify-end space-x-1">
              {['register', 'details', 'subdomains', 'auction'].map((tab, index) => (
                <li key={index} className="relative">
                  {index !== 0 && (
                    <div className="absolute inset-y-0 left-0 w-px bg-white opacity-30" />
                  )}
                  <a
                    href={`#${tab}`}
                    className={`px-8 py-2 text-lg transition duration-300 rounded ${
                      activeTab === tab ? 'bg-blue-600' : 'bg-gray-700 hover:bg-blue-600'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabClick(tab);
                    }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Tab content */}
        <div className="mt-8">
          {isLoading ? (
            <div className="flex justify-center">
              <BounceLoader color={'#60A5FA'} />
            </div>
          ) : (
            renderTabContent()
          )}
        </div>
      </div>
    </div>
  );
};

export default DomainInfo;
