import Link from 'next/link';
import Hero from "@/components/hero"
import homeImg from 'public/home.jpg'

export default function Home() {
  return (



<Hero imgData={homeImg} imgAlt='Home Page Image' title='Display Home Page Image'></Hero>



  )
}
