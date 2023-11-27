import Link from 'next/link';


export default function Header() {
    return (
        <div className='w-full absolute text-white z-10'>
            <nav className ="container relative flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href="/">Home</Link>
      <Link href="/scale">Scale Page</Link>
      <Link href="/performace">Performance Page</Link>
      <Link href="reliability">Reliability Page</Link>
            </nav>
        </div>
    
    )
  }
  