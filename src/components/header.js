import logo from './logoturf.png';
export default function Headers(){
    return(
        <header>   
            <>
            <div className="topnav">
                <img src={logo}></img>
              <div className="topnav-right">
              <a href="#about">About</a>
                <a href="#signup">Sign Up</a>
                <a href="#menu">Menu</a>
                <a className="active"href="#home">Home</a>

              </div>
              </div>
              </>
        </header>
    )
}