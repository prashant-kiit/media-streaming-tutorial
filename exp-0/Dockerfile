FROM alpine:3.19

RUN apk add --no-cache \
    build-base \
    pcre-dev \
    zlib-dev \
    openssl-dev \
    wget \
    git

WORKDIR /tmp

# Download nginx
RUN wget http://nginx.org/download/nginx-1.28.0.tar.gz && \
    tar -zxvf nginx-1.28.0.tar.gz

# Download RTMP module
RUN git clone https://github.com/arut/nginx-rtmp-module.git

WORKDIR /tmp/nginx-1.28.0

RUN ./configure \
    --with-http_ssl_module \
    --add-module=../nginx-rtmp-module && \
    make && make install

COPY nginx.conf /usr/local/nginx/conf/nginx.conf

EXPOSE 1935 8080

CMD ["/usr/local/nginx/sbin/nginx", "-g", "daemon off;"]