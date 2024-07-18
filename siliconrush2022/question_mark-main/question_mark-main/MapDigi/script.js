const guidesList=document.querySelector('.guides');

//setup guides
const setupGuides =(data)=>{

  if(data.length)
  {
    let html='';
    data.forEach(doc => {
      const guide=doc.data();
      const li=`
        <li>
          <div class="collapsible-header grey lighten-4">${guide.title}</div>
          <div class="collapsible-body white">${guide.content}<br><a href="scripts/map.html">
          <button>Go to map</button>
          </a></div>
        </li>
      `;
      html+=li
    });
    guidesList.innerHTML=html
  }
  else
  {
    guidesList.innerHTML="<h5 class='center-align'>Login to view Data</h5>"
  }

}


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});