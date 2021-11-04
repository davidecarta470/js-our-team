// creare un oggetto con foto nome e role
// svuoto  il team-container
// creo  il div item e inserisco con inner i parametri dell'oggetto
// inserirlo nel container(verificare se c'e' da rimuovere il contenuto prima di aggiungere altro materiale) il div item

// creo un ciclo for per iterare gli inserimenti degli item
// creo un div ogni volta che si compie un ciclo e inserisco tutti gli elementi legari al numero di quel ciclo
// faccio l'append del div creato
// 
const item =[{
  foto:`../img/angela-caroll-chief-editor.jpg`,
  nome:'Angela Carol',
  ruolo:'Chief editor'
}
,
{
  foto:`img/wayne-barnett-founder-ceo.jpg`,
  nome:'Wayne Barnett',
  ruolo:'Founer Ceo'
}
,
{
  foto:`../img/walter-gordon-office-manager.jpg`,
  nome:'Walter Gordon',
  ruolo:'Office Manager'
}
, 
{
  foto:`../img/scott-estrada-developer.jpg`,
  nome:'Scott Estrada',
  ruolo:'Developer'
}
, 
{
  foto:`../img/angela-lopez-social-media-manager.jpg`,
  nome:'Angela Lopez',
  ruolo:'Social Media Menager'
}
, 
{
  foto:`../img/barbara-ramos-graphic-designer.jpg`,
  nome:'Barbara Ramos',
  ruolo:'Graphic designer'
}
] 




const container = document.querySelector('.team-container');
container.innerHTML = '';

for (let key in item){
  const itemHtml = document.createElement('div');
  itemHtml.className='team-card'
  itemHtml.innerHTML = `
  
  <div class="card-image">
    <img
      src="${item[key].foto}"
      alt="Wayne Barnett"
    />
  </div>
  <div class="card-text">
    <h3>${item[key].nome}</h3>
    <p>${item[key].ruolo}</p>
  </div>

  `; 
  container.append(itemHtml);
}