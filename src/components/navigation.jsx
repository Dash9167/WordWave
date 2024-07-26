const Navigation =(props) =>
    {
       
        return(
    
            <div className="menu-bar"  >
            <nav>
              <div className="logo">
                <h1>Word<span>Wave</span></h1>
              </div>
              <ul>
                <li href="#">Home</li>
               
      
              </ul>
              <div className="form-check form-switch mode">
  <input className="form-check-input " onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.statusmode} Mode</label>
</div>
            </nav>
             </div>
        );
    }
    export default Navigation;