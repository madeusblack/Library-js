const firebaseConfig = {
  apiKey: "AIzaSyCyet7ED_6HFxqnoeBwpD-pypXOX8p4tgQ",
  authDomain: "library-c9d35.firebaseapp.com",
  databaseURL: "https://library-c9d35.firebaseio.com",
  projectId: "library-c9d35",
  storageBucket: "library-c9d35.appspot.com",
  messagingSenderId: "733859388867",
  appId: "1:733859388867:web:703b09528fe7c439313176",
  measurementId: "G-75RM36LCDK"
};
let myLibrary = [];
lib = localStorage.getItem('datos');
if(lib!=null){
  myLibrary=JSON.parse(lib)
}
render()
function Book(title, author, pages, read,objindex) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.objindex=objindex;
  }
function addBookToLibrary() {
  let newTitle=document.getElementById("bookname").value ;
  let newAuthor=document.getElementById("author").value;
  let newPages=document.getElementById("pages").value;
  let newIsread=document.getElementById("read").checked;
  let book = new Book(newTitle,newAuthor,newPages,newIsread)
  myLibrary.push(book)
  render()
}
function render(){
  var checkNodes = document.getElementById("librarycont")
  .hasChildNodes();
  if (checkNodes==true){
    let element = document.getElementById("librarycont");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  for (index = 0; index < myLibrary.length; index++) { 
    myLibrary[index].objindex=index
    display(myLibrary[index],index); 
  } 
  localStorage.setItem('datos', JSON.stringify(myLibrary));

}
function display(objct,indexofobj){
  contain = document.querySelector('#librarycont')
  let card = document.createElement('div');
  card.classList.add('card1');
  let titledis = document.createElement('h4');
  let authdis=document.createElement('h4');
  let pagesdis=document.createElement('h4');
  let readdis=document.createElement('h4');
  let idobj=document.createElement('h6')
  let delbutton=document.createElement('button');
  delbutton.classList.add('fa-close')
  delbutton.classList.add('fa')
  delbutton.classList.add('delbutton')
  delbutton.addEventListener("click", function(){
    deleteBook(indexofobj);}, false);
    let chngbutton=document.createElement('button');
    chngbutton.classList.add('fa')
    chngbutton.classList.add('chngbutton')
    chngbutton.addEventListener("click", function(){
      changestate(objct);}, false);

  idobj.innerHTML="ID: "+objct.objindex
  titledis.innerHTML="Title: "+objct.title
  authdis.innerHTML="By: "+objct.author
  pagesdis.innerHTML="N° of Pages: "+ objct.pages
  if(objct.read==true){
    readdis.innerHTML="Read?: Yes"
  }else{
    readdis.innerHTML="Read?: No"
  }
  delbutton.innerHTML="Delete Book"
  chngbutton.innerHTML="Change  read"
  card.appendChild(idobj);
  card.appendChild(titledis);
  card.appendChild(authdis);
  card.appendChild(pagesdis);
  card.appendChild(readdis);
  card.appendChild(chngbutton);
  card.appendChild(delbutton);

  contain.appendChild(card);
}
function deleteBook(inx){
  myLibrary.splice(inx, 1);
  console.log(myLibrary)
  render()
}
function changestate(obj){
  console.log(obj)
  if(obj.read==true){
    obj.read=false
    render()
  }
  else{
    obj.read=true
    render()
  }
}