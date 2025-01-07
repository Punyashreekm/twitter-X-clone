import Image from "./Image"

const Search = () => {
  return (
    <div className="">
        <Image path="public/icons/explore.svg" alt="search" w={16} h={16}/>
        <input type="text" />
    </div>
  )
}

export default Search