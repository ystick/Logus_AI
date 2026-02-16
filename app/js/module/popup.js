module.exports = () => {
    const modal = document.querySelector('.stock_popup')
    const overlay = document.querySelector('.stock_popup-overlay')
    const modalClose = document.querySelector('.modalClose')
    
    setTimeout(() => {
        modal.classList.add('open')
    }, 10000)

    overlay.addEventListener('click', () => {
        modal.classList.remove('open')
    })
    
    modalClose.addEventListener('click', () => {
        modal.classList.remove('open')
    })
}