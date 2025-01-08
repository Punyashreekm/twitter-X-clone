import Link from "next/link";
import Image from "@/components/Image";

const UserPage = () => {
    return(
        <div className="">
           {/* PROFILE TITLE */}
           <div className=" flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
            <Link href="/">
             <Image path="public/icons/back.svg" alt="back" w={24} h={24}/>
            </Link>
            <h1 className="font-bold text-lg">Lama Dev</h1>
           </div>
           {/* INFO */}
           <div className="">
             {/* COVER & AVATAR CONTAINER */}
             <div className="relative w-full">
                {/* COVER */}
                <div className="w-full aspect-[3/1] relative">
                   <Image path="public/general/cover.jpg" alt="" h={200} w={600} tr={true}/>
                </div>
                {/* AVATAR */}
                <div className="w-1/6 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
                   <Image path="public/general/avatar.png" alt="" h={100} w={100} tr={true}/>
                </div>
             </div>
             <div className="flex w-full items-center justify-end gap-2 p-2">
                <div className=" w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                    <Image path="public/icons/more.svg" alt="more" w={20} h={20} />
                </div>
                <div className=" w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                    <Image path="public/icons/more.svg" alt="more" w={20} h={20} />
                </div>
                <div className=" w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                    <Image path="public/icons/more.svg" alt="more" w={20} h={20} />
                </div>
             </div>
           </div>
        </div>
    )
}

export default UserPage;
