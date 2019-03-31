const Router = require('koa-router')

const ArticleController = require('../controllers/article/index')
const ArticleDetails = require('../controllers/articledetails/index')

const router = new Router({
  prefix: '/shanyi'
})

/**
* 文章接口
*/
// 分页 查询 首页 加载10篇
router.get('/article/:page', ArticleController.getArticle);
// 请求文章详情接口
router.get('/details/:page', ArticleDetails.getArticle);
// 文章观看数量加 1
router.get('/watchadd/:page', ArticleController.watchAdd);


module.exports = router
