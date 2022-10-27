import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomSelect from "../components/CustomSelect";
import ShotTable from "../components/ShotTable";
import ShotVisualizer from "../components/ShotVisualization";
import useClubData from "../helpers/useClubData";
import ShotChart from "../components/ShotChart";
import { tableFields } from "../helpers/data";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

function ClubDetails() {
  let params = useParams();
  const [fields, setFields] = useState(tableFields);
  const [selectedShot, setSelectedShot] = useState(tableFields);
  const { clubArray } = useClubData();
  const [clubData, setClubData] = useState(null);

  useEffect(() => {
    if (clubArray && params.club) {
      const club = clubArray.filter((club) => club.name === params.club);
      setClubData(club[0]);
    }
  }, [clubArray, params.club]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto py-24">
        <Link
          className="inline-flex items-center mb-2 text-sm text-blue-500"
          to="/"
        >
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          Back to Clubs
        </Link>
        <h1 className="text-4xl font-bold mb-6">{params.club}</h1>
        <div className="flex items-end">
          <div className="flex-1">
            {clubData && <ShotChart shots={clubData.shots} />}
          </div>
          {clubData && (
            <ShotVisualizer
              shots={clubData.shots}
              selectedShot={selectedShot}
              setSelectedShot={setSelectedShot}
            />
          )}
        </div>

        <div className="mt-8 max-w-sm">
          <CustomSelect
            label="Filter Fields"
            options={tableFields}
            selectedOptions={fields}
            setSelectedOptions={setFields}
            multiple={true}
          />
        </div>

        <div>
          {clubData && (
            <ShotTable
              shots={clubData.shots}
              fields={fields}
              selectedShot={selectedShot}
              setSelectedShot={setSelectedShot}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ClubDetails;
