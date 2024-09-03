const myLibrary = [];

//Created constructor function to create book object
function Book(ttl, auth, pgs, beenRead){
    this.title = ttl;
    this.author = auth;
    this.pages = pgs;
    if(beenRead === 'true'){
        this.beenRead = 'Completed'
    }else if(beenRead === 'false'){
        this.beenRead = 'Incompleted'
    }
}

//Adds new book object to library array
function addNewBook(book){
    myLibrary.push(book);
}

const shelf = document.querySelector('#shelf');
shelf.addEventListener('submit', (e) => {

    //Get book data from DOM when form is submitted
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const radios = document.getElementsByName('option');

    //Gets true or false value from radio
    let confirmedBeenRead;
    function checkRadio(){
        for(const radio of radios){
            if(radio.checked){
                confirmedBeenRead = radio.value;
                break;
            }
        }
    }
    checkRadio();

    //Creates new book object from book data
    function createNewBook(){
        let book;
        if(myLibrary.length >= 0){
            //Numbers the book objects appropriately
            book = 'book' + '' + myLibrary.length;
            myLibrary[book] = new Book(title, author, pages, confirmedBeenRead);

            //Adds the numbered book object to the library array
            myLibrary.push(myLibrary[book]);
        }
    }
    createNewBook();
    e.preventDefault();

    //Creating elements to display books
    const libraryHall = document.querySelector('.library');
    const display = document.createElement('section');

    //Displays the element in the DOM
    function createDisplayArea(){
        display.classList.add('display');

        //Checks if a display element is already appended so as to not add more
        if(libraryHall.children.length === 1){
            libraryHall.appendChild(display);
        }
    }
    createDisplayArea();

    function displayBookInformation(){
            const displayBox = document.createElement('div');
            displayBox.classList.add('displayBox')
            display.appendChild(displayBox);
    }
    displayBookInformation();
});