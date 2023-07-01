import React, { useMemo, useState } from "react"
import { useAppDispatch, useAppSelector } from "../redux";
import { useNavigate } from "react-router";
import { Input } from 'antd';
import { search, updateSelectedIndex, Job, updateSearchTerm } from "../redux/slices/job";
import { Pagination } from "../components"

export const Feed: React.FC = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [searchBar, setSearchBar] = useState("");

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSearch = (value: string) => {
        dispatch(updateSearchTerm(value));
        dispatch(search({
            keywords: value,
        }));
    }

    const onClick = (index: number) => {
        dispatch(updateSelectedIndex(index))
    }

    const { Search } = Input;

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

    const currentListData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return jobs.slice(firstPageIndex, lastPageIndex);
    }, [currentPage])

    return (
        <div>
            <div className="px-5 flex flex-wrap">
                <form className="mx-2"onSubmit={() => {
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
            <div className="shadow-lg flex flex-wrap justify-center mb-4 p-1">
                {/* keywords */}
                {
                    jobs[selectedJobIndex].keywords.map((keyword: string, index: number) => {
                        return (
                            <button className="text-md text-[#057642] font-semibold px-3 m-2 rounded-2xl bg-white border-[#057642] border-2" key={index}>
                                {keyword}
                            </button>
                        )
                    })
                }

            </div>


            <div className="grid grid-cols-2">
                {/* left panel*/}
                <div className="overflow-y-auto relative max-h-screen rounded border-r border-gray">
                    <div className="bg-[#0a66c2] font-medium p-2 text-xl text-white">
                        <div>{searchTerm}</div>
                        <div>{jobs.length} results</div>
                    </div>
                    <ul className="mb-2">
                        {currentListData.map((job: Job, index: number) => {
                            const date = new Date(job.created);
                            return (
                                <>
                                    <li key={index} onClick={() => { onClick(index) }}>
                                        <div className="hover:bg-blue-100 py-3 px-2">
                                            <a className="hover:underline text-[#0a66c2]  visited:text-purple-600 font-semibold text-xl" href={job.redirect_url}>{job.title}</a>
                                            <div><span className="font-semibold">Company: </span>{job.company.display_name}</div>
                                            {/* <div className="italic">{job.salary_min/1000} {job.salary_max/1000}</div> */}
                                            {job.contract_time && <div><span className="font-semibold">Contract Time: </span>{job.contract_time.replace("_", "-")}</div>}
                                            <div className="font-thin"><span className="font-semibold">Location: </span>{job.location.area.join(", ")}</div>
                                            <div className="font-thin italic text-slate-400 mb-1">Posted on: {date.toLocaleDateString()}</div>
                                        </div>
                                    </li>
                                    <hr></hr>

                                </>
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
                {/* right panel */}
                <div>
                    {jobs.length != 0 &&
                        <div className="p-8">
                            <a href={jobs[selectedJobIndex].redirect_url}>
                                <h2 className="font-semibold text-2xl">
                                    {jobs[selectedJobIndex].title}
                                </h2>
                            </a>
                            <div className="mt-2"><span className="font-semibold">Category: </span> {jobs[selectedJobIndex].category.label}</div>
                            <div><span className="font-semibold">Company: </span>{jobs[selectedJobIndex].company.display_name}</div>
                            <div><span className="font-semibold">Location: </span> {jobs[selectedJobIndex].location.area.join(", ")}</div>
                            <div className="mt-2">
                                <h2 className="font-semibold text-xl">About the job</h2>
                                <p>{jobs[selectedJobIndex].description.substring(0, jobs[selectedJobIndex].description.length - 1)} ...
                                    <a className="underline text-blue-600 visited:text-purple-600 font-semibold ml-1" href={jobs[selectedJobIndex].redirect_url}>see details</a>
                                </p>
                            </div>
                            <div className="space-x-3 my-2">
                                <button className="px-4 py-2 text-sm font-medium text-white bg-[#0a66c2]  rounded-3xl shadow-md border-2 border-[#0a66c2] md:text-base hover:bg-white hover:text-[#0a66c2] ">Apply</button>
                                <button className="px-4 py-2 text-sm font-medium text-black bg-gray-300 rounded-3xl shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600">Save</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}