FROM ubuntu:24.04

RUN apt update
RUN apt install -y ffmpeg

WORKDIR /media
COPY sample.mp4 .

ENTRYPOINT [ "ffmpeg", "-re", "-i", "sample.mp4", "-c:v", "libx264", "-c:a", "aac", "-f", "flv", "rtmp://nginx-c:1935/hls/my-video" ]

# https://github.com/nginx/docker-nginx/blob/master/modules/Dockerfile