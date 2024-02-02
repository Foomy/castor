let Ajax = {
    loadContent: function (url, method, callback) {
        let xhr    = new XMLHttpRequest(),
            async  = true;

        xhr.onreadystatechange = function () {
            if (XMLHttpRequest.DONE === xhr.readyState) {
                if (typeof callback === 'function') {
                    return callback(xhr.response, xhr.status);
                }
            }
        };

        xhr.open(method, url, async);
        xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send();
    }
}