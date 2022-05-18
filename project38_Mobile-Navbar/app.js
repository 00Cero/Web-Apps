
const allLi = document.querySelectorAll('.navbar li');
const imgContainer = document.querySelector('.imgContainer');

const arrImg = ['https://images.unsplash.com/photo-1640976402552-771b471fc00e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', 'https://images.unsplash.com/photo-1640959394064-302f92113314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1640875950437-79281ce1283c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1640942382188-6bb825b3a2b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'];

imgContainer.innerHTML = `<img src=${arrImg[0]} alt="">`;;

allLi.forEach((li,idx)=>{
   li.addEventListener('click', ()=>{
      activateBtn(idx);
      imgContainer.innerHTML = '';
      imgContainer.innerHTML = `<img src=${arrImg[idx]} alt="">`;

   });
});

function activateBtn(index){
   for(let li of allLi){
      li.classList.remove('active');
   }
   allLi[index].classList.add('active');
}