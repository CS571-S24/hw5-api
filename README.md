build
```bash
docker build . -t ctnelson1997/cs571-s24-hw5-api
docker push ctnelson1997/cs571-s24-hw5-api
```

run
```bash
docker pull ctnelson1997/cs571-s24-hw5-api
docker run --name=cs571_s24_hw5_api -d --restart=always -p 58105:58105 -v /cs571/s24/hw5:/cs571 ctnelson1997/cs571-s24-hw5-api
```

run fa
```bash
docker pull ctnelson1997/cs571-s24-hw5-api
docker run --name=cs571_fa_s24_hw5_api -d --restart=always -p 59105:58105 -v /cs571_fa/s24/hw5:/cs571 ctnelson1997/cs571-s24-hw5-api
```