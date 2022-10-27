import { useState } from "react";
import { tableFields } from "../helpers/data";
import CustomSelect from "../components/CustomSelect";
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  YAxis,
} from "recharts";

export default function ShotChart({ shots }) {
  const [metric, setMetric] = useState(tableFields[0]);
  const reverseShots = [...shots].reverse();

  return (
    <div>
      <div className="mb-4 max-w-sm">
        <CustomSelect
          label="Chart Metric"
          options={tableFields}
          selectedOptions={metric}
          setSelectedOptions={setMetric}
        />
      </div>
      <div className="bg-white inline-block rounded shadow py-4 pr-4">
        <LineChart width={600} height={365} data={reverseShots}>
          <XAxis dataKey="shotTime" hide={true} />
          <YAxis dataKey={metric.id} />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line
            animationDuration={600}
            type="monotone"
            dataKey={metric.id}
            stroke="#ff7300"
            yAxisId={0}
          />
        </LineChart>
      </div>
    </div>
  );
}
