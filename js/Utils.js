const Utils = {
    isArray: function (variable) {
        return (variable.constructor === Array);
    },

    isObject: function (variable) {
        return (variable.constructor === Object);
    },

    isUndefined: function (variable) {
        return ('undefined' === typeof variable);
    },

    inArray: function (needle, haystack) {
        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle) {
                return true;
            }
        }

        return false;
    }
}