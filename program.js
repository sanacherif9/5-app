import React from 'react';

class Program extends React.Component {
    bgcolor={background:this.props.bgcolor}
   txtcolor={color:this.props.txtcolor}
   bgcolor1={background:this.props.bgcolor1}
   txtcolor1={color:this.props.txtcolor1}
render(props){
    var program= {
        width: 58 ,
        height: 400,
        display: 'flex' ,
        flexdirection: 'column' ,
        alignitems: 'center' ,
        justifycontent: 'space-between' ,
        padding: 20 
      }
    var titre={
        border: '3  solid  #ccc',
        borderradius: 40,
        cursor: ' pointer ',
        margin: 0,
        padding:' 0 2 0.5 2 '   ,
        display: 'inline',
        justifycontent: 'baseline',
        display: '-webkit-inline-box 0 0 10 0'  
      }
      var ligne = {
        width: 30 
           }
       var  titre1={
  
            border: 'none' ,
            boxshadow:  30 ,
            borderradius: 20,
            backgroundcolor: ' rgb(100, 100, 100)' ,
            padding:  25,
            display: ' flex ',
            display:  ' inline-block ',
        }
        var description1={
            textalign: 'left',
            margin: 20,
            verticalalign:'middle',
            color:'rgb(100, 100, 100)', 
          }
    return(
        <div style={Program} style ={this.bgcolor}  >
       
           <h2 style ={titre} style={this.txtcolor1}>{this.props.titre}</h2>
           <hr style={ligne}/>
           <div class="divider-white"></div>
          <h4 style={description1} style={this.txtcolor1}>{this.props.description}</h4>
          <h2 style={titre1} style={this.txtcolor}>{this.props.bouton}</h2>
          
          </div>
    );
}

}
export default Program;