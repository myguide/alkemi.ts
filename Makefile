all: alkemi

alkemi: src clean
	tsc
	gulp build

clean:
	rm -f dist/*.js
