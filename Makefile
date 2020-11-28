build:
	docker build -t perjansson.github-io-v3 .

run:
	docker run -it -p 3000:3000 perjansson.github-io-v3