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

class AlkemiRequest
{
	public rate: AlkemiRate;
	public base: string;

	private request: XMLHttpRequest;

	constructor()
	{
		this.base = "http://currency.groundsix.com";
		this.request = new XMLHttpRequest();
	}

	make(uri: string, callback: (r: any) => void): void
	{
		var rate 	= this.rate,
			request = this.request;

		request.open('GET', this.base + uri + rate.concat(), true);
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				var response = JSON.parse(request.responseText);
				rate.value = parseFloat(response.rate);
				callback(rate);
			}
		}

		request.onerror = function() {
			console.log("There was a connection error of some sort");
		}

		request.send();
	}
}
