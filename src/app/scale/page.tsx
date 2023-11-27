import scaleImg from 'public/home.jpg'
import Hero from "@/components/hero"

export default function ScalePage(){
    return <div>
        <h2>sclae page</h2>
        
        
        <Hero imgData={scaleImg} imgAlt='scale page Image' title='Display scale  Image'></Hero></div>
}