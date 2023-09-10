const observer = new IntersectionObserver( entries => {

    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('scroll-animation-off')
        }
    })

}, {
     threshold: 1
})

Array.from(document.querySelectorAll('.scroll-animation')).forEach( element => {
    observer.observe(element);
})
 