alias Ash.Generator
alias Realworld.Accounts.UserGenerator
alias Realworld.Articles.ArticleGenerator

# Generate 10 users
users = Generator.generate_many(UserGenerator.user(), 10)

# Generate 3 articles for each user
Enum.each(users, fn user ->
  Generator.generate_many(ArticleGenerator.article(actor: user), 3)
end)
