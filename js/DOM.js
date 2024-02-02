let DOM = {
    createTableCell: function () {
        let td = document.createElement('td');

        return td;
    },

    createButton: function (label, attributes, cssSelectors, datasets) {
        let btn = document.createElement('button');

        btn.innerHTML = label;

        if (attributes.constructor === Array) {
            attributes.forEach(function (attribute) {
                btn.setAttribute(attribute.name, attribute.value);
            });
        }

        if (cssSelectors.constructor === Array) {
            cssSelectors.forEach(function (cssClass) {
                btn.classList.add(cssClass);
            });
        }

        return btn;
    }
}