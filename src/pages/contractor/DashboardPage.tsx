import React from 'react';
import { Card } from '../../components/common/Card';

const ContractorDashboardPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contractor Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Active Bookings</h2>
            <p className="text-gray-600">View and manage your current bookings</p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Past Events</h2>
            <p className="text-gray-600">Review your event history</p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Find Artists</h2>
            <p className="text-gray-600">Browse our directory of talented performers</p>
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <p className="text-gray-600">No recent activity to display</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContractorDashboardPage;