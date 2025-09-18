import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="px-[123px] py-[62px]">
      <div className="flex justify-between mt-10 mx-16">
        <div>
          <h1 className="font-[1000] text-[32px] ">Opportunities</h1>
          <h3 className="font-[400] text-[16px] text-[#7C8493]">
            Showing 73 results
          </h3>
        </div>
        <div className="flex gap-3 items-center">
          <h4 className="font-[400] text-[16px] text-[#7C8493]">Sort by:</h4>
          <h4>Most relevant </h4>
          <Image
            src="/Arrow - Down 2.svg"
            alt="updown icon"
            width={16}
            height={16}
            className="rounded-2xl"
          />
        </div>
      </div>
      <Link href="http://localhost:3000/Applicant/1">
        <div className=" mt-9 ml-16 border-[1.5px] rounded-3xl border-[#c1c4c8] w-[919px] flex gap-[30px]">
          <div className="mt-[25px] ml-[30px]">
            <Image
              src="/image 2.png"
              alt="profile-image"
              width={66}
              height={59}
            />
          </div>
          <div className="mt-[25px]">
            <div className=" ">
              <h1 className="text-[#25324B] mb-[8px] font-semibold text-[20px]">
                Social Media Assistant
              </h1>
              <h3 className="text-[16px] text-[#7C8493] mb-[8px] font-light">
                Young Men Christians Association . Addis Ababa, Ethiopia
              </h3>
            </div>
            <div>
              <div className="w-[744px] text-[#25324B] h-[112px]">
                As a Social Media Assistant, you will work closely with the
                social media manager or marketing team to execute social media
                strategies and campaigns. You will be responsible for assisting
                in the creation and scheduling of engaging content, monitoring
                social media channels, and interacting with followers
              </div>
            </div>
            <div className="mb-6 flex gap-[8px]">
              <button className="py-[6px] px-[10px] bg-[#56CDAD1A] text-[#56CDAD] rounded-3xl">
                In Person
              </button>
              <div className="border-r-[1px] border-[#D6DDEB]"></div>
              <button className="py-[6px] px-[10px] border-2 text-[#FFB836] rounded-3xl">
                Education
              </button>

              <button className="w-[70px] h-[41px] border-2 text-[#4640DE] rounded-3xl">
                IT
              </button>
            </div>
          </div>
        </div>
      </Link>

      <Link href="http://localhost:3000/Applicant/2">
        <div className=" mt-9 ml-16 border-[1.5px] rounded-3xl border-[#c1c4c8] w-[919px] flex gap-[30px]">
          <div className="mt-[25px] ml-[30px]">
            <Image
              src="/image 1.png"
              alt="profile-image"
              width={66}
              height={59}
            />
          </div>
          <div className="mt-[25px]">
            <div className=" ">
              <h1 className="text-[#25324B] mb-[8px] font-semibold text-[20px]">
                Web Developer
              </h1>
              <h3 className="text-[16px] text-[#7C8493] mb-[8px] font-light">
                Tech Innovators . Addis Ababa, Ethiopia
              </h3>
            </div>
            <div>
              <div className="w-[744px] text-[#25324B] h-[112px]">
                As a Web Developer, you will be responsible for designing,
                coding, and modifying websites, from layout to function
                according to a client's specifications. You will create visually
                appealing sites that feature user-friendly design and clear
                navigation.
              </div>
            </div>
            <div className="mb-6 flex gap-[8px]">
              <button className="py-[6px] px-[10px] bg-[#56CDAD1A] text-[#56CDAD] rounded-3xl">
                In Person
              </button>
              <div className="border-r-[1px] border-[#D6DDEB]"></div>
              <button className="py-[6px] px-[10px] border-2 text-[#FFB836] rounded-3xl">
                Education
              </button>

              <button className="w-[70px] h-[41px] border-2 text-[#4640DE] rounded-3xl">
                IT
              </button>
            </div>
          </div>
        </div>
      </Link>

      <Link href="http://localhost:3000/Applicant/3">
        <div className=" mt-9 ml-16 border-[1.5px] rounded-3xl border-[#c1c4c8] w-[919px] flex gap-[30px]">
          <div className="mt-[25px] ml-[30px]">
            <Image
              src="/image-3.png"
              alt="profile-image"
              width={66}
              height={59}
            />
          </div>
          <div className="mt-[25px]">
            <div className=" ">
              <h1 className="text-[#25324B] mb-[8px] font-semibold text-[20px]">
                Graphic designer
              </h1>
              <h3 className="text-[16px] text-[#7C8493] mb-[8px] font-light">
                Creative Designs Co . Addis Ababa, Ethiopia
              </h3>
            </div>
            <div>
              <div className="w-[744px] text-[#25324B] h-[112px]">
                As a Graphic Designer, you will create visual concepts, using
                computer software or by hand, to communicate ideas that inspire,
                inform, and captivate consumers. You will develop the overall
                layout and production design for various applications such as
                advertisements, brochures, magazines, and corporate reports.
              </div>
            </div>
            <div className="mb-6 flex gap-[8px]">
              <button className="py-[6px] px-[10px] bg-[#56CDAD1A] text-[#56CDAD] rounded-3xl">
                In Person
              </button>
              <div className="border-r-[1px] border-[#D6DDEB]"></div>
              <button className="py-[6px] px-[10px] border-2 text-[#FFB836] rounded-3xl">
                Education
              </button>

              <button className="w-[70px] h-[41px] border-2 text-[#4640DE] rounded-3xl">
                IT
              </button>
            </div>
          </div>
        </div>
      </Link>

      <Link href="http://localhost:3000/Applicant/4">
        <div className=" mt-9 ml-16 border-[1.5px] rounded-3xl border-[#c1c4c8] w-[919px] flex gap-[30px]">
          <div className="mt-[25px] ml-[30px]">
            <Image
              src="/image 4.png"
              alt="profile-image"
              width={66}
              height={59}
            />
          </div>
          <div className="mt-[25px]">
            <div className=" ">
              <h1 className="text-[#25324B] mb-[8px] font-semibold text-[20px]">
                Data analyst
              </h1>
              <h3 className="text-[16px] text-[#7C8493] mb-[8px] font-light">
                Data Insights Inc . Addis Ababa, Ethiopia
              </h3>
            </div>
            <div>
              <div className="w-[744px] text-[#25324B] h-[112px]">
                As a Data Analyst, you will be responsible for analyzing data
                sets to identify trends, patterns, and insights that can help
                inform business decisions. You will work closely with different
                departments to gather and interpret data, create reports, and
                provide recommendations based on your findings.
              </div>
            </div>
            <div className="mb-6 flex gap-[8px]">
              <button className="py-[6px] px-[10px] bg-[#56CDAD1A] text-[#56CDAD] rounded-3xl">
                In Person
              </button>
              <div className="border-r-[1px] border-[#D6DDEB]"></div>
              <button className="py-[6px] px-[10px] border-2 text-[#FFB836] rounded-3xl">
                Education
              </button>

              <button className="w-[70px] h-[41px] border-2 text-[#4640DE] rounded-3xl">
                IT
              </button>
            </div>
          </div>
        </div>
      </Link>

      <Link href="http://localhost:3000/Applicant/5">
        <div className=" mt-9 ml-16 border-[1.5px] rounded-3xl border-[#c1c4c8] w-[919px] flex gap-[30px]">
          <div className="mt-[25px] ml-[30px]">
            <Image
              src="/image 1.png"
              alt="profile-image"
              width={66}
              height={59}
            />
          </div>
          <div className="mt-[25px]">
            <div className=" ">
              <h1 className="text-[#25324B] mb-[8px] font-semibold text-[20px]">
                Customer support specialist
              </h1>
              <h3 className="text-[16px] text-[#7C8493] mb-[8px] font-light">
                Customer Care Ltd . Addis Ababa, Ethiopia
              </h3>
            </div>
            <div>
              <div className="w-[744px] text-[#25324B] h-[112px]">
                As a Customer Support Specialist, you will provide
                product/services information and resolve any emerging problems
                that our customers might face with accuracy and efficiency. You
                will be patient, empathetic, and passionately communicative
              </div>
            </div>
            <div className="mb-6 flex gap-[8px]">
              <button className="py-[6px] px-[10px] bg-[#56CDAD1A] text-[#56CDAD] rounded-3xl">
                In Person
              </button>
              <div className="border-r-[1px] border-[#D6DDEB]"></div>
              <button className="py-[6px] px-[10px] border-2 text-[#FFB836] rounded-3xl">
                Education
              </button>

              <button className="w-[70px] h-[41px] border-2 text-[#4640DE] rounded-3xl">
                IT
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
