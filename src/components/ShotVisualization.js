import { convertToYards } from "../helpers/unitConversions";

function ShotVisualizer({ shots, selectedShot, setSelectedShot }) {
  return (
    <div className="relative">
      <span className="text-xs absolute top-full left-24">50</span>
      <span className="text-xs absolute top-full left-10">100</span>
      <span className="text-xs absolute top-full -left-2">150</span>
      <span className="text-xs absolute top-[260px] right-full pr-1">200</span>
      <span className="text-xs absolute top-[190px] right-full pr-1">250</span>
      <span className="text-xs absolute top-[130px] right-full pr-1">300</span>
      <span className="text-xs absolute top-[75px] right-full pr-1">350</span>
      <div className="relative rounded w-[300px] h-[400px] border-2 border-green-700 bg-green-200 flex items-end justify-center overflow-hidden">
        <div className="absolute bg-green-300 w-0.5 h-full"></div>
        <div className="absolute bg-green-600 w-1.5 h-1.5 rounded-full"></div>
        <div className="absolute border-2 top-full border-green-400 w-[100px] h-[100px] rounded-full translate-y-[-50px]"></div>
        <div className="absolute border-2 top-full border-green-400 w-[200px] h-[200px] rounded-full translate-y-[-100px]"></div>
        <div className="absolute border-2 top-full border-green-400 w-[300px] h-[300px] rounded-full translate-y-[-150px]"></div>
        <div className="absolute border-2 top-full border-green-400 w-[400px] h-[400px] rounded-full translate-y-[-200px]"></div>
        <div className="absolute border-2 top-full border-green-400 w-[500px] h-[500px] rounded-full translate-y-[-250px]"></div>
        <div className="absolute border-2 top-full border-green-400 w-[600px] h-[600px] rounded-full translate-y-[-300px]"></div>
        <div className="absolute border-2 top-full border-green-400 w-[700px] h-[700px] rounded-full translate-y-[-350px]"></div>
        {shots.map(({ totalDeviationAngle, totalDistance, shotTime }) => {
          return (
            <div
              key={`${totalDeviationAngle}-${totalDistance}`}
              className={`absolute bg-gray-700 w-1.5 h-1.5 rounded-full ${
                selectedShot === shotTime ? "bg-gray-700" : "bg-gray-400"
              }`}
              onClick={() => setSelectedShot(shotTime)}
              style={{
                transform: `rotate(${totalDeviationAngle}deg) translateY(-${convertToYards(
                  totalDistance
                )}px)`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ShotVisualizer;
