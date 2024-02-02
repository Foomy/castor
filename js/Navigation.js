let Navigation = {
    Main: {
        items: [
            {
                label: 'home',
                href: '/',
                type: 'frontend',
                page: '_index.html',
                method: 'get',
            },
            {
                label: 'movies',
                href: '/movies/',
                type: 'backend',
                cssFile: '/css/page/movies.css',
                method: 'get',
            },
            {
                label: 'books',
                href: '/books/',
                type: 'backend',
                cssFile: '/css/page/books.css',
                method: 'get',
            }
        ],

        init: function () {
            this.drawItems();
        },

        drawItems: function () {
            for (let item of this.items) {
                this.drawItem(item);
            }
        },

        drawItem: function (item) {
            let mainNav = document.getElementsByClassName('js-mainNav').item(0),
                navItem = document.createElement('div');

            navItem.addEventListener('click', function (event) {
                let cntElement = document.getElementsByClassName('js-content').item(0),
                    url;

                if ('frontend' === item.type) {
                    url = '/page/' + item.page;

                    Ajax.loadContent(url, 'get', function (response) {
                        cntElement.innerHTML = response;
                    });
                }

                if ('backend' === item.type) {
                    Movie.list(item);
                }

                Navigation.removeActiveMarkers();
                Navigation.addActiveMarker(event.target, item.href);
            });

            navItem.classList.add('js-navItem');
            navItem.classList.add('menu-item');

            if (item.href === document.location.pathname) {
                navItem.classList.add('active');
            }

            navItem.setAttribute('data-href', item.href);

            navItem.appendChild(document.createTextNode(item.label));
            mainNav.appendChild(navItem);
        },
    },

    addActiveMarker: function (navItem, href) {
        if (navItem.dataset.href === href) {
            navItem.classList.add('active');
        }
    },

    removeActiveMarkers: function () {
        let navItems = document.getElementsByClassName('js-navItem');

        for (let navItem of navItems) {
            if (navItem.classList.contains('active')) {
                navItem.classList.remove('active');
            }
        }
    }
}