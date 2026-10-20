"use strict";
const editingPost = {
    id: 1,
    published: false,
};
const summaryPost = {
    id: 2,
    title: 'タイトル2',
};
const publishedPost = {
    id: 3,
    title: 'タイトル3',
    body: '投稿内容3',
    published: true,
};
console.log('---- 編集中の投稿データ ----');
console.log(editingPost);
console.log('---- 一覧表示用の投稿データ ----');
console.log(summaryPost);
console.log('---- 公開済みの投稿データ ----');
console.log(publishedPost);
