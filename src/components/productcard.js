// import '@fortawesome/fontawesome-free/css/all.css';
import React, { useState } from 'react';
import image1 from './image/image1.jpg';
export default function ProductCard({ place }) {
    const turf = {
        koyambedu: [
            { name: "VRTurf", location: "3rd street", ratings: 3.5, prize: 600,images:'./image/image1.jpg' },
            { name: "RohiniTurf", location: "2rd street", ratings: 2.5, prize: 600 ,images:'./image/image2.jpg'},
            { name: "ForumTurf", location: "1rd street", ratings: 2.0, prize: 800 ,images:'./image/image3.jpg'},
            { name: "MarinaTurf", location: "5th street", ratings: 4.6, prize: 800 ,images:'./image/image4.avif'}
        ],
        tambaram: [
            { name: "SachinTurf", location: "3rd street", ratings: 2.8, prize: 600,images:'./image/image8.jpeg'},
            { name: "KapilTurf", location: "2rd street", ratings: 4.0, prize: 500 ,images:'./image/image6.jpeg'},
            { name: "DhoniTurf", location: "1rd street", ratings: 3.5, prize: 600,images:'./image/image7.jpeg' }
        ],
        Ariyalur: [
            { name: "NehruTurf", location: "3rd street", ratings: 2.0, prize: 600,images:'./image/image8.jpeg'},
            { name: "KamarajTurf", location: "2rd street", ratings:4.0, prize: 600,images:'./image/image6.jpeg'},
            { name: "IndraGTurf", location: "1rd street", ratings: 3.5, prize: 800 ,images:'./image/image7.jpeg'}
        ],
        Perambalur: [
            { name: "BatmanTurf", location: "3rd street", ratings: 3.7, prize: 600 ,images:'./image/image1.jpg'},
            { name: "IronmanTurf", location: "2rd street", ratings: 4.0, prize: 500,images:'./image/image2.jpg' },
            { name: "ThorTurf", location: "1rd street", ratings: 4.8, prize: 600 ,images:'./image/image4.avif'}
        ],
        Mannai: [
            { name: "MessiTurf", location: "3rd street", ratings: 2.5, prize: 600,images:'./image/image4.avif'},
            { name: "RonaldoTurf", location: "2rd street", ratings:4.6, prize: 600,images:'./image/image1.jpg' },
            { name: "NeymarTurf", location: "1rd street", ratings: 3.8, prize: 800,images:'./image/image3.jpg' }
        ],
        Needamangalam: [
            { name: "JosbutlerTurf", location: "3rd street", ratings: 2.9, prize: 600 ,images:'./image/image6.jpeg'},
            { name: "JoeRootTurf", location: "2rd street", ratings: 3.5, prize: 500,images:'./image/image2.jpg' },
            { name: "BMclumTurf", location: "1rd street", ratings: 4.8, prize: 600,images:'./image/image7.jpeg' }
        ]
    };

    const handleturf = (prop) => {
        const turfs = turf[prop];
        return (<div className='row'>
         {turfs.map((turf, index) => (
            <div className='col'>
            <div className='card'>
            <div key={index}>
                <img className='image' src={turf.images}></img>
                <h3>{turf.name}</h3>
                <p>Location: {turf.location}</p>
                <div className="ratings mt-auto">
                    <div className="rating-outer">
                    <div className="rating-inner" style={{width : `${turf.ratings/5 * 100}%`}}></div>
                    </div>
                </div>
                <p>Prize: {turf.prize}</p>
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







