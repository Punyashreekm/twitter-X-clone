import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";

const Post = () => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
        {/* POST TYPE */}
        <div className="flex items-center gap-2 text-sm text-textGray mt-2  mb-1 from-bold">
            icon
            <span>Lama Dev reposted</span>
        </div>
        {/* POST CONTENT */}
        <div className="flex gap-4">
          {/* AVATAR */}
            <div className=" relative w-10 h-10 rounded-full overflow-hidden">
                 <Image path="public/general/avatar.png" alt="" h={100} w={100} tr={true}/>
            </div>
            {/* CONTENT */}
            <div className="flex-1 flex flex-col gap-2">
              {/* TOP */}
              <div className=" flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-md font-bold">Lama Dev</h1>
                  <span className="text-textGray" >@LamaWewDev</span>
                  <span className="text-textGray">1 day ago</span>
                </div>
                <PostInfo/>
              </div>
              {/* TEXT AND MEDIA */}
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nam a tempora, nisi dolor consectetur fugit perferendis 
                reiciendis iusto consequatur alias dolore! Accusamus 
                laboriosam consequuntur esse commodi, in optio quisquam 
                rem!
              </p>
              <Image path="public/general/post.jpeg" alt="" h={600} w={600}/>
              <PostInteractions/>
            </div>
        </div>
    </div>
  )
}

export default Post;