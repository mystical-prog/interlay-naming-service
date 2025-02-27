import React, { useState } from 'react';

const DetailRow = ({ label, value, actionButton, avatar }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center justify-start mb-4">
      <div className="text-gray-400 text-lg mr-2">{label}:</div>
      <div className="flex items-center">
        {avatar && <img src={avatar} alt="avatar" className="w-6 h-6 rounded-full mr-2" />}
        <div className="text-gray-100 font-semibold text-lg mr-4">{value}</div>
      </div>
    </div>
    {actionButton}
  </div>
);

const RecordRow = ({ recordType, value }) => (
  <tr className="hover:bg-gray-700">
    <td className="border-t border-gray-600 px-4 py-2 text-base text-gray-400">{recordType}</td>
    <td className="border-t border-gray-600 px-4 py-2 text-base font-semibold text-gray-100">{value}</td>
  </tr>
);

const DomainDetails = () => {
  // Replace the data in this object with your domain details
  const domainDetails = {
    name: 'shubh.eth',
    owner: '0x1234...',
    resolver: '0x5678...',
    content: 'Not set',
    expires: '2024-05-22',
  };

  // Replace the data in this object with your records
  const records = [
    { recordType: 'Address', value: '0x1234...' },
    { recordType: 'Content', value: 'Not set' },
  ];

  // Replace with the actual avatar URL
  const avatarUrl = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2jUdKJhKnlEf2FXJYiIT9JAFxUZs6rrSvmxOpQAIEmH5LPaL4';

  const [showExtendFields, setShowExtendFields] = useState(false);

  const handleExtendClick = () => {
    setShowExtendFields(!showExtendFields);
  };
  const handleCloseClick = () => {
    setShowExtendFields(false);
  };

  return (
    <div className="bg-gray-700 text-gray-100 font-poppins">
      <div className="container mx-auto py-8">
        <div className="bg-gray-900 rounded-lg p-6 shadow-md mb-8">
          <DetailRow label="Owner" value={domainDetails.owner} avatar={avatarUrl} 
            actionButton={
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-thin py-1 px-6 rounded-lg">
                Transfer
              </button>
            }
          />
          <DetailRow label="Resolver" value={domainDetails.resolver} />
          <DetailRow label="Content" value={domainDetails.content} />
          <DetailRow
            label="Expires"
            value={domainDetails.expires}
            actionButton={
              !showExtendFields && (
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-thin py-1 px-6 rounded-lg"
                  onClick={handleExtendClick}
                >
                  Extend
                </button>
              )
            }
          />
          {showExtendFields && (
            <div className="relative">
              <div className="flex items-center mt-4">
                <div className="w-1/2 mr-2">
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-400">
                    Duration
                  </label>
                  <input
                    type="number"
                    name="duration"
                    id="duration"
                    className="mt-1 block w-full py-2 px-3 border border-gray-600 rounded-md text-gray-100 bg-gray-700"
                    placeholder="Enter duration"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-400">
                    Price
                  </label>
                  <div className="mt-1 block w-full py-2 px-3 border border-gray-600 rounded-md text-gray-100 bg-gray-700">
                    {/* Replace '0.00' with the actual price */}
                    0.00 ETH
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mt-4 mr-2">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-thin py-1 px-2 rounded-lg"
                  onClick={handleCloseClick}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                </button>
              </div>
              <div className="text-right mt-4">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-thin py-1 px-6 rounded-lg"
                  onClick={handleExtendClick}
                >
                  Extend
                </button>
              </div>
            </div>
          )}
    </div>
    <h2 className="text-2xl font-bold mb-6">Records</h2>
    <div className="bg-gray-900 rounded-lg shadow-md">
      <table className="w-full">
        <tbody>
          {records.map((record, index) => (
            <RecordRow key={index} recordType={record.recordType} value={record.value} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
);
};
export default DomainDetails;