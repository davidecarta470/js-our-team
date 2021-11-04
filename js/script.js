// creare un oggetto con foto nome e role
// inserirlo nel container(verificare se c'e' da rimuovere il contenuto prima di aggiungere altro materiale)
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
  foto:`../img/scott-estrada.jpg`,
  nome:'Scott Estrada',
  ruolo:'Developer'
}
, 
{
  foto:`../img/angela-social-media-manager.jpg`,
  nome:'Angela Lopez',
  ruolo:'Social Media Menager'
}
, 
{
  foto:`../img/barbara-ramos.jpg`,
  nome:'Barbara Ramos',
  ruolo:'Graphic designer'
}
] 









console.log(item);
const container = document.querySelector('.team-container');
container.innerHTML = '';
const itemHtml = document.createElement('div');
itemHtml.innerHTML = `
<div class="team-card">
  <div class="card-image">
    <img
      src="${item[2].foto}"
      alt="Wayne Barnett"
    />
  </div>
  <div class="card-text">
    <h3>${item[2].nome}</h3>
    <p>${item[2].ruolo}</p>
  </div>
</div>
`; 
container.append(itemHtml)