import React from 'react';

class Statistique extends React.Component{
 render(props){
   var number = {
              fontfamily: 'Kaushan Script',
             fontdisplay: 'initial',
             fontsize: 300
             }
    var description = {
        textalign: 'left',
       margintop: 10,
       marginbottom: 10,
       verticalalign:'middle',
       fontsize: 150 ,
       color:'rgb(8, 8, 8)', 
       width: 100,
       textalign: 'center'
      } 
    var  statistic={
        width: 10,
        textalign: 'center'
        }        
   return (
    <div style={statistic}>
      <h3 style={number}>{this.props.number}</h3>
      <h3 style={description}>{this.props.description}</h3>
     </div>
   );
  }
}
  export default Statistique;