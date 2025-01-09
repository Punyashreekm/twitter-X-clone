"use client";
import Image from "@/components/Image";

const PostModal = () => {
  return (
    <div className="absolute w-full h-screen top-0 left-0  z-20 bg-[#293139a6] flex justify-center ">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
        {/* TOP */}
        <div className="">
          <div className="">X</div>
          <div className="">Drafts</div>
        </div>
        {/* CENTER */}
        <div className="">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image path="public/general/avatar.png " alt="Lama Dev" w={100} h={100} tr={true} />
          </div>
          <input type="text" placeholder="What is Happening?! " />
        </div>
        {/* BOTTOM */}
        <div className="">
          <div className=""></div>
          <button>Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
