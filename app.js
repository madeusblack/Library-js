
  obj=0
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
        display(myLibrary[obj])
        obj++

}
function display(objct){
    contain = document.querySelector('#librarycont')
    let card = document.createElement('div');
    card.classList.add('card1');
    let titledis = document.createElement('h4');
    let authdis=document.createElement('h4');
    let pagesdis=document.createElement('h4');
    let readdis=document.createElement('h4');
    titledis.innerHTML="Title: "+objct.title
    authdis.innerHTML="By: "+objct.author
    pagesdis.innerHTML="N° of Pages: "+ objct.pages 
    console.log(objct.readed)
    readdis.innerHTML="Read?: "+objct.read
    card.appendChild(titledis);
    card.appendChild(authdis);
    card.appendChild(pagesdis);
    card.appendChild(readdis);
    contain.appendChild(card);

 
}


