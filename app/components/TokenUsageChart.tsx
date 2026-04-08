'use client';

import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

type DataPoint = {
    month: string;
    tokens: number;
};

const data: DataPoint[] = [
    { month: 'Nov 2025', tokens: 4_300 },
    { month: 'Dec 2025', tokens: 50_800 },
    { month: 'Jan 2026', tokens: 125_000 },
    { month: 'Feb 2026', tokens: 450_000 },
    { month: 'Mar 2026', tokens: 1_100_000 },
];

const formatCompact = (value: number) =>
    new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1,
    }).format(value * 1_000);

const formatPrecise = (value: number) => new Intl.NumberFormat('en-US').format(value / 1_000);

export default function TokenUsageChart() {
    return (
        <figure className="not-prose my-8 rounded-2xl border border-border bg-surface/50 p-4 md:p-6">
            <figcaption className="mb-4 text-sm text-muted">Monthly token usage trend</figcaption>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 12, right: 16, left: 8, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.25)" />
                        <XAxis
                            dataKey="month"
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                            axisLine={{ stroke: 'rgba(148, 163, 184, 0.25)' }}
                            tickLine={{ stroke: 'rgba(148, 163, 184, 0.25)' }}
                        />
                        <YAxis
                            tickFormatter={formatCompact}
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                            width={64}
                            axisLine={{ stroke: 'rgba(148, 163, 184, 0.25)' }}
                            tickLine={{ stroke: 'rgba(148, 163, 184, 0.25)' }}
                        />
                        <Tooltip
                            contentStyle={{
                                borderRadius: '0.75rem',
                                border: '1px solid rgba(148, 163, 184, 0.25)',
                                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                                color: '#f8fafc',
                            }}
                            labelStyle={{ color: '#cbd5e1', marginBottom: '0.25rem' }}
                            formatter={(value: number) => [`${formatPrecise(value)}M tokens`, 'Usage']}
                        />
                        <Line
                            type="monotone"
                            dataKey="tokens"
                            stroke="#4285f4"
                            strokeWidth={3}
                            dot={{ r: 4, fill: '#4285f4' }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </figure>
    );
}
