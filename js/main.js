const elTemplatePost = document.getElementById('post-template').content;
// const elTemplateModal = document.getElementById('modal-template').content;

const elPostList = document.querySelector('.post__list');
// const elModalBox = document.querySelector('.modal-tempalate__box');
const elFragment = document.createDocumentFragment();
// const elModalFragment = document.createDocumentFragment();

document.querySelector('.posts__box').addEventListener('click',function(evt) {

  if (evt.target.classList.contains('posts__btn')) {
    document.querySelector('.posts__link').classList.remove('posts__btn--active');
    document.querySelector('.videos__link').classList.remove('posts__btn--active');
    document.querySelector('.photos__link').classList.remove('posts__btn--active');

    evt.target.classList.add('posts__btn--active');
  }
})

elPostList.innerHTML = '';

postObj.forEach(obj => {
  const newPostItem = elTemplatePost.cloneNode(true);
  newPostItem.querySelector('.post__like--hover').textContent = obj.likeCount;
  newPostItem.querySelector('.post__comment--hover').textContent = obj.commentCount;
  // // newPostItem.querySelector('.post__img-box').innerHTML = ` <img class="post__img" src="${obj.img[0]}" alt="yuksalish img">`
  if (obj.img) {
      newPostItem.querySelector('.post__img-box').innerHTML = ` <img class="post__img" src="${obj.img[0]}" alt="yuksalish img">`
  }else if (obj.img == undefined) {
    newPostItem.querySelector('.post__img-box').innerHTML = `
    <video class="post__img">
      <source src="${obj.video[0]}" type="video/mp4">
    </video>
    `
  }


  // newPostItem.addEventListener('click', evt => {
  //   const newModal = elTemplateModal.cloneNode(true);
  //   newModal.querySelector('.modal-left__list').innerHTML = '';
  //   if (obj.img) {
  //     obj.img.forEach(objImg => {
  //       newModal.querySelector('.modal-left__item').innerHTML = `
  //       <div class="modal-left__img-box">
  //         <img src="${objImg}" alt="img yuksalish" class="modal-left__img">
  //       </div>
  //         `
  //     })
  //   }else if (obj.img == undefined) {
  //     obj.video.forEach(objVid => {
  //     newPostItem.querySelector('.post__img-box').innerHTML = `
  //     <div class="modal-left__img-box">
  //     <video class="modal-left__img">
  //       <source src="${objVid}" type="video/mp4">
  //     </video>
  //     </div>
  //     `
  //   })
  //   }

  //   elModalFragment.appendChild(newModal);
  // })

  elFragment.appendChild(newPostItem)
})

// elModalBox.appendChild(elModalFragment);
elPostList.appendChild(elFragment);


document.querySelectorAll('.post__item').forEach(item => {
  item.addEventListener('click', evt => {
    document.querySelector('.modal').classList.remove('d-none')
  })
})

document.querySelector('.modal__close').addEventListener('click', evt => {
  document.querySelector('.modal').classList.add('d-none')
})

document.querySelector('.modal').addEventListener('click', evt => {
  if (evt.target.classList.contains('modal-comment__like') ){
    evt.target.classList.toggle('modal-comment__like--active')
  }else if (evt.target.classList.contains('modal-bottom__like')) {
    evt.target.classList.toggle('modal-bottom__like--active')
  }
})

document.querySelector('.modal-left__img-box').addEventListener('dblclick', e => {
  document.querySelector('.modal-bottom__like').classList.toggle('modal-bottom__like--active')
})