import { useState } from "react"

function ImageSlider(){
    const [index, setIndex] = useState(0)

    const handleNextImage =() =>{
        if(index < images.length - 1){
            setIndex(index + 1)
        }
        
    }

    const handlePrevImage = () =>{
        if(index > 0){
            setIndex(index - 1)
        }
        
    }

    const images =[
        "https://img.freepik.com/free-photo/dreamy-rainbow-countryside_23-2151625074.jpg?t=st=1720857158~exp=1720860758~hmac=72aa5c6e8687e34a8fed60ee87996f3c153ce0d51418bcdafb43f0c7be3cad6d&w=360",
        
        "https://img.freepik.com/free-photo/close-up-cocktail-glass_23-2151596005.jpg?t=st=1720857230~exp=1720860830~hmac=d518cd8145a45c2afb87598f83e526ba74beea5c2f3dd5592eb63d88d64dc47c&w=360",

        "https://img.freepik.com/free-photo/cinematic-style-portrait-man-with-mystical-surreal-unicorn-animal_23-2151586629.jpg?t=st=1720859168~exp=1720862768~hmac=79db751430654348f6f6b8d9aef307b4d2b8752b17ae830d03214f78d9aad348&w=360"
    ]
    return <div className="text-center">
        <div className="flex justify-center">
     <img className="bg-orange-400 sm:w-[900px] w-full object-cover h-[390px] m-20" src={images[index]}/>
    </div>
    <button onClick={handleNextImage} className="bg-secondaryColor px-16 py-4 m-5 text-white">Next</button>
    <button onClick={handlePrevImage} className="bg-secondaryColor px-16 py-4 m-5 text-white">Prev</button>
    </div> 
}

export default ImageSlider