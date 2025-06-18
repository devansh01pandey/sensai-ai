import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return(
    <section className="w-full pt-36 pb-10 md:pt-48">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p>
            Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
          </p>
        </div>
        <div>
          <Link href='/dashboard'>
            <Button size="lg" className='px-8'>Get Started</Button>
          </Link>
          <Link href="https://www.youtube.com/watch?v=UbXpRv5ApKA&t=2961s&ab_channel=RoadsideCoder">
            <Button size="lg" className='px-8' variant='outline'>Demo Video</Button>
          </Link>
        </div>
        <div>
          <div>
            <Image
              src={"/banner.jpeg"}
              width={1280}
              height={720}
              alt="Banner Sensai"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>

  )
}
export default HeroSection;