import { useState, useEffect } from "react";
import { conversionData } from "./data";
import { convertToKMH, convertToYards } from "./unitConversions";

const useClubData = () => {
  const [sessions, setSessions] = useState(() => {
    const val = localStorage.getItem("garminSessions");
    return val ? JSON.parse(val) : null;
  });
  const [clubs, setClubs] = useState(() => {
    const val = localStorage.getItem("garminClubs");
    return val ? JSON.parse(val) : null;
  });
  const [clubTypes, setClubTypes] = useState(() => {
    const val = localStorage.getItem("garminType");
    return val ? JSON.parse(val) : null;
  });

  const [clubArray, setClubArray] = useState();

  useEffect(() => {
    if (sessions && clubs && clubTypes) {
      const flatSessions = [...sessions.data].reduce((acc, cur) => {
        return acc.concat(cur.shots);
      }, []);
      const arr = clubs.data.map((club) => {
        const shots = flatSessions.filter((shot) => shot.clubId === club.id);
        const convertedShots = [...shots].map((shot) => {
          const obj = { ...shot };
          Object.entries(conversionData).forEach(([key, val]) => {
            if (val === "yds") {
              obj[key] = Math.round(convertToYards(shot[key]));
            } else if (val === "km/h") {
              obj[key] = Math.round(convertToKMH(shot[key]));
            }
          });
          return obj;
        });
        return {
          ...club,
          name: clubTypes.data[club.clubTypeId].name,
          shots: convertedShots,
        };
      });
      setClubArray(arr);
    }
  }, [sessions, clubs, clubTypes]);

  return { clubArray, setSessions, setClubTypes, setClubs };
};

export default useClubData;
