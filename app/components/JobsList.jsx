"use client";
import { useEffect, useState } from "react";
import jobsImage from '../../public/jobs.jpg'
import Image from "next/image";
import Link from "next/link";

export default function JobsList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/api/jobs")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  // const jobs = await getJobs();

  return (
    <div >
      {/* {jobs.map(job => (
        <div key={job._id} className="border p-4 rounded shadow">
          <h3 className="font-bold text-lg">{job.title}</h3>
          <p>{job.company} - {job.location}</p>
          {job.salary && <p>Salary: {job.salary}</p>}
        </div>
      ))} */}


      {/* ------------------------------------------------------------------ */}


      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">


          {/* Card */}
          {jobs.map(job => (
            <div key={job._id} className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl">
              <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">

                <Image src={jobsImage} alt={job.title} placeholder="blur" className="object-cover w-full h-full rounded-tl-xl rounded-tr-xl" />

              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-yellow-500">
                  {job.company}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {job.title}
                </h3>
                <p className="mt-3 text-gray-500">
                  {job.description.length > 100 ? job.description.slice(0, 100) + "..." : job.description}
                </p>
              </div>
              <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
                <Link className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  View Details
                </Link>
              </div>
            </div>
          ))}

          {/* End Card */}

        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}


    </div>
  );
}
