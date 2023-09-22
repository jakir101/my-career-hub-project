import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo,job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex gap-4">
                        <h2 className="text-2xl flex gap-3 items-center my-3">
                            <MdLocationOn></MdLocationOn>
                            {location}
                        </h2>
                        <h2 className="text-2xl flex gap-3 items-center "><AiOutlineDollar></AiOutlineDollar>{salary}</h2>
                    </div>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-green-400 text-green-400 mr-4">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-green-400 text-green-400 mr-4">{job_type}</button>
                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;