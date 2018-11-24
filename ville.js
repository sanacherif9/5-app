import React from 'react';

 class Ville extends React.Component{
 render (props){
 var nomville={
    textalign: 'center',
       }
 return(
    <div className="ville">
    <img src={this.props.photo} alt= ""/>
    <h2 style={nomville}> {this.props.nomVille}</h2>
  </div>
 );
 }

 }
 export default Ville;