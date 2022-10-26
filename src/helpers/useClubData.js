import { useState, useEffect } from "react";

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

  useEffect(() => {
    localStorage.setItem("garminSessions", JSON.stringify(sessions));
  }, [sessions]);

  useEffect(() => {
    localStorage.setItem("garminClubs", JSON.stringify(clubs));
  }, [clubs]);

  useEffect(() => {
    localStorage.setItem("garminType", JSON.stringify(clubTypes));
  }, [clubTypes]);

  const [clubArray, setClubArray] = useState();

  useEffect(() => {
    if (sessions && clubs && clubTypes) {
      const flatSessions = sessions.data.reduce((acc, cur) => {
        return acc.concat(cur.shots);
      }, []);
      const arr = clubs.data.map((club) => {
        const shots = flatSessions.filter((shot) => shot.clubId === club.id);
        return {
          ...club,
          name: clubTypes.data[club.clubTypeId].name,
          shots,
        };
      });
      setClubArray(arr);
    }
  }, [sessions, clubs, clubTypes]);

  return { clubArray, setSessions, setClubTypes, setClubs };
};

export default useClubData;
