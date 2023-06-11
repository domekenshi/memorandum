#ベースイメージ
FROM ruby:2.7

#アプリケーションのソースコード
WORKDIR var/www
#コピー先
COPY  ./src /var/www

RUN bundle config --local set path 'vendor/bundle'
RUN bundle install


#動かしてうまくいったコマンドを記述していく
CMD ["/bin/bash"]
