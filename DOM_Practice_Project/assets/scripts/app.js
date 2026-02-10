const addMovieModal=document.getElementById('add-modal');
const startAddMovieButton=document.querySelector('header button');
const backdrop=document.getElementById('backdrop');
const cancelAddMovieButton=addMovieModal.querySelector('.btn--passive');
const addMovieButton=addMovieModal.querySelector('.btn--success');
const userInputs=addMovieModal.querySelectorAll('input');
const entryTextSection=document.getElementById('entry-text');
const deleteMovieModal=document.getElementById('delete-modal');

const movies=[];

const toggleBackdrop=()=>{
    backdrop.classList.toggle('visible');
};

const showMovieModal=()=>{
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const closeMovieModal=()=>{
    addMovieModal.classList.remove('visible');
};

const cancelAddMovieHandler=()=>{
    closeMovieModal();
    clearInput();
    toggleBackdrop();
};

const backdropClickHandler=()=>{
    closeMovieModal();
    clearInput();
    toggleBackdrop();
}

const updateUi=()=>{
    if(movies.length===0){
        entryTextSection.style.display='block';
    }else{
        entryTextSection.style.display='none';
    }
};

const clearInput=()=>{
    for(const userInput of userInputs){
        userInput.value='';
    }
};

const closeMovieDeletionModal=()=>{
    deleteMovieModal.classList.remove('visible');
    toggleBackdrop();
};

const deleteMovieHandler=(movieId)=>{
    let movieIndex=0;
    for(const movie of movies){
        if(movie.id===movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex,1);
    const listroot=document.getElementById('movie-list');
    listroot.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUi();
    
};

const startDeleteMovieHandler=(movieId)=>{
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();

    const cancelDeletionButton=deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton=deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    confirmDeletionButton=deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionButton.removeEventListener('click',closeMovieDeletionModal);

    cancelDeletionButton.addEventListener('click',closeMovieDeletionModal);
    confirmDeletionButton.addEventListener('click',deleteMovieHandler.bind(null,movieId));

};

const renderNewMovieElement=(id,title,imageUrl,rating)=>{
    const newMovieElement=document.createElement('li');
    newMovieElement.className='movie-element';

    newMovieElement.innerHTML=`
    <div class='movie-element__image'>
        <img src='${imageUrl}' alt='${title}'>
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5</p>
    </div>`;

    newMovieElement.addEventListener('click',startDeleteMovieHandler.bind(null,id));
    const listroot=document.getElementById('movie-list');
    listroot.append(newMovieElement);
};

const addMovieHandler=()=>{
    const titleValue=userInputs[0].value;
    const imageUrlValue=userInputs[1].value;
    const ratingValue=userInputs[2].value;

    if(titleValue==='' || imageUrlValue==='' || ratingValue==='' || +ratingValue<1 || +ratingValue>5){
        alert('Please enter valid values');
        return;
    }

    const newMovie={
        id:Math.random().toString(),
        title:titleValue,
        imageUrl:imageUrlValue,
        rating:ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    renderNewMovieElement(newMovie.id,newMovie.title,newMovie.imageUrl,newMovie.rating);
    clearInput();
    updateUi();
};

startAddMovieButton.addEventListener('click',showMovieModal);
cancelAddMovieButton.addEventListener('click',cancelAddMovieHandler);
backdrop.addEventListener('click',backdropClickHandler);
addMovieButton.addEventListener('click',addMovieHandler);