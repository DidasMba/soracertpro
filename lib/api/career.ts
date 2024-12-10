/** @format */

import { TJob } from "@/types/career";
import { API_URL } from "./baseUrl";

export const fetchAllJob = async (
    level: string,
    department: string,
    jobType: string
) => {
    try {
        const jobs: { status: string; message: string; data: Array<TJob> } =
            await fetch(
                `${API_URL}/job/all/filter?jobType=${jobType}&department=${department}&experienceLevel=${level}&teamName=all`
            ).then((res) => res.json());
        return jobs;
    } catch (error) {
        console.log(error);
    }
};

export const getJobBySlug = async (slug: string) => {
    try {
        const job: { status: string; message: string; data: TJob } =
            await fetch(`${API_URL}/job/slug/${slug}`).then((res) =>
                res.json()
            );
        return job;
    } catch (error) {
        console.log(error);
    }
};
