const img_container = document.querySelector('.img-container img');
const img_list = document.querySelectorAll('.img-list img');
for (let i = 0; i < img_list.length; i++) {
    img_list[i].addEventListener('click',function(e){
       const imgSrc = e.target.getAttribute('src');
       img_container.setAttribute('src', `${imgSrc}`);
        console.log(e.target.getAttribute('src'));
    })
}
