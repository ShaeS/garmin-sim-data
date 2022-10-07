import { useEffect, useState } from "react";
import Club from "./Club";
import FileUploader from "./FileUploader";

function App() {
  const [sessions, setSessions] = useState(null);
  const [clubs, setClubs] = useState(null);
  const [clubTypes, setClubTypes] = useState(null);

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

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto py-24">
        <h1 className="text-4xl font-bold mb-4">Garmin Sim Sessions Data</h1>
        <div className="mb-12 grid grid-cols-3 gap-4">
          <FileUploader label="Sessions" setter={setSessions} />
          <FileUploader label="Clubs" setter={setClubs} />
          <FileUploader label="Club Types" setter={setClubTypes} />
        </div>

        <div>
          {clubArray &&
            clubArray.map(
              (club) =>
                club.name !== "Putter" &&
                club.shots.length > 0 && <Club key={club.name} club={club} />
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
