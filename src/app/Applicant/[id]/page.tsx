import Image from "next/image";

export default async function ApplicantDashboard({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  const jobs = data.job_postings;
  const job = jobs.find((j: any) => j.id == id);

  return (
    <div className="grid  grid-cols-[3fr_1fr] gap-4 p-[82px]">
      <div className=" py-[46px]">
        <div className="">
          <h1 className="font-bold text-[24px]">Description</h1>
          <p className="text-[#25324B] font-light mt-3 "> {job.description}</p>
        </div>
        <div className="mt-14">
          <h1 className="font-bold text-[24px]">Responsibilities</h1>
          {job.responsibilities.map((res: any) => (
            <div className="flex gap-[10px]">
              <Image src="/Icon.svg" alt="icon" width={20} height={20} />
              <h3 className="mt-2 font-extralight">{res}</h3>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <h1 className="font-bold text-[24px]">Ideal Candidate we want</h1>
          <div className="mx-4 my-4">
            <ol className="list-disc font-light">
              <li key={id} className="mt-4">
                <span className="font-semibold">Age : </span>{" "}
                {job.ideal_candidate.age}
              </li>
              <li key={id} className="mt-1">
                <span className="font-semibold">Gender : </span>
                {job.ideal_candidate.gender}
              </li>
              <div>
                {job.ideal_candidate.traits.map((trait: any) => (
                  <li className="mt-1" key={id}>
                    <span className="font-semibold">{trait.split(":")[0]}</span>{" "}
                    {trait.split(":")[1]}
                  </li>
                ))}
              </div>
            </ol>
          </div>
        </div>

        <div className="mt-14">
          <h1 className="font-bold text-[24px] mb-3">When & Where</h1>
          <div className="flex gap-4">
            <Image
              src="/Frame 1189.svg"
              alt="location icon"
              width={40}
              height={40}
            />
            <p className="font-extralight">{job.when_where}</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className="font-bold text-[24px] mb-3">About</h1>
        </div>
        <div className="flex">
          <Image src="/Frame 1.svg" alt="icon" width={40} height={40} />
          <div className="ml-4">
            <p className="font-extralight text-[#515B6F]">Posted On</p>
            <p>{job.about.posted_on}</p>
          </div>
        </div>
        <div className="flex mt-4">
          <Image src="/Frame 2.svg" alt="icon" width={40} height={40} />
          <div className="ml-4">
            <p className="font-extralight text-[#515B6F]">Deadline</p>
            <p>{job.about.deadline}</p>
          </div>
        </div>
        <div className="flex mt-4">
          <Image src="/Frame 1189.svg" alt="icon" width={40} height={40} />
          <div className="ml-4">
            <p className="font-extralight text-[#515B6F]">Location</p>
            <p>{job.about.location}</p>
          </div>
        </div>
        <div className="flex mt-4">
          <Image src="/Frame 4.svg" alt="icon" width={40} height={40} />
          <div className="ml-4">
            <p className="font-extralight text-[#515B6F]">Start Date</p>
            <p>{job.about.start_date}</p>
          </div>
        </div>
        <div className="flex mt-4">
          <Image src="/Frame 5.svg" alt="icon" width={40} height={40} />
          <div className="ml-4">
            <p className="font-extralight text-[#515B6F]">End Date</p>
            <p>{job.about.end_date}</p>
          </div>
        </div>
        <div className="border-b-1 mt-6 border-[#D6DDEB]"></div>

        <div className="mt-4">
          <h1 className="font-bold text-[24px] mb-3">Catagories</h1>
          <div className="flex">
            {job.about.categories.map((cat: any) => (
              <button
                key={id}
                className="bg-[#EB85331A] text-[#ed9e0b] py-[6px] px-[10px] mr-2 rounded-2xl"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h1 className="font-bold text-[24px] mb-3">Required Skills</h1>
          <div className="grid grid-cols-[2fr_1fr]">
            {job.about.required_skills.map((cat: any) => (
              <button
                key={id}
                className="bg-[#F8F8FD] text-[#4640DE] py-[6px] px-[10px] mr-2 my-2"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
