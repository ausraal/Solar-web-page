const navbar = document.getElementById('replace_with_navbar');
fetch('navigation.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
// const allNav = document.getElementById('topheader');
// const links = allNav.querySelectorAll('#nav-item');
    
        
//         links.forEach(link => {
//             link.addEventListener('click', (event) => {
//                 links.forEach(link => {
//             link.parentNode.classList.remove('active');        
//                 })
//         event.target.parentNode.classList.add('active');    
//                    });
        
// });

const allNav = document.getElementById('topheader');
const links = allNav.querySelectorAll('#nav-item');

links.forEach(link => {
  const linkUrl = link.href;
  const currentPageUrl = window.location.href;
  if (currentPageUrl.includes(linkUrl)) {
    link.parentNode.classList.add('active');
  }

  link.addEventListener('click', (event) => {
    event.preventDefault();
    links.forEach(link => {
      link.parentNode.classList.remove('active');
    });
    event.target.parentNode.classList.add('active');
  });
});
// In this code, we first loop through all the links and check if the href attribute matches the current page URL using window.location.href and includes(). If they match, we add the active class to the link's parent node.

// Then we add the click event listener to each link, and inside the listener function, we first prevent the default link behavior using event.preventDefault(). Then we loop through all the links and remove the active class from their parent nodes. Finally, we add the active class to the clicked link's parent node.

});
