import logo from "../../public/portfolioLogo.png";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image
          src={logo}
          alt="logo"
          loading="eager"
          priority
          height={3000}
          width={3000}
        />
        </>
    )
}
export default HeroImage