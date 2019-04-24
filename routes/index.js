const Router = require('koa-router')

const ArticleController = require('../controllers/article/index')
const ArticleDetails = require('../controllers/articledetails/index')
const Voicemail = require('../controllers/voicemail/index')
const Callback = require('../controllers/callback/index')
const Message = require('../controllers/message/index')
const Shared = require('../controllers/shared/index')

const router = new Router({
  prefix: '/shanyi'
})

/**
* 文章接口
*/
// 分页 查询 首页 加载10篇
router.get('/article/:page', ArticleController.getArticle);
// 评论查询
router.get('/watchComment/:page', ArticleController.watchComment);
// 更新评论
router.get('/updataComment/:page', ArticleController.updataComment);
// 请求文章详情接口
router.get('/details/:page', ArticleDetails.getArticle);
// 文章观看数量加 1
router.get('/watchadd/:page', ArticleController.watchAdd);
// 评论留言获取
router.get('/vcmid/:page', Voicemail.vcmId);
// 更新评论单个总数同居
router.get('/updateVcm/:page', Voicemail.updateVcm);
// 添加留言
router.post('/createvcm', Voicemail.createVcm);
// 根据文章热度查询
router.get('/hot', ArticleController.getHotArticle);
// 查询回复内容
router.get('/callback/:page', Callback.getcallback);
// 添加回复内容
router.post('/createCall', Callback.createCall);
// 查询留言面板
router.get('/message/:page', Message.getMessage);
router.post('/createmessage', Message.createMessage);

// 账号密码查询
router.get('/getshared', Shared.getShared);

module.exports = router
