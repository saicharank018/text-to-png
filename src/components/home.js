import React, { useState,useRef,useEffect } from 'react'

/**
* @author
* @function Hello
**/

const Home = (props) => {
  let  [value,setValue]=useState("Lorem Ipsum is simply dummy text");

  const canvas = useRef(null)
  const image=useRef(null);
  const download=useRef(null)
  let color=props.color;
  let font=props.font;
  //console.log(color)

    // useEffect(() => {
    //   const catImage = new Image();
    //   catImage.src = "https://www.w3schools.com/css/img_5terre.jpg"
    //   catImage.onload = () => setImage(catImage)
    // }, [])
    



function printAt( context , text, x, y, lineHeight, fitWidth)
{
    fitWidth = fitWidth || 0;
    
    if (fitWidth <= 0)
    {
         context.fillText( text, x, y );
        return;
    }
    
    for (var idx = 1; idx <= text.length; idx++)
    {
        var str = text.substr(0, idx);
        // console.log(str, context.measureText(str).width, fitWidth);
        if (context.measureText(str).width > fitWidth)
        {
            context.fillText( text.substr(0, idx-1), x, y );
            printAt(context, text.substr(idx-1), x, y + lineHeight, lineHeight,  fitWidth);
            return;
        }
    }
    context.fillText( text, x, y );
}
    function sum_slice(lines){
      let t=0;
      for(let i=0;i<lines.length;i++){
        t+=lines[i].length
      }
      return t
    }
    useEffect(() => {
      if(image && canvas) {
        const ctx = canvas.current.getContext("2d")
        const img=image.current;
       
        //  ctx.fillRect(0, 0, 400, 256 + 80)
        //ctx.drawImage(img, (400 - 256) / 2, 40)
        
        ctx.drawImage(img,0,0)
        
        ctx.font = "20px "+font;
        ctx.fillStyle = color;
        ctx.textAlign = "center"
        
        //ctx.fillText(value, (400 / 2), 25)
        //ctx.fillText(value, (400 / 2), 256 + 40 + 25)
        //ctx.fillText(value,80,20)
        //we have to divide width/2 for x (1st arg) values
        //last argument is th width of image
      //  printAt(ctx, value, 400, 20, 20, 800);
        //console.log(value)
       
      //   var a = 30;
      //   var b = 30;
      //   var lineheight = 15;
     
        var lines = value.split('\n');

        let t=0;
        let p=0;
        for (var j = 0; j<lines.length; j++){

          if(j==0)
          printAt(ctx, lines[j], 400, 20, 20, 800);
          else{
           p=t;
           t=sum_slice(lines.slice(j-1,j))
           t+=p;
          // console.log(p,t);
           if (t>p+96){
              t+=10
           }
           else{
             t=t+20*3.8
           }
           // console.log(lines[j-1].length,t)
           // console.log(lines[j])
            printAt(ctx, lines[j], 400, t/(3.8)+20, 20, 800);
          }
        }

        
       }
  
     
    })
    function download_imag(){
      // console.log(download.current)
      // download.current.attributes.style.color="red";
     // console.log(download.current)
      const ctx = canvas.current.getContext("2d");
      const data=canvas.current.toDataURL();
      download.current.href=data;

    }
  return(
    <div className="align">
      <div>
        <div align="left" >
          <ul >
          <li>
            <a  ref={download} style={{marginTop:"5%"}} onClick={(e)=>download_imag()} href="" targent="_blank"  download="text-to-png.png" >Click Here to Download the Image with the Text </a> </li>
          </ul>
        </div>
        <img ref={image} width={800} src={process.env.PUBLIC_URL + "/backi.jpg"} style={{display:"none"}} alt="This an alternative text" /> 
        <canvas 
          style={{border:"2px solid black"}}
          ref={canvas}
          width={800}
          height={900}
        />
      </div>
      <textarea  rows={19} cols={80} onChange={(e)=>{setValue(e.target.value)}} placeholder="Enter your Text" ></textarea>
     <br/>
     <br/>
    </div>
   )
 }

export default Home