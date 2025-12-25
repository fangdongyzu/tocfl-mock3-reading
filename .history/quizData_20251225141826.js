const quizData = [
  // Part 1: Sentence Comprehension (1-15)
  {
    "id": 1,
    "part": 1,
    "question": "弟弟今天很累，什麼事都不想做。",
    "image": "images/1.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 2,
    "part": 1,
    "question": "他拿著手機幫朋友照相。",
    "image": "images/2.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 3,
    "part": 1,
    "question": "這杯飲料太甜了，小林想加一點水。",
    "image": "images/3.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 4,
    "part": 1,
    "question": "林小姐昨天晚上睡覺以前喝了一杯牛奶。",
    "image": "images/4.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 5,
    "part": 1,
    "question": "他今天很晚才起床，所以起床以後，就吃午餐。",
    "image": "images/5.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 6,
    "part": 1,
    "question": "房間的門跟窗戶都是關著的。",
    "image": "images/6.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 7,
    "part": 1,
    "question": "大明昨天很晚睡覺，因為電影太好看了。",
    "image": "images/7.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 8,
    "part": 1,
    "question": "經過兩個路口以後，就會看見公園旁邊的車站。",
    "image": "images/8.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 9,
    "part": 1,
    "question": "她已經寫完作業，正在聽音樂。",
    "image": "images/9.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 10,
    "part": 1,
    "question": "他看書看得太累了，所以躺在床上就睡著了。",
    "image": "images/10.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 11,
    "part": 1,
    "question": "他們都先穿襪子，再穿褲子。",
    "image": "images/11.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 12,
    "part": 1,
    "question": "媽媽每天七點起床，但是今天比較晚。",
    "image": "images/12.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 13,
    "part": 1,
    "question": "他的車子壞了，所以今天坐計程車上班。",
    "image": "images/13.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 14,
    "part": 1,
    "question": "她用電腦練習寫字。",
    "image": "images/14.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 15,
    "part": 1,
    "question": "很多人正在排隊掛號。",
    "image": "images/15.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "A",
    "remark": ""
  },

  // Part 2: Picture Description (16-30)
  {
    "id": 16,
    "part": 2,
    "question": "",
    "image": "images/16.png",
    "options": ["外面出太陽。", "他們在看電視。", "水果放在椅子上。"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 17,
    "part": 2,
    "question": "",
    "image": "images/17.png",
    "options": ["弟弟的眼鏡壞了。", "弟弟找不到眼鏡。", "弟弟戴著眼鏡睡覺。"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 18,
    "part": 2,
    "question": "",
    "image": "images/18.png",
    "options": ["這裡是機場。", "有位女生在打球。", "小男孩正在騎腳踏車。"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 19,
    "part": 2,
    "question": "",
    "image": "images/19.png",
    "options": ["小華有三天語法課。", "小華星期三上音樂課。", "小華星期二會用電腦。"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 20,
    "part": 2,
    "question": "",
    "image": "images/20.png",
    "options": ["美美要大華帶禮物來。", "美美要請小芳到餐廳吃飯。", "小芳請大華一起到美美的家。"],   
    "answer": "C",
    "remark": ""
  },
  {
    "id": 21,
    "part": 2,
    "question": "",
    "image": "images/21.png",
    "options": ["全票比半票貴兩百元。", "晚上八點可以看電影。", "中午以前的電影有兩場。"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 22,
    "part": 2,
    "question": "",
    "image": "images/22.png",
    "options": ["星期一可能要帶雨傘。", "星期二天氣可能不好。", "星期二比星期一涼快。"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 23,
    "part": 2,
    "question": "",
    "image": "images/23.png",
    "options": ["大家都吃完飯了。", "全部的人都拿著杯子。", "四個人坐在圓桌前面。"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 24,
    "part": 2,
    "question": "",
    "image": "images/24.png",
    "options": ["每個人都戴著帽子。", "大家都在唱歌和跳舞。", "蛋糕旁邊有一些禮物。"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 25,
    "part": 2,
    "question": "",
    "image": "images/25.png",
    "options": ["她只用一條腿站著。", "她的手放在身體前面。", "她戴著一頂漂亮的帽子。"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 26,
    "part": 2,
    "question": "",
    "image": "images/26.png",
    "options": ["來這家公司只能租一種車。", "想搭計程車可以打電話給這家公司。", "租車的價格，一天最少一千二百元。"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 27,
    "part": 2,
    "question": "",
    "image": "images/27.png",
    "options": ["醫院離他最遠。", "今天商店都開門。", "公車站在飲料店前面。"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 28,
    "part": 2,
    "question": "",
    "image": "images/28.png",
    "options": ["林心心跟王老師學中文。", "卡片是王老師寫給林心心的。", "他們約好還要再上三個月的課。"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 29,
    "part": 2,
    "question": "",
    "image": "images/29.png",
    "options": ["十月只有兩間房間比較便宜。", "十月五日住兩人房可以得到禮物。", "來來旅館每個月都有特別的活動。"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 30,
    "part": 2,
    "question": "",
    "image": "images/30.png",
    "options": ["去這家店喝紅茶，就送早餐。", "在這家店吃早餐，就送一杯飲料。", "這家店早上七點關門，下午兩點關門。"],
    "answer": "B",
    "remark": ""
  },

  // Part 3: Gap Filling (31-35) - Shared image
  {
    "id": 31,
    "part": 3,
    "question": "屋子裡一個人 ______ 沒有。",
    "image": "images/31-35.png",
    "options": ["就", "也", "些"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 32,
    "part": 3,
    "question": "花瓶裡 ______ 很多漂亮的花。",
    "image": "images/31-35.png",
    "options": ["有", "掛", "換"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 33,
    "part": 3,
    "question": "小狗在桌子下睡得很 ______。",
    "image": "images/31-35.png",
    "options": ["隨便", "方便", "舒服"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 34,
    "part": 3,
    "question": "兩隻貓一起在沙發 ______ 玩兒。",
    "image": "images/31-35.png",
    "options": ["上面", "下面", "裡面"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 35,
    "part": 3,
    "question": "王先生一家人一個小時後 ______ 回來。",
    "image": "images/31-35.png",
    "options": ["再", "才", "常"],
    "answer": "B",
    "remark": ""
  },

  // Part 4: Paragraph Completion (36-45)
  {
    "id": 36,
    "part": 4,
    "question": "我今天跟我的台灣朋友一起去百貨公司。台灣的百貨公司（36）",
    "image": "",
    "options": ["一雙手套", "外面很漂亮", "買完東西以後", "買完東西以前", "什麼東西都有", "樓下的餐廳吃晚餐"],
    "answer": "B",
    "remark": "Paragraph 1"
  },
  {
    "id": 37,
    "part": 4,
    "question": "裡面（37）",
    "image": "",
    "options": ["一雙手套", "外面很漂亮", "買完東西以後", "買完東西以前", "什麼東西都有", "樓下的餐廳吃晚餐"],
    "answer": "E",
    "remark": "Paragraph 1"
  },
  {
    "id": 38,
    "part": 4,
    "question": "我買了幾件毛衣，還有（38）",
    "image": "",
    "options": ["一雙手套", "外面很漂亮", "買完東西以後", "買完東西以前", "什麼東西都有", "樓下的餐廳吃晚餐"],
    "answer": "A",
    "remark": "Paragraph 1"
  },
  {
    "id": 39,
    "part": 4,
    "question": "我們（39）",
    "image": "",
    "options": ["一雙手套", "外面很漂亮", "買完東西以後", "買完東西以前", "什麼東西都有", "樓下的餐廳吃晚餐"],
    "answer": "C",
    "remark": "Paragraph 1"
  },
  {
    "id": 40,
    "part": 4,
    "question": "就到（40）",
    "image": "",
    "options": ["一雙手套", "外面很漂亮", "買完東西以後", "買完東西以前", "什麼東西都有", "樓下的餐廳吃晚餐"],
    "answer": "F",
    "remark": "Paragraph 1"
  },
  {
    "id": 41,
    "part": 4,
    "question": "我不上課的時候，只要有空就找工作做，所以（41）",
    "image": "",
    "options": ["我最喜歡的", "我還是願意", "那就更好了", "心情總是特別好", "心情總是特別壞", "有很多工作經驗"],
    "answer": "F",
    "remark": "Paragraph 2"
  },
  {
    "id": 42,
    "part": 4,
    "question": "在這些工作裡，（42）",
    "image": "",
    "options": ["我最喜歡的", "我還是願意", "那就更好了", "心情總是特別好", "心情總是特別壞", "有很多工作經驗"],
    "answer": "A",
    "remark": "Paragraph 2"
  },
  {
    "id": 43,
    "part": 4,
    "question": "工作的時候，（43）",
    "image": "",
    "options": ["我最喜歡的", "我還是願意", "那就更好了", "心情總是特別好", "心情總是特別壞", "有很多工作經驗"],
    "answer": "D",
    "remark": "Paragraph 2"
  },
  {
    "id": 44,
    "part": 4,
    "question": "要是沒有那種奇怪的味道，（44）",
    "image": "",
    "options": ["我最喜歡的", "我還是願意", "那就更好了", "心情總是特別好", "心情總是特別壞", "有很多工作經驗"],
    "answer": "C",
    "remark": "Paragraph 2"
  },
  {
    "id": 45,
    "part": 4,
    "question": "雖然有這樣的問題，（45）到書店工作。",
    "image": "",
    "options": ["我最喜歡的", "我還是願意", "那就更好了", "心情總是特別好", "心情總是特別壞", "有很多工作經驗"],
    "answer": "B",
    "remark": "Paragraph 2"
  },

  // Part 5: Reading Comprehension (46-50)
  {
    "id": 46,
    "part": 5,
    "question": "小明的爸爸對小明說：「這裡有十元，你到郵局買兩張郵票，然後把這兩封信寄出去，這一封是給王伯伯的，另外一封是給李伯伯的。」小明回來以後，還給爸爸五塊錢。爸爸問小明：「怎麼還剩五塊錢呢？」小明回答：「我把給王伯伯的信裝在給李伯伯的信裡面，這樣就不必多花五塊錢啊！」<br/>Q: 小明把信寄出去以後，會發生什麼事？",
    "image": "",
    "options": ["王伯伯收到兩封信", "李伯伯收到兩封信", "李伯伯要到王伯伯家拿信", "王伯伯和李伯伯都沒收到信"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 47,
    "part": 5,
    "question": "最近越來越流行上網買東西，不論是吃的、穿的還是用的，只要輕鬆點幾下滑鼠就買得到，還能到處比較價錢再買。不過上網買東西也有一些問題，像是衣服不能先試穿，或是一不小心就被「買一送一」、「滿兩千送一百」的廣告吸引，買了一堆本來不必買的東西。這樣看來，上網買東西雖然方便，卻不一定省錢。<br/>Q: ",
    "image": "",
    "options": ["可以少花一些錢", "容易買太多東西", "能買到最流行的衣服", "不像大家說的那麼方便"],
    "answer": "B",
    "remark": "寫這段短文的人覺得上網買東西怎麼樣？"
  },
  {
    "id": 48,
    "part": 5,
    "question": "我最近學會一道臺灣菜，叫做「鹹蛋苦瓜」，這道菜是房東陳媽媽教我做的。以前，我覺得苦瓜吃起來和藥一樣苦，一直不喜歡吃。可是陳媽媽教我做的苦瓜一點都不苦，吃起來又香又甜。而且陳媽媽說，吃沒煮過的苦瓜對身體更好，還說下一次要教我用沒煮過的苦瓜做好喝的果汁，我學會以後，要先做給我的好朋友玉芳喝，希望她和我一樣愛上苦瓜。<br/>Q: ",
    "image": "",
    "options": ["他一道臺灣菜也不會做", "陳媽媽和他一樣不吃苦瓜", "他發現苦瓜在臺灣是一種藥", "他的好朋友玉芳也不喜歡苦瓜"],
    "answer": "D",
    "remark": "寫這段話的人說了什麼？"
  },
  {
    "id": 49,
    "part": 5,
    "question": "有一天，李先生和陳先生一起聊天。陳先生說：「我每天都很忙，一天要工作二十五個小時。」李先生說：「可是，一天只有二十四小時啊！」陳先生回答他：「沒關係，我每天可以早一個小時起床。」",
    "image": "",
    "options": ["陳先生每天幾點起床", "李先生的數學不太好", "陳先生沒有李先生忙", "李先生不相信陳先生"],
    "answer": "D",
    "remark": "這段短文說了什麼事？"
  },
  {
    "id": 50,
    "part": 5,
    "question": "有三個學生，因為不喜歡每天去餐廳吃飯，開始自己學習做菜。但是每次做菜的時候，都聞到鄰居家的香味，聞起來比自己煮的香。所以他們決定開一家網路廚房公司，讓學生可以和會做菜的媽媽們買美食，這家公司負責把食物送到學生宿舍。很多媽媽認為，不管煮給幾個人吃，要花的時間差不多，所以願意加入這家公司，讓這家公司的三位老闆也賺了不少錢。",
    "image": "",
    "options": ["出租廚房給學生用", "請媽媽們教學生做菜", "幫學生把家人煮的菜送到學校", "讓不太會煮菜的人吃到好吃的菜"],
    "answer": "D",
    "remark": "這家網路廚房公司有什麼服務？"
  }
];
