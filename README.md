Rotas as api



/posts -> lista todas as postagens
/posts/search?id=1 || cat=noticia - filtra as postagens
/posts/update/:id -> atualiza uma postagem
/posts/delete/:id ->deleta uma postagem

/image/user -> Posta uma imagem para algum usuario cadastrado atraves do user_id
/image/post -> Posta uma imagem para algum post atraves do post_id

/user/ -> lista todos os usuarios
/user/create -> cria um novo usuario
/update/:id -> atuliza um usuario
/delete/:id -> deleta um usuario

/auth/token -> gera um JWT e faz login na aplicacao
