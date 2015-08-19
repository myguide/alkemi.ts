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

class Alkemi
{
	private base: string;
	private rate: AlkemiRate;

	constructor()
	{
		this.rate = new AlkemiRate();
	}

	rates(base: string, compare: string, callback: (r: AlkemiRate) => void)
	{
		var request  = new AlkemiRequest();
		request.rate = new AlkemiRate(base, compare);

		request.make("/rates", callback);
	}
}
this.Alkemi = new Alkemi();
