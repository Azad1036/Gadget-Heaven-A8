import bannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative bg-[#9538E2]">
      {/* Banner Text */}
      <div className="text-white text-center ">
        <h1 className="font-bold text-5xl  max-w-5xl mx-auto mb-6 mt-10">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="max-w-3xl mx-auto text-[#FFFFFFCC]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn btn-outline mt-8 mb-48">Shop Now</button>
      </div>
      {/* Banner Image */}
      <div className=" flex justify-center">
        <div className=" max-w-xl border-2 border-white p-3 bg-[#FFFFFF4D] rounded-2xl absolute -bottom-60">
          <img className="rounded-xl" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
