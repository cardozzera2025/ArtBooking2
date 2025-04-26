import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/common/Card';

const ArtistDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Artist Details</h1>
          <p className="text-gray-600">Artist ID: {id}</p>
          {/* Placeholder for artist details - will be implemented later */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-500 italic">Artist details will be displayed here</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ArtistDetailPage;