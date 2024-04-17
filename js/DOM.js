let DOM = {
    createTableRow: function (cells, css = [], attributes = [], datasets = []) {
        let row = document.createElement('tr');

        if (!Utils.isUndefined(cells)) {
            cells.forEach(function (cell) {
                row.appendChild(cell);
            });
        }

        if (css.length > 0) {
            css.forEach(function (selector) {
                row.classList.add(selector);
            });
        }

        if (attributes.length > 0) {
            DOM.addAttributes(row, attributes);
        }

        if (datasets.length > 0) {
            DOM.addDatasets(row, datasets);
        }

        return row;
    },

    createTableCell: function (content, css, attributes = [], datasets = []) {
        let td = document.createElement('td');

        td.innerHTML = content;

        if (css.length > 0) {
            css.forEach(function (selector) {
                td.classList.add(selector);
            });
        }

        return td;
    },

    createButton: function (label, css, attributes = [], datasets = []) {
        let btn = document.createElement('button');

        if (!Utils.isUndefined(label)) {
            btn.innerHTML = label;
        }

        if (css.length > 0) {
            css.forEach(function (cssClass) {
                btn.classList.add(cssClass);
            });
        }

        if (attributes.length > 0) {
            DOM.addAttributes(btn, attributes);
        }

        if (datasets.length > 0) {
            DOM.addDatasets(btn, datasets);
        }

        return btn;
    },

    addAttributes: function (element, attributes) {
        attributes.forEach(function (attribute) {
            let prop, key, value;

            for (prop in attribute) {
                if ('name' === prop) {
                    key = attribute[prop];
                }

                if ('value' === prop) {
                    value = attribute[prop];
                }

                element.setAttribute(key, value);
            }
        });
    },

    addDatasets: function (element, datasets) {
        datasets.forEach(function (dataset) {
            let prop, key, value;

            for (prop in dataset) {
                if ('name' === prop) {
                    key = 'data-' + dataset[prop];
                }

                if ('value' === prop) {
                    value = dataset[prop];
                }

                element.setAttribute(key, value);
            }
        });
    }
}