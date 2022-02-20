let library=[];

function Book(name,author,pages,read){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.read=read;
    }


function addBookToLibrary(item) {
    return library.push(item);

}

Book.prototype.read_book=function(){return this.read=true;}

function showInput(){
    document.querySelector(".entry").style.display="block";
    
    
   }


let form=document.querySelector(".box");
form.addEventListener("submit",(e)=>{
    
    let bname=e.target["name"].value;
   
   
    let bauthor=e.target["author"].value;
    
    let bpages=e.target["page"].value;
  
    let bread=e.target["read"].checked;
    
    let book=new Book(bname,bauthor,bpages,bread);
    addBookToLibrary(book);
    createBookList(library)
    document.querySelector(".entry").style.display="none";
    e.preventDefault();
})


function createBookList(item){
    let j=item.length-1;
    let tr=document.createElement("tr")
    let td=document.createElement("td")
    tr.appendChild(td);
    td.innerText=item.length;
    td=document.createElement("td")
    
tr.appendChild(td);
td.innerText=item[j].name;

td=document.createElement("td")
tr.appendChild(td);
td.innerText=item[j].author;

td=document.createElement("td")
tr.appendChild(td);
td.innerText=item[j].pages;

td=document.createElement("td")
tr.appendChild(td);
td.innerText=(item[j].read) ? "read" :"not read"


td=document.createElement("td")
let rbtn=document.createElement("button");
let dbtn=document.createElement("button");
rbtn.innerText="Read";
rbtn.id="readbtn";
rbtn.onclick=function(){this.parentNode.parentNode.childNodes[4].innerText ="read";};
dbtn.innerText="Delete";
dbtn.id="dltbtn"
dbtn.onclick=function(){this.parentNode.parentNode.remove();library.pop();};
td.appendChild(rbtn);
td.appendChild(dbtn);
tr.appendChild(td)
document.getElementById("booklist").appendChild(tr);

}

