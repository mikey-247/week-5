const artists = document.querySelectorAll('.artist');
artists.forEach((artits) => {
    const audio = artists.querySelector('audio');
    const playbutton = artist.querySelector('.play');
    const stopbutton = artist.querySelector('.stop');

    playbutton.addEventListener('click',() => {
        audio.play();
    });

    stopbutton.addEventListener('click',() => {
        audio.pause();
        audio.currentTime = 0;
    });
});