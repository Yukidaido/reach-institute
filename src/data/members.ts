export type Member = {
  role: string;
  name: string;
  year: string;
  comment: string;
  imagePath: string;
};

export const members: Member[] = [
  {
    role: "共同代表",
    name: "大洞悠暉",
    year: "高校2年生",
    comment: "",
    // TODO: public/images/ に実際の写真を追加して差し替えること
    imagePath: "/images/member-representative.jpg",
  },
  {
    role: "共同代表",
    name: "神保想叶",
    year: "高校2年生",
    comment: "『社会の構造に、もっと多様な声を届けたい』。そんな思いから『Reach』は生まれました。世代を問わず、日々のリアルな声をテクノロジーとデータの力で、論理的な政策提言へと丁寧に紡いでいきます。より良い社会の選択肢を、皆さんと一緒につくっていきたいです。未来を担う世代のエネルギーや視点を大切にしながら、新しい民主主義のインフラを社会に実装していきたいと考えています。",
    // TODO: public/images/ に実際の写真を追加して差し替えること
    imagePath: "/images/member-co-representative.jpg",
  },
];