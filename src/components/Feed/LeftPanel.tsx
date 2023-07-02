import React from "react"
import { useAppDispatch, useAppSelector, updateSelectedIndex } from "../../redux";
import { Job } from "../../redux";
import { Pagination } from "../Pagination";
import { useState, useMemo } from "react";
import { v4 } from 'uuid'

export const LeftPanel = ({ jobs, searchTerm, pageSize }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentListData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return jobs.slice(firstPageIndex, lastPageIndex);
    }, [currentPage])

    const dispatch = useAppDispatch();

    const time = useAppSelector(state => state.job.searchMeta?.total_time_taken)

    const onClick = (index: number) => {
        dispatch(updateSelectedIndex(index))
    }

    return (
        <div className="overflow-y-auto relative rounded border-r border-gray max-h-screen">
            <div className="bg-[#0a66c2] font-medium p-2 text-xl text-white">
                <div>{searchTerm}</div>
                <div>{jobs.length} results in {time}s</div>
            </div>
            <ul className="mb-2">
                {currentListData.map((job: Job, index: number) => {
                    return (
                        <li key={v4()} onClick={() => {
                            onClick(index)
                        }}>
                            <div className="hover:bg-blue-100 py-3 px-2">
                                <img src={job.thumbnail}></img>
                                <a className="hover:underline text-[#0a66c2]  visited:text-purple-600 font-semibold text-xl" href="#">{job.title}</a>
                                <div><span className="font-semibold">Company: </span>{job.company_name}</div>
                                {/* <div className="italic">{job.salary_min/1000} {job.salary_max/1000}</div> */}
                                {job.detected_extensions.schedule_type && <div><span className="font-semibold">Contract Time: </span>{job.detected_extensions.schedule_type}</div>}
                                <div className="font-thin"><span className="font-semibold">Location: </span>{job.location}</div>
                            </div>
                            <hr></hr>
                        </li>
                    )
                })}
            </ul>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={jobs.length}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    )
}