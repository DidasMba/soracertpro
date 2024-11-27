import Image from "next/image";

const teamMembers = [
  {
    name: "John Carter",
    role: "CEO & Co-Founder",
    imageSrc: "/Image Placeholder.png",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    imageSrc: "/Image Placeholder 2.png",
  },
  {
    name: "Michael Smith",
    role: "Lead Developer",
    imageSrc: "/Image Placeholder 3.png",
  },
  {
    name: "Sarah Brown",
    role: "Project Manager",
    imageSrc: "/Image Placeholder 4.png",
  },
  {
    name: "Emily Davis",
    role: "Marketing Director",
    imageSrc: "/Image Placeholder 5.png",
  },
  {
    name: "James Wilson",
    role: "UX/UI Designer",
    imageSrc: "/Image Placeholder 6.png",
  },
];

const MeetOurTeam = () => {
  return (
    <>
      <section id="faq-2" className="faq-2 section py-5 max-w-full">
        <div className="text-center container" data-aos="fade-up">
          <h2 className="text-4xl font-bold leading-tight text-[#05264f] py-2">
            Meet our team members
          </h2>

          <div className="mt-4 max-w-2xl mx-auto text-xl py-2 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
            gravida malesuada quam commodo id integer nam.
          </div>
        </div>
        <div className="max-w-6xl mx-auto py-5" data-aos="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5">
            {teamMembers.map((member, index) => (
              <div className="p-3" key={index}>
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-start py-[21.9px] px-5 z-[1]"
                    style={{ borderRadius: "20px" }}
                  >
                    <Image
                      width={100}
                      height={100}
                      className="h-[100.2px] w-[100.2px]"
                      loading="lazy"
                      alt={member.name}
                      style={{ borderRadius: "100px", objectFit: "cover" }}
                      src={member.imageSrc}
                    />
                  </div>

                  <div className="self-stretch flex flex-col items-center justify-center gap-[8px] mx-auto">
                    <h2
                      className="sm:text-2xl text-xl leading-[38px] font-bold items-center text-[#05264f] justify-center"
                      style={{ textDecoration: "uppercase" }}
                    >
                      {member.name}
                    </h2>
                    <div className="items-center justify-center text-center font-extralight">
                      {member.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetOurTeam;
