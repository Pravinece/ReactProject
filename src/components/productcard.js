import '@fortawesome/fontawesome-free/css/all.css';
import React, { useState } from 'react';
import i3 from '../turfimg/image3.jpg';
import Headers from './header';
export default function ProductCard({ place}) {
    const turf = {
        koyambedu: [
            { name: "VRTurf", location: "3rd street", ratings: 3.5, prize: 600,images:'i3'},
            { name: "RohiniTurf", location: "2rd street", ratings: 2.5, prize: 600 ,images:'./turfimg/image2.jpg'},
            { name: "ForumTurf", location: "1rd street", ratings: 2.0, prize: 800 ,images:'./turfimg/image3.jpg'},
            { name: "MarinaTurf", location: "5th street", ratings: 4.6, prize: 800 ,images:'./turfimg/image4.avif'}
        ],
        tambaram: [
            { name: "SachinTurf", location: "3rd street", ratings: 2.8, prize: 600,images:'./image/image8.jpeg'},
            { name: "KapilTurf", location: "2rd street", ratings: 4.0, prize: 500 ,images:'./image/image6.jpeg'},
            { name: "DhoniTurf", location: "1rd street", ratings: 3.5, prize: 600,images:'./image/image7.jpeg' },
            {name: "SachinTurf", location: "3rd street", ratings: 2.8, prize: 600,images:'./image/image8.jpeg'}
        ],
        Ariyalur: [
            { name: "NehruTurf", location: "3rd street", ratings: 2.0, prize: 600,images:'./image/image8.jpeg'},
            { name: "KamarajTurf", location: "2rd street", ratings:4.0, prize: 600,images:'./image/image6.jpeg'},
            { name: "IndraGTurf", location: "1rd street", ratings: 3.5, prize: 800 ,images:'./image/image7.jpeg'},
            { name: "KamarajTurf", location: "2rd street", ratings:4.0, prize: 600,images:'./image/image6.jpeg'}
        ],
        Perambalur: [
            { name: "BatmanTurf", location: "3rd street", ratings: 3.7, prize: 600 ,images:'./image/image1.jpg'},
            { name: "KamarajTurf", location: "2rd street", ratings:4.0, prize: 600,images:'./image/image6.jpeg'},
            { name: "ThorTurf", location: "1rd street", ratings: 4.8, prize: 600 ,images:'./image/image4.avif'},
            { name: "KamarajTurf", location: "2rd street", ratings:4.0, prize: 600,images:'./image/image6.jpeg'}
        ],
        Mannai: [
            { name: "MessiTurf", location: "3rd street", ratings: 2.5, prize: 600,images:'./image/image4.avif'},
            { name: "RonaldoTurf", location: "2rd street", ratings:4.6, prize: 600,images:'./image/image1.jpg' },
            { name: "NeymarTurf", location: "1rd street", ratings: 3.8, prize: 800,images:'./image/image3.jpg' },
            { name: "RonaldoTurf", location: "2rd street", ratings:4.6, prize: 600,images:'./image/image1.jpg' }
        ],
        Needamangalam: [
            { name: "JosbutlerTurf", location: "3rd street", ratings: 2.9, prize: 600 ,images:'./image/image6.jpeg'},
            { name: "JoeRootTurf", location: "2rd street", ratings: 3.5, prize: 500,images:'./image/image2.jpg' },
            { name: "BMclumTurf", location: "1rd street", ratings: 4.8, prize: 600,images:'./image/image7.jpeg' }
        ]
    };
    const [slotCount, setSlotCount] = useState(0);
    const incrementSlot=()=>{

            setSlotCount(slotCount + 1);
            <Headers no={slotCount}/>
        };

    const handleturf = (prop) => {
        const turfs = turf[prop];
        return (<div className='row'>
         {turfs.map((turf, index) => (
            <div className='col'>
            <div className='card'>
            <div key={index}>
                <img className='image' src={i3}></img>
                <h3>{turf.name}</h3>
                <p>Location: {turf.location}</p>
                <div className="ratings mt-auto">
                    <div className="rating-outer">
                    <div className="rating-inner" style={{width : `${turf.ratings/5 * 100}%`}}></div>
                    </div>
                </div>
                <p>Prize: {turf.prize}</p>
                <div className='btn'>
                <button onClick={incrementSlot} >Book Slot</button>
                <button>cancel</button>
                </div>
            </div>
            </div>
        </div>
        ))}
        </div>)
    };

    const [displayTurf, setDisplayTurf] = useState(null);

    const handleClick = () => {
        setDisplayTurf(handleturf(place));
    };

    return (
        <div>
            {/* <h1>{place}</h1> */}
            <button className='button' onClick={handleClick}>{place}</button>
            {displayTurf}
        </div>
    );
}







