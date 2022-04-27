/* eslint-disable no-unused-vars */
import { createElements } from '../util.js';
import { store } from '../Firebase/firestore.js';

export const Feed = () => {
  const userId = sessionStorage.getItem('uid');

  const feedWrapper = document.createElement('div');
  const templateFeed = `
  <section id="feed" class= "contenedor-section">

  <img id="feed-logo" class="logo" src="imagenes/logo.png">

  <div id="createNewPost">
    <p> Hola ${sessionStorage.getItem('username')} </p>
    <button id="btnNewPost" class="btn-new"> Crear Nueva Publicación </button>
  </div>

  <form id = "formNewPost" class = "hide">
    <input type = "text" id ="newPostTitle" class = "newPostTitle" placeholder = "coloca el título de tu publicación" value= "">

    <input type = "text" id ="newPostBody" class="newPostBody" placeholder = "Escribe tu publicacion" value="">

    <button type = "submit" id = "publishBtn" value="Publish"> Publicar </button>
  </form>


  <section id='postContainer' class= "postContainer">
    <div id='userInfoDiv'></div>
    <p id='user-name'></p>
    <div id='postTitle'></div>
    <div id='postBody'></div>
    <div id='like-container'></div>
  </section>
  `;

  feedWrapper.innerHTML += templateFeed;

  const postNew = feedWrapper.querySelector('.btn-new');

  const formNewPost = feedWrapper.querySelector('#formNewPost');
  postNew.addEventListener('click', () => {
    formNewPost.classList.remove('hide');
  });

  const newPostTitle = feedWrapper.querySelector('#newPostTitle');
  const newPostBody = feedWrapper.querySelector('#newPostBody');

  // event to submit new post
  formNewPost.addEventListener('submit', (e) => {
    e.preventDefault();
    store({ title: newPostTitle.value, body: newPostBody.value, userId }, 'publicaciones');
    formNewPost.classList.add('hide');
  });

  return feedWrapper;
};
//   // contenedor de posts

//   window.addEventListener('DOMContentLoaded', () => {
//     onGetPostInRealTime((querySnapShot) => { //
//       // variable con string vacio para que cada que se recorra añadamos info al contenedor
//       let html = '';

//       querySnapShot.forEach((doc) => {
//         html +=`
//   <section class = 'containerCards'>
//     <div id = 'editPost'>
//     <div class = "titleOfPost"></div>
//     <div class = "dateOfData"></div>
//   </section>

//   <button id = "editPostButton" value =""> ... </button>
//   <button id = "edit"> Editar </button>
//   <button class ="delete" data-id = "${doc.id}"> Borrar </button>
//   </div>
//   <div class = 'containersOfData'> ${doc.data().post}</div>
//     </section>
//     `;
//   });

//   const btnDelete = postCreatedByUser.querySelectorAll('.delete');
//   btnDelete.forEach((btn) => {
//     btn.addEventListener('click', ({ target: { dataset } }) => {
//       deletePost(dataset.id);
//     });
//   }
//   );

//   return feedWrapper;
// });

//   <div id="postContainer">
//     <p> ${userId} </p>
//     <p> <

//   </div>
//   `;
// };

//   btnNewPost.textContent = 'Crear nueva publicación';

//   // getPost(userId).then(() => {
//   const feedDivWrapper = document.createElement('div');
//   feedDivWrapper.id = 'feedWrapper';
//   feedDivWrapper.className = 'feed-wrapper';

//   const logoFeed = document.createElement('img');
//   logoFeed.src = 'imagenes/logo.png';
//   logoFeed.id = 'feed-logo';
//   logoFeed.className = 'logo';

//   feedDivWrapper.appendChild(logoFeed);

//   // Boton para publicar un nuevo postDiv

//   const btnNewPost = document.createElement('button');
//   btnNewPost.textContent = 'Crear nueva publicación';

//   feedDivWrapper.appendChild(btnNewPost);

//   // boton con addeventlistener
//   // formulario para crear una nueva publicacion
//   const newPostForm = document.createElement('form');
//   newPostForm.classList.add('hide');
//   const newPostTitle = document.createElement('input');
//   newPostTitle.placeholder = 'coloca el titulo de tu publicación';
//   const newPostBody = document.createElement('textarea');
//   newPostBody.placeholder = 'escribe tu publicación';
//   const btnPublish = document.createElement('button');
//   btnPublish.setAttribute('type', 'submit');
//   btnPublish.textContent = 'Publicar';

//   newPostForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     store({ title: newPostTitle.value, body: newPostBody.value, userId }, 'publicaciones');
//   });

//   newPostForm.append(newPostTitle, newPostBody, btnPublish);

//   feedDivWrapper.appendChild(newPostForm);

//   // funcion para el boton
//   btnNewPost.addEventListener('click', () => {
//     newPostForm.classList.remove('hide');
//   });

//   const [
//     postDiv,
//     userInfoDiv,
//     textPost,

//     interactionDiv,
//   ] = createElements(
//     'div',
//     'div',
//     'textarea',
//     'div',
//   );

//   postDiv.id = 'post-container';
//   postDiv.className = 'test';

//   // Div info user
//   userInfoDiv.id = 'user-info-container';
//   userInfoDiv.className = 'test';

//   // div text post
//   textPost.id = 'post-text';
//   textPost.name = 'post-text';
//   textPost.className = 'test';
//   textPost.placeholder = 'Prueba prueba';

//   interactionDiv.className = 'test1';
//   interactionDiv.id = 'interaction';

//   const [
//     userImg,
//     userName,
//     likeDiv,
//     favDiv,
//   ] = createElements(
//     'img',
//     'h4',
//     'div',
//     'div',
//   );

//   userImg.id = 'user-image-profile';
//   userImg.src = 'imagenes/goose-pf.jpg';

//   userName.id = 'user-name';
//   userName.textContent = sessionStorage.getItem('username');

//   likeDiv.id = 'like-container';
//   likeDiv.className = 'test';

//   favDiv.id = 'fav-container';
//   favDiv.className = 'test';

//   const [
//     btnLike,
//     btnDislike,
//     btnFav,
//   ] = createElements('button', 'button', 'button');

//   btnLike.textContent = 'Like';
//   btnDislike.textContent = 'Dislike';

//   btnFav.id = 'btn-fav';
//   btnFav.textContent = 'Patita';

//   likeDiv.append(btnLike, btnDislike);
//   favDiv.appendChild(btnFav);
//   userInfoDiv.append(userImg, userName);
//   interactionDiv.append(likeDiv, favDiv);

//   feedDivWrapper.append(
//     postDiv,
//     userInfoDiv,
//     textPost,
//     interactionDiv,
//   );
//   // });
//   return feedDivWrapper;
// };
