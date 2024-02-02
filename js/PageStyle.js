let PageStyle = {
    files: [],

    loadFile: function (file) {
        let head, link;

        if (!this.isFileInDOM(file)) {
            head = document.getElementsByTagName('head').item(0);
            link = document.createElement('link');

            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('href', file);

            head.appendChild(link);
        }
    },

    loadFiles: function () {
        this.files.forEach(function (file) {
            PageStyle.loadFile(file);
        });
    },

    registerFile: function (path) {
        if (!this.isFileRegistered(path)) {
            this.files.push(path);
        }

        return this;
    },

    isFileRegistered: function (filepath) {
        let isRegistered = false,
            idx          = 0;

        while (!isRegistered) {
            if (this.files[idx] === filepath) {
                isRegistered = true;
            }
        }

        return isRegistered;
    },

    isFileInDOM: function (file) {
        let linkElements = document.getElementsByTagName('link'),
            isInDOM      = false;

        for (let element of linkElements) {
            if (
                'stylesheet' === element.getAttribute('rel')
                && file === element.getAttribute('href')
            ) {
                isInDOM = true;
            }
        }

        return isInDOM;
    }
}






