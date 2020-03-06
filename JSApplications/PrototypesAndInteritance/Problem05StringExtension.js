(function () {
    let str = 'my string';

    String.prototype.ensureStart = function (strToAppend) {
        return strToAppend + this;
    }

    String.prototype.ensureEnd = function (strToAppend) {
        return this + strToAppend;
    }

    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        }

        return false;
    }

    String.prototype.truncate = function (n) {
        if (this.length < n) {
            return this.toString();
        } else if (n < 4) {
            return '.'.repeat(n);
        } else if (n < this.length) {
            let lastSpace = this.substr(0, 0 - 2).lastIndexOf(' ');

            if (lastSpace !== -1) {
                return this.substr(0, lastSpace).concat('...');

            } else {
                return this.substr(0, n - 3).concat('...');

            }
        }
    }

    String.prototype.format = function (string, ...params) {
        return params
            .reduce((str, param, i) => {
                return str.replace(`{${i}}`, param);
            }, string);
    }
}())
