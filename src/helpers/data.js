const tableFields = [
  {
    name: "Carry Distance",
    id: "carryDistance",
    units: "yds",
  },
  {
    name: "Total Distance",
    id: "totalDistance",
    units: "yds",
  },
  {
    name: "Total Deviation Distance",
    id: "totalDeviationDistance",
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
    units: "yds",
  },
  {
    name: "Smash Factor",
    id: "smashFactor",
  },
  {
    name: "Ball Speed",
    id: "ballSpeed",
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

const conversionData = {
  carryDistance: "yds",
  totalDistance: "yds",
  totalDeviationDistance: "yds",
  apexHeight: "yds",
  ballSpeed: "km/h",
  clubHeadSpeed: "km/h",
};

export { conversionData, tableFields };
