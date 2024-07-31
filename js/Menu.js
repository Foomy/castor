function initMenuItems(htmlCollection) {
    for (let item of htmlCollection) {

        item.addEventListener('click', (event) => {
            location.href = event.target.dataset.url;
        });
    }
}