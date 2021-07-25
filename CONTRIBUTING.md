# CONTRIBUTING
## mainとのmerge

* 初回

```
npm install
```

* フォーマッタをかけてからmerge

```
npx prettier --write 編集したファイル
```

## debug

* babelをcdnして, jsを別ファイルに切り出すと, CORSでエラーが生じる([参考](https://qiita.com/terufumi1122/items/39b2a3659bc585c07f64))
* debugはサーバを立ち上げて行う
  * なんでもいいがとりあえずnpmのやつの手順は以下

* 初回
```
npm install
```

* サーバの立ち上げ

```
http-server
```
