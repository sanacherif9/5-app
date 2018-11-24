import React from 'react';
import './App.css';
import Sfax from './photos/Sfax.PNG';
import Sousse from './photos/Sousse.PNG';
import Tunis from './photos/Tunis.PNG';
import background from './photos/background.jpg';
import Program from './component/program';
import Ville from './component/ville';
import Statistique from './component/statistique';

const Full= {titre:"Full Time Program",description:"un programme intensif de 3 mois pour devenir développeur fullstack js ou java. Un coaching technique et professionnel régulier et des liens très forts avec le monde de l'entreprise.", bouton:"en savoir plus",bgcolor:"#DAECF3",txtcolor:"#648099",txtcolor1:"#7C7C7C"};
const Part={titre:"Part Time Program",description:"Tu peux développer ton produit technologique pendant l'année scolaire si tu es étudiant ou en parallèle de ton travail si tu es un professionnel. Ça se passe tous les weekends (demi-journée Samedi ou dimanche) dans notre Hackerspace !",bouton:"en savoir plus", bgcolor:"#FE424D",txtcolor:"#FE424D",txtcolor1:"#FFFFFF"};
const Kids ={titre:"Kids Coding Program", description:"Ce programme vise à initier les plus jeunes (8-12 ans) à l'informatique et à la programmation sur 4 niveaux. Un niveau dure 2 mois. À la fin du programme, l'enfant doit présenter son projet au PDG d'une entreprise technologique.", bouton:"en savoir plus", bgcolor:"#1AA6B7", txtcolor:"#1AA6B7",txtcolor1:"#FFFFFF"};
const Summer ={titre:"Summer Academy", description:"Développe ton produit technologique pendant 3 semaines pendant l'été. Un expérience très riche d'apprentissage et de rencontres avec des passionnés de la technologie.", bouton:"en savoir plus", bgcolor:"#022D41", txtcolor:"#022D41",txtcolor1:"#FFFFFF"};
const element=[ Full ,Part ,Kids, Summer];

const tunis ={photo:Tunis, nomVille:"Tunis"}; 
const sousse ={photo:Sousse, nomVille:"Sousse" };
const sfax ={photo:Sfax, nomVille:"Sfax"};
const location =[tunis, sousse, sfax];

const stat1 = {nombre:"+20,000", description:"PASSIONNÉS DU DIGITAL"};
const stat2 ={nombre:"+500", description:"ÉTUDIANTS DEPUIS LE DÉMARRAGE EN AOÛT 2016"};
const stat3 ={nombre:"+300",description:"PRODUITS DÉVELOPPÉS"};
const stat4 = {nombre:"+30", description:"INSTRUCTEURS GAME, WEB ET MOBILE"};
const stat5 ={nombre : "+50", description:"Speakers"};
const stat6 ={nombre :"+400m²", description:"DE HACKERSPACE AU COEUR DU LAC 1"};
const statist=[stat1, stat2, stat3, stat4, stat5, stat6];



class App extends React.Component {
  render() {
    
    return (
      <div className="App">
      <div className="sessions">
       <h1 >NOS PROGRAMMES</h1>
          <div className="repartition">
           {element.map((el,i)=>{
           return<Program titre={el.titre} description={el.description} bouton={el.bouton} bgcolor={el.bgcolor} txtcolor={el.txtcolor} txtcolor1={el.txtcolor1}/>}  
           )}
        </div>
      </div>
      
      <div className="statistique">
           <h1 className="titres">QUELQUE CHIFFRES</h1>
             <div className="chiffres">
              {statist.map((st,i)=>{return<Statistique number={st.nombre} description={st.description}/>
              })}
           </div>
      </div>

      <div className="Location">
       <h1 className="titreLocation">Ou se passent les formations ?</h1>
       <br/>
       <h3 className="desLocation">Les sessions se passent dans les hackerspaces de GoMyCode dans les villes suivantes : L'hébergement est possible dans la limite des places disponibles.</h3> 
      <br/><br/>
        <div className="City">
          {location.map((lo,i)=>{return<Ville photo={lo.photo} nomVille={lo.nomVille}  />
          })}
         </div>
      </div>
     
      
    </div>
    );
  }
}

export default App;
