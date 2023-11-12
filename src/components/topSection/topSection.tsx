import {motion} from 'framer-motion'

import { BsPlaystation, BsSteam, BsXbox } from "react-icons/bs"
import {SlArrowDown} from 'react-icons/sl'

export default function TopSection(){
return<section id="topSection">
    <h1>ELDRITCH GROVE</h1>
    <div className='content'>

    <section id="platformsSection">
        <BsPlaystation size={60} style={{opacity:.4}}/>
        <BsXbox size={60} style={{opacity:.4}}/>
        <BsSteam size={60} style={{opacity:.4}}/>
    </section>
    <div className="arrow-container">
        <div id='bounce'>
        <SlArrowDown size={80}/>
        </div>
    </div>
            </div>
</section>
}

