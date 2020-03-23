
  const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien','295',' not read yet')
  obj=0

  let myLibrary = [];

  function Book(title, author, pages, readed) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readed = readed
    
  }

  Book.prototype.info = function() {
    let toret= this.title +" by "+ this.author + ", " + this.pages + " pages," + this.readed
    return toret
  }
function addBookToLibrary() {
   let newTitle=document.getElementById("bookname").value ;
   let newAuthor=document.getElementById("author").value;
   let newPages=document.getElementById("pages").value;
   let newIsreaded=document.getElementById("readed").checked;
   console.log(newTitle,newAuthor,newPages,newIsreaded)
    let book = new Book(newTitle,newAuthor,newPages,newIsreaded)
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
    let readeddis=document.createElement('h4');
    titledis.innerHTML="Title: "+objct.title
    authdis.innerHTML="By: "+objct.author
    pagesdis.innerHTML="N° of Pages: "+ objct.pages 
    console.log(objct.readed)
    readeddis.innerHTML="Readed?: "+objct.readed
    card.appendChild(titledis);
    card.appendChild(authdis);
    card.appendChild(pagesdis);
    card.appendChild(readeddis);
    contain.appendChild(card);

 
}




/*render
<div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%">
    <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
    </div>
</img></div>
*/