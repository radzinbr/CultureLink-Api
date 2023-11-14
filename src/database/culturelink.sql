-- Banco de dados: `culturelink`

-- Tabela `comments`
CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `content` varchar(100) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `publication_id` int(11) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabela `comment_replies`
CREATE TABLE `comment_replies` (
  `reply_id` int(11) NOT NULL,
  `content` varchar(100) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment_id` int(11) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabela `publications`
CREATE TABLE `publications` (
  `public_id` int(11) NOT NULL,
  `content` varchar(300) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabela `users`
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `Nome` varchar(255) NOT NULL,
  `Img` varchar(500) NOT NULL,
  `Senha` varchar(20) NOT NULL COMMENT 'O senha pode ter no maximo 20 digitos',
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dados da tabela `users`
INSERT INTO `users` (`id`, `Nome`, `Img`, `Senha`, `email`) VALUES
(1, 'samuel', 'https://www.itau.com.br/media/dam/m/1b4200ebea5634eb/original/foto-de-cima-de-uma-esquina-com-diversos-predios-corporativos.png', '124578', 'samuelcostabr55@gmail.com');

-- Índices
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `publication_id` (`publication_id`);

ALTER TABLE `comment_replies`
  ADD PRIMARY KEY (`reply_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `comment_id` (`comment_id`);

ALTER TABLE `publications`
  ADD PRIMARY KEY (`public_id`),
  ADD KEY `user_id` (`user_id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

-- AUTO_INCREMENT
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

-- Restrições
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`publication_id`) REFERENCES `publications` (`public_id`);

ALTER TABLE `comment_replies`
  ADD CONSTRAINT `comment_replies_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comment_replies_ibfk_2` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`comment_id`);

ALTER TABLE `publications`
  ADD CONSTRAINT `publications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
