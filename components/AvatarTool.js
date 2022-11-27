import Image from "next/image"

function AvatarTool({ url, className }) {
  return (
    <Image
      className={`rounded-full h-10 w-10 object-cover transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt="User_Avatar"
      width={10}
      height={10}
      loading="lazy"
    />
  )
}

export default AvatarTool
