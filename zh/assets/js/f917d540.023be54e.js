"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[4],{6612:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"algorithm-interview","metadata":{"permalink":"/zh/algorithm-interview","editUrl":"https://github.com/juzibot/tech-blog/blog/2022-02-26-algorithm-interview.mdx","source":"@site/i18n/zh/docusaurus-plugin-content-blog/2022-02-26-algorithm-interview.mdx","title":"\u4e3a\u4ec0\u4e48\u9762\u8bd5\u8981\u8003\u7b97\u6cd5","description":"\u9762\u8bd5\u8fc7\u7a0b\u4e2d\uff0c\u9664\u4e86\u95ee\u7684\u6700\u591a\u7684\u201c\u4f60\u4eec\u516c\u53f8\u662f\u5e72\u4ec0\u4e48\u7684\u201d\u8fd9\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u201c\u4e3a\u4ec0\u4e48\u54b1\u4eec\u516c\u53f8\u5728\u9762\u8bd5\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u9762\u8bd5\u7b97\u6cd5\u9898\u5462\uff1f\u201d\uff0c\u4eca\u5929\u5c31\u8be6\u7ec6\u6765\u62c6\u89e3\u5206\u6790\u4e00\u4e0b\uff0c\u4e3a\u4ec0\u4e48\u5f88\u591a\u516c\u53f8\u559c\u6b22\u9762\u8bd5\u7b97\u6cd5\u9898\uff1f","date":"2022-02-26T00:00:00.000Z","formattedDate":"2022\u5e742\u670826\u65e5","tags":[{"label":"leetcode","permalink":"/zh/tags/leetcode"},{"label":"\u6280\u672f\u9762\u8bd5","permalink":"/zh/tags/\u6280\u672f\u9762\u8bd5"}],"readingTime":11.07,"truncated":true,"authors":[{"name":"\u9ad8\u539f","title":"\u53e5\u5b50\u4e92\u52a8 CTO","url":"https://github.com/windmemory","imageURL":"https://github.com/windmemory.png","key":"windmemory"}],"frontMatter":{"slug":"algorithm-interview","title":"\u4e3a\u4ec0\u4e48\u9762\u8bd5\u8981\u8003\u7b97\u6cd5","authors":"windmemory","tags":["leetcode","\u6280\u672f\u9762\u8bd5"],"keywords":["leetcode","interview","algorithm","programming","program","tech interview","\u9762\u8bd5","\u7b97\u6cd5","\u7f16\u7a0b\uff0c\u6280\u672f\u9762\u8bd5"]},"nextItem":{"title":"\u4f01\u4e1a\u5fae\u4fe1 x Swagger","permalink":"/zh/wecom-openapi"}},"content":"import Image from \'@theme/IdealImage\';\\nimport algorithmInterviewBanner from \'/img/2022-02-26-algorithm-interview/algorithm_interview_banner.png\';\\nimport maxHowell from \'/img/2022-02-26-algorithm-interview/max_howell.jpeg\';\\n\\n\u9762\u8bd5\u8fc7\u7a0b\u4e2d\uff0c\u9664\u4e86\u95ee\u7684\u6700\u591a\u7684\u201c\u4f60\u4eec\u516c\u53f8\u662f\u5e72\u4ec0\u4e48\u7684\u201d\u8fd9\u4e2a\u95ee\u9898\uff0c\u5c31\u662f***<u>\u201c\u4e3a\u4ec0\u4e48\u54b1\u4eec\u516c\u53f8\u5728\u9762\u8bd5\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u9762\u8bd5\u7b97\u6cd5\u9898\u5462\uff1f\u201d</u>***\uff0c\u4eca\u5929\u5c31\u8be6\u7ec6\u6765\u62c6\u89e3\u5206\u6790\u4e00\u4e0b\uff0c\u4e3a\u4ec0\u4e48\u5f88\u591a\u516c\u53f8\u559c\u6b22\u9762\u8bd5\u7b97\u6cd5\u9898\uff1f\\n\\n\x3c!--truncate--\x3e\\n\\n<Image img={algorithmInterviewBanner} />\\n\\n:::info TL;DR\\n1. \u516c\u53f8\u5728\u62db\u8058\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5e76\u4e0d\u5728\u610f\u6f0f\u6389\u5408\u9002\u7684\u5019\u9009\u4eba\uff0c\u771f\u6b63\u5728\u610f\u7684\u662f***<u>\u62db\u8058\u6548\u7387</u>***\uff0c\u6240\u4ee5\u62db\u8058\u4e0a\u7684\u884c\u4e3a\u90fd\u4f1a\u548c\u62db\u8058\u6548\u7387\u76f4\u63a5\u6302\u94a9\\n1. \u7b97\u6cd5\u9898\u662f\u4e00\u79cd\u7b80\u5355\u76f4\u63a5\u9ad8\u6548\u7684\u9a8c\u8bc1***<u>\u95ee\u9898\u62c6\u89e3\u80fd\u529b</u>***\uff0c***<u>\u4ee3\u7801\u7ec4\u7ec7\u80fd\u529b\u7684\u65b9\u5f0f</u>***\uff0c\u8fd9\u6837\u7684\u7b5b\u9009\u65b9\u5f0f\u662f\u975e\u5e38\u9ad8\u6548\u7684\\n:::\\n\\n## \u6765\u81ea\u9762\u8bd5\u4e2d\u7684\u95ee\u9898\\n\\n\u4ece\u53bb\u5e74\u4e0a\u534a\u5e74\u5f00\u59cb\uff0c\u516c\u53f8\u7684\u6280\u672f\u56e2\u961f\u4e00\u76f4\u5728\u6269\u5f20\uff0c\u671f\u95f4\u9762\u8bd5\u4e86\u4e0d\u5c11\u7684\u524d\u7aef\u5de5\u7a0b\u5e08\uff0c\u540e\u7aef\u5de5\u7a0b\u5e08\uff0c\u5168\u6808\u5de5\u7a0b\u5e08\u7b49\u7b49\uff0c\u56e0\u4e3a\u6211\u4eec\u9762\u8bd5\u8fc7\u7a0b\u4e2d\uff0c\u65e0\u8bba\u662f\u7b2c\u4e00\u8f6e\u7684\u7535\u8bdd\u9762\u8bd5\uff0c\u8fd8\u662f\u7b2c\u4e8c\u8f6e\u7684\u5230\u9762\uff0c\u90fd\u4f1a\u8003\u5bdf\u7b97\u6cd5\u9898\uff0c\u6709\u4e00\u4e9b\u540c\u5b66\u5c31\u5728\u9762\u8bd5\u8fc7\u7a0b\u4e2d\u95ee\u6211\uff1a\\n\\n> ***<u>\u201c\u60a8\u89c9\u5f97\u7b97\u6cd5\u9898\u5728\u5b9e\u9645\u5de5\u4f5c\u4e2d\u6709\u4ec0\u4e48\u7528\u5462\uff1f\u201d</u>***\\n\\n\u8fd9\u4e2a\u95ee\u9898\u4e00\u822c\u90fd\u662f\u7b97\u6cd5\u9898\u76ee\u6ca1\u6709\u505a\u51fa\u6765\uff0c\u6216\u8005\u9898\u76ee\u505a\u7684\u4e0d\u591f\u597d\u7684\u540c\u5b66\u95ee\u51fa\u6765\u7684\uff0c\u4e0d\u8fc7\u6211\u89c9\u5f97\uff0c\u8fd9\u4e2a\u95ee\u9898\u5e94\u8be5\u5f88\u591a\u4eba\u90fd\u6709\u60f3\u5230\u8fc7\u3002\u6211\u7684\u7b54\u6848\u5f88\u76f4\u63a5\uff1a***<u>\u7b97\u6cd5\u5728\u5b9e\u9645\u5de5\u4f5c\u4e2d\u6ca1\u6709\u7528</u>***\u3002\u56e0\u4e3a\u5b9e\u9645\u5de5\u4f5c\u4e2d\uff0c\u771f\u6b63\u5927\u5bb6\u6bcf\u5929\u5199\u7684\u4ee3\u7801\u903b\u8f91\uff0c\u5176\u5b9e\u5927\u90e8\u5206\u90fd\u662f\u5728\u5b9e\u73b0\u4e1a\u52a1\u903b\u8f91\uff0c\u800c\u4e1a\u52a1\u903b\u8f91\u5176\u5b9e\u90fd\u662f\u76f8\u5bf9\u6bd4\u8f83\u6e05\u6670\uff0c\u4e14\u4e0d\u590d\u6742\u7684\u3002\u90a3\u5176\u5b9e\u8fd9\u5c31\u5f15\u51fa\u4e86\u4e0b\u4e00\u4e2a\u95ee\u9898\uff0c\u4e5f\u662f\u9762\u8bd5\u7684\u540c\u5b66\u5e38\u95ee\u7684\u4e00\u4e2a\u95ee\u9898\uff1a\\n\\n> ***<u>\u201c\u4e3a\u4ec0\u4e48\u54b1\u4eec\u516c\u53f8\u5728\u9762\u8bd5\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u9762\u8bd5\u7b97\u6cd5\u9898\u5462\uff1f\u201d</u>***\\n\\n\u5927\u5bb6\u53ef\u4ee5\u770b\u51fa\uff0c\u5176\u5b9e\u4e4b\u6240\u4ee5\u4f1a\u95ee\u7b2c\u4e00\u4e2a\u95ee\u9898\uff0c\u5176\u5b9e\u662f\u7b49\u7740\u95ee\u7b2c\u4e8c\u4e2a\u95ee\u9898\ud83d\ude02\u3002\\n\\n### \u6211\u81ea\u5df1\u7684\u9762\u8bd5\u7ecf\u5386\\n\\n\u5728\u6211\u6240\u6709\u7684\u9762\u8bd5\u7ecf\u5386\u91cc\uff0c\u5370\u8c61\u6700\u6df1\u523b\u7684\u662f Google \u7684\u9762\u8bd5\u3002\u6211\u8bb0\u5f97\u6211\u8e0f\u5165\u9762\u8bd5\u623f\u95f4\u4e4b\u540e\uff0c\u9762\u8bd5\u5b98\u548c\u6211\u8bf4\u7684\u7b2c\u4e00\u53e5\u8bdd\u662f\uff1aHere is the problem\u3002\u5b8c\u5168\u7684\u5f00\u95e8\u89c1\u5c71\u76f4\u63a5\u51fa\u7b97\u6cd5\u9898\uff0cGoogle \u662f\u552f\u4e00\u7684\u4e00\u5bb6\u6ca1\u6709\u95ee\u7b80\u5386\u4e0a\u4efb\u4f55\u5185\u5bb9\uff0c\u751a\u81f3\u8fde\u81ea\u6211\u4ecb\u7ecd\u90fd\u6ca1\u8ba9\u6211\u505a\u7684\u516c\u53f8\u3002\\n\\n\u800c\u5176\u4ed6\u7684\u4e24\u6b21\u9762\u8bd5\uff0c\u4e00\u4e2a\u662f Expedia\uff0c\u4e00\u4e2a\u662f Amazon\uff0c\u65e0\u4e00\u4f8b\u5916\u7684\u90fd\u662f\u4ece\u7b97\u6cd5\u9898\u5f00\u59cb\u7684\u9762\u8bd5\u3002\\n\\n\u4f46\u662f\u8bf4\u5b9e\u8bdd\uff0c\u76f4\u5230\u81ea\u5df1\u521b\u4e1a\u4e4b\u524d\uff0c\u6211\u90fd\u6ca1\u6709\u4ed4\u7ec6\u601d\u8003\u8fc7\uff0c\u4e3a\u4ec0\u4e48\u8fd9\u4e9b\u516c\u53f8\u90fd\u8fd9\u4e48\u559c\u6b22\u9762\u8bd5\u7b97\u6cd5\u9898\uff0c\u6211\u53ea\u662f\u88ab\u52a8\u7684\u542c\u8bf4\u4e86\u8fd9\u4e9b\u516c\u53f8\u5728\u62db\u8058\u5de5\u7a0b\u5e08\u7684\u65f6\u5019\u90fd\u4f1a\u6709\u7b97\u6cd5\u9898\u4e0a\u7684\u8003\u5bdf\uff0c\u6240\u4ee5\u81ea\u884c\u505a\u4e86\u51c6\u5907\u800c\u5df2\u3002\u6211\u56de\u56fd\u4e4b\u540e\uff0c\u53d1\u73b0\u56fd\u5185\u7684\u5927\u5382\u4e5f\u90fd\u662f\u4e00\u6837\uff0c\u90fd\u4f1a\u6709\u7b97\u6cd5\u9898\u7684\u8003\u5bdf\uff0c\u90a3\u4e48\u5230\u5e95\u662f\u4e3a\u4ec0\u4e48\u5927\u5bb6\u8fd9\u4e48\u559c\u6b22\u9762\u8bd5\u7b97\u6cd5\u5462\uff1f\\n\\n## \u4e3a\u4ec0\u4e48\u5927\u5bb6\u90fd\u559c\u6b22\u9762\u8bd5\u7b97\u6cd5\u9898\uff1f\\n\\n\u6211\u771f\u7684\u5f00\u59cb\u601d\u8003\u8fd9\u4e2a\u95ee\u9898\u662f\u5728\u521b\u4e1a\u4e4b\u540e\u3002\u5f53\u89d2\u8272\u8f6c\u53d8\uff0c\u4ece\u5e94\u8058\u8005\u53d8\u6210\u62db\u8058\u8005\u7684\u65f6\u5019\uff0c\u601d\u8003\u7684\u95ee\u9898\u5c31\u53d8\u4e86\u3002\\n\\n### \u62db\u8058\u7684\u65f6\u5019\uff0c\u516c\u53f8\u7684\u6210\u672c\\n\\n\u4ece\u516c\u53f8\u7684\u89d2\u5ea6\u770b\uff0c\u662f\u5e0c\u671b\u7528\u6700\u4f4e\u7684\u6210\u672c\u627e\u5230\u6700\u5408\u9002\u7684\u4eba\u3002\u800c\u516c\u53f8\u90fd\u6709\u4ec0\u4e48\u6210\u672c\u5462\uff1f\\n\\n1. \u62db\u8058\u4eba\u529b\u6210\u672c\uff1a\u5305\u62ec\u4e86\u8d1f\u8d23\u7ec4\u7ec7\u62db\u8058\u7684\u4eba\u529b\u90e8\u95e8\u7684\u6210\u672c\uff0c\u548c\u5177\u4f53\u9762\u8bd5\u7684\u65f6\u5019\u6280\u672f\u90e8\u95e8\u7684\u65f6\u95f4\u6210\u672c\\n1. \u5019\u9009\u4eba\u8bd5\u9519\u6210\u672c\uff1a\u5f53\u62db\u5230\u4e86\u4e00\u4e2a\u4e0d\u5408\u9002\u7684\u5019\u9009\u4eba\uff0c\u8bd5\u7528\u671f\u4e0d\u901a\u8fc7\u800c\u91cd\u65b0\u62db\u8058\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4f1a\u803d\u8bef\u5927\u91cf\u7684\u65f6\u95f4\uff0c\u4ece\u800c\u7ed9\u516c\u53f8\u5e26\u6765\u975e\u5e38\u9ad8\u7684\u6210\u672c\\n\\n### \u6210\u672c\u96be\u9898\\n\\n\u4e3a\u4e86\u4f18\u5316\u4e0a\u9762\u63d0\u5230\u7684\u4e24\u79cd\u6210\u672c\uff0c\u9700\u8981\u5728\u9762\u8bd5\u7684\u8fc7\u7a0b\u4e2d\u505a\u51fa\u4e00\u5b9a\u7684\u53d6\u820d\uff1a\\n\\n1. \u4e3a\u4e86\u8282\u7701\u62db\u8058\u4eba\u529b\u6210\u672c\uff0c\u90a3\u4e48***<u>\u9762\u8bd5\u65f6\u95f4\u8d8a\u77ed\u8d8a\u597d</u>***\uff0c\u8fd9\u6837\u53ef\u4ee5\u6700\u5927\u7a0b\u5ea6\u7684\u8282\u7701\u6280\u672f\u9762\u8bd5\u7684\u65f6\u95f4\u6210\u672c\\n1. \u4e3a\u4e86\u8282\u7701\u8bd5\u9519\u6210\u672c\uff0c\u90a3\u4e48\u9762\u8bd5\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5bf9\u5019\u9009\u4eba\u7684\u8003\u5bdf\u548c\u4e86\u89e3\u8d8a\u6df1\u523b\u8d8a\u597d\uff0c\u8fd9\u6837\u53ef\u4ee5\u6700\u5927\u7a0b\u5ea6\u7684\u786e\u5b9a\u5165\u804c\u4e4b\u540e\u662f\u4e0d\u662f\u53ef\u4ee5\u5b8c\u5168\u80dc\u4efb\u5de5\u4f5c\u3002\u800c\u4e3a\u4e86\u4e86\u89e3\u6df1\u523b\uff0c\u5c31\u9700\u8981***<u>\u9762\u8bd5\u65f6\u95f4\u8d8a\u957f\u8d8a\u597d</u>***\\n\\n### \u6548\u7387\u4f18\u5148\u7684\u62db\u8058\u7b56\u7565\\n\\n\u7efc\u5408\u4e0a\u9762\u4e24\u70b9\uff0c\u53ef\u4ee5\u770b\u5230\u4ece\u516c\u53f8\u7684\u89d2\u5ea6\u51fa\u53d1\uff0c\u5982\u679c\u60f3\u8981\u8282\u7701\u62db\u4eba\u6210\u672c\uff0c\u90a3\u4e48\u552f\u4e00\u7684\u8def\u5f84\u5c31\u662f\uff0c***<u>\u63d0\u9ad8\u9762\u8bd5\u7684\u6548\u7387</u>***\uff0c\u5373\u6709\u67d0\u4e2a\u529e\u6cd5\u53ef\u4ee5\u7528\u6700\u77ed\u7684\u65f6\u95f4\u5185\u4e86\u89e3\u5230\u6700\u591a\u5019\u9009\u4eba\u7684\u60c5\u51b5\u3002\\n\\n\u5982\u679c\u5927\u5bb6\u80fd\u591f\u7406\u89e3\u4e0a\u9762\u8fd9\u4e00\u70b9\uff0c\u5c31\u80fd\u660e\u767d\u4e3a\u4ec0\u4e48\u4f1a\u6709\u4e00\u4e9b\u201c\u6b67\u89c6\u201d\u5b58\u5728\u4e86\uff0c\u6bd4\u5982\u6709\u4e9b\u516c\u53f8\u4e3a\u4ec0\u4e48\u7b5b\u9009\u7b80\u5386\u7684\u65f6\u5019\uff0c\u53ea\u8981\u672c\u79d1\u5b66\u5386\uff0c\u800c\u4e0d\u8981\u5927\u4e13\uff0c\u5e76\u4e0d\u662f\u8bf4\u6240\u6709\u5927\u4e13\u7684\u540c\u5b66\u90fd\u6bd4\u672c\u79d1\u540c\u5b66\u5dee\uff0c\u800c\u662f\u5927\u4e13\u7684\u540c\u5b66\u91cc\uff0c\u80fd\u7b26\u5408\u516c\u53f8\u8981\u6c42\u7684\u4eba\u624d\u7684\u6bd4\u4f8b\u8981\u6bd4\u672c\u79d1\u7684\u540c\u5b66\u4f4e\uff0c\u4e3a\u4e86\u80fd\u591f\u66f4\u9ad8\u6548\u7684\u62db\u8058\uff0c\u6240\u4ee5\u76f4\u63a5\u62d2\u7edd\u6240\u6709\u5927\u4e13\u7684\u540c\u5b66\u3002\\n\\n### \u7b97\u6cd5\u9898\uff0c\u4e00\u4e2a\u7b80\u5355\u9ad8\u6548\u7684\u9009\u62e9\\n\\n\u60f3\u6e05\u695a\u4e0a\u9762\u7684\u8fd9\u4e2a\u6548\u7387\u5bfc\u5411\u7684\u62db\u8058\u7b56\u7565\uff0c\u5c31\u5f88\u597d\u7406\u89e3\u9762\u8bd5\u7b97\u6cd5\u9898\u7684\u597d\u5904\u4e86\u3002\u9996\u5148\uff0c\u5927\u90e8\u5206\u7b97\u6cd5\u9898\u662f\u53ef\u4ee5\u8003\u5bdf\u5019\u9009\u4eba\u4e24\u4e2a\u65b9\u9762\u7684\u80fd\u529b\u7684\uff1a\\n\\n1. \u95ee\u9898\u7684\u5206\u6790\u62c6\u89e3\u80fd\u529b\uff1a\u5c06\u4e00\u4e2a\u5177\u4f53\u7684\u95ee\u9898\u8f6c\u5316\u6210\u4e00\u4e2a\u7a0b\u5e8f\u7684\u95ee\u9898\uff0c\u5e76\u5f97\u5230\u4e00\u4e2a\u5177\u4f53\u7684\u7b97\u6cd5\u601d\u8def\\n1. \u5b9e\u73b0\u4ee3\u7801\u7684\u80fd\u529b\uff1a\u5c06\u4e00\u4e2a\u7b97\u6cd5\u601d\u8def\uff0c\u53d8\u6210\u5177\u4f53\u7684\u4ee3\u7801\u7684\u80fd\u529b\\n\\n\u5f88\u591a\u4eba\u53ef\u80fd\u89c9\u5f97\u7a0b\u5e8f\u5458\u6700\u91cd\u8981\u7684\u80fd\u529b\u662f\u201c\u5199\u201d\u4ee3\u7801\uff0c\u5176\u5b9e\uff0c\u7a0b\u5e8f\u5458\u6700\u91cd\u8981\u7684\u80fd\u529b\u662f\u201c\u60f3\u201d\u4ee3\u7801\u3002\u5728\u5e73\u65f6\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u5176\u5b9e\u201c\u60f3\u201d\u4ee3\u7801\uff08\u505a\u7cfb\u7edf\u8bbe\u8ba1\uff0c\u7a0b\u5e8f\u8bbe\u8ba1\u7b49\uff09\u7684\u65f6\u95f4\u80fd\u591f\u5360\u5230\u6240\u6709\u65f6\u95f4\u7684 70%\uff0c\u751a\u81f3 80%\uff0c\u4f59\u4e0b\u7684 20% - 30% \u624d\u662f\u771f\u6b63\u201c\u5199\u201d\u4ee3\u7801\u7684\u65f6\u95f4\u3002\\n\\n\u4ee5\u4e0a\u4e24\u4e2a\u80fd\u529b\uff0c\u4e5f\u90fd\u662f\u5e73\u65f6\u5de5\u4f5c\u4e2d\u9700\u8981\u7684\u80fd\u529b\u3002\u867d\u7136\u8bf4\uff0c\u7b97\u6cd5\u9898\u662f\u8003\u5bdf\u4e86\u5177\u4f53\u67d0\u4e2a\u7b97\u6cd5\u7684\u5b9e\u73b0\u8fc7\u7a0b\uff0c\u4e14\u8fd9\u4e2a\u7b97\u6cd5\u5e76\u4e0d\u80fd\u5728\u5e73\u65f6\u5de5\u4f5c\u4e2d\u88ab\u4f7f\u7528\u5230\uff0c\u4f46\u662f\u4e0a\u9762\u63d0\u5230\u7684\u4e24\u4e2a\u80fd\u529b\uff0c\u5374\u662f\u5e73\u65f6\u5de5\u4f5c\u4e2d\u5fc5\u4e0d\u53ef\u5c11\u7684\u4e24\u4e2a\u80fd\u529b\u3002\u56e0\u6b64\u4ece\u7b97\u6cd5\u9898\u51fa\u53d1\uff0c\u8fdb\u800c\u8003\u5bdf\u8fd9\u4e24\u9879\u80fd\u529b\uff0c\u624d\u662f\u7b97\u6cd5\u9898\u9762\u8bd5\u7684\u4e3b\u8981\u76ee\u7684\u3002\\n\\n### \u6211\u5f88\u5f3a\uff0c\u4e3a\u4ec0\u4e48\u53ea\u56e0\u4e3a\u7b97\u6cd5\u4e0d\u884c\u5c31\u62d2\u7edd\u4e86\u6211\uff1f\\n\\n\u53ef\u80fd\u6709\u4e9b\u540c\u5b66\u4f1a\u60f3\u8bf4\uff0c\u90a3\u6211\u5176\u4ed6\u65b9\u9762\u5f88\u5f3a\uff0c\u4e3a\u4ec0\u4e48\u5355\u5355\u56e0\u4e3a\u6211\u7b97\u6cd5\u4e0d\u8fc7\u5173\uff0c\u5c31\u5b8c\u5168\u4e0d\u53bb\u8003\u91cf\u6211\u5176\u4ed6\u7684\u80fd\u529b\u4e86\u5462\uff1f\u8fd9\u8ba9\u6211\u60f3\u8d77\u4e86\u4e00\u4e2a\u4e4b\u524d\u8f70\u52a8\u6280\u672f\u5708\u7684\u4e00\u4e2a\u4e8b\u4ef6\uff1a\u9f0e\u9f0e\u5927\u540d\u7684 [Homebrew](https://brew.sh/) \u4f5c\u8005 Max Howell \u88ab Google \u7ed9\u6302\u4e86\u3002\uff08\u4e0d\u77e5\u9053 Homebrew \u7684\u540c\u5b66\u81ea\u884c\u767e\u5ea6\uff09\\n\\n<Image img={maxHowell} />\\n\\n\u5728\u8fd9\u4e2a\u4e8b\u4ef6\u91cc\uff0cMax Howell \u7684\u6210\u5c31\u5df2\u7ecf\u4f17\u4eba\u7686\u77e5\u4e86\uff0c\u4f46\u662f\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8fd8\u662f\u88ab Google \u7ed9\u6302\u4e86\uff0c\u53ef\u4ee5\u8bf4\uff0c\u5982\u679c\u5176\u4ed6\u65b9\u9762\u5f88\u5f3a\uff0c\u4f46\u662f\u7b97\u6cd5\u6ca1\u8fc7\u7ebf\uff0c\u8fdb\u800c\u88ab\u516c\u53f8\u62d2\u7edd\u7684\u60c5\u51b5\uff0c\u4e0d\u662f\u4e2a\u4f8b\uff0c\u800c\u662f\u666e\u904d\u5b58\u5728\u7684\u3002\\n\\n\u8981\u89e3\u7b54\u8fd9\u4e2a\u95ee\u9898\uff0c\u5c31\u9700\u8981\u5957\u56de\u5230\u4e0a\u9762\u62db\u8058\u7b56\u7565\u4e0a\u4e86\uff0c\u8003\u5bdf\u5019\u9009\u4eba\u5176\u4ed6\u65b9\u9762\u7684\u80fd\u529b\uff0c\u5e76\u5c1d\u8bd5\u901a\u8fc7\u8fd9\u4e9b\u80fd\u529b\u6765\u63a8\u5bfc\u5019\u9009\u4eba\u662f\u5426\u80fd\u591f\u80dc\u4efb\u5de5\u4f5c\uff0c\u9700\u8981\u516c\u53f8\u5c42\u9762\u82b1\u8d39\u6bd4\u8f83\u591a\u989d\u5916\u7684\u65f6\u95f4\uff0c\u4e3a\u4e86\u63d0\u9ad8\u62db\u8058\u7684\u6548\u7387\uff0c\u5bf9\u4e8e\u8fd9\u6837\u7684\u5019\u9009\u4eba\u53ef\u80fd\u5c31\u5b81\u53ef\u9519\u8fc7\uff0c\u4e5f\u4e0d\u8981\u518d\u989d\u5916\u82b1\u8d39\u65f6\u95f4\u4e86\uff0c\u53ef\u80fd\u6709\u4e9b\u540c\u5b66\u4f1a\u89c9\u5f97\u8fd9\u6837\u5f88\u4e0d\u516c\u5e73\uff0c\u4f46\u662f\u4ece\u516c\u53f8\u7684\u89d2\u5ea6\u770b\uff0c\u8fd9\u6837\u4e5f\u662f\u4e00\u4e2a\u65e0\u53ef\u5948\u4f55\u7684\u9009\u62e9\uff0c\u662f\u4e00\u4e2a\u6743\u8861\u5404\u65b9\u9762\u5229\u5f0a\u540e\uff0c\u5bf9\u4e8e\u516c\u53f8\u5229\u76ca\u6700\u5927\u5316\u7684\u4e00\u4e2a\u9009\u62e9\u3002\\n\\n## \u6216\u8bb8\uff0c\u5237\u5237\u7b97\u6cd5\u4e5f\u6ca1\u90a3\u4e48\u5dee\\n\\n\u5355\u7eaf\u4ece\u5e94\u5bf9\u9762\u8bd5\u7684\u89d2\u5ea6\u6765\u8bf4\uff0c\u7a0b\u5e8f\u5458\u540c\u5b66\u4eec\u4e0d\u5f97\u4e0d\u53bb\u5237\u7b97\u6cd5\u9898\u6765\u51c6\u5907\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u5f88\u82e6\uff0c\u56e0\u4e3a\u4f1a\u7ecf\u5386\u90a3\u4e9b\u6293\u8033\u6320\u816e\u4e5f\u60f3\u4e0d\u660e\u767d\u4e3a\u4ec0\u4e48\uff0c\u7406\u4e0d\u6e05\u5230\u5e95\u600e\u4e48\u56de\u4e8b\u7684\u65f6\u523b\uff0c\u6211\u66fe\u7ecf\u4e5f\u88ab [KMP \u7b97\u6cd5](https://zh.wikipedia.org/wiki/KMP%E7%AE%97%E6%B3%95)\u6298\u78e8\u4e86\u597d\u51e0\u4e2a\u65e5\u591c\u3002\u4f46\u662f\u5176\u5b9e\u5237\u9898\u4e0d\u4ec5\u4ec5\u662f\u5728\u5e94\u4ed8\u9762\u8bd5\uff0c\u8fd8\u4f1a\u7ed9\u4f60\u5e26\u6765\u4e00\u4e9b\u771f\u771f\u5207\u5207\u7684\u53d8\u5316\uff0c\u8fd9\u4e9b\u4f1a\u5728\u53e6\u5916\u4e00\u7bc7\u535a\u5ba2\u91cc\u8be6\u7ec6\u8ba8\u8bba\uff08\u7b49\u6211\u5199\u5b8c\u5c31\u628a\u94fe\u63a5\u52a0\u5728\u8fd9\uff09\u3002\\n\\n\u6240\u4ee5\uff0c\u5176\u5b9e\u5237\u5237\u7b97\u6cd5\u4e5f\u6ca1\u90a3\u4e48\u5dee\uff0c\u63a8\u8350\u5927\u5bb6\u6709\u65f6\u95f4\u5237\u4e00\u5237\u3002"},{"id":"wecom-openapi","metadata":{"permalink":"/zh/wecom-openapi","editUrl":"https://github.com/juzibot/tech-blog/blog/2022-02-18-wecom-openapi.mdx","source":"@site/i18n/zh/docusaurus-plugin-content-blog/2022-02-18-wecom-openapi.mdx","title":"\u4f01\u4e1a\u5fae\u4fe1 x Swagger","description":"\u5728\u6211\u4eec\u5bf9\u63a5\u4f01\u4e1a\u5fae\u4fe1\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\u4f01\u4e1a\u5fae\u4fe1\u7684 API \u975e\u5e38\u591a\uff0c\u4e14\u53c2\u6570\u5404\u5f02\u3002\u4e3a\u4e86\u6700\u5927\u7a0b\u5ea6\u7684\u51cf\u5c11\u91cd\u590d\u5de5\u4f5c\uff0c\u51cf\u5c11\u7f16\u7801\u4e2d\u7684\u4f4e\u7ea7\u9519\u8bef\uff0c\u6211\u4eec\u51b3\u5b9a\u501f\u52a9\u5de5\u5177\u6765\u81ea\u52a8\u751f\u6210\u4f01\u4e1a\u5fae\u4fe1\u7684 API \u8c03\u7528\u4ee3\u7801\u3002","date":"2022-02-18T00:00:00.000Z","formattedDate":"2022\u5e742\u670818\u65e5","tags":[{"label":"swagger","permalink":"/zh/tags/swagger"},{"label":"openapi","permalink":"/zh/tags/openapi"},{"label":"wecom","permalink":"/zh/tags/wecom"},{"label":"codegen","permalink":"/zh/tags/codegen"}],"readingTime":4.14,"truncated":true,"authors":[{"name":"\u5218\u8d35\u7acb","title":"\u53e5\u5b50\u4e92\u52a8\u8d44\u6df1\u5de5\u7a0b\u5e08","url":"https://github.com/gongzili456","imageURL":"https://avatars.githubusercontent.com/u/6082335","key":"rory"}],"frontMatter":{"slug":"wecom-openapi","title":"\u4f01\u4e1a\u5fae\u4fe1 x Swagger","authors":"rory","tags":["swagger","openapi","wecom","codegen"],"keywords":["swagger","openapi","wecom","wxwork","workweixin","workwx","qychat","qywork","openapi3","codegen","wework","wecaht"]},"prevItem":{"title":"\u4e3a\u4ec0\u4e48\u9762\u8bd5\u8981\u8003\u7b97\u6cd5","permalink":"/zh/algorithm-interview"},"nextItem":{"title":"\u53e5\u5b50\u4e92\u52a8\u6280\u672f\u535a\u5ba2\u6b63\u5f0f\u4e0a\u7ebf\uff01","permalink":"/zh/first-blog"}},"content":"import Image from \'@theme/IdealImage\';\\nimport swaggerBanner from \'/img/2022-02-18-wecom-gateway/swagger_banner.jpeg\';\\nimport authorizeStep from \'/img/2022-02-18-wecom-gateway/authorize_step.png\';\\nimport proxyStep from \'/img/2022-02-18-wecom-gateway/proxy_step.png\';\\n\\n\u5728\u6211\u4eec\u5bf9\u63a5\u4f01\u4e1a\u5fae\u4fe1\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\u4f01\u4e1a\u5fae\u4fe1\u7684 API \u975e\u5e38\u591a\uff0c\u4e14\u53c2\u6570\u5404\u5f02\u3002\u4e3a\u4e86\u6700\u5927\u7a0b\u5ea6\u7684\u51cf\u5c11\u91cd\u590d\u5de5\u4f5c\uff0c\u51cf\u5c11\u7f16\u7801\u4e2d\u7684\u4f4e\u7ea7\u9519\u8bef\uff0c\u6211\u4eec\u51b3\u5b9a\u501f\u52a9\u5de5\u5177\u6765\u81ea\u52a8\u751f\u6210\u4f01\u4e1a\u5fae\u4fe1\u7684 API \u8c03\u7528\u4ee3\u7801\u3002\\n\\n\u8fd9\u4e2a\u65f6\u5019\u5c31\u770b\u5230\u4e86 `Swagger` \u8fd9\u4e2a\u9879\u76ee\uff0c\u4e00\u756a\u5c1d\u8bd5\u4e4b\u540e\uff0c\u7adf\u7136\u5f97\u5230\u4e86\u5982\u6b64\u65b9\u4fbf\u597d\u7528\u7684\u4e00\u5957\u5de5\u5177\u2026\u2026\\n\\n\x3c!--truncate--\x3e\\n\\nGithub: [github.com/juzibot/wecom-openapi](https://github.com/juzibot/wecom-openapi)\\n\\nDemo: [wecom-openapi.juzibot.com](https://wecom-openapi.juzibot.com)\\n\\n## OpenAPI \u89c4\u8303\\n\\nOpenAPI \u89c4\u8303\uff08OAS\uff09\u5b9a\u4e49\u4e86\u4e00\u4e2a\u6807\u51c6\u7684\u3001\u8bed\u8a00\u65e0\u5173\u7684 RESTful API \u63a5\u53e3\u89c4\u8303\uff0c\u5b83\u53ef\u4ee5\u540c\u65f6\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u548c\u8ba1\u7b97\u673a\u67e5\u770b\u5e76\u7406\u89e3\u67d0\u4e2a\u670d\u52a1\u7684\u529f\u80fd\uff0c\u800c\u65e0\u9700\u8bbf\u95ee\u6e90\u4ee3\u7801\u3001\u6587\u6863\u6216\u7f51\u7edc\u6d41\u91cf\u68c0\u67e5\uff0c\u65e2\u65b9\u4fbf\u4eba\u7c7b\u5b66\u4e60\u548c\u9605\u8bfb\uff0c\u4e5f\u65b9\u4fbf\u673a\u5668\u9605\u8bfb\u3002\u6b63\u786e\u5b9a\u4e49 OAS \u540e\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528\u6700\u5c11\u7684\u5b9e\u73b0\u903b\u8f91\u6765\u7406\u89e3\u8fdc\u7a0b\u670d\u52a1\u5e76\u4e0e\u4e4b\u4ea4\u4e92\u3002\\n\\n\u6b64\u5916\uff0c\u6587\u6863\u751f\u6210\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528 OpenAPI \u89c4\u8303\u6765\u751f\u6210 API \u6587\u6863\uff0c\u4ee3\u7801\u751f\u6210\u5de5\u5177\u53ef\u4ee5\u751f\u6210\u5404\u79cd\u7f16\u7a0b\u8bed\u8a00\u4e0b\u7684\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u4ee3\u7801\uff0c\u6d4b\u8bd5\u4ee3\u7801\u548c\u5176\u4ed6\u7528\u4f8b\u3002\u8be6\u89c1\uff1a[OpenAPI Specification](https://swagger.io/specification/)\\n\\n<Image img={swaggerBanner} />\\n\\n## WeCom-OpenAPI\\n\\n\u4f01\u4e1a\u5fae\u4fe1\u5e76\u6ca1\u6709\u63d0\u4f9b\u7b26\u5408 OpenAPI \u89c4\u8303\u7684\u6587\u6863\uff0c\u6240\u4ee5 [WeCom-OpenAPI](https://github.com/juzibot/wecom-openapi) \u9879\u76ee\u5e94\u8fd0\u800c\u751f\u3002\\n\\n[WeCom-OpenAPI](https://github.com/juzibot/wecom-openapi) \u662f\u5229\u7528  NestJS \u7684 Swagger \u96c6\u6210\u80fd\u529b\u6765\u5b9e\u73b0\u7684\uff0c[@nestjs/swagger](https://www.npmjs.com/package/@nestjs/swagger) \u63d0\u4f9b\u4e86\u4e00\u4e9b\u91cc\u7684\u88c5\u9970\u5668\uff08Decorators\uff09\u6765\u58f0\u660e Swagger \u5c5e\u6027\uff0c\u65b9\u4fbf\u7ba1\u7406 API \u4e4b\u95f4\u7684\u5173\u8054\u5173\u7cfb\u3002\\n\\n## \u4f7f\u7528\u65b9\u5f0f\\n\\n\u628a\u4ee3\u7801\u514b\u9686\u4e0b\u6765\uff0c\u5b89\u88c5\u4f9d\u8d56\u540e\u542f\u52a8\u9879\u76ee\u3002\u542f\u52a8\u540e\u4f1a\u5728\u6839\u76ee\u5f55\u751f\u6210 swagger spec \u6587\u4ef6 openapi.yaml\uff0c\u540c\u65f6\u53ef\u4ee5\u7528\u6d4f\u89c8\u5668\u6253\u5f00 http://localhost:3000/openapi \u67e5\u770b Swagger UI\\n\\n```bash\\n$ git clone git@github.com:juzibot/wecom-openapi.git\\n\\n$ cd wecom-opwenapi && npm install\\n\\n$ npm run start\\n```\\n\\n[WeCom-OpenAPI](https://github.com/juzibot/wecom-openapi) \u63d0\u4f9b\u4e86\u5bf9\u4f01\u4e1a\u5fae\u4fe1 API \u7684\u4ee3\u7406\u8f6c\u53d1\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u5728 Swagger UI \u4e0a\u76f4\u63a5\u5bf9  API \u8fdb\u884c\u8c03\u8bd5\u3002\u9996\u5148\u5c06\u4f60\u7684 AccessToken \u914d\u7f6e\u597d\u3002\\n\\n<Image img={authorizeStep} />\\n\\n\u7136\u540e\u9009\u62e9\u672c\u5730\u4ee3\u7406\u5730\u5740\u5373\u53ef\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u51fa\u73b0\u8de8\u57df\u7684\u95ee\u9898\u3002\\n\\n<Image img={proxyStep} />\\n\\n## \u4ee3\u7801\u751f\u6210\\n\\n\u4e3b\u6d41\u7684\u4ee3\u7801\u751f\u6210\u5de5\u5177\u662f [swagger-codegen](https://github.com/swagger-api/swagger-codegen)\uff0c\u4f46\u662f\u5b83\u751f\u6210\u7684 golang \u4ee3\u7801\u4e0d\u592a\u53cb\u597d\uff0c\u6240\u4ee5\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 [go-swagger](https://github.com/go-swagger/go-swagger) \u9879\u76ee\uff0c\u4f46\u662f\u76ee\u524d\u53ea\u652f\u6301 swagger 2.0 \u7248\u672c\uff0c\u6240\u4ee5\u9700\u8981\u5c06\u4e0a\u9762\u5f97\u5230\u7684  openapi.yaml \u6587\u4ef6\u8f6c\u6362\u6210\u4e00\u4e0b\u7248\u672c\u3002\u8fd9\u91cc\u4f7f\u7528 [api-spec-converter](https://www.npmjs.com/package/api-spec-converter) \u6765\u505a\u7248\u672c\u8f6c\u6362\u3002\\n\\n```bash\\n$ npm install -g api-spec-converter\\n\\n# \u8f6c\u6362\u6587\u6863\u7248\u672c\\n$ api-spec-converter --from=openapi_3 --to=swagger_2 \\\\\\n  --syntax=yaml \\\\\\n  --order=alpha \\\\\\n  ./openapi.yaml > swagger.yaml\\n \\n# \u5b89\u88c5 go-swaager \\n$ brew install go-swagger\\n \\n$ mkdir wecom-api\\n\\n# \u751f\u6210 golang \u4ee3\u7801\uff0c\u8981\u6c42\u76ee\u6807\u76ee\u5f55\u5fc5\u987b\u5728 GO_PATH \u4e2d\\n$ cd wecom-api && go mod init wecom-api\\n\\n# \u751f\u6210 golang \u4ee3\u7801\\n$ swagger generate client -f swagger.yaml -t wecom-api\\n```\\n\\n\u81f3\u6b64\uff0c\u5728 wecom-api \u76ee\u5f55\u4e2d\u4f1a\u5f97\u5230\u751f\u6210\u7684\u4ee3\u7801\u6587\u4ef6\\n\\n```\\n./wecom-api/\\n\u251c\u2500\u2500 client\\n\u2514\u2500\u2500 models\\n```\\n- client \u76ee\u5f55\u4e2d\u5b58\u653e Client \u5bf9\u8c61\u548c Parameter\u3001Response \u5305\u88c5\u5bf9\u8c61\\n- models \u76ee\u5f55\u5b58\u653e Dto\u3001Response \u7684\u5b9e\u4f53\u5b9a\u4e49\\n\\n## Example\\n\\n```go\\npackage main\\n\\nimport (\\n  \\"log\\"\\n  \\"wecom-api/client\\"\\n  \\"wecom-api/client/department\\"\\n\\n  \\"github.com/go-openapi/runtime\\"\\n  \\"github.com/go-openapi/strfmt\\"\\n)\\n\\n// \u5b9a\u4e49\u9274\u6743\u5bf9\u8c61\\ntype auth struct{}\\n\\nvar token = \\"token\\"\\n\\n// \u5b9e\u73b0 ClientAuthInfoWriter \u63a5\u53e3\\nfunc (a *auth) AuthenticateRequest(req runtime.ClientRequest, reg strfmt.Registry) error {\\n  // \u5c06 token \u653e\u5728\u6b63\u786e\u7684\u4f4d\u7f6e\\n  return req.SetQueryParam(\\"access_token\\", token)\\n}\\n\\nfunc main() {\\n  departmentID := float64(1)\\n  params := department.NewListDepartmentParams()\\n  params.SetID(&departmentID)\\n\\n  resp, err := client.Default.Department.ListDepartment(params, &auth{})\\n  if err != nil {\\n    log.Fatalf(\\"err: %v\\", err)\\n  }\\n\\n  log.Printf(\\"%v, %s\\", resp.Payload.Errcode, resp.Payload.Errmsg)\\n\\n  for _, v := range resp.Payload.Department {\\n    log.Printf(\\"%v\\", v)\\n  }\\n}\\n```"},{"id":"first-blog","metadata":{"permalink":"/zh/first-blog","editUrl":"https://github.com/juzibot/tech-blog/blog/2022-02-11-first-blog.mdx","source":"@site/i18n/zh/docusaurus-plugin-content-blog/2022-02-11-first-blog.mdx","title":"\u53e5\u5b50\u4e92\u52a8\u6280\u672f\u535a\u5ba2\u6b63\u5f0f\u4e0a\u7ebf\uff01","description":"\u6211\u4eec\u662f \u53e5\u5b50\u4e92\u52a8\u6280\u672f\u56e2\u961f\uff0c\u6211\u4eec\u4f7f\u7528\u6700\u524d\u6cbf\u7684\u6280\u672f\u6253\u9020\u57fa\u4e8e\u5373\u65f6\u804a\u5929\u8f6f\u4ef6\u7684\u4e0b\u4e00\u4ee3\u8425\u9500\u4e91\u3002\u6211\u4eec\u81f4\u529b\u4e8e\u901a\u8fc7\u4ea7\u54c1\u52a9\u529b\u4f01\u4e1a\u83b7\u5f97\u4e1a\u52a1\u4e0a\u7684\u589e\u957f\u8dc3\u8fc1\u3002","date":"2022-02-11T00:00:00.000Z","formattedDate":"2022\u5e742\u670811\u65e5","tags":[{"label":"event","permalink":"/zh/tags/event"}],"readingTime":1.095,"truncated":true,"authors":[{"name":"\u9ad8\u539f","title":"\u53e5\u5b50\u4e92\u52a8 CTO","url":"https://github.com/windmemory","imageURL":"https://github.com/windmemory.png","key":"windmemory"}],"frontMatter":{"slug":"first-blog","title":"\u53e5\u5b50\u4e92\u52a8\u6280\u672f\u535a\u5ba2\u6b63\u5f0f\u4e0a\u7ebf\uff01","authors":"windmemory","tags":["event"]},"prevItem":{"title":"\u4f01\u4e1a\u5fae\u4fe1 x Swagger","permalink":"/zh/wecom-openapi"}},"content":"\u6211\u4eec\u662f ***\u53e5\u5b50\u4e92\u52a8\u6280\u672f\u56e2\u961f***\uff0c\u6211\u4eec\u4f7f\u7528\u6700\u524d\u6cbf\u7684\u6280\u672f\u6253\u9020***\u57fa\u4e8e\u5373\u65f6\u804a\u5929\u8f6f\u4ef6\u7684\u4e0b\u4e00\u4ee3\u8425\u9500\u4e91***\u3002\u6211\u4eec\u81f4\u529b\u4e8e\u901a\u8fc7\u4ea7\u54c1\u52a9\u529b\u4f01\u4e1a\u83b7\u5f97\u4e1a\u52a1\u4e0a\u7684\u589e\u957f\u8dc3\u8fc1\u3002\\n\\n\u6211\u4eec\u4f1a\u5728\u8fd9\u91cc\u5206\u4eab\u6211\u4eec\u6280\u672f\u65c5\u7a0b\u4e0a\u6536\u83b7\u7684\u89c1\u89e3\u3002\u8fd9\u4e9b\u89c1\u89e3\u4e0d\u4ec5\u4ec5\u5173\u4e8e\u67d0\u4e9b\u5177\u4f53\u7684\u6280\u672f\uff0c\u6846\u67b6\u6216\u51fd\u6570\u5e93\uff0c\u4e5f\u4f1a\u6709\u975e\u6280\u672f\u7684\u611f\u609f\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n![banner](/img/juzi-tech-team-banner.jpg)\\n\\n\u6211\u4eec\u76f8\u4fe1\uff0c\u6280\u672f\u7684\u4ef7\u503c\u4f1a\u5728**\u89e3\u51b3\u771f\u5b9e\u95ee\u9898**\u7684\u65f6\u5019\u5927\u653e\u5f02\u5f69\u3002\u6240\u4ee5\u6211\u4eec\u70ed\u8877\u4e8e**\u8df3\u51fa\u601d\u7ef4\u5b9a\u52bf**\uff0c\u901a\u8fc7 hacky \u7684\u65b9\u5f0f\u6765\u89e3\u51b3\u4e00\u4e9b\u4e0d\u5e38\u89c1\uff0c\u975e\u5e38\u89c4\uff0c\u4f46\u662f\u53c8\u771f\u7684\u5bf9\u7528\u6237\u6709\u4ef7\u503c\u7684\u95ee\u9898\u3002\\n\\n---\\n\\n# \u62db\u8d24\u7eb3\u58eb\\n\u626b\u63cf\u4e0b\u9762\u7684\u4e8c\u7ef4\u7801\uff0c\u4e00\u8d77\u804a\u804a\u5728\u4e00\u5bb6\u6280\u672f\u9a71\u52a8\u7684\u516c\u53f8\u521b\u9020\u771f\u6b63\u4ef7\u503c\u7684\u673a\u4f1a\u5427\uff01\\n\\n![hr_qrcode](/img/2022-02-11-first-blog/hr_qrcode.png)"}]}')}}]);