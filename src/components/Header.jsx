import { useState } from "react"
function Header (){
    const [isOpen, setIsOpen] = useState(false)
    
// handle open menu
const Openmenu = () =>{
    setIsOpen(true)
}

// handle close
const  handleClose = () =>{
    setIsOpen(false)
}
    return <div className="bg-primaryColor items-center sm:flex justify-between px-10 py-4">
        <h1 className=" sm:text-5xl text-4xl font-popin"> <span className="text-red-400">Coffee </span>shop</h1>
        <i style={{display: isOpen == true ? "none" : ""}} onClick={Openmenu} class="fa-solid fa-bars text-4xl sm:hidden absolute right-4 top-4"></i>
        <i onClick={handleClose} style={{display: isOpen == true ? "flex" : ""}} class="fa-solid fa-xmark text-4xl hidden absolute right-4 top-4"></i>
        <ul style={{ display: isOpen == true ? "flex" : ""}} className="hidden sm:flex flex flex-col sm:flex-row text-3xl sm:gap-10 gap-4 text-secondaryColor font-popin">
            <li>Home</li> 
            <li>About Us</li>
            <li>Contact</li>
            <li>Service</li>
        </ul>
        <button style={{ display: isOpen == true ? "flex" : ""}} className="bg-white text-orange-500  hidden sm:flex px-6 py-3 rounded-full">Register</button>
    </div>
}

export default Header