import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[96vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          A marketplace for diabetics to sell excess supplies to each other.
        </h1>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <div className="relative w-full h-full overflow-hidden">
        <img src="/blues.webp" className="absolute top-0 left-0 w-full h-full object-cover object-center bg-repeat" />
      </div>
    </div>
  )
}

export default Hero
