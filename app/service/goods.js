const Service = require('egg').Service;

class GoodsService extends Service {
    async index () {
        const goods = await this.ctx.model.Goods.findAll(
            { attributes: ['id', 'name', 'category_id', 'spec', 'status'], }
        );
        return goods;
    }
}
module.exports = GoodsService;