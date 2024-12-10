/** @format */

type Department = {
    id: number;
    name: string;
};

type Team = {
    id: number;
    name: string;
};

export type TJob = {
    id: number;
    slug: string;
    title: string;
    description: string;
    requirements: string;
    responsibilities: string;
    salaryRange: string;
    location: string;
    jobType: string;
    company: string;
    benefits: string;
    desirable: string;
    experienceLevel: string;
    postedAt: string;
    deadline: string;
    departmentId: number;
    teamId: number;
    createdBy: number;
    department: Department;
    team: Team;
};
