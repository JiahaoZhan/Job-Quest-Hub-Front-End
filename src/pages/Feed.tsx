import React, { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector, saved } from "../redux";
import { useNavigate } from "react-router";
import { search, updateSearchTerm } from "../redux/slices/job";
import { LeftPanel, RightPanel } from "../components/Feed";

export const Feed: React.FC = () => {

    
    const [pageSize, setPageSize] = useState(9);
    const [searchBar, setSearchBar] = useState("");

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const token = useAppSelector(state => {
        return state.user.token;
    })

    const onSearch = (value: string) => {
        dispatch(updateSearchTerm(value));
        dispatch(search({
            keywords: value
        }));
    }

    useEffect(() => {
        dispatch(saved(null));
    }, [])


    const searchTerm = useAppSelector(state => {
        const searchTerm = state.job.searchTerm;
        return searchTerm;
    })

    const filterBy = useAppSelector(state => {
        const filterBy = state.job.filterBy;
        return filterBy;
    })

    const sortBy = useAppSelector(state => {
        const sortBy = state.job.sortBy;
        return sortBy;
    })

    const jobs = useAppSelector(state => {
        const jobs = state.job.jobs
        return jobs
    })

    const selectedJobIndex = useAppSelector(state => {
        const index = state.job.selected;
        return index
    })



    return (
        <div>
            <div className="px-5 flex flex-wrap">
                <form className="mx-2" onSubmit={(e) => {
                    e.preventDefault();
                    onSearch(searchBar);
                }}>
                    <input
                        className="bg-slate-200 px-3 py-2 rounded-md mr-2"
                        placeholder="Search"
                        type="text"
                        name="keywords"
                        onChange={(e) => setSearchBar(e.target.value)}
                    />
                    <button type="submit" className="text-[#0a66c2] font-semibold border-2 border-[#0a66c2] rounded-3xl px-3 py-1">Search</button>
                </form>
                <button className="mx-2 text-slate-500 font-semibold border-2 border-slate-300 rounded-3xl px-3 py-1">Date posted</button>
                <button className="mx-2 text-slate-500 font-semibold border-2 border-slate-300 rounded-3xl px-3 py-1">Contract time</button>
            </div>
            <hr className="my-2" />
          


            <div className="grid grid-cols-2">
                {/* left panel*/}
                <LeftPanel jobs={jobs} searchTerm={searchTerm} pageSize={pageSize}/>
                {/* right panel */}
                <RightPanel job={jobs[selectedJobIndex]}/>
            </div>
        </div>
    )

}