module.exports = {
  dialect: 'sqlite',
  storage: './db.sqlite',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
