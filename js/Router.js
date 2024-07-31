let Router = {

    init: function () {
        this.loadConfig();
    },

    loadConfig: function () {
        let xhr      = new XMLHttpRequest(),
            async    = true,
            method   = 'get',
            url      = location.protocol + '//' + location.host + '/cfg/routes.json';

        xhr.onreadystatechange = function ()  {
            if (XMLHttpRequest.DONE === xhr.readyState) {
                Router.cfg = JSON.parse(xhr.response);
            }
        };

        xhr.open(method, url, async);
        xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send();
    },

    getCurrentRoute: function () {
        console.log(this.cfg); // NULL?!
    },
}