import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import PriorityHighIcon from '../Assets/Priority-High.svg';
import PriorityMediumIcon from '../Assets/Priority-Medium.svg';
import PriorityLowIcon from '../Assets/Priority-Low.svg';

export default function Tasks() {

    const [todos, setTodos] = useState([]);

    const [page, setPage] = useState(1);
    const itemsPerPage = 8;

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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const monthAbbreviation = monthNames[date.getMonth()];
        return `${monthAbbreviation}-${date.getDate().toString().padStart(2, '0')}`;
    };

    const totalPages = Math.ceil(todos.length / itemsPerPage);
    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedTodos = todos.slice(startIndex, endIndex);

    return (
        <div className="self-stretch flex flex-col gap-1  shrink-0">
            <div
                id="HeaderName"
                className="font-['Inter'] font-medium leading-[24px] self-start mb-2 ml-4"
            >
                Tasks
            </div>
            <div id="Divider1" className="bg-[#e4e7ec] mb-2 h-px shrink-0" />

            
                {paginatedTodos.map((todo) => (
                    <div className=' justify-center items-center'>
                    <div key={todo.id} className="flex flex-row justify-between items-center mb-2 mx-4">
                        <div className="flex flex-row gap-2 w-1/2 items-center">
                            <div
                                className="flex flex-col shrink-0 items-center rounded"
                                
                            >
                                {todo.priority === 'HIGH' && (
                                    <img src={PriorityHighIcon} alt="High Priority Icon" />
                                )}
                                {todo.priority === 'MEDIUM' && (
                                    <img src={PriorityMediumIcon} alt="Medium Priority Icon" />
                                )}
                                {todo.priority === 'LOW' && (
                                    <img src={PriorityLowIcon} alt="Low Priority Icon" />
                                )}
                            </div>
                            <div className="text-sm font-['Inter'] leading-[24px] self-start">
                                {todo.todo}
                                {!todo.completed && (
                                    <span className="text-[#BC006D] text-[12px] font-w-[500] cursor-pointer"><br /> Mark as Done</span>
                                )}
                            </div>
                        </div>
                        <div className="self-start flex flex-row gap-3 items-center">
                            <div
                                id="TabelCellBadge"
                                className="bg-[#e8f5e9] self-start flex flex-col min-w-[32px] shrink-0 items-center px-2 py-px rounded-lg"
                                style={{ backgroundColor: todo.completed ? '#E8F5E9' : '#F2C94C1A' }}
                            >
                                <div
                                    id="Label"
                                    className="text-center text-xs font-['Inter'] font-medium leading-[22px]"
                                    style={{ color: todo.completed ? '#219653' : '#F2C94C' }}
                                >
                                    {todo.completed ? 'Done' : 'In-Progress'}
                                </div>
                            </div>
                            <div id="YourTotalGroceries1" className="text-right text-xs font-['Inter'] leading-[22px] text-[#757575]">
                                {formatDate(todo.createdAt)}
                            </div>
                        </div>
                    </div>
                    <div id="Divider" className="bg-[#e4e7ec] h-px shrink-0" />
                    </div>
                ))}


            {/* Material UI Pagination component */}
            <div className="flex justify-center mt-[20px]">
                <Stack spacing={2}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                        color='secondary'
                        variant="outlined" shape="rounded"
                    />
                </Stack>
            </div>

        </div>
    )
}
