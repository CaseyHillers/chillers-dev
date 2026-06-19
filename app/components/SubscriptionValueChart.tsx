'use client';

import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

type PlanData = {
    name: string;
    cost: number;
    value: number;
};

const data: PlanData[] = [
    { name: 'Plus ($20)', cost: 20, value: 284 },
    { name: 'Pro ($100)', cost: 100, value: 1420 },
    { name: 'Pro ($200)', cost: 200, value: 2840 },
];

export default function SubscriptionValueChart() {
    return (
        <figure className="not-prose my-8 rounded-2xl border border-border bg-surface/50 p-4 md:p-6">
            <figcaption className="mb-4 text-sm text-muted">
                Subscription Cost vs. Equivalent API Token Value (Monthly)
            </figcaption>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.15)" />
                        <XAxis
                            dataKey="name"
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                            axisLine={{ stroke: 'rgba(148, 163, 184, 0.25)' }}
                            tickLine={{ stroke: 'rgba(148, 163, 184, 0.25)' }}
                        />
                        <YAxis
                            tickFormatter={(val) => `$${val}`}
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                            axisLine={{ stroke: 'rgba(148, 163, 184, 0.25)' }}
                            tickLine={{ stroke: 'rgba(148, 163, 184, 0.25)' }}
                        />
                        <Tooltip
                            cursor={{ fill: 'rgba(31, 37, 48, 0.4)' }}
                            contentStyle={{
                                borderRadius: '0.75rem',
                                border: '1px solid rgba(148, 163, 184, 0.25)',
                                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                                color: '#f8fafc',
                            }}
                            labelStyle={{ color: '#cbd5e1', marginBottom: '0.25rem' }}
                            formatter={(value, name) => {
                                return [`$${value}`, name === 'cost' ? 'Subscription Cost' : 'Equivalent API Value'];
                            }}
                        />
                        <Legend
                            wrapperStyle={{ fontSize: 12, paddingTop: 10 }}
                            formatter={(value) => {
                                return value === 'cost' ? 'Subscription Cost' : 'Equivalent API Value';
                            }}
                        />
                        <Bar dataKey="cost" fill="#9aa4b2" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="value" fill="#9ad9ff" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </figure>
    );
}
