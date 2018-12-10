import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


class Dropdown extends React.Component {
  render() {
    return (
      <div className="nav-container">
      
      <div className="brand-container">
        <h2 className="brand">
        <span className="brandBold">GOLDEN</span>HOCKEY
        </h2>
      </div>
      
      <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          GOLDEN JERSEY
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" >
      <div className="card-body gcard">
          <Link to='/auth/register' ><div className="g-menu"><a href="#" >REGISTER</a></div></Link>
          <Link to='/teams'><div className="g-menu"><a href="#" >TEAMS</a></div></Link>
          <Link to='/teams/standings'><div className="g-menu"><a href="#" >STANDINGS</a></div></Link>
          <Link to="/players"><div className="g-menu"><a href="#" >STATS</a></div></Link>
          <div className="g-menu"><a href="#" >THE GOLDEN JERSEY</a></div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          STATE CHAMPIONSHIP
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" >
      <div className="card-body scard">
      <div className="g-menu"><a href="#" >REGISTER</a></div>
          <div className="s-menu"><a href="#" >SCHEDULE</a></div>
          <div className="s-menu"><a href="#" >STATS</a></div>
          <div className="s-menu"><a href="#" >RULES</a></div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          CONTACT
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" >
      <div className="card-body ccard">
      <div className="c-menu"><a href="#" >ABOUT</a></div>
     <div className="c-menu"><a href="#" >SPONSOR</a></div>
      </div>
    </div>
  </div>
</div>

<div className="card-header" id="shop-btn">
      <h5 className="mb-0">
        <button className="btn btn-link" type="button" >
          SHOP
        </button>
      </h5>
    </div>

<p className="footer">&copy; 2018 GOLDEN HOCKEY, LLC</p>

</div>

    )
}
}

export default Dropdown;