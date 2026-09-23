import Images from "../assets/Images";

const OurRooms = () => {
  const Rooms = [
    {
      title: "The Grand Suite",
      image: Images.TheGrandSuite,
      price: 125,
      desc: "A spacious corner suite with panoramic views, a private lounge, and a deep soaking tub",
      path: "/rooms",
    },
    {
      title: "The Grand Suite",
      image: Images.TheGrandSuite,
      price: 125,
      desc: "A spacious corner suite with panoramic views, a private lounge, and a deep soaking tub",
      path: "/rooms",
    },
    {
      title: "The Grand Suite",
      image: Images.TheGrandSuite,
      price: 125,
      desc: "A spacious corner suite with panoramic views, a private lounge, and a deep soaking tub",
      path: "/rooms",
    },
  ];

  return (
    <section className="px-5 md:px-10 py-5 md:py-15 bg-[#f9f8f6] dark:bg-gray-900 text-black dark:text-white w-full min-h-0 md:min-h-fit">
      <div className="max-w-360 mx-auto hidden md:block">
        <p className="font-body font-bold text-base leading-relaxed text-[#B5935B]">
          Accomodation
        </p>
        <div className="flex justify-between items-center">
          <h2 className="font-heading font-light text-5xl leading-tight tracking-wide mb-6">
            Our Signature Rooms
          </h2>
          <p className="max-w-md font-body leading-relaxed text-base">
            Each room is designed with warmth and intentions, blending modern
            comfort with timeless elegance.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {Rooms.map((r) => (
            <div key={r} className=" p-3">
              <img src={r.image} alt="The grand suite room" className="w-full h-70"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurRooms;
