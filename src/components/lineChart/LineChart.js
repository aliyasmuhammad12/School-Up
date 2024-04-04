import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import "./line.css";

function LineChartComponent() {
    const [data, setData] = useState([
        { month: "Jan", value: 0 },
        { month: "Feb", value: 25 },
        { month: "Mar", value: 29 },
        { month: "Apr", value: 27.7 },
        { month: "May", value: 45 },
        { month: "Jun", value: 57 },
        { month: "July", value: 21 },
        { month: "Aug", value: 3 },
        { month: "Sep", value: 4 },
        { month: "Oct", value: 27 },
        { month: "Nov", value: 43 },
        { month: "Dec", value: 45 },
        { month: "", value: 32 },
    ]);

    return (
        <div className='monthly'>
            {/* Dropdown for monthly selection */}
            <select>
                <option selected value="Jan">Monthly</option>
                <option value="Jan">January</option>
                <option value="Feb">February</option>
                <option value="Mar">March</option>
                <option value="Apr">April</option>
                <option value="May">May</option>
                <option value="Jun">June</option>
                <option value="July">July</option>
                <option value="Aug">August</option>
                <option value="Sep">September</option>
                <option value="Oct">October</option>
                <option value="Nov">November</option>
                <option value="Dec">December</option>
            </select>

            <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#31A0FA" />
                            <stop offset="96.74%" stopColor="rgba(49, 160, 250, 0)" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid  />
                    <XAxis  tick={{ fill: '#9FA2B4' }} tickLine={{ stroke: '#66666633' }} dataKey="month" />
                    <YAxis tick={{ fill: '#9FA2B4' }} tickLine={{ stroke: '#66666633' }} />
                    <Tooltip />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#1890FF"
                        fill="url(#gradient)"
                        dot={(props) => {
                            const { cx, cy, payload } = props;
                            if (payload.month === "Jan" || payload.month === "") {
                                return null; // Return null to hide dot at the beginning and end
                            }
                            return (
                                <g>
                                    <circle cx={cx} cy={cy} r={4} fill="#ffffff" stroke="#1890FF" strokeWidth={2} />
                                    <circle cx={cx} cy={cy} r={4} fill="#ffffff" />
                                </g>
                            );
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LineChartComponent;
