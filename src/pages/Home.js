import Club from "../components/Club";
import FileUploader from "../components/FileUploader";
import useClubData from "../helpers/useClubData";

function Home() {
  const { clubArray, setSessions, setClubs, setClubTypes } = useClubData();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto py-24">
        <h1 className="text-4xl font-bold mb-4">Garmin Sim Sessions Data</h1>
        <div className="mb-12 grid grid-cols-3 gap-4">
          <FileUploader
            label="Sessions"
            setter={setSessions}
            localKey="garminSessions"
          />
          <FileUploader
            label="Clubs"
            setter={setClubs}
            localKey="garminClubs"
          />
          <FileUploader
            label="Club Types"
            setter={setClubTypes}
            localKey="garminType"
          />
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

export default Home;
