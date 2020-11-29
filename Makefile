build:
	docker build -t perjansson-web-v3 .

run:
	docker run -it -p 3000:3000 perjansson-web-v3

run-ci:
	docker run --rm -p 3000:3000 perjansson-web-v3
