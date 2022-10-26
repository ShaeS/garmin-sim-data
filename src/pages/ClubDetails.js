import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomSelect from "../components/CustomSelect";
import ShotTable from "../components/ShotTable";
import ShotVisualizer from "../components/ShotVisualization";
import useClubData from "../helpers/useClubData";

const FIELDS = [
  {
    name: "Date",
    id: "shotTime",
  },
  {
    name: "Carry Distance",
    id: "carryDistance",
    convert: true,
    units: "yds",
  },
  {
    name: "Total Distance",
    id: "totalDistance",
    convert: true,
    units: "yds",
  },
  {
    name: "Total Deviation Distance",
    id: "totalDeviationDistance",
    convert: true,
    units: "yds",
  },
  {
    name: "Spin Rate",
    id: "spinRate",
    units: "rpm",
  },
  {
    name: "Spin Axis",
    id: "spinAxis",
    units: "degrees",
  },
  {
    name: "Apex Height",
    id: "apexHeight",
    convert: true,
    units: "yds",
  },
  {
    name: "Smash Factor",
    id: "smashFactor",
  },
  {
    name: "Ball Speed",
    id: "ballSpeed",
    convert: true,
    units: "km/h",
  },
  {
    name: "Swing Tempo",
    id: "swingTempo",
    units: "seconds",
  },
  {
    name: "Club Head Speed",
    id: "clubHeadSpeed",
    convert: true,
    units: "km/h",
  },
  {
    name: "Club Face Angle",
    id: "clubFaceAngle",
    units: "degrees",
  },
  {
    name: "Club Path Angle",
    id: "clubPathAngle",
    units: "degrees",
  },
  {
    name: "Attack Angle",
    id: "attackAngle",
    units: "degrees",
  },
  {
    name: "Horizontal Launch Angle",
    id: "horizontalLaunchAngle",
    units: "degrees",
  },
  {
    name: "Vertical Launch Angle",
    id: "verticalLaunchAngle",
    units: "degrees",
  },
];

function ClubDetails() {
  let params = useParams();
  const [fields, setFields] = useState(FIELDS);
  const [selectedShot, setSelectedShot] = useState(FIELDS);
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
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{params.club}</h1>

            <div className="max-w-sm">
              <CustomSelect
                options={FIELDS}
                selectedOptions={fields}
                setSelectedOptions={setFields}
              />
            </div>
          </div>
          {clubData && (
            <ShotVisualizer
              shots={clubData.shots}
              selectedShot={selectedShot}
              setSelectedShot={setSelectedShot}
            />
          )}
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
