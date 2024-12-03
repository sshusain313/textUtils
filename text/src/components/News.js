import React from 'react'
import NewsItem from './NewsItem'

const News = (props) => {
  return (
    articles=[
      {
        "status": "ok",
        "totalResults": 88,
        "articles": [
        {
        "source": {
        "id": null,
        "name": "Digital Trends"
        },
        "author": "Trevor Mogg",
        "title": "Apple Vision Pro launch nears as staff get special training",
        "description": "Apple is making final preparations for the highly anticipated launch of the Vision Pro, the $3,499 mixedreality headset that it unveiled in June.",
        "url": "https://www.digitaltrends.com/computing/applevisionprolaunchnearsasstaffgetspecialtraining/",
        "urlToImage": "https://www.digitaltrends.com/wpcontent/uploads/2023/06/applevisionprowwdc202320.png?resize=1200%2C630&p=1",
        "publishedAt": "20231211T03:20:35Z",
        "content": "Apple is making final preparations for the highly anticipated launch of the Vision Pro, the $3,499 mixedreality headset that it unveiled in June.\r\nAs it’s a new product line for the tech giant, a cr… [+1685 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Malcolm Owen)",
        "title": "Senator Warren wades into Apple's Beeper fight with irrelevant antitrust rhetoric",
        "description": "Senator Elizabeth Warren has publicly sided with Beeper in the public fight over iMessage access, using the issue to try and continue to push an antiBig Tech agenda that has little relevancy in this particular matter.Apple's decision to close down access to …",
        "url": "https://appleinsider.com/articles/23/12/11/senatorwarrenwadesintoapplesbeeperfightwithirrelevantantitrustrhetoric",
        "urlToImage": "https://photos5.appleinsider.com/gallery/5764411742757583117317iMessageonAndroidHeroxlxl.jpg",
        "publishedAt": "20231211T01:04:00Z",
        "content": "Senator Elizabeth Warren has publicly sided with Beeper in the public fight over iMessage access, using the issue to try and continue to push an antiBig Tech agenda that has little relevancy in this… [+4430 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.jp"
        },
        "author": "はらいさん",
        "title": "Mac周辺アクセサリーのUSBC化は次の春",
        "description": "今年はiPhone 15シリーズに続きAirPods Pro（第2世代）やApple PencilがUSBCポート化を果たしましたが、Apple（アップル）の純正キーボードや純正マウスのUSBC化は来年の春に実現するかもしれません。",
        "url": "https://www.gizmodo.jp/2023/12/macaccessoryusbc.html",
        "urlToImage": "https://media.loomapp.com/gizmodo/dist/images/2023/12/11/231211macusbc.jpg?w=1280&h=630&f=jpg",
        "publishedAt": "20231211T03:00:00Z",
        "content": "iPhone 15AirPods Pro2Apple PencilUSBCAppleUSBC\r\nWeiboMagic KeyboardMagic MouseMagic Trackpad2024USBCM3MacBook Air20243Apple\r\n10AppleM3iMacUSBCiMacLightning\r\nMac3USBCMacLightning...\r\nMagic MouseU… [+28 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.jp"
        },
        "author": "mayumine",
        "title": "AI分野で出遅れているApple、開発者向けAIツール「MLX」発表",
        "description": "Appleがオープンソースの機械学習フレームワーク「MLX」発表。開発者向けAIツール。",
        "url": "https://www.gizmodo.jp/2023/12/machinelearningframeworkapplmlx.html",
        "urlToImage": "https://media.loomapp.com/gizmodo/dist/images/2023/12/11/shutterstock_2334994639.jpg?w=1280&h=630&f=jpg",
        "publishedAt": "20231211T02:00:00Z",
        "content": "GoogleAIGeminiAppleAI\r\nAppleMLXGithub\r\nApple\r\nMLXApple\r\nAppleAwni JannunX\r\nJust in time for the holidays, we are releasing some new software today from Apple machine learning research.\r\nMLX is an eff… [+497 chars]"
        },
        {
        "source": {
        "id": "lenta",
        "name": "Lenta"
        },
        "author": "Андрей Ставицкий",
        "title": "За владельцами iPhone следили с помощью клавиатуры",
        "description": "Хакеры нашли способ слежки за владельцами смартфонов Apple через сторонние клавиатуры. Киберперступники продавали пользователям, которые хотели следить за своими друзьями, знакомыми или другими людьми, вредоносные приложения. Программы позволяли установить на…",
        "url": "https://lenta.ru/news/2023/12/11/keyboard/",
        "urlToImage": "https://icdn.lenta.ru/images/2023/12/08/17/20231208170040745/share_eaed69ec821d9683fb224a34ce81eba3.jpg",
        "publishedAt": "20231211T03:27:29Z",
        "content": "Apple . PhoneArena.\r\n Certo Software. , , , , . iPhone , .\r\n , Apple App Store. TestFlight , App Store. 30 , 2,7 .\r\n , , . iPhone . «» iPhone.\r\n Apple , , iPhone. , ."
        },
        {
        "source": {
        "id": "lenta",
        "name": "Lenta"
        },
        "author": "Андрей Ставицкий",
        "title": "Смартфоны научились делиться данными с экстренными службами",
        "description": "Androidсмартфоны научили делиться данными о пользователях во время звонков в экстренные службы. Система работает на основе RapidSOS, которую теперь поддерживает Android. Пользователю необходимо заполнить определенную информацию о себе, которая будет передава…",
        "url": "https://lenta.ru/news/2023/12/11/rapidsos/",
        "urlToImage": "https://icdn.lenta.ru/images/2023/12/08/17/20231208170140951/share_0f1930fc693fb890b13942b56793979a.jpg",
        "publishedAt": "20231211T01:30:06Z",
        "content": "Android . Android Central.\r\n RapidSOS, Android. , , 911.\r\n , , , . « . , , », .\r\n , . « », « ». RapidSOS , Android, .\r\n 2022 Apple Emergency SOS . , , , , ."
        },
        {
        "source": {
        "id": null,
        "name": "Ifanr.com"
        },
        "author": "张明悦",
        "title": "早报｜iPhone 产品设计负责人将离职/余承东称华为明年将推出颠覆性产品/小米汽车发布会定档？知情人士回应",
        "description": "·苹果计划 2024 年彻底改革 iPad 产品线\n·马云之后，刘强东也在内网发声\n·理想汽车发布 OTA 5.0#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
        "url": "https://www.ifanr.com/1570270",
        "urlToImage": "https://s3.ifanr.com/images/ep/coverimages/yuan_fang_cover.jpg",
        "publishedAt": "20231211T00:21:45Z",
        "content": "OffWhite x Nike Air Terra Forma \r\niPhone Apple Watch \r\nMark Gurman Tang Tan 2 \r\nTang Tan John Ternus \r\nJohn Ternus Tang Tan iPhone Richard Dinh John Ternus Mac Kate Bergeron Apple Watch \r\nTang Tan i… [+1240 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Dnyuz.com"
        },
        "author": "New York Times",
        "title": "TOM CRUISE NEW BOSS?",
        "description": "TOM CRUISE NEW BOSS?\r\n\n \n \n \n (Top headline, 2nd story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Redstone reportedly in talks to sell PARAMOUNT... Developing...",
        "url": "https://dnyuz.com/2023/12/10/shariredstoneissaidtobeintalkstosellherstakeinmediaempire/",
        "urlToImage": "https://dnyuz.com/wpcontent/uploads/2023/12/ShariRedstoneIsSaidtoBeinTalkstoSell.jpg",
        "publishedAt": "20231211T01:28:36Z",
        "content": "The media mogul Shari Redstone is in talks to sell a controlling stake in National Amusements, the parent company of the sprawling news and entertainment empire that includes the Paramount movie stud… [+5090 chars]"
        },
        {
        "source": {
        "id": "elmundo",
        "name": "El Mundo"
        },
        "author": "Javier Attard",
        "title": "¿Qué está pasando con el Nolotil? \"Nos automedicamos demasiado, es peligroso\"",
        "description": "¿Es seguro el Nolotil? ¿Abusamos de los analgésicos? ¿Y qué pasa si nos automedicamos con antibióticos? Lo analizamos con Enfermera Saturada —el divulgador científico...",
        "url": "https://www.elmundo.es/podcasts/elmundoaldia/2023/12/11/65765657e4d4d8f85c8b4592.html",
        "urlToImage": "https://phantomelmundo.unidadeditorial.es/ca603380d84dd7ad52cc835bbb3bbdef/resize/1200/f/webp/assets/multimedia/imagenes/2023/12/11/17022536144465.jpg",
        "publishedAt": "20231211T00:22:52Z",
        "content": "¿Es seguro el Nolotil? ¿Abusamos de los analgésicos? ¿Y qué pasa si nos automedicamos con antibióticos? Lo analizamos con Enfermera Saturada —el divulgador científico Héctor Castiñeira— y con la farm… [+374 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Impress.co.jp"
        },
        "author": null,
        "title": "ゲオモバイル、整備済みのiPhone/iPadの取扱いを開始",
        "description": "ゲオストアは、「ゲオモバイル」の一部店舗で、アップル（Apple）認定の整備済みiPadや超美品iPhone/iPadの提供を開始した。",
        "url": "https://ktai.watch.impress.co.jp/docs/news/1553485.html",
        "urlToImage": "https://ktai.watch.impress.co.jp/img/ktw/list/1553/485/cont1.jpg",
        "publishedAt": "20231211T03:01:42Z",
        "content": "AppleiPadiPhone/iPad \r\n iPhone/iPadiPhone 11128GBSIM1006280 \r\n 10.2iPad9WiFi256GB110067980"
        },
        {
        "source": {
        "id": null,
        "name": "Deadline"
        },
        "author": "Patrick Hipes",
        "title": "Peter Bart: ‘Love Story’, The Movie Nobody Wanted To Talk About, Was A Surprise Even To Its Reluctant Star Ryan O’Neal",
        "description": "“Why is this like a dark secret? It’s just a movie.” Ryan O’Neal, who died this week at 82, was a smart, goodnatured man who was bemused by the contradictions of Hollywood. As he nervously awaited the release of Love Story five decades ago, he respected its …",
        "url": "https://deadline.com/2023/12/ryanoneallovestoryremembrance1235661041/",
        "urlToImage": "https://deadline.com/wpcontent/uploads/2023/12/LoveStory1.jpg?w=1024",
        "publishedAt": "20231211T01:22:18Z",
        "content": "“Why is this like a dark secret? It’s just a movie.”\r\nRyan O’Neal, who died this week at 82, was a smart, goodnatured man who was bemused by the contradictions of Hollywood. As he nervously awaited … [+3287 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Appbank.net"
        },
        "author": "岩佐",
        "title": "新型「iPad Air」には〝大画面モデル〟登場、発売日はいつ？",
        "description": "現行の「iPad Air」は10.9インチですが、Appleは近々12.9インチモデルの発売を計画していると噂されています。この新型「iPad Air」について、発売が近づいていることを示すリークが複数登場しています。 […]",
        "url": "https://www.appbank.net/2023/12/11/technology/2713715.php",
        "urlToImage": "https://www.appbank.net/wpcontent/uploads/2023/12/20231211thumb21.jpeg",
        "publishedAt": "20231211T02:58:22Z",
        "content": "iPad Air10.9Apple12.9iPad Air\r\n*Category:\r\n Technology\r\n12.9iPad Air\r\n12.9iPad Air12Apple\r\n12.9 iPad Air panel shipments started in December\r\n— @DSCCRoss\r\n12.9iPad Air12…\r\nAppleiPad AirApple1112.9iPa… [+629 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Livedoor.biz"
        },
        "author": "news4vip2",
        "title": "【アップル死亡】iPhoneデザイン担当者、辞める・・・",
        "description": "1: うんこ(秋田県) [US] 2023/12/09(土) 15:49:58.59 ID:JdX60eqS0● BE:194767121PLT(13001)\n sssp://img.5ch.net/ico/nida.gif （ブルームバーグ）： 米アップルの「iPhone」と「Apple Watch」のデザイン担当責任者が辞任すると、事情に詳しい複数の関係者が明らかにし...",
        "url": "http://news4vip.livedoor.biz/archives/52513450.html",
        "urlToImage": "https://livedoor.blogimg.jp/news4vip2/imgs/0/7/0752b988s.png",
        "publishedAt": "20231211T02:00:33Z",
        "content": "1: () [US] 2023/12/09() 15:49:58.59 ID:JdX60eqS0 BE:194767121PLT(13001)\r\nhttps://hayabusa9.5ch.net/test/read.cgi/news/1702104598/"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "David Phelan, Senior Contributor, \n David Phelan, Senior Contributor\n https://www.forbes.com/sites/davidphelan/",
        "title": "iPhone 16 And iPhone 16 Pro To Upgrade Important Apple Specialty, Insider Claims",
        "description": "Next year’s iPhones will have an improved hardware element which promises enhanced performance and new features, it’s claimed.",
        "url": "https://www.forbes.com/sites/davidphelan/2023/12/10/appleiphone16toupgradeessentialapplespecialtyinsiderclaims/",
        "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/652c43a6d571a649383fcfd6/0x0.jpg?format=jpg&crop=3115,2076,x0,y128,safe&height=900&width=1600&fit=bounds",
        "publishedAt": "20231211T00:00:01Z",
        "content": "The next flagship phone from Apple will be the iPhone 16 series, expected next fall. But rumors are already building and now there is a report from the highly reliable MingChi Kuo from TFI Securitie… [+2797 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "noreply@tinhte.vn (vn_ninja), vn_ninja",
        "title": "5 lý do để cho rằng 2024 có thể là một năm bước ngoặt với Apple",
        "description": "2023 là một năm có nhiều bản phát hành mang lại cảm xúc trái ngược nhau của Apple. Chúng ta đã có 2 thiết bị MacBook Pro dạng refresh, bản cập nhật watchOS được đại tu cùng với khả năng zoom được cải thiện trên camera của iPhone 15 Pro Max.",
        "url": "https://tinhte.vn/thread/5lydodechorang2024cothelamotnambuocngoatvoiapple.3746595/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachmentfiles/2023/12/8210329_coverAppleSanPhamMoi2024tinhte.jpg",
        "publishedAt": "20231211T02:36:39Z",
        "content": "Các mu iPad Pro 2021 và 2022 hu nh ging ht nhau tr chip và tính nng Apple Pencil Hover. Và các tin n cho bit Apple s ra mt các tu chn vi màn hình ln hn mt chút, ln lt là 11,1 và 13 inch trong nm 2024… [+443 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Taisy0.com"
        },
        "author": "taisy0",
        "title": "Apple Japan、サポート動画『交通系ICカードを別のAppleデバイスに移行する方法』を公開",
        "description": "本日、Apple Japanが、YouTubeにおいて最新のサポート動画「交通系ICカードを別のAppleデバイスに移行する方法」を公開しました。 今使っている交通系ICカードを別のデバイスで使いたい場合、そのカードを使いたいiPhoneや",
        "url": "https://taisy0.com/2023/12/11/180436.html",
        "urlToImage": "https://taisy0.com/wpcontent/uploads/2023/12/apspoortmovie20231211.jpg",
        "publishedAt": "20231211T01:09:10Z",
        "content": "Apple JapanYouTubeICApple\r\nICiPhoneApple Watch\r\niPhoneApple Watch"
        },
        {
        "source": {
        "id": null,
        "name": "Unwire.hk"
        },
        "author": "唐美鳳",
        "title": "配合 Siri 增加人工智能 傳 iPhone 16 咪高峰規格升級",
        "description": "著名分析師郭明錤日前撰文，指 Apple 計劃在明年推出 iPhone 16 的咪高峰作重大升級，目的是配合具備人工智能的 Siri 語音助理推出和提升使用體驗。郭明錤在他的 Medium 網誌帖文，表示「強化 Siri 軟硬件功能和規格，將會成為推廣生成式人工智能的關鍵」。\nThe post 配合 Siri 增加人工智能 傳 iPhone 16 咪高峰規格升級 appeared first on 香港 unwire.hk 玩生活．樂科技.",
        "url": "https://unwire.hk/2023/12/11/appleiphone16microphoneupgradesiriai/ai/",
        "urlToImage": "https://cdn.unwire.hk/wpcontent/uploads/2023/12/0210.png",
        "publishedAt": "20231211T00:58:17Z",
        "content": "Apple iPhone 16 Siri Medium Siri \r\n Apple Siri Apple iPhone 16 Siri \r\n AAC Goertek iPhone 16 iPhone 15 100% 150% Apple Siri iPhone 16 iOS 18 Siri Siri iPhone 16 \r\nmacrumors\r\n====\r\nunwire learn :\r\n AI… [+8 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Livedoor.jp"
        },
        "author": "itsoku",
        "title": "Androidスマホの強みだった「フルセグ」「SDカード」「イヤホンジャック」が次々と消えてるけど",
        "description": "1:以下、5ちゃんねるからVIPがお送りします  2023/12/10(日) 13:30:00.459 ID:iDDQrzXk0  これもうAndroidにこだわる必要ないか？",
        "url": "http://blog.livedoor.jp/itsoku/archives/61072162.html",
        "urlToImage": "https://livedoor.blogimg.jp/itsoku/imgs/4/c/4c2e46d3s.png",
        "publishedAt": "20231211T02:10:15Z",
        "content": "1:5VIP 2023/12/10() 13:30:00.459 ID:iDDQrzXk0\r\n Android \r\n3:5VIP 2023/12/10() 13:30:33.169 ID:JOf5UWDu0\r\n4:5VIP 2023/12/10() 13:30:34.847 ID:SIBWwuzk0\r\n5:5VIP 2023/12/10() 13:31:17.193 ID:91N9OfOx0\r\n… [+2492 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Technews.tw"
        },
        "author": "邱 倢芯",
        "title": "Vision Pro 上市日期近了，蘋果開始安排員工訓練",
        "description": "蘋果於今年 6 月的 WWDC 大會時亮相了傳聞已久的頭戴式顯示器產品 Vision Pro，當時官方表示，這款產品的上市日期將會是 2024 年初；而現在距離產品正式上市日期越來越近，蘋果也開始安排零售店員工相關的產品培訓課程。 據《彭博社》記者 Mark Gurman 在最新一期的專欄文章中提到...",
        "url": "https://technews.tw/2023/12/11/visionprolaunch2/",
        "urlToImage": "https://img.technews.tw/wpcontent/uploads/2023/06/28111506/AppleVisionProSDKavailabilitydeveloperlifestyle.jpg",
        "publishedAt": "20231211T01:43:09Z",
        "content": "6 WWDC Vision Pro 2024 \r\n Mark Gurman Vision Pro Vision Pro Apple Store Vision Pro \r\nMark Gurman Vision Pro Vision Pro \r\nMark Gurman Vision Pro Apple Store \r\n Vision Pro Mark Gurman"
        },
        {
        "source": {
        "id": null,
        "name": "Nextpit.com"
        },
        "author": "Jade Bryan",
        "title": "Apple's 12.9\" iPad Air May Not as Fast as iPad Pro, But Don't Worry",
        "description": "Apple to launch the iPad Air 2024 equipped with an M2 processor than having a faster M3 similar to the OLED iPad Pro. Will this difference matter at all?",
        "url": "https://www.nextpit.com/appleipadair1292024processorkeyboardlaunchspecs",
        "urlToImage": "https://fscl01.fonpit.de/userfiles/7734655/image/AppleiPadAir12inchlaunchspecs.jpg",
        "publishedAt": "20231211T01:39:13Z",
        "content": "Apple iPad Air 12.9inch (2024) processor and keyboard compatibility\r\nIn the latest newsletter of Bloomberg's Mark Gurman, he suggests both 11inch and 12.9inch iPad Air models are getting the custo… [+2213 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Plus 5G手机 128GB 黑色 6299元（需用券）",
        "description": "Apple 苹果 iPhone 15 Plus 5G手机 128GB 黑色 6299元（需用券）,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
        "url": "https://www.smzdm.com/p/99117393/",
        "urlToImage": "https://y.zdmimg.com/202309/13/6500b3a2b43f66569.png_d250.jpg",
        "publishedAt": "20231211T00:38:05Z",
        "content": "iPhone 15 Plus IP68 201g7.8mm\r\niPhone 15 Plus 6.7 OLED XDR 2796×1290460ppi2000100%DCIP360HziPhone 15Plus A16 6 CPU5GPU 16 iPhone 14 Plus 263550%LightningUSBC\r\niPhone 15 Plus 4800f1.62400120021200f2… [+12 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "百亿补贴：Apple 苹果 Mac mini 2023款 迷你主机 （M2、8GB、256GB） 3079元（需用券）",
        "description": "玩家之道性能强，体积小，高质价比mini主机。拼多多此款目前活动售价3129元，页面领取50元优惠券，实付低至3079元，近期好价，感兴趣的值友可以入手。",
        "url": "https://www.smzdm.com/p/99119268/",
        "urlToImage": "https://qny.smzdm.com/202301/18/63c763b744b942035.jpg_d250.jpg",
        "publishedAt": "20231211T00:57:11Z",
        "content": "·\r\n Mac mini M2 M2 Pro M2 M2 4 4 10 16 100GB/s H.264HEVCProRes ProRes RAW ProRes M2 Mac mini ProRes Final Cut ProM2 30 fps 2 8K ProRes 422 30 fps 12 4K ProRes 422 \r\n M2 Pro M2 Pro 10 6 4 19 M2 200GB … [+230 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPad 10 2022款 10.9英寸平板电脑 64GB 2949元",
        "description": "玩家之道A14芯片，Liquid视网膜显示屏~京东此款目前活动售价2949元，近期好价，感兴趣的值友可以入手。",
        "url": "https://www.smzdm.com/p/99121178/",
        "urlToImage": "https://qny.smzdm.com/202210/19/634f65fb710187819.jpg_d250.jpg",
        "publishedAt": "20231211T01:24:49Z",
        "content": "iPad 2022iPad ProiPad Air10.9Liquid2360*1640264PPI500nit10.9HomeIDIPad 2022LightningUSBC\r\nA145nm118 20% 10%16A13280%12001200122°12004K240fps\r\n64GB256GBWLAN5GWiFi 6iPad 2022Apple PenciliPadOS 16 iPad"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPad Air 5 2022款 10.9英寸平板电脑 256GB WLAN版 4799元",
        "description": "玩家之道搭载M1芯片，支持视频人物居中功能~京东此款目前活动售价4799元，近期好价，感兴趣的值友可以入手。",
        "url": "https://www.smzdm.com/p/99121351/",
        "urlToImage": "https://qny.smzdm.com/202206/30/62bcfea7180739097.jpg_d250.jpg",
        "publishedAt": "20231211T01:24:49Z",
        "content": "iPad Air iPad Pro M1 USBC 2 Apple Pencil \r\n M1 iPad Air 5 CPU 60% 2 iPad Air 5 12MP Center Stage 64GB256GB iPad Air 5 5G \r\n5 Touch ID iPad Air 5  Liquid Retina 500nit iPad Pro"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPad Pro 2021款 11英寸平板电脑 256GB WLAN版 6499元",
        "description": "玩家之道16核神经引擎M1芯片，ProMotion原彩视网膜屏，40Gbps高速雷雳接口京东此款目前活动售价6499元，近期好价，感兴趣的值友可以入手。",
        "url": "https://www.smzdm.com/p/99121510/",
        "urlToImage": "https://y.zdmimg.com/202104/21/607fb5ffc2c0f8800.jpg_d250.jpg",
        "publishedAt": "20231211T01:24:49Z",
        "content": "11 2021 iPad Pro M1 M1 MacBook iPad Pro CPU 50%GPU 40% iPad Pro \r\n2021 iPad Pro iPadOS MacBook macOS iPadOS MacBook macOS Final Cut ProXcode iPadOS iPad MacBook \r\n2021 iPad Pro USB 4 40Gbps iPad iPad… [+49 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro Max 5G智能手机 256GB 8999元（需用券）",
        "description": "玩家之道搭载A17 Pro芯片，更新USBC接口，使用钛合金边框，潜望式长焦镜头~京东优选自营专区售价9999元，下单可用1000元优惠券，实付低至8999元，自营发货售后，冲起来~",
        "url": "https://www.smzdm.com/p/99117894/",
        "urlToImage": "https://y.zdmimg.com/202309/13/6500b1c00c8db8919.png_d250.jpg",
        "publishedAt": "20231211T01:07:36Z",
        "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro Max 5G智能手机 256GB 8999元包邮（需用券）",
        "description": "玩家之道搭载A17 Pro芯片，更新USBC接口，使用钛合金边框，潜望式长焦镜头~京东优选自营专区售价9999元，下单可用1000元优惠券，实付低至8999元，自营发货售后，冲起来~",
        "url": "https://www.smzdm.com/p/99119387/",
        "urlToImage": "https://y.zdmimg.com/202309/13/6500b1c00c8db8919.png_d250.jpg",
        "publishedAt": "20231211T00:57:11Z",
        "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro 5G智能手机 256GB 8149元包邮（需用券）",
        "description": "玩家之道全新的钛合金边框，有史以来最轻最窄边框的Pro系列，更好更清晰的深度拍照体验。京东优选自营专区目前售价8999元，下单可用850元优惠券，实付低至8149元到手，页面还有其他配色可选。\n 国内\n \n...",
        "url": "https://www.smzdm.com/p/99119007/",
        "urlToImage": "https://qny.smzdm.com/202312/09/657458c54207a184.jpg_d250.jpg",
        "publishedAt": "20231211T00:57:11Z",
        "content": "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro 5G智能手机 128GB 白色钛金属 7149元（需用券）",
        "description": "玩家之道全新的钛合金边框，有史以来最轻最窄边框的Pro系列，更好更清晰的深度拍照体验。京东此款目前活动售价7999元，领取满4000减850元优惠券，实付低至7149元，近期好价，感兴趣的值友可以入手。",
        "url": "https://www.smzdm.com/p/99121792/",
        "urlToImage": "https://y.zdmimg.com/202309/13/6500b107b795e9475.png_d250.jpg",
        "publishedAt": "20231211T01:24:49Z",
        "content": "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro 5G智能手机 1TB 黑色钛金属 12149元（需用券）",
        "description": "玩家之道全新的钛合金边框，有史以来最轻最窄边框的Pro系列，更好更清晰的深度拍照体验。京东此款目前活动售价12999元，下单领取850元优惠券，实付低至12149元。",
        "url": "https://www.smzdm.com/p/99123773/",
        "urlToImage": "https://y.zdmimg.com/202309/13/6500b105fc3444180.png_d250.jpg",
        "publishedAt": "20231211T01:53:51Z",
        "content": "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro 5G智能手机 1TB 原色钛金属 12149元（需用券）",
        "description": "玩家之道全新的钛合金边框，有史以来最轻最窄边框的Pro系列，更好更清晰的深度拍照体验。京东此款目前活动售价12999元，领取满4000减850元优惠券，实付低至12149元，近期好价，感兴趣的值友可以入手。",
        "url": "https://www.smzdm.com/p/99123704/",
        "urlToImage": "https://qny.smzdm.com/202312/09/65740e82fe0d84326.jpg_d250.jpg",
        "publishedAt": "20231211T01:37:25Z",
        "content": "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro 5G智能手机 1TB 白色钛金属 12149元（需用券）",
        "description": "玩家之道全新的钛合金边框，有史以来最轻最窄边框的Pro系列，更好更清晰的深度拍照体验。京东此款目前活动售价12999元，下单领取850元优惠券，实付低至12149元。",
        "url": "https://www.smzdm.com/p/99123608/",
        "urlToImage": "https://y.zdmimg.com/202309/13/6500b107b795e9475.png_d250.jpg",
        "publishedAt": "20231211T01:37:25Z",
        "content": "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "百亿补贴：Apple 苹果 iPad 2022 10.9英寸平板电脑 256GB WLAN版 3488元（需用券）",
        "description": "玩家之道A14仿生芯片，10.9英寸Liquid视网膜显示屏，支持原彩显示，1200万像素横向超广角前置摄像头，配备USBC接口，iPadOS 16更添生产力~拼多多此款目前活动售价3638元，页面领取150元优惠券，实付低至3488元，近期好价，感兴趣的值友可以入手。",
        "url": "https://www.smzdm.com/p/99119160/",
        "urlToImage": "https://qny.smzdm.com/202210/19/634f65f9d0f327451.jpg_d250.jpg",
        "publishedAt": "20231211T00:57:11Z",
        "content": "iPad 2022iPad ProiPad Air10.9Liquid2360*1640264PPI500nit10.9HomeIDIPad 2022LightningUSBC\r\nA145nm118 20% 10%16A13280%12001200122°12004K240fps\r\n64GB256GBWLAN5GWiFi 6iPad 2022Apple PenciliPadOS 16 iPad"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "百亿补贴：Apple 苹果 MacBook Air 2023款 13.6英寸笔记本电脑（M2、8GB、256GB）星光色 6588元",
        "description": "玩家之道搭载强大M2芯片，超长续航，轻盈便携~拼多多此款目前活动售价6588元，近期好价，感兴趣的值友可以入手。",
        "url": "https://www.smzdm.com/p/99118952/",
        "urlToImage": "https://qny.smzdm.com/202306/06/647e957545a102272.jpg_d250.jpg",
        "publishedAt": "20231211T00:57:11Z",
        "content": "2022MacBook Air13.6 Liquid 500 25%MacBook Air MacBook Air \r\nM2 M M2 8 10 M2 100GB/s 24GB ProRes M2 4K 8K \r\n M2 MacBook Air 11.3 1.22 20% M2 MacBook Air \r\nMagSafe MacBook Air 2 3.5 ID"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro Max 5G手机 256GB 白色钛金属 8999元包邮（需用券）",
        "description": "玩家之道搭载A17 Pro芯片，更新USBC接口，使用钛合金边框，潜望式长焦镜头~京东优选自营专区售价9999元，下单可用1000元优惠券，实付8999元到手，页面多个配色可选，自营发货、售后，方便不少。",
        "url": "https://www.smzdm.com/p/99116166/",
        "urlToImage": "https://qny.smzdm.com/202312/09/65748c424101a594.jpg_d250.jpg",
        "publishedAt": "20231211T00:57:11Z",
        "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro 5G智能手机 256GB 黑色钛金属 8149元（需用券）",
        "description": "玩家之道全新的钛合金边框，有史以来最轻最窄边框的Pro系列，更好更清晰的深度拍照体验。京东此款目前活动售价8999元，下单领取850元优惠券，实付低至8149元。",
        "url": "https://www.smzdm.com/p/99121590/",
        "urlToImage": "https://y.zdmimg.com/202309/13/6500b105fc3444180.png_d250.jpg",
        "publishedAt": "20231211T01:24:49Z",
        "content": "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro 5G智能手机 256GB 原色钛金属 8149元（需用券）",
        "description": "玩家之道全新的钛合金边框，有史以来最轻最窄边框的Pro系列，更好更清晰的深度拍照体验。京东售价8999元，领取满4000减850元券，下单实付低至8149元，页面还有其他配色可选。",
        "url": "https://www.smzdm.com/p/99121428/",
        "urlToImage": "https://y.zdmimg.com/202309/13/6500b104b5a4f4674.png_d250.jpg",
        "publishedAt": "20231211T01:24:49Z",
        "content": "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro Max 5G智能手机 1TB 原色钛金属 12999元（需用券）",
        "description": "玩家之道搭载A17 Pro芯片，更新USBC接口，使用钛合金边框，潜望式长焦镜头~京东此款目前活动售价13999元，下单领取1000元优惠券，实付低至12999元。",
        "url": "https://www.smzdm.com/p/99121107/",
        "urlToImage": "https://y.zdmimg.com/202309/13/6500b1bd853b58430.png_d250.jpg",
        "publishedAt": "20231211T01:24:49Z",
        "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro Max 5G智能手机 1TB 白色钛金属 12999元（需用券）",
        "description": "玩家之道搭载A17 Pro芯片，更新USBC接口，使用钛合金边框，潜望式长焦镜头~京东此款目前活动售价13999元，下单领取1000元优惠券，实付低至12999元。",
        "url": "https://www.smzdm.com/p/99120977/",
        "urlToImage": "https://qny.smzdm.com/202309/13/6500b1c2f4c617754.png_d250.jpg",
        "publishedAt": "20231211T01:24:49Z",
        "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro 5G智能手机 256GB 蓝色钛金属 8149元（需用券）",
        "description": "玩家之道全新的钛合金边框，有史以来最轻最窄边框的Pro系列，更好更清晰的深度拍照体验。京东此款目前活动售价8999元，下单领取850元优惠券，实付低至8149元。",
        "url": "https://www.smzdm.com/p/99121684/",
        "urlToImage": "https://qny.smzdm.com/202312/11/65766427ef0264337.jpg_d250.jpg",
        "publishedAt": "20231211T01:24:49Z",
        "content": "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro Max 5G智能手机 1TB 蓝色钛金属 12999元（需用券）",
        "description": "玩家之道搭载A17 Pro芯片，更新USBC接口，使用钛合金边框，潜望式长焦镜头~京东此款目前活动售价13999元，领取满40001000元优惠券，实付低至12999元，近期好价，感兴趣的值友可以入手。",
        "url": "https://www.smzdm.com/p/99121354/",
        "urlToImage": "https://y.zdmimg.com/202309/13/6500b1c475f644441.png_d250.jpg",
        "publishedAt": "20231211T01:24:49Z",
        "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 MacBook Pro 2021款 14英寸笔记本电脑（M1 Pro 、16GB、512GB） 14999元",
        "description": "玩家之道采用mini LED显示屏，支持Liquid Retina XDR~京东此款目前活动售价14999元，近期好价，感兴趣的值友可以入手。",
        "url": "https://www.smzdm.com/p/99121683/",
        "urlToImage": "https://qny.smzdm.com/202110/19/616db97dc6ee71321.jpg_d250.jpg",
        "publishedAt": "20231211T01:24:49Z",
        "content": "MacBook Pro14.216.2M1 ProM1 Max3.5mm100%R\r\nmini LEDLiquid Retina XDR160010011080pISP2ProMotion120Hz\r\nMacBook ProHDMIMagSafeSD4MagSafeMagSafe4MacBook Pro\r\nMacBook ProM1 ProM1 Max141616MacBook ProM1 Pr… [+67 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro Max 5G智能手机 1TB 黑色钛金属 12999元（需用券）",
        "description": "玩家之道搭载A17 Pro芯片，更新USBC接口，使用钛合金边框，潜望式长焦镜头~京东此款目前活动售价13999元，下单领取满4000元减1000元优惠券，实付低至12999元，近期好价，感兴趣的值友可以入手。",
        "url": "https://www.smzdm.com/p/99121177/",
        "urlToImage": "https://y.zdmimg.com/202309/13/6500b1c00c8db8919.png_d250.jpg",
        "publishedAt": "20231211T01:24:49Z",
        "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smzdm.com"
        },
        "author": null,
        "title": "Apple 苹果 iPhone 15 Pro 5G智能手机 1TB 蓝色钛金属 12149元（需用券）",
        "description": "玩家之道全新的钛合金边框，有史以来最轻最窄边框的Pro系列，更好更清晰的深度拍照体验。京东此款目前活动售价12999元，下单领取850元优惠券，实付低至12149元，近期好价，感兴趣的值友可以入手。",
        "url": "https://www.smzdm.com/p/99123864/",
        "urlToImage": "https://qny.smzdm.com/202312/11/657667e9449b46483.jpg_d250.jpg",
        "publishedAt": "20231211T01:53:51Z",
        "content": "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Photorumors.com"
        },
        "author": "PR admin",
        "title": "The Insta360 GO 3 vlogging camera is now available in midnight black",
        "description": "Insta360’s new vlogging action camera, the Insta360 GO 3, is now available also in Midnight Black. Additional infomation: The tiny vlogging cam. The tiny camera released in June 2023 in Arctic White takes onthego capturing to new heights, building upon the …",
        "url": "https://photorumors.com/2023/12/10/theinsta360go3vloggingcameraisnowavailableinmidnightblack/",
        "urlToImage": "https://photorumors.com/wpcontent/uploads/2023/12/Insta360GO3vloggingcamera3.jpeg",
        "publishedAt": "20231211T00:41:14Z",
        "content": "Insta360’s new vlogging action camera, the Insta360 GO 3, is now available also in Midnight Black. Additional infomation:\r\nThe tiny vlogging cam.\r\nThe tiny camera released in June 2023 in Arctic Whit… [+2726 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ozbargain.com.au"
        },
        "author": "ChatGPT",
        "title": "Belkin BoostUp Dual 65W USBC GaN Charger $41.65 ($40.67 eBay+) Delivered @ Personal Digital eBay",
        "description": "Credit to Prong for spotting the deal\nDual port charger even cheaper than yesterday\nSee previous comments on this quality charger here\n\nWCH013AUBK\n\n\n Access up to 65W when using a single USBC port or 45W + 20W when using both\n Optimized for Apple, Samsung, N…",
        "url": "https://www.ozbargain.com.au/node/819600",
        "urlToImage": "https://files.ozbargain.com.au/n/00/819600l.jpg?h=8b23133c",
        "publishedAt": "20231211T03:00:34Z",
        "content": "Access up to 65W when using a single USBC port or 45W + 20W when using bothOptimized for Apple, Samsung, Nintendo Switch and other compatible devicesIntegrated GaN technology provides a highpower, … [+156 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ozbargain.com.au"
        },
        "author": "Briefcase Mong",
        "title": "Collect Up To 1000 Everyday Rewards Points Each Week for 4 Consecutive Weeks with $1 Minimum Spend at Woolworths",
        "description": "Most likely targeted I got 1000 Bonus Points with $1 min spend\n\nWeek 1: Tuesday 28 November  Tuesday 5 December\nWeek 2: Wednesday 6 December  Sunday 10 December\nWeek 3: Monday 11 December  Sunday 17 December\nWeek 4: Monday 18 December  Sunday 24 December\n…",
        "url": "https://www.ozbargain.com.au/node/819564",
        "urlToImage": "https://www.ozbargain.com.au/themes/ozbargain/logosquare.png",
        "publishedAt": "20231211T00:19:25Z",
        "content": "Most likely targeted I got 1000 Bonus Points with $1 min spend\r\nWeek 1: Tuesday 28 November  Tuesday 5 DecemberWeek 2: Wednesday 6 December  Sunday 10 DecemberWeek 3: Monday 11 December  Sunday 17… [+1152 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Daily Caller"
        },
        "author": "Hailey Gomez",
        "title": "Alex Jones Applauds Musk For Reinstating Him, Warns The ‘Establishment’ Will ‘Come After Him’",
        "description": "Alex Jones applauded Musk for reinstating him to the X platform, giving a sharp warning that the &quot;big establishment sponsors&quot; will &quot;come after him.&quot;",
        "url": "https://dailycaller.com/2023/12/10/alexjonesapplaudselonmuskreinstatingtwitterwarnsestablishmentfollow/",
        "urlToImage": "https://cdn01.dailycaller.com/wpcontent/uploads/2023/12/GettyImages1425979532e1702250231119.jpg",
        "publishedAt": "20231211T00:48:02Z",
        "content": "Infowars founder Alex Jones applauded billionaire Elon Musk on Sunday for reinstating him to X (formerly Twitter), but gave a sharp warning that “big establishment sponsors” will “come after him.”\r\nJ… [+3955 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ferra.ru"
        },
        "author": "Максим Многословный",
        "title": "Apple CarPlay оказался решающим фактором для 80% покупателей автомобилей",
        "description": "Опрос 9to5Mac, в котором приняли участие более 6 400 респондентов, показал, что 80% покупателей автомобилей даже не будут рассматривать возможность приобретения транспортного средства без CarPlay. Результаты совпадают с данными самой Apple, согласно которым 7…",
        "url": "https://www.ferra.ru/news/auto/applecarplayokazalsyareshayushimfaktoromdlya80pokupateleiavtomobilei10122023.htm",
        "urlToImage": "https://www.ferra.ru/imgs/2023/12/10/13/6266110/75eebb86018774135b794e3154fd344eb05e9dcf.jpg",
        "publishedAt": "20231211T03:00:18Z",
        "content": "CarPlay , . , Tesla, , CarPlay Tesla. Tesla, Apple Music, , , CarPlay.\r\n CarPlay , 20%,  Apple?"
        },
        {
        "source": {
        "id": null,
        "name": "Cnblogs.com"
        },
        "author": "削微寒",
        "title": "又有新框架上线了，测试、AI 通通有「GitHub 热点速览」  削微寒",
        "description": "本周热点之一可能就是 Apple 刚开源便获得 8k+ star 的机器学习框架 mlx，顺带官方开源的 mlxexample（示例仓）也在热门榜上有一席之位，据说它已经跑通了大模型 Llama 7B，如果你最近刚入手了 M3 的苹果机，不妨来试试这个专为 Apple 芯片而生的框架。 除了跑在",
        "url": "https://www.cnblogs.com/xueweihan/p/17893612.html",
        "urlToImage": null,
        "publishedAt": "20231211T00:19:00Z",
        "content": "Apple 8k+ star mlx mlxexample Llama 7B M3 Apple \r\n Apple Laravel pulse marker \r\n gkd\r\n@HelloGitHub GitHub Trending Hacker News HN | | release 14 day New release \r\n<ul><li><ul><li>1. \r\n<ul><li>1.1 ma… [+1990 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Thewindowsclub.com"
        },
        "author": "KomalSrivastava@TWC",
        "title": "Windows Event Log high CPU, Disk, Memory, Power Usage",
        "description": "Windows Event Log (Event Viewer) is a Windows feature showing logs about your system’s hardware and software events. It usually doesn’t take much system resources. However, some users have reported that the Service Host: Windows Event Log process is consumes …",
        "url": "https://www.thewindowsclub.com/windowseventloghighcpudiskmemorypowerusage",
        "urlToImage": "https://www.thewindowsclub.com/wpcontent/uploads/2023/11/WindowsEventLoghighCPUDiskMemoryPowerUsage.png",
        "publishedAt": "20231211T00:09:50Z",
        "content": "Windows Event Log (Event Viewer) is a Windows feature showing logs about your systems hardware and software events. It usually doesnt take much system resources. However, some users have reported tha… [+4272 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CBS Sports"
        },
        "author": "Josh Edwards",
        "title": "2024 NFL Draft order: Bears have strong hold of No. 1 pick; Patriots' victory doesn't cost them No. 2 spot",
        "description": "The Bears are in an early position to draft Nos. 1 and 7 overall",
        "url": "https://www.cbssports.com/nfl/news/2024nfldraftorderbearshavestrongholdofno1pickpatriotsvictorydoesntcostthemno2spot/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/10/06/0ffc1550503b4935867f080ca577fd29/thumbnail/1200x675/f37567ecaf8a5a4f068c1aae765f7b09/usatsidarnellmooneybears.jpg",
        "publishedAt": "20231211T00:57:36Z",
        "content": "The 2024 NFL Draft is still a little over four months away, but fans of some teams (looking at you Bears, Cardinals and Patriots) are already thinking ahead to April. \r\nHere is the current draft orde… [+5747 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Houyhnhnm.jp"
        },
        "author": "HOUYHNHNM",
        "title": "マンハッタンポーテージと世界最大級の美術館 THE METによる歴史的コラボバッグが登場。",
        "description": "世界最高峰の美術館として知られる「ニューヨーク・メトロポリタン美術館」、通称「メット（THE MET）」。今年40周年を迎えた〈マンハッタンポーテージ（Manhattan Portage）〉が、アメリカを代表するこのミュージアムと初コラボします。\n\nオープンから現在までの約150年の歴史のなかで、これまで幾度となくアレンジされてきた「メット」の“Mロゴ”。そのアイコニックな歴代...",
        "url": "https://www.houyhnhnm.jp/news/792922/",
        "urlToImage": "https://www.houyhnhnm.jp/wpcontent/uploads/2023/12/7327_41_03.jpg",
        "publishedAt": "20231211T03:01:20Z",
        "content": "THE MET40Manhattan Portage\r\n150M2WAY6 \r\nBig Apple Backpack THE MET ¥14,740Casual Messenger Bag THE MET ¥11,000Casual Messenger Bag JR THE MET ¥12,980City Light Bag THE MET ¥8,580Serene tote bag THE M… [+92 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Minneapolis Star Tribune"
        },
        "author": "Andrew Krammer",
        "title": "Podcast: Vikings' ugly win features QB change, defensive brilliance and rising rookie",
        "description": "Ben Goessling and Andrew Krammer recap the Vikings' 30 win over the Raiders in Las Vegas, where Joshua Dobbs lost his job and a rookie defender kept rising.",
        "url": "https://www.startribune.com/podcastvikingsuglywinfeaturesqbchangedefensivebrillianceandrisingrookie/600325848/",
        "urlToImage": "https://chorus.stimg.co/22360608/vikepod.png?h=630&w=1200&fit=crop&bg=999&crop=faces",
        "publishedAt": "20231211T02:48:32Z",
        "content": "Ben Goessling and Andrew Krammer recap the Vikings' 30 win in Las Vegas the NFL's first such final score since 2007 and how head coach Kevin O'Connell got the the point of benching Joshua Dobbs for … [+274 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Newgeography.com"
        },
        "author": "Joel Kotkin",
        "title": "The New Green Feudalism",
        "description": "With the 2024 election looming on the horizon, the Democratic Party faces a contradiction. By some important measures, the US economy is booming—thirdquarter GDP growth figures were recently adjusted upward to a whopping 5.2 percent—but these numbers aren’t …",
        "url": "http://www.newgeography.com/content/008023thenewgreenfeudalism",
        "urlToImage": null,
        "publishedAt": "20231211T01:28:38Z",
        "content": "With the 2024 election looming on the horizon, the Democratic Party faces a contradiction. By some important measures, the US economy is boomingthirdquarter GDP growth figures were recently adjusted… [+3803 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Themomedit.com"
        },
        "author": "Abby Rothwell",
        "title": "Give The Gift Of Shimmer: A Metallic Gift Guide",
        "description": "‘Tis the season of two great things: giftgiving and metallics. I’m sure you didn’t even need this festive little PSA but hey, when two things this perfect make this much sense together, someone needs to talk about it. Or better yet, throw it all into one epi…",
        "url": "https://themomedit.com/metallicgiftguidewomen/",
        "urlToImage": "https://themomedit.com/wpcontent/uploads/2023/12/metallicGGFI.jpg",
        "publishedAt": "20231211T00:00:00Z",
        "content": "‘Tis the season of two great things: giftgiving and metallics. I’m sure you didn’t even need this festive little PSA but hey, when two things this perfect make this much sense together, someone need… [+6428 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Opensourcesecurity.io"
        },
        "author": "Josh Bressers",
        "title": "Episode 406 – The security of radio",
        "description": "Josh and Kurt talk about a few security stories about radio. The TETRA:BURST attack on police radios, spoofing GPS for airplanes near Iran, and Apple including cellular radios in the macbooks. The …",
        "url": "https://opensourcesecurity.io/2023/12/10/episode406thesecurityofradio/",
        "urlToImage": "https://opensourcesecurityio.files.wordpress.com/2023/12/wideradio.jpg?w=1200",
        "publishedAt": "20231211T00:00:00Z",
        "content": "Josh and Kurt talk about a few security stories about radio. The TETRA:BURST attack on police radios, spoofing GPS for airplanes near Iran, and Apple including cellular radios in the macbooks. The co… [+489 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Prtimes.jp"
        },
        "author": null,
        "title": "『Z世代が選ぶ2023年下半期トレンドランキング』をZ総研が発表！",
        "description": "[株式会社N.D.Promotion]\n【調査概要】\n調査時期：2023年11/10(金)～2023年11/19(日)\n調査方法：インターネット調査\n調査対象：自社メディア「Nom de plume」LINE@会員\n有効回答数：2,810名（全国、中学生1,084名、高校生935名、18歳（高...",
        "url": "https://prtimes.jp/main/html/rd/p/000000090.000020799.html",
        "urlToImage": "https://prcdn.freetls.fastly.net/release_image/20799/90/207999076f34aa1395e097989269c0256db8a7d1920x860.png?format=jpeg&auto=webp&fit=bounds&width=480&height=360",
        "publishedAt": "20231211T01:00:00Z",
        "content": "202311/10()202311/19()\r\nNom de plumeLINE@\r\n2,8101,084935182248823283033\r\nBeReal.Z\r\nSNS\r\n1\r\n 18/3/\r\n 18/1/\r\n2\r\n18/3/\r\n23/4/\r\n3\r\n18/3/\r\n23/4/\r\n1\r\n18/3/\r\n21/3/\r\n2\r\n17/2/\r\nYouTuber15/3/\r\n3\r\nTikTok18/1/\r\n… [+1289 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Softantenna.com"
        },
        "author": "softantenna",
        "title": "Apple Vision Proは来年早々にリリースか",
        "description": "Apple期待のヘッドセット「Apple Vision Pro」が来年3月以前、早ければ1月にリリースされる可能性があることがわかりました(AppleInsider)。 Appleは、Apple Vision Proのリリースが2024年の",
        "url": "https://softantenna.com/blog/applevisionpronextyear/",
        "urlToImage": "https://softantenna.com/blog/wpcontent/uploads/2023/12/AppleWWCD23VisionProglass230605_big.large_.jpg",
        "publishedAt": "20231211T01:20:20Z",
        "content": "AppleApple Vision Pro31(AppleInsider)\r\nAppleApple Vision Pro2024\r\nBloombergMark GurmanPower On1\r\nGurmanAppleApple Park112\r\nAppleApple Store"
        },
        {
        "source": {
        "id": null,
        "name": "Softantenna.com"
        },
        "author": "softantenna",
        "title": "Apple、AndroidでiMessageを使えるAndroidアプリ「 Beeper Mini」の機能停止を確認",
        "description": "Appleが、AndroidからiMessageを利用することができるアプリ「Beeper Mini」の機能を停止する措置をとったことが明らかとなりました(MacRumors)。 Appleはユーザーのプライバシーやセキュリティの重要性を協",
        "url": "https://softantenna.com/blog/appleblocksbeepermini/",
        "urlToImage": "https://softantenna.com/blog/wpcontent/uploads/2023/12/beepermini1.jpg",
        "publishedAt": "20231211T00:58:07Z",
        "content": "AppleAndroidiMessageBeeper Mini(MacRumors)\r\nAppleBeeper Mini\r\nThe VergeApple\r\nAt Apple, we build our products and services with industryleading privacy and security technologies designed to give use… [+578 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "SoyaCincau.com"
        },
        "author": "Sharil Abdul Rahman",
        "title": "Bloomberg: New M3 Macbook Air and iPads expected to launch early next year",
        "description": "We should be seeing the new M3equipped Macbook Air and iPads early next year, according to Mark Gruman from Bloomberg. This new launch is said to try and reverse declining Mac and iPad sales that Apple saw in 2023. The models expected to see the processor up…",
        "url": "https://soyacincau.com/2023/12/11/bloombergnewm3macbookairandipadsexpectedtolaunchearlynextyear/",
        "urlToImage": "https://soyacincau.com/wpcontent/uploads/2023/07/230706macbookair15.jpg",
        "publishedAt": "20231211T01:35:33Z",
        "content": "We should be seeing the new M3equipped Macbook Air and iPads early next year, according to Mark Gruman from Bloomberg. This new launch is said to try and reverse declining Mac and iPad sales that Ap… [+1356 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "SoyaCincau.com"
        },
        "author": "Alexander Wong",
        "title": "Shell Recharge AC and DC chargers at Pavilion KL are now available, priced from RM1/kWh",
        "description": "After months of waiting, Shell Recharge’s EV chargers at Pavilion Kuala Lumpur are finally available to use. These chargers are located just behind the Tesla Superchargers and are open to all EVs regardless of brand. Located at B1 underground carpark (Pillar …",
        "url": "https://soyacincau.com/2023/12/11/shellrechargepavilionklacdcchargerpricenowavailable/",
        "urlToImage": "https://soyacincau.com/wpcontent/uploads/2023/09/shellrechargepaviklpo02.jpg",
        "publishedAt": "20231211T02:38:16Z",
        "content": "After months of waiting, Shell Recharge’s EV chargers at Pavilion Kuala Lumpur are finally available to use. These chargers are located just behind the Tesla Superchargers and are open to all EVs reg… [+2066 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daringfireball.net"
        },
        "author": "John Gruber",
        "title": "Beeper? I Hardly Knew Her.",
        "description": "The threeday saga of an unauthorized iMessage client for Android.",
        "url": "https://daringfireball.net/2023/12/beeper_i_hardly_knew_her",
        "urlToImage": "https://daringfireball.net/graphics/dfwidecard.png",
        "publishedAt": "20231211T00:23:40Z",
        "content": "Beeper is a company founded by Eric Migicovsky, who is best known as the founder of the nowdefunct Pebble, which made groundbreaking smartwatches a decade ago. Migicovsky founded Beeper to create a … [+12906 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sostav.ru"
        },
        "author": "Sostav.ru",
        "title": "Илон Маск обсуждает партнёрство с Amazon на фоне бегства рекламодателей",
        "description": "Возможна интеграция рекламных платформ",
        "url": "https://www.sostav.ru/publication/ilonmaskobsuzhdaetpartnrstvosamazonnafonebegstvareklamodatelej64916.html",
        "urlToImage": "https://www.sostav.ru/images/news/2023/12/11/preview/64916_social.jpg?rnd=267969",
        "publishedAt": "20231211T03:10:00Z",
        "content": ", X,   Amazon.  , Reuters.\r\n   X   Amazon.     X  Amazon    .\r\n ,  .  , Disney      .\r\n,  .    IBM,       . « » Warner Bros., Walt Disney, Lionsgate, Paramount  Sony Pictures, Apple, Airbnb, Amazo… [+33 chars]"
        },
        {
        "source": {
        "id": "ign",
        "name": "IGN"
        },
        "author": "Luã Souza",
        "title": "Hora de comprar um MacBook com 400 reais de desconto neste Natal!",
        "description": "Apple notebook MacBook Air de 13 polegadas está em promoção no site da Amazon Brasil\nHora de comprar um MacBook com 400 reais de desconto neste Natal! Apple notebook MacBook Air de 13 polegadas está em promoção no site da Amazon Brasil",
        "url": "https://br.ign.com/descontos/117009/news/horadecomprarummacbookcom400reaisdedescontonestenatal",
        "urlToImage": "https://sm.ign.com/t/ign_br/screenshot/default/macbook1_neyf.1200.png",
        "publishedAt": "20231211T03:00:41Z",
        "content": "Ter um notebook que consiga executar diversos aplicativos sem travamentos e que seja fácil de transportar pode ser um diferencial para quem precisa dar conta de diversas tarefas ao longo da rotina. O… [+1039 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "TechNode"
        },
        "author": "Steven Lee",
        "title": "消息称苹果计划在 2024 年彻底改革 iPad 产品线，以减少混乱并提振销量",
        "description": "据彭博社记者马克·古尔曼（Mark Gurman）报道，苹果计划在 2024 年对其 iPad 系列产品线进行全面改革，旨在减少产品种类的混乱并提振销量。 其他方面，古尔曼表示苹果 M3 款 MacBook Air 将于春季发布，Vision Pro 也将推出。 十年前，iPad",
        "url": "https://cn.technode.com/post/20231211/appleipadlinegurman2024/",
        "urlToImage": "https://cn.technode.com/wpcontent/blogs.dir/18/files/2022/10/AppleiPadProlifestyle221018.jpg",
        "publishedAt": "20231211T03:05:21Z",
        "content": "·Mark Gurman 2024 iPad \r\n M3 MacBook Air Vision Pro \r\niPad \r\n mini iPad Air Pro Pro \r\n iPad Mac Mac Mac\r\n iPad \r\n iPad ProAir Mini iPad\r\n 6799 11 iPad Pro 4799 iPad Air 10.9 iPad 10 Air 1200 64GB 256… [+363 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Habr.com"
        },
        "author": "Productivity Inside",
        "title": "Мобильная разработка за неделю #518 (4 — 10 декабря)",
        "description": "В нашем новом дайджесте устройство протокола iMessage и новое приложение Beeper Mini (которое уже не работает), бесплатный Xcode Cloud, новый ИИ от Google в Android, создание простого калькулятора, интернационализация от i до n, конец плоского дизайна и много…",
        "url": "https://habr.com/ru/companies/productivity_inside/articles/779668/#postcontentbody",
        "urlToImage": "https://habr.com/share/publication/779668/d241564bc8cffc7471fa1deb5ff47eae/",
        "publishedAt": "20231211T02:48:40Z",
        "content": "iMessage Beeper Mini ( ), Xcode Cloud, Google Android, , i n, . Telegram Mobile Insights, . IT Insights .\r\niOS\r\n  ondemand API iOS iMessageSwift Utilities SwiftUI UIKit REST iOSSwift Utilities Swi… [+4553 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "theregister.com",
        "title": "Microsoft hikes prices across Asia",
        "description": "Microsoft last week announced price hikes for its software and services, with the biggest rises to be felt across Asia. The increases are in line with Microsoft's stated practice of keeping local prices consistent with its US dollar charges. Japanese customer…",
        "url": "https://biztoc.com/x/2abf2e6101311147",
        "urlToImage": "https://c.biztoc.com/p/2abf2e6101311147/s.webp",
        "publishedAt": "20231211T00:04:17Z",
        "content": "Microsoft last week announced price hikes for its software and services, with the biggest rises to be felt across Asia.The increases are in line with Microsoft's stated practice of keeping local pric… [+280 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Podcast Market in Europe to grow by USD 1.12 billion from 2022 to 2027",
        "description": "NEW YORK, Dec. 10, 2023 /PRNewswire/  The podcast market in Europe is estimated to grow by USD 1.12 billion during 20232027, growing at a CAGR of over 27.5%. The podcast market in Europe report includes information on the product launches, sustainability, …",
        "url": "https://biztoc.com/x/f424d9692525e7ed",
        "urlToImage": "https://c.biztoc.com/p/f424d9692525e7ed/s.webp",
        "publishedAt": "20231211T02:56:10Z",
        "content": "NEW YORK, Dec. 10, 2023 /PRNewswire/  The podcast market in Europe is estimated to grow by USD 1.12 billion during 20232027, growing at a CAGR of over 27.5%. The podcast market in Europe report in… [+318 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "PhoneArena"
        },
        "author": "Alan Friedman",
        "title": "Upcoming iOS 17.2 update fixes bug that causes iPhone from wirelessly charging in GM cars",
        "description": "Apple is expected to release iOS 17.2 as soon as this week with a bug fix for wireless charging in GM vehicles.",
        "url": "https://www.phonearena.com/news/ios17.2fixesissuewithgmchargingpads_id153375",
        "urlToImage": "https://mcdn.phonearena.com/images/article/153375widetwo_1200/UpcomingiOS17.2updatefixesbugthatcausesiPhonefromwirelesslycharginginGMcars.jpg",
        "publishedAt": "20231211T02:52:17Z",
        "content": "Enjoy the hottest mobile tech storylines, delivered straight to your inbox."
        },
        {
        "source": {
        "id": null,
        "name": "Notebookcheck.net"
        },
        "author": "Daniel R Deakin",
        "title": "Apple AirTag 4pack feels like a steal on Amazon with 19% off Apple's official price",
        "description": "Deal | The Apple AirTag tracker is now available again at a discounted price on Amazon. Shoppers in the US and the UK can pick up a 4pack of the handy device and enjoy up to a 20% discount from the official Apple price. The AirTag was introduced in 2021 and …",
        "url": "https://www.notebookcheck.net/AppleAirTag4packfeelslikeastealonAmazonwith19offApplesofficialprice.781724.0.html",
        "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/AppleAirTagdeal.jpg",
        "publishedAt": "20231211T00:33:00Z",
        "content": "An Apple AirTag 4pack has once again hit the low price of $79.99 over on Amazon US. This is tied for the lowest price the pack has been since late November 2022, when an alltime low of $74.99 was o… [+1589 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Notebookcheck.net"
        },
        "author": "Silvio Werner",
        "title": "Urtopia Fusion: Ebike set to take bikes to the next generation with AI, ChatGPT and LTE",
        "description": "Urtopia will soon launch a new ebike onto the market. The manufacturer aims to usher in nothing less than a new era and create an electric bike with powerful AI assistance. This is intended to bring about a particularly smooth riding experience.",
        "url": "https://www.notebookcheck.net/UrtopiaFusionEbikesettotakebikestothenextgenerationwithAIChatGPTandLTE.781727.0.html",
        "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/urtopiafusion.jpg",
        "publishedAt": "20231211T00:48:00Z",
        "content": "Urtopia has presented, or at least teased, a new ebike. The AI functions of the model are currently the subject of heavy advertising, along with its ability to integrate various apps and wearables. … [+1364 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Eprice.com.tw"
        },
        "author": "Billy(iwill5210)",
        "title": "整合人工智慧的新 Siri 將成下代 iPhone 賣點  Apple 更改硬體設計以提升使用體驗",
        "description": "近期 Google 和 Samsung 都宣佈會在手機加入更多人工智慧應用，消息指 Apple 也計畫在明年發表的 iPhone 16 系列，為語音助理 Siri 引進人工智慧技術。",
        "url": "https://www.eprice.com.tw/mobile/talk/4544/5805336/1/",
        "urlToImage": "https://img.eprice.com.tw/img/news/38772/fb1702266006.jpg",
        "publishedAt": "20231211T03:26:24Z",
        "content": ""
        },
        {
        "source": {
        "id": null,
        "name": "Twit.tv"
        },
        "author": "TWiT",
        "title": "Ask The Tech Guys 2004: Stringy Floppy",
        "description": "How can I allow someone on my Apple family account to make their own individual Apple purchases? Why am I not receiving any messages when correctly submitting my information to retrieve my Google account? Some lastminute gift suggestions from Leo & Mikah. Pl…",
        "url": "https://twit.tv/shows/askthetechguys/episodes/2004",
        "urlToImage": "https://elroy.twit.tv/sites/default/files/images/episodes/2023/12/849484/hero/attg2004_thumbnail.jpg",
        "publishedAt": "20231211T00:59:30Z",
        "content": "How can I allow someone on my Apple family account to make their own individual Apple purchases? Why am I not receiving any messages when correctly submitting my information to retrieve my Google acc… [+1223 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Deadspin"
        },
        "author": "DJ Dunson",
        "title": "Zach Wilson keeps thriving when expectations are low",
        "description": "Intermittently, Zach Wilson is capable of balling out. He can’t consistently progress through reads and hit open receivers, but occasionally, his flybytheseatofyourpants quarterbacking rewards Jets fans with a rare gem. On Sunday, New York turned back t…",
        "url": "https://deadspin.com/zachwilsonjetscrushtexans3061851088425",
        "urlToImage": "https://i.kinjaimg.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/014c211927ec59814521850af68e37c4.jpg",
        "publishedAt": "20231211T00:46:00Z",
        "content": "Intermittently, Zach Wilson is capable of balling out. He cant consistently progress through reads and hit open receivers, but occasionally, his flybytheseatofyourpants quarterbacking rewards J… [+4568 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Nacion.com"
        },
        "author": "Karina Montoya",
        "title": "El peligroso secreto del juicio a Google",
        "description": "Google convenció a un tribunal de limitar la transparencia y el acceso público a la información, socavando la libertad de prensa y limitando la cobertura informativa durante el proceso.",
        "url": "https://www.nacion.com/opinion/foros/elpeligrososecretodeljuicioagoogle/2XHJDP7P5VEJLNZPSRZONFEGJQ/story/",
        "urlToImage": "https://www.nacion.com/resizer/3M1QhpB732PajHXZpVTuNOZ4=/1440x0/filters:format(jpg):quality(70)/cloudfrontuseast1.images.arcpublishing.com/gruponacion/LXH5GHRLXVAK3F6FMLTNDCSV3A.jpg",
        "publishedAt": "20231211T03:00:00Z",
        "content": "El mayor juicio antimonopolio de la era moderna de internet, que terminó el mes pasado, enfrentó al motor de búsqueda más popular del mundo, Google, con el Departamento de Justicia (DOJ, por su sigla… [+6462 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Livedoor.com"
        },
        "author": "GIGAZINE（ギガジン）",
        "title": "AppleがAndroidでiMessageを使えるようにするアプリ「Beeper Mini」からのメッセージ送受信をブロック",
        "description": "Appleの純正メッセージングアプリ「iMessage」をリバースエンジニアリングして開発されたAndroidメッセンジャーアプリ「Beeper Mini」は、AndroidデバイスでもiPhoneからのメッセージと同様の青い吹き出しでiMessageのチャットに参加できるというアプリでした。しかし、Beeper Miniは登場からわずか3日後の2023年12月8日に送受信が機能しなくなり、翌9日にAppleが対策を取ったことを認めました。Apple responds to Beeper’s iMessage f…",
        "url": "https://news.livedoor.com/article/detail/25508489/",
        "urlToImage": "https://image.news.livedoor.com/newsimage/stf/d/0/d01b0_88_243611b5c3c47cac2d5598a4c8721f72.jpg",
        "publishedAt": "20231211T01:36:00Z",
        "content": "AppleiMessageAndroidBeeper MiniAndroidiPhoneiMessageBeeper Mini320231289Apple\r\nApple responds to Beepers iMessage for Android: We took steps to protect our users  The Verge\r\nhttps://www.theverge.com… [+1686 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Book Riot"
        },
        "author": "Book Riot",
        "title": "Wrapping Up Holiday Recommendation Requests & Our Most Giftable Books of the Year",
        "description": "Jeff and Rebecca handle a few last recommendation requests and then give some ideas for generally giftable books for 2023. \nSubscribe to the podcast via RSS, Apple Podcasts, and Spotify.\nFor more industry news, sign up for our Today in Books daily newsletter!…",
        "url": "https://bookriot.com/listen/mostgiftablebooksoftheyear/",
        "urlToImage": "https://s2982.pcdn.co/wpcontent/uploads/2022/06/BR_thePodcast_featuredImage270x1401.jpeg.webp",
        "publishedAt": "20231211T02:00:00Z",
        "content": "This content contains affiliate links. When you buy through these links, we may earn an affiliate commission.\r\nJeff and Rebecca handle a few last recommendation requests and then give some ideas for … [+2196 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Netafull.net"
        },
        "author": "コグレマサト",
        "title": "【Mac整備済製品】MacBook Air・MacBook Pro・iMac・Mac mini・Mac Studio・ディスプレイ【2023年12月11日】",
        "description": "Apple公式サイトの「Mac整備済製品」の情報です。 Appleの整備済み品は問題があって返品された商品などを整備し、テスト後認定されたものです。1年間の特別保証が付いています。 最新の在庫情報は「Apple整備済製品...\n投稿 【Mac整備済製品】MacBook Air・MacBook Pro・iMac・Mac mini・Mac Studio・ディスプレイ【2023年12月11日】 は ネタフル に最初に表示されました。",
        "url": "https://netafull.net/applerefurbished/0142228.html",
        "urlToImage": "https://netafull.net/wpcontent/uploads/2022/12/applerefurbishedmac.jpg",
        "publishedAt": "20231211T02:05:27Z",
        "content": "AppleMac\r\nApple1\r\nApple\r\nMac mini [] 8CPU10GPUApple M271,800\r\nMac mini 3.0GHz 6Intel Core i5 – []\r\n115,800\r\n13MacBook Air [] 8CPU8GPUApple M2 – 139,800\r\n13MacBook Air [] 8CPU8GPUApple M2 – 139,800\r\n1… [+3125 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Blognone.com"
        },
        "author": "arjin",
        "title": "[ลือ] สาเหตุ iPad Air เพิ่ม 2 ขนาดจอ เพื่อให้คนซื้อตัดสินใจง่ายขึ้น  คาด MacBook Air M3 มาต้นปีหน้า",
        "description": "Mark Gurman รายงานข้อมูลในจดหมายข่าว Power On ประจำสัปดาห์ โดยเขาให้รายละเอียดเพิ่มเติมจากรายงานก่อนหน้านี้ เกี่ยวกับ iPad Air ที่รุ่นใหม่เปิดตัวต้นปีหน้าคาดว่าเดือนมีนาคม จะทำออกมาเป็น 2 ขนาดหน้าจอครั้งแรกคือ 10.9 นิ้ว และ 12.9 นิ้ว รวมถึง MacBook Air M3 ก็จ…",
        "url": "https://www.blognone.com/node/137177",
        "urlToImage": "https://www.blognone.com/sites/default/files/externals/b3076a37db07c8df59d67cdd0956c287.jpg",
        "publishedAt": "20231211T00:14:07Z",
        "content": "Mark Gurman Power On iPad Air 2 10.9 12.9 MacBook Air M3 \r\nGurman iPad 5 iPad Pro, iPad Air, iPad 10th Gen, iPad 9th Gen iPad mini \r\n MacBook MacBook Pro MacBook Air entry iPad Pro iPad Air iPad Pro … [+211 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "EditorDavid",
        "title": "New Internet Standard L4S: the Quiet Plan to Make the Internet Feel Faster",
        "description": "Slow load times? Choppy videos? The real problem is latency, writes the Verge — but the good news is \"there's a plan to almost eliminate latency, and big companies like Apple, Google, Comcast, Charter, Nvidia, Valve, Nokia, Ericsson, TMobile parent company D…",
        "url": "https://tech.slashdot.org/story/23/12/11/0158248/newinternetstandardl4sthequietplantomaketheinternetfeelfaster",
        "urlToImage": "https://a.fsdn.com/sd/topics/networking_64.png",
        "publishedAt": "20231211T02:01:00Z",
        "content": "It's a new internet standard called L4S that was finalized and published in January, and it could put a serious dent in the amount of time we spend waiting around for webpages or streams to load and … [+3151 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Theregister.com"
        },
        "author": "Laura Dobberstein",
        "title": "Microsoft hikes prices across Asia",
        "description": "PLUS: Japan Moon landing scheduled; Mastercard's APAC paybyface trial; Scammers feast on restaurant QR code\nMicrosoft last week announced price hikes for its software and services, with the biggest rises to be felt across Asia.…",
        "url": "https://www.theregister.com/2023/12/11/apac_tech_news_brief/",
        "urlToImage": "https://regmedia.co.uk/2021/03/08/microsoft_china_editorial_only_shutterstock.jpg",
        "publishedAt": "20231211T00:01:13Z",
        "content": "Microsoft last week announced price hikes for its software and services, with the biggest rises to be felt across Asia.\r\nThe increases are in line with Microsoft's stated practice of keeping local pr… [+6238 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "Senator Warren calls out Apple for shutting down Beeper’s ‘iMessage to Android’ solution  TechCrunch",
        "description": "Senator Warren calls out Apple for shutting down Beeper’s ‘iMessage to Android’ solutionTechCrunch Apple responds to the Beeper iMessage saga: 'We took steps to protect our users'The Verge Apple shut down Beeper Mini's iMessage for Android9to5Google Tech News…",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=172463621",
        "urlToImage": null,
        "publishedAt": "20231211T01:13:43Z",
        "content": "By working faithfully eight hours a day, you may eventually get to be\r\nboss and work twelve.\r\n Robert Frost"
        },
        {
        "source": {
        "id": null,
        "name": "Amazon.de"
        },
        "author": null,
        "title": "[2023 Newest ] Carpuride W901 Pro with Wireless Bluetooth Transmission Portable Apple Carplay & Andorid Auto",
        "description": "Montag ab 08:10 Uhr: [2023 Newest ] Carpuride W901 Pro with Wireless Bluetooth Transmission Portable Apple Carplay & Andorid Auto (regulärer Amazon Preis: 229,99 Euro)  Erinnerung für dieses Angebot setzen.",
        "url": "https://www.amazon.de//en/CarpurideWirelessCarplayBluetoothDashboardblack/dp/B0B1CSCLM4",
        "urlToImage": null,
        "publishedAt": "20231211T01:26:04Z",
        "content": "Genießen Sie eine sicherere und bequemere Art, das Telefon zu verwenden, wenn Sie fahren \r\n Verbinden Sie Ihr iPhone drahtlos mit dem Bildschirm, einfacher Zugriff auf CarPlay, Musik, Karten, Nachric… [+1113 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Amazon.de"
        },
        "author": null,
        "title": "Apple MFizertifizierter Blanbok+ USB Stick iPhone Externer iPhone Stick Speicherstick USB External Memory Stick für iPhone Photostick Lightning Backup für iPhone/ iPad/ Android/ PC",
        "description": "Montag ab 07:15 Uhr: Apple MFizertifizierter Blanbok+ USB Stick iPhone Externer iPhone Stick Speicherstick USB External Memory Stick für iPhone Photostick Lightning Backup für iPhone/ iPad/ Android/ PC (regulärer Amazon Preis: 39,99 Euro)  Erinnerung für di…",
        "url": "https://www.amazon.de//en/BLANBOKCertifiedExternalPhotostickAndroidsilver/dp/B0C3GPZQFP",
        "urlToImage": null,
        "publishedAt": "20231211T01:26:05Z",
        "content": "Select Your Cookie Preferences\r\nWe use cookies and similar tools that are necessary to enable you to make purchases, to enhance your shopping experiences, and to provide our services, as detailed in … [+1117 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Amazon.de"
        },
        "author": null,
        "title": "Hinovo Tragbares MagnetLadegerät",
        "description": "Magnetic External Compatible with iPhone Battery, HINOVO MagSafe External Battery 10000mAh Wireless Power Bank in Metallic Design Compatible with iPhone 15/14/13/12 Series : Amazon.de: Electronics & Photo",
        "url": "https://www.amazon.de//en/MagneticExternalCompatible10000mAhWireless/dp/B0BDLXZN73",
        "urlToImage": null,
        "publishedAt": "20231211T01:26:04Z",
        "content": "Verpackung &amp; Lieferung:Die Verpackung war hochwertig und mit einem TransparencyQRCode ausgestattet. Neben der Powerbank befand sich auch ein USBC auf USBC Kabel im Lieferumfang. Die Lieferung… [+1122 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Amazon.de"
        },
        "author": null,
        "title": "Omoton Handyhalterung Auto für Magsafe  3 in 1 [Verbesserte Saugnäpfe] Magnetische KFZ Halterung, Universeller Auto Handyhalter Lüftung für iPhone 15/14/13/12 Pro Max SE und alle Handys",
        "description": "Montag ab 07:35 Uhr: Omoton Handyhalterung Auto für Magsafe  3 in 1 [Verbesserte Saugnäpfe] Magnetische KFZ Halterung, Universeller Auto Handyhalter Lüftung für iPhone 15/14/13/12 Pro Max SE und alle Handys (regulärer Amazon Preis: 15,99 Euro)  Erinnerung f…",
        "url": "https://www.amazon.de//en/OMOTONMobilePhoneHolderMagsafe/dp/B0C2VHQLSX",
        "urlToImage": null,
        "publishedAt": "20231211T01:26:04Z",
        "content": "Das Produkt habe ich kostenlos zum Testen erhalten. Ich möchte es nur auf langen Fahrten und Reisen nutzen, deshalb stört es mich, dass der Saugnapf des Haltearms mit Klebstoff beschichtet ist, denn … [+2783 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "SlashGear"
        },
        "author": "Alvin Reyes",
        "title": "Single DIN Vs DoubleDIN Car Stereos, What's The Difference?",
        "description": "When shopping for car stereos, you might encounter descriptions that say single or double DIN. Just what does that mean, and is one better than the other?",
        "url": "https://www.slashgear.com/1464290/differencesingledindoubledincarstereos/",
        "urlToImage": "https://www.slashgear.com/img/gallery/singledinvsdoubledincarstereoswhatsthedifference/lintro1701888425.jpg",
        "publishedAt": "20231211T01:56:46Z",
        "content": "When it comes to sound quality and power, doubleDIN stereos are no better than a singleDIN radio. They have the same functions and can produce the same detail and sound clarity. Due to their bigger… [+1094 chars]"
        }
        ]
        }
    ]
    <div className='container my-3'>
    <h2>NewsMonkey-Top Headlines</h2>
      <div className='row'>
       <div className='col-md-3'>
       <NewsItem title="my title" desc="shabahat" imgUrl="C:\Users\hp\Pictures\Screenshots\Screenshot 2024-05-07 073536.png"/>
       </div>
       <NewsItem />
       <div className='col-md-3'>
       <NewsItem />
       </div>
       <div className='col-md-3'>
       <NewsItem />
       </div>
       <div className='col-md-3'>
       <NewsItem />
       </div>
      </div>
    </div>
    )
}

export default News