let Movie = {
    list: function (navData) {
        let url = 'http://www.pollux.local/api/1.0' + navData.href;

        Ajax.loadContent(url, 'get', function (response) {
            let parsed = JSON.parse(response)
            movies     = parsed.data;

            Ajax.loadContent('/page/_movies.html', 'get', function (response) {
                let cntDiv = document.getElementsByClassName('js-content').item(0),
                    tblFrameWithHead, tblBody;

                tblFrameWithHead = response;
                cntDiv.innerHTML = tblFrameWithHead;

                tblBody = document.getElementsByClassName('js-tableBody').item(0);

                movies.forEach(function (movie) {
                    let row, css, data,
                        cells = [];

                    for (let item in movie) {
                        let td, css;

                        if (Utils.inArray(item, ['title', 'genre', 'medium'])) {
                            css = ['col', 'data-col'];
                            td  = DOM.createTableCell(movie[item], css);

                            cells.push(td)
                        }
                    }

                    cells.push(Movie.addActionCell(movie['publicationId']));

                    css  = ['row', 'data-row']
                    data = [{name: 'pubId', value: movie['publicationId']}];
                    row  = DOM.createTableRow(cells, css, [], data);

                    tblBody.appendChild(row);
                });
            });
        });
    },

    details: function (eventTarget) {
console.log('details');
    },

    edit: function (eventTarget) {
console.log('edit');
    },

    delete: function (eventTarget) {
console.log('delete');
    },

    addActionCell: function (publicationId) {
        let cell = document.createElement('td');

        cell.appendChild(this.addActionButton({
            label: 'Details',
            css: ['btn', 'info', 'js-detailBtn'],
            attributes: [{name: 'type', value: 'button'}],
            datasets: [
                {name: 'action', value: 'details'},
                {name: 'pubId', value: publicationId},
            ],
        }));

        cell.appendChild(this.addActionButton({
            label: 'Edit',
            css: ['btn', 'okay', 'js-editBtn'],
            attributes: [{name: 'type', value: 'button'}],
            datasets: [
                {name: 'action', value: 'edit'},
                {name: 'pubId', value: publicationId},
            ],
        }));

        cell.appendChild(this.addActionButton({
            label: 'Delete',
            css: ['btn', 'danger', 'js-deleteBtn'],
            attributes: [{name: 'type', value: 'button'}],
            datasets: [
                {name: 'action', value: 'delete'},
                {name: 'pubId', value: publicationId},
            ],
        }));

        return cell;
    },

    addActionButton: function (btnData) {
        let btn;

        btn = DOM.createButton(btnData.label, btnData.css, btnData.attributes, btnData.datasets);
        btn.addEventListener('click', function (event) {
console.log(event.target.dataset.action);
            switch (event.target.dataset.action) {
                case 'edit':
                    Movie.edit(event.target);
                    break;
                case 'delete':
                    Movie.delete(event.target);
                    break;
                default:
                    Movie.details(event.target);
            }
        });

        return btn;
    }
}