import { useEffect, useState } from "react";

const getAverageInYards = (shots, key) => {
  const value = shots.reduce((acc, cur) => {
    return cur[key] ? acc + cur[key] : acc;
  }, 0);
  return Math.round((value * 1.09361) / shots.length);
};

function Club({ club }) {
  const [carry, setCarry] = useState(0);
  const [total, setTotal] = useState(0);
  const [deviation, setDeviation] = useState(0);

  useEffect(() => {
    if (club.shots.length > 0) {
      setCarry(getAverageInYards(club.shots, "carryDistance"));
      setTotal(getAverageInYards(club.shots, "totalDistance"));
      setDeviation(getAverageInYards(club.shots, "carryDeviationDistance"));
    }
  }, [club]);

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold leading-6 text-gray-900">
        {club.name} -{" "}
        <span className="text-base font-medium">
          {club.shots.length} Total Shots
        </span>
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Average Carry Distance (Yards)
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {carry}
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Average Total Distance (Yards)
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {total}
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Average Deviation (Yards)
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {deviation > 0 ? deviation : deviation * -1}{" "}
            {deviation === 0 ? "" : deviation > 0 ? "R" : "L"}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default Club;
