let Movie = {
    list: function (navData) {
        let url = 'http://www.pollux.local/api' + navData.href;

        Ajax.loadContent(url, 'get', function (response) {
            let jsonResponse = JSON.parse(response);

            Ajax.loadContent('/page/_movies.html', 'get', function (response) {
                let cntElement = document.getElementsByClassName('js-content').item(0);

                cntElement.innerHTML = response;

                jsonResponse.forEach(function (movie) {
                    let tableBody = document.getElementsByClassName('js-tableBody').item(0),
                        row       = document.createElement('tr'),
                        cell, btn, css, attributes;

                    cell           = document.createElement('td');
                    cell.innerHTML = movie.title;
                    row.appendChild(cell);

                    cell           = document.createElement('td');
                    cell.innerHTML = movie.genre;
                    row.appendChild(cell);

                    cell           = document.createElement('td');
                    cell.innerHTML = movie.medium;
                    row.appendChild(cell);
                    tableBody.appendChild(row);

                    // create the action buttons
                    cell       = document.createElement('td');
                    attributes = [{name: 'type', value: 'button'}];

                    css = ['btn', 'info', 'js-detailBtn'];
                    btn = DOM.createButton('Details', attributes, css);
                    cell.appendChild(detailBtn)

                    css     = ['btn', 'okay', 'js-editBtn'];
                    btn = DOM.createButton('Edit', attributes, css);
                    cell.appendChild(btn);

                    css = ['btn', 'danger', 'js-deleteBtn'];
                    btn = DOM.createButton('Del', attributes, css);
                    cell.appendChild(btn);

                    row.appendChild(cell);
                    tableBody.appendChild(row);
                });
            });
        });
    }
}