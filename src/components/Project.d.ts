import React from 'react';
interface Project {
    title: string;
    description: string;
    icon: React.ReactNode;
    technologies: string[];
    link: string;
    github: string;
}
declare const Project: ({ theme }: {
    theme: string;
}) => import("react/jsx-runtime").JSX.Element;
export default Project;
