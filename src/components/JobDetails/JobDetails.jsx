import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    return (
        <div>
            <h2>JObs Details Of : {id}</h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border grid md:col-span-3">
                    <h2 className="text-2xl">Details Coming Here</h2>
                </div>
                <div className="border ">
                    <h2 className="text-2xl">side things</h2>
                    <button className="btn btn-primary">Apply now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;