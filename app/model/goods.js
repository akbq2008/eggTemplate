module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Goods = app.model.define('goods', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(255),
        category_id: INTEGER,
        spec: STRING(255),
        status: INTEGER,
        create_at: INTEGER,
    });

    return Goods;
};