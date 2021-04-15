import React,{useState} from 'react'
import Home from './home'


/**
* @author
* @function Layout
**/

const Layout = (props) => {
  const [color,setColor]=useState("blue");
  const [font,setFont]=useState("'Kalam', cursive");
  console.log(color);
  console.log(font)
  return(
    <div>   
      <div className=" container-fluid header">
           <h3>Text-to-Png</h3>
      </div>
      <div style={{marginTop:"4%"}} className="row">
        <div className="col-xlg-8 offset-xlg-2 col-lg-8 offset-lg-2 col-md-9 offset-md-1">
          <div className="row row-cols-sm-1 row-cols-md-2" >
            {/* <form  className="form-inline"> */}
              <div className="col col-sm-5 col-md-4">
                <div className="form-group">
                  <label >Choose color</label>
                  <select onChange={(e)=>setColor(e.target.value)}className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option defaultValue value="#00008B">Blue</option>
                    <option value="#ff0000">Red</option>
                    <option value="black">Black</option>
                  </select>
                </div>
              </div>
              <div className="col col col-sm-5 col-md-4">
                <div style={{marginLeft:"0%"}} className="form-group">
                  <label >Choose Font</label>
                  <select onChange={(e)=>setFont(e.target.value)}className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option defaultValue value="'Kalam', cursive" style={{fontFamily:"'Kalam', cursive"}}>Kalam</option>
                    <option value="'Marck Script', cursive" style={{fontFamily: "'Marck Script', cursive"}}>Marck Script</option>
                    <option style={{fontFamily: "'Caveat', cursive"}}value="'Architects Daughter', cursive">Architects Daughter</option>
                  </select>
                </div>
              </div>
            {/* </form> */}
          </div>
           
          <div style={{marginTop:"5%"}} >
            <Home color={color} font={font}/>
            <div className="info">
              <p><strong>Note</strong> Press Enter at the line in text box if the line overlaps occurs in the image </p>
      </div>
          </div>
        </div>
      
      </div>
      <div align="right">
        Developed By
        <h4 className="blockquote-footer">Saicharan Kukudala</h4>
      </div>

    </div>
   )

 }

export default Layout