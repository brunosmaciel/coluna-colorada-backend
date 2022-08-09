import Post from '../models/Post';

class ColunaController {
  async create(req, res) {
    try {
      const novaColuna = await Post.create(req.body);

      return res.status(200).json(novaColuna);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async index(req, res) {
    try {
      const colunas = await Post.findAll();

      res.status(200).json(colunas);
    } catch (e) {
      console.log(e);
    }
  }

  async show(req, res) {
    const { cat } = req.query;
    const { post } = req.query;

    if (cat) {
      try {
        const posts = await Post.findAll({
          where: {
            category: cat,
          },
        });
        const {
          id, title, subtitle, postbody, createdby,
        } = posts;
        res.status(200).json({
          id, title, subtitle, postbody, createdby,
        });
        return;
      } catch (e) {
        res.status(400).json(e);
      }
    }
    if (post) {
      try {
        const posts = await Post.findByPk(post);
        const {
          id, title, subtitle, postbody, createdby,
        } = posts;
        res.status(200).json({
          id, title, subtitle, postbody, createdby,
        });
      } catch (error) {
        res.status(400).json('erro');
      }
    }
    res.status(400).json('é necessario informar uma categoria, ex cat=noticia');
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json('missing id');
        return;
      }

      const post = await Post.findByPk(id);

      if (!post) {
        res.status(400).json('post not found');
        return;
      }

      const updatedPost = await post.update(req.body);

      res.status(200).json(updatedPost);
    } catch (e) {
      res.json(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json('missing id');
        return;
      }

      const post = await Post.findByPk(id);

      if (!post) {
        res.status(400).json('post not found');
        return;
      }

      const updatedPost = await post.destroy();

      res.status(200).json(updatedPost);
    } catch (e) {
      res.json(e);
    }
  }
}

export default new ColunaController();
