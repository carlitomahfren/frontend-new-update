"use client";
import React from "react";
import TripsInProgress from "@/components/TripsInProgress";
import RecentTrips from "@/components/RecentTrips";

const DeliveriesPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 md:px-8">
      <TripsInProgress />
      <RecentTrips />
    </div>
  );
};

export default DeliveriesPage;
