import "./Dashboard.css";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Stocks", value: 40 },
  { name: "Mutual Funds", value: 30 },
  { name: "Gold", value: 20 },
  { name: "Crypto", value: 10 }
];

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#ef4444"
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>VELIS</h2>

        <ul>
          <li>Overview</li>
          <li>Portfolio</li>
          <li>Analytics</li>
          <li>Transactions</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <div className="top-cards">
          <div className="card">
            <h4>Total Portfolio</h4>
            <h2>$128,450</h2>
          </div>

          <div className="card">
            <h4>Today's Profit</h4>
            <h2>$1,240</h2>
          </div>

          <div className="card">
            <h4>Annual Return</h4>
            <h2>18.4%</h2>
          </div>
        </div>

        <div className="chart-section">
          <div className="chart-card">
            <h3>Asset Allocation</h3>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  outerRadius={100}
                >
                  {data.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;