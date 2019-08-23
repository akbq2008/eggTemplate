'use strict';
const Controller = require('egg').Controller;
class GoodsController extends Controller {
    async index () {
        const goods = await this.ctx.service.goods.index();
        this.ctx.body = goods;
    }
}
module.exports = GoodsController