import React ,{useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../SideBar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from "./HeroElements";

const Hero = () => {
    const [isOpen , setIsopen] = useState(false)
    const Toggle = ()=>{
        setIsopen(!isOpen)
    }
    return (
       
          <HeroContainer>
              <Navbar Toggle={Toggle} />
              <Sidebar isOpen={isOpen} Toggle={Toggle} />
              <HeroContent>
                  <HeroItems>
                      <HeroH1>Greatest pizza Ever</HeroH1>
                      <HeroP>Ready in 60 Seconds</HeroP>
                      <HeroBtn>Plase Order</HeroBtn>
                  </HeroItems>
              </HeroContent>
              
          </HeroContainer>
            
        
    )
}

export default Hero
