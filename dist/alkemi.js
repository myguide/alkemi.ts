// alkemi v0.0.1
//
// (c) myguide.io 2015
//
// @package alkemi
// @version 0.0.1
//
// @author Harry Lawrence <http://github.com/hazbo>
//
// License: MIT
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
var AlkemiRequest = (function () {
    function AlkemiRequest() {
        this.base = "http://currency.groundsix.com";
        this.request = new XMLHttpRequest();
    }
    AlkemiRequest.prototype.make = function (uri, callback) {
        var rate = this.rate, request = this.request;
        request.open('GET', this.base + uri + rate.concat(), true);
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var response = JSON.parse(request.responseText);
                rate.value = parseFloat(response.rate);
                callback(rate);
            }
        };
        request.onerror = function () {
            console.log("There was a connection error of some sort");
        };
        request.send();
    };
    return AlkemiRequest;
})();
// alkemi v0.0.1
//
// (c) myguide.io 2015
//
// @package alkemi
// @version 0.0.1
//
// @author Harry Lawrence <http://github.com/hazbo>
//
// License: MIT
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
var AlkemiRate = (function () {
    function AlkemiRate(base, compare) {
        this.base = base;
        this.compare = compare;
    }
    AlkemiRate.prototype.concat = function () {
        return "/" + this.base + "/" + this.compare;
    };
    AlkemiRate.prototype.convert = function (value) {
        return value * this.value;
    };
    return AlkemiRate;
})();
// alkemi v0.0.1
//
// (c) myguide.io 2015
//
// @package alkemi
// @version 0.0.1
//
// @author Harry Lawrence <http://github.com/hazbo>
//
// License: MIT
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
var Alkemi = (function () {
    function Alkemi() {
        this.rate = new AlkemiRate();
    }
    Alkemi.prototype.rates = function (base, compare, callback) {
        var request = new AlkemiRequest();
        request.rate = new AlkemiRate(base, compare);
        request.make("/rates", callback);
    };
    return Alkemi;
})();
this.Alkemi = new Alkemi();
