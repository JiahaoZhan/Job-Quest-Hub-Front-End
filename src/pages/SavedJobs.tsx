import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector, saved } from "../redux";
import { v4 } from 'uuid';

export const SavedJobs = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(saved(null));
    }, [])
    const savedJobs = useAppSelector(state => state.job.savedJobs);

    const onClick = () => {

    }
    return (
        <div>
            <ul>
                {/* Need to return JobDTO instead of DAO from the backend - Fix later  */}
                {savedJobs.map((job:any) => {
                    return (
                        <li key={v4()} onClick={() => {
                            onClick()
                        }}>
                            <div className="hover:bg-blue-100 py-3 px-2">
                                <img src={job.thumbnail}></img>
                                <a className="hover:underline text-[#0a66c2]  visited:text-purple-600 font-semibold text-xl" href="#">{job.title}</a>
                                <div><span className="font-semibold">Company: </span>{job.company_name}</div>
                                {/* <div className="italic">{job.salary_min/1000} {job.salary_max/1000}</div> */}
                                {job.scheduleType && <div><span className="font-semibold">Contract Time: </span>{job.scheduleType}</div>}
                                <div className="font-thin"><span className="font-semibold">Location: </span>{job.location}</div>
                            </div>
                            <hr></hr>
                        </li>
                    )
                })}
            </ul>
        </div>)
}

