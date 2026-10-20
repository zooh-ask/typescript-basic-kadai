type Post = {
  id: number;
  title: string;
  body: string;
  published: boolean;
};

type EditingPost = Partial<Post>;

type SummaryPost = Pick<Post, 'id' | 'title'>

type PublishedPost = Readonly<Post>;

const editingPost: EditingPost = {
  id: 1,
  published: false,
};

const summaryPost: SummaryPost = {
  id: 2,
  title: 'タイトル2',
};

const publishedPost: PublishedPost = {
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