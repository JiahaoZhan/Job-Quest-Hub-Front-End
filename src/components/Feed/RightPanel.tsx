import React from "react"
import { v4 } from 'uuid'
import { useAppDispatch, useAppSelector, save, unsave } from "../../redux";

export const RightPanel = ({job}) => {
    const dispatch = useAppDispatch();
    const isSaved = useAppSelector(state => state.job.savedJobIds);
    if (job) {
        return (
            <div className="p-8 overflow-y-auto relative rounded border-r border-gray max-h-screen">
                <a href="#">
                    <h2 className="font-semibold text-2xl">
                        {job.title} <span className="italic text-gray-400">({job.via})</span>
                    </h2>
                </a>
                <span className="italic text-gray-400">{job.detected_extensions.posted_at}</span>
                <div className="mt-2"><span className="font-semibold">Contract Time: </span> {job.detected_extensions.schedule_type}</div>
                <div><span className="font-semibold">Company: </span>{job.company_name}</div>
                <div><span className="font-semibold">Location: </span>{job.location}</div>
                <div className="space-x-3 my-2">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-[#0a66c2]  rounded-3xl shadow-md border-2 border-[#0a66c2] md:text-base hover:bg-white hover:text-[#0a66c2] ">Apply</button>
                    { isSaved.includes(job.job_id) ? 
                    <button className="
                    px-4 py-2 text-sm font-medium text-white border-softRed bg-softRed 
                    rounded-3xl shadow-md border-2 md:text-base 
                    hover:bg-white hover:text-softRed"
                    onClick={() => {
                        dispatch(unsave({
                            job_id: job.job_id
                        }));
                    }}>Unsave</button>  
                    :
                    <button className="
                    px-4 py-2 text-sm font-medium text-black bg-gray-300 
                    rounded-3xl shadow-md border-2 border-gray-300 md:text-base 
                    hover:bg-white hover:text-gray-600" 
                    onClick={() => {
                        dispatch(save({
                            ...job
                        }));
                    }}>Save</button>
                    }
                </div>
                <div className="mt-2">
                    <h2 className="font-semibold text-xl">Related Links</h2>
                    {job.related_links.map((link) => {
                        return (
                        <div key={v4()}>
                            <a className="underline text-blue-600  visited:text-purple-600" href={link.link}>{link.text}</a>
                        </div>)
                    })}
                </div>
                <div className="mt-2">
                    <h2 className="font-semibold text-xl">Description</h2>
                        {job.description.split("\n").map((line, index) => {
                            return (<div key={v4()}>{line}<br/></div>)
                        })}
                        
                        {/* <a className="underline text-blue-600 visited:text-purple-600 font-semibold ml-1" href={job.related_links.link}>see details</a> */}
                </div>
                <div className="mt-2">
                    {job.job_highlights.map((highlight) => {
                        return (
                        <div key={v4()}>
                            <h2 className="font-semibold text-xl">{highlight.title}</h2>
                            <div>{highlight.items.map((item) => {
                                return (<div key={v4()}>{item}</div>)
                            }) }</div>
                        </div>)
                    })}
                </div>
            </div>
    )
    }
    else {
        return <></>;
    }
}

