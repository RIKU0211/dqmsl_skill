var skillList =
[
{ name:"メラ", num_skill:"0" },
{ name:"メラミ", num_skill:"1" },
{ name:"ギラ", num_skill:"2" },
{ name:"ベギラマ", num_skill:"3" },
{ name:"イオ", num_skill:"4" },
{ name:"イオラ", num_skill:"5" },
{ name:"ヒャド", num_skill:"6" },
{ name:"ヒャダルコ", num_skill:"7" },
{ name:"バギ", num_skill:"8" },
{ name:"バギマ", num_skill:"9" },
{ name:"デイン", num_skill:"10" },
{ name:"ライデイン", num_skill:"11" },
{ name:"ドルマ", num_skill:"12" },
{ name:"ドルクマ", num_skill:"13" },
{ name:"ザキ", num_skill:"14" },
{ name:"ザラキ", num_skill:"15" },
{ name:"スライム斬り", num_skill:"16" },
{ name:"ドラゴン斬り", num_skill:"17" },
{ name:"しぜん斬り", num_skill:"18" },
{ name:"まじゅう斬り", num_skill:"19" },
{ name:"ぶっしつ斬り", num_skill:"20" },
{ name:"あくま斬り", num_skill:"21" },
{ name:"ゾンビ斬り", num_skill:"22" },
{ name:"いなずま斬り", num_skill:"23" },
{ name:"火炎斬り", num_skill:"24" },
{ name:"ひょうけつ斬り", num_skill:"25" },
{ name:"ホーリーエッジ", num_skill:"26" },
{ name:"ふうじん斬り", num_skill:"27" },
{ name:"魔神斬り", num_skill:"28" },
{ name:"つるぎのまい", num_skill:"29" },
{ name:"メタル斬り", num_skill:"30" },
{ name:"かぶとわり", num_skill:"31" },
{ name:"マヌーサ斬り", num_skill:"32" },
{ name:"もうどく斬り", num_skill:"33" },
{ name:"メダパニ斬り", num_skill:"34" },
{ name:"どく攻撃", num_skill:"35" },
{ name:"ねむり攻撃", num_skill:"36" },
{ name:"いなずま", num_skill:"37" },
{ name:"かまいたち", num_skill:"38" },
{ name:"ばくれつけん", num_skill:"39" },
{ name:"みなごろし", num_skill:"40" },
{ name:"めいそう", num_skill:"41" },
{ name:"おたけび", num_skill:"42" },
{ name:"だいぼうぎょ", num_skill:"43" },
{ name:"火の息", num_skill:"44" },
{ name:"火炎の息", num_skill:"45" },
{ name:"はげしい炎", num_skill:"46" },
{ name:"つめたい息", num_skill:"47" },
{ name:"こおりの息", num_skill:"48" },
{ name:"こごえる吹雪", num_skill:"49" },
{ name:"あまい息", num_skill:"50" },
{ name:"どくの息", num_skill:"51" },
{ name:"もうどくの息", num_skill:"52" },
{ name:"ホイミ", num_skill:"53" },
{ name:"ベホイミ", num_skill:"54" },
{ name:"ベホマラー", num_skill:"55" },
{ name:"ザオラル", num_skill:"56" },
{ name:"ザオリク", num_skill:"57" },
{ name:"キアリー", num_skill:"58" },
{ name:"バイキルト", num_skill:"59" },
{ name:"スカラ", num_skill:"60" },
{ name:"スクルト", num_skill:"61" },
{ name:"ピオラ", num_skill:"62" },
{ name:"ピオリム", num_skill:"63" },
{ name:"マホカンタ", num_skill:"64" },
{ name:"ルカニ", num_skill:"65" },
{ name:"ルカナン", num_skill:"66" },
{ name:"ボミエ", num_skill:"67" },
{ name:"ボミオス", num_skill:"68" },
{ name:"ラリホー", num_skill:"69" },
{ name:"ラリホーマ", num_skill:"70" },
{ name:"マヌーサ", num_skill:"71" },
{ name:"メダパニ", num_skill:"72" },
];
var materialList = 
[
  { nom_material:"0", name:"メカタマゴロン", skill:["ピオラ", "マヌーサ", "メタル斬り", "スカラ", "イオラ"] },
  { nom_material:"1", name:"リザードエッグ", skill:["メラ", "かまいたち", "火炎斬り", "ボミオス", "ルカナン"] },
  { nom_material:"2", name:"タマゴーレム", skill:["ギラ", "マヌーサ斬り", "ぶっしつ斬り", "イオ", "スクルト"] },
  { nom_material:"3", name:"ドラゴンエッグ", skill:["ギラ", "メラミ", "ドラゴン斬り", "ドルクマ"] },
  { nom_material:"4", name:"タマゴロン", skill:["ギラ", "ボミエ", "あまい息", "メダパニ斬り", "ライデイン", "ホーリーエッジ"] },
  { nom_material:"5", name:"ワンダーエッグ", skill:["ホイミ", "火炎の息", "どくの息", "スライム斬り", "デイン"] },
  { nom_material:"6", name:"どくゴロン", skill:["", "", "", ""] },
  { nom_material:"7", name:"キバゴロン", skill:["", "", "", ""] },
  { nom_material:"8", name:"ホネゴロン", skill:["", "", "", ""] },
  { nom_material:"9", name:"くまゴロン", skill:["", "", "", ""] },
  { nom_material:"10", name:"ツリーエッグ", skill:["", "", "", ""] },
  { nom_material:"11", name:"ゴーストエッグ", skill:["", "", "", ""] },
  { nom_material:"12", name:"リーフエッグ", skill:["", "", "", ""] },
  { nom_material:"13", name:"デビルエッグ", skill:["", "", "", ""] },
  { nom_material:"14", name:"キングタマゴロン", skill:["", "", "", ""] },
  { nom_material:"15", name:"ニジゴロン", skill:["", "", "", ""] },
];

/*
*
*
*/
var charaList = 
[
  {
    no:"0",
    name:"スライムカルゴ", 
    skill:["キアリー", "めいそう"],
    evo_skill:[],
    evollution_1:[ 4, 4, 5 ],
  },
  {
    no:"1",
    name:"ボックススライム", 
    skill:["メラ"],
    evo_skill:["メラ"],
    evollution_1:[ 4, 4, 5 ],
  },
  {
    no:"2",
    name:"マリンスライム",
    skill:["ヒャド", "スクルト"],
    evo_skill:[skillList[6].name, skillList[69].name],
    evollution_1:[4, 5, 5],
  },
  {
    no:"3",
    name:"ベホマスライム", 
    skill:["ホイミ", "ベホイミ"],
    evo_skill:[skillList[53].name, skillList[63].name],
    evollution_1:[4, 5, 5],
    evollution_2:[1, 4, 5, 5],
  },
  {
    no:"4",
    name:"ダークナイト",
    skill:["ベギラマ", "ふうじん斬り"],
    evo_skill:[skillList[23].name, skillList[25].name, skillList[26].name],
    evollution_1:[1, 4, 5, 5],
    evollution_2:[1, 3, 4, 5],
  },
  {
    no:"5",
    name:"スライムベホマズン", 
    skill:["ベホマラー", "ザオリク"],
    evo_skill:[skillList[56].name],
    evollution_1:[1, 3, 4, 5],
  },
  {
    no:"6",
    name:"ビットバイパー", 
    skill:["マヌーサ斬り", "おたけび"],
    evo_skill:[],
    evollution_1:[1, 1, 3],
    evollution_2:[1, 3, 3],
  },
  {
    no:"7",
    name:"", 
    skill:[],
    evollution_1:[],
  },
  {
    no:"8",
    name:"", 
    skill:[],
    evollution_1:[],
  },
];
