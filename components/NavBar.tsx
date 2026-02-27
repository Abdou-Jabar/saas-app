import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'
const NavBar = () => {
  const ali = 'aleee'
  console.log(ali)
  return (
    <div className="navbar">
      <Link href="/">
        <div className='flex items-center gap-2.5 cursor-pointee'>
          <Image src="/images/logo.svg" alt="logo" width={46} height={44}/>

        </div>
      </Link>
      <div className='flex items-center gap-8'>
        <NavItems />
      </div>
    </div>
  )
}
export default NavBar
