# 前端题目朗读

翻译文字接口：

接口定义：http://tts.baidu.com/text2audio
方式：GET
返回：audio 音频文件

参数说明：
lan=zh：语言是中文，如果改为lan=en，则语言是英文。
ie=UTF-8：文字格式。
spd=2：语速，可以是1-9的数字，数字越大，语速越快。
text=**：这个就是你要转换的文字。

exmaple: http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text=你要转换的文字

