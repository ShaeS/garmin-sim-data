import {
  convertToKMH,
  convertToYards,
  convertToDate,
} from "../helpers/unitConversions";

export default function ShotTable({
  shots,
  fields,
  selectedShot,
  setSelectedShot,
}) {
  console.log(shots);
  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  {fields.map(({ name, units }) => (
                    <th
                      key={name}
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 min-w-[180px]"
                    >
                      {name}{" "}
                      {units && units !== "degrees" && (
                        <span className="text-xs font-normal text-gray-400">
                          ({units})
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {shots.map((shot) => (
                  <tr
                    key={shot.shotTime}
                    onClick={() => setSelectedShot(shot.shotTime)}
                    className={
                      selectedShot === shot.shotTime ? "bg-slate-100" : ""
                    }
                  >
                    {fields.map(({ id, convert, units }) => (
                      <td
                        key={id}
                        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 min-w-[180px]"
                      >
                        {convert && units === "yds"
                          ? Math.round(convertToYards(shot[id]))
                          : convert && units === "km/h"
                          ? Math.round(convertToKMH(shot[id]))
                          : id === "shotTime"
                          ? convertToDate(shot[id])
                          : shot[id]}
                        {units === "degrees" && "°"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
