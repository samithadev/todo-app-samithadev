import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell} from 'recharts';


export default function TaskPrior() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        axios.get(process.env.REACT_APP_API_URL)
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);



    const priorityCount = {
        HIGH: 0,
        MEDIUM: 0,
        LOW: 0,
    };

    todos.forEach((todo) => {
        priorityCount[todo.priority] += 1;
    });


    const data = [
        { name: 'High', value: priorityCount.HIGH },
        { name: 'Medium', value: priorityCount.MEDIUM },
        { name: 'Low', value: priorityCount.LOW },
    ];

    const COLORS = ['#EB5757', '#F2C94C', '#2F80ED'];


    return (
        <div className="border-solid border-[#d0d5dd] bg-white flex flex-col gap-4 w-[442px] h-64 shrink-0  pt-4 pb-6 border rounded-lg">
            <div id="HeaderName" className="font-['Inter'] font-medium leading-[24px] self-start mb-2 ml-4">
                Tasks Priorities
            </div>
            <div id="Divider1" className="bg-[#e4e7ec] h-px shrink-0" />
            <div className="flex text-center justify-center items-center space-x-6">
                <div >
                    <PieChart width={160} height={160}>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={40}
                            outerRadius={80}
                            startAngle={90}
                            endAngle={-270}
                            background
                            backgroundPadding={0}
                            paddingAngle={0}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                    </PieChart>
                </div>

                <div className="text-[#757575]">
                    {data.map((entry, index) => (
                        <div key={`label-${index}`} className="flex ml items-center">
                            <div className="h-2 w-2 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                            <div className="font-[400px] text-[14px]">{entry.name} : </div>
                            <div className="font-[400px] text-[14px] ml-2">{entry.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
