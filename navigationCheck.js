document.addEventListener('yt-navigate-start', () => {

    originalURL = window.location.href;

    if (originalURL.includes('/shorts/')){

        newURL = originalURL.replace('/shorts/','/watch/');
        window.location.href = newURL;
        
    } 
    
})