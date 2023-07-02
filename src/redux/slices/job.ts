import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { searchAPI, saveAPI, savedAPI, unsaveAPI } from "../../utils"

export interface Highlights {
    title: string,
    items: string[]
}

export interface Options {
    text: string,
    value: string,
}

export interface Chip {
    type: string,
    param: string,
    options: Options[];
}

export interface RelatedLinks {
    link: string,
    text: string,
}

export interface SearchMeta {
    id: string,
    status: string,
    json_endpoint: string,
    created_at: string,
    processed_at: string,
    google_jobs_url: string,
    raw_html_file: string,
    total_time_taken: number
}

export interface SearchParams {
    q: string,
    engine: string,
    google_domain: string,
    hl: string,
    gl: string
}

export interface DetectedExtensions {
    posted_at: string,
    schedule_type: string,
}

export interface Job {
    title: string,
    company_name: string,
    location: string,
    via: string,
    description: string,
    job_highlights: Highlights,
    related_links: RelatedLinks,
    thumbnail: string,
    extensions: string[]
    detected_extensions: DetectedExtensions,
    job_id: string,
}

export interface JobState {
    loading: boolean,
    searchMeta: SearchMeta | null,
    searchParams: SearchParams | null,
    jobs: Job[],
    savedJobs: Job[],
    chips: Chip[],
    selected: number,
    filterBy: string,
    location: string,
    searchTerm: string,
    sortBy: string,
    error: string | null,
    savedJobIds: string[]
}

const initialState: JobState = {
    loading: false,
    jobs: [],
    savedJobs: [],
    searchMeta: null,
    searchParams: null,
    chips: [],
    selected: 0,
    error: null,
    location: "Canada",
    sortBy: "title",
    searchTerm: "",
    filterBy: "all",
    savedJobIds: [],
}

export const saved = createAsyncThunk(
    "job/saved",
    async (parameters: null, thunkAPI) => {
        try {
            const { data } = await savedAPI();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error)
            alert('Fail to search. Please try again!');
        }
    }
)

export const unsave = createAsyncThunk(
    "job/unsave",
    async (parameters: { job_id: string }, thunkAPI) => {
        try {
            const { data } = await unsaveAPI({job_id: parameters.job_id});
            console.log(data);
            return data;
        } catch (error) {
            console.log(error)
            alert('Fail to search. Please try again!');
        }
    }
)


export const save = createAsyncThunk(
    "job/save",
    async (parameters: {
        title: string,
        company_name: string,
        location: string,
        via: string,
        description: string,
        job_highlights: Highlights,
        related_links: RelatedLinks,
        thumbnail: string,
        extensions: string[]
        detected_extensions: DetectedExtensions,
        job_id: string}, thunkAPI) => {
        try {
            const { data } = await saveAPI({
                title: parameters.title,
                company_name: parameters.company_name,
                location: parameters.location,
                via: parameters.via,
                description: parameters.description,
                qualifications: parameters.job_highlights[0].items.join("\n"),
                responsibilities: parameters.job_highlights[1].items.join("\n"),
                benefits: parameters.job_highlights[2].items.join("\n"),
                link_title: parameters.related_links[0].text,
                related_link: parameters.related_links[0].link,
                thumbnail: parameters.thumbnail,
                posted_at: parameters.detected_extensions.posted_at,
                schedule_type: parameters.detected_extensions.schedule_type,
                job_id: parameters.job_id
            });
            return data;
        } catch (error) {
            console.log(error)
            alert('Fail to save. Please try again!');
        }
    }
)

export const search = createAsyncThunk(
    "job/search",
    async (parameters: {keywords: String}, thunkAPI) => {
        try {
            const { data } = await searchAPI({query: parameters.keywords});
            return data;
        } catch (error) {
            console.log(error)
            alert('Fail to search. Please try again!');
        }
    }
)

export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        updateSelectedIndex: (state, action) => {
            state.selected = action.payload;
        },
        updateSearchTerm: (state, action) => {
            console.log(action);
            state.searchTerm = action.payload;
        },
        updateSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        updateFilterBy: (state, action) => {
            state.filterBy = action.payload;
        },
    },
    extraReducers: {
        [search.pending.type]: (state) => {
            state.loading = true;
        },
        [search.fulfilled.type]: (state, action) => {
            if (action.payload) {
                state.jobs = action.payload.jobs_results;
                state.chips = action.payload.chips;
                state.searchMeta = action.payload.search_metadata;
                state.searchParams = action.payload.search_parameters;
            }
            state.loading = false;
            state.error = null;
        },
        [search.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [unsave.pending.type]: (state) => {
            state.loading = true;
        },
        [unsave.fulfilled.type]: (state, action) => {
            if (action.payload) {
                state.savedJobIds = [...state.savedJobIds].filter((id) => id != action.payload);
                state.savedJobs = [...state.savedJobs].filter((job : any) => job.jobId != action.payload);
            }
            state.loading = false;
            state.error = null;
        },
        [unsave.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [save.pending.type]: (state) => {
            state.loading = true;
        },
        [save.fulfilled.type]: (state, action) => {
            if (action.payload) {
                state.savedJobs.push(action.payload);
                state.savedJobIds.push(action.payload.jobId);
            }
            state.loading = false;
            state.error = null;
        },
        [save.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [saved.pending.type]: (state) => {
            state.loading = true;
        },
        [saved.fulfilled.type]: (state, action) => {
            if (action.payload) {
                let ids : string[] = [];
                action.payload.forEach(job => {
                    ids.push(job.jobId);
                });
                state.savedJobIds = ids;
            }
            state.savedJobs = action.payload;
            state.loading = false;
            state.error = null;
        },
        [saved.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    }});

export const { updateSelectedIndex, updateFilterBy, updateSearchTerm, updateSortBy }  = jobSlice.actions;
export const jobReducer = jobSlice.reducer;