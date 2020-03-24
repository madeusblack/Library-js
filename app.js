
  let myLibrary = [];
  function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
  Book.prototype.info = function() {
    let toret= this.title +" by "+ this.author + ", " + this.pages + " pages," + this.read
    return toret
  }

function addBookToLibrary() {
   let newTitle=document.getElementById("bookname").value ;
   let newAuthor=document.getElementById("author").value;
   let newPages=document.getElementById("pages").value;
   let newIsread=document.getElementById("read").checked;
   console.log(newTitle,newAuthor,newPages,newIsread)
    let book = new Book(newTitle,newAuthor,newPages,newIsread)
    myLibrary.push(book)
    render()
}
function render(){
  var list = document.getElementById("librarycont").hasChildNodes();
  if (list==true){
    console.log("rchild")
    let element = document.getElementById("librarycont");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  
  for (index = 0; index < myLibrary.length; index++) { 
    display(myLibrary[index],index); 
} 
        
        
   


}
function display(objct,indexofobj){
    contain = document.querySelector('#librarycont')
    let card = document.createElement('div');
    card.classList.add('card1');
    let titledis = document.createElement('h4');
    let authdis=document.createElement('h4');
    let pagesdis=document.createElement('h4');
    let readdis=document.createElement('h4');
    let delbutton=document.createElement('button');
    let idobj=document.createElement('h6')
    delbutton.classList.add('fa-close')
    delbutton.classList.add('fa')
    delbutton.classList.add('delbutton')

    delbutton.addEventListener("click", function(){
      testfunc(indexofobj);
  }, false);
    idobj.innerHTML="ID: "+indexofobj
    titledis.innerHTML="Title: "+objct.title
    authdis.innerHTML="By: "+objct.author
    pagesdis.innerHTML="N° of Pages: "+ objct.pages 
    readdis.innerHTML="Read?: "+objct.read
    delbutton.innerHTML="Delete Book"
    

    card.appendChild(idobj);
    card.appendChild(titledis);
    card.appendChild(authdis);
    card.appendChild(pagesdis);
    card.appendChild(readdis);
    card.appendChild(delbutton);
    contain.appendChild(card);

}
function testfunc(inx){
  myLibrary.splice(inx, 1);
  console.log(myLibrary)
  render()

}


