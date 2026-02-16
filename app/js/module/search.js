module.exports = () => {
    const searchBtn = document.querySelector('.ltbr_search');
    const searchBlock = document.querySelector('.search');
    const overlay = document.querySelector('.search-overlay')

    searchBtn.addEventListener('click', e =>{
        searchBlock.classList.add('active');
    })

    overlay.addEventListener('click', e => {
        if(searchBlock.classList.contains('active')){
            searchBlock.classList.remove('active')
        }
    })
}