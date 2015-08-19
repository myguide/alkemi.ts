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

class AlkemiRate
{
	public base: string;
	public compare: string;
	public value: number;

	constructor(base?: string, compare?: string)
	{
		this.base = base;
		this.compare = compare;
	}

	concat(): string
	{
		return "/" + this.base + "/" + this.compare;
	}

	convert(value: number): number
	{
		return value * this.value;
	}
}
