import Image from "./Image"

const Share = () => {
  return (
    <div className="p-4 flex gap-4">
      {/* AVATAR */}
      <div className="relative h-10 w-10 rounded-full overflow-hidden">
        < Image path="public/general/avatar.png" alt="" w={100} h={100}/>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <input type="text" placeholder="What is happening?!" className="bg-transparent outline-none placeholder:text-textGray text-xl" />
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <Image path="public/icons/image.svg" alt="" w={20} h={20} className="cursor-pointer"/>
            <Image path="public/icons/gif.svg" alt="" w={20} h={20} className="cursor-pointer"/>
            <Image path="public/icons/poll.svg" alt="" w={20} h={20} className="cursor-pointer"/>
            <Image path="public/icons/emoji.svg" alt="" w={20} h={20} className="cursor-pointer"/>
            <Image path="public/icons/schedule.svg" alt="" w={20} h={20} className="cursor-pointer"/>
            <Image path="public/icons/location.svg" alt="" w={20} h={20} className="cursor-pointer"/>
          </div>
          <button className="bg-white text-black font-bold rounded-full px-4 py-2">Post</button>
        </div>
      </div>
    </div>
  )
}

export default Share