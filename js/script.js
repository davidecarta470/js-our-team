// creare un oggetto con foto nome e role
// inserirlo nel container(verificare se c'e' da rimuovere il contenuto prima di aggiungere altro materiale)
const item = {
  foto:`../img/angela-caroll-chief-editor.jpg`,
  nome:'Angela Carol',
  ruolo:'Chief editor'
}
console.log(item);
const container = document.querySelector('.team-container');
container.innerHTML = '';
const itemHtml = document.createElement('div');
itemHtml.innerHTML = `
<div class="team-card">
  <div class="card-image">
    <img
      src="${item.foto}"
      alt="Wayne Barnett"
    />
  </div>
  <div class="card-text">
    <h3>Wayne Barnett</h3>
    <p>Founder & CEO</p>
  </div>
</div>
`; 
container.append(itemHtml)