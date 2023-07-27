import { Post } from 'interfaces'
import { faker } from '@faker-js/faker'
import { filterPostsByFavorites } from 'utils/filterPostsWithoutFavorites'

const post: Post = {
  id: faker.number.int(),
  title: faker.lorem.words(),
  userId: faker.number.int(),
  body: faker.lorem.words(),
}
const post2: Post = {
  id: faker.number.int(),
  title: faker.lorem.words(),
  userId: faker.number.int(),
  body: faker.lorem.words(),
}
const favoritePost: Post = {
  id: faker.number.int(),
  title: faker.lorem.words(),
  userId: faker.number.int(),
  body: faker.lorem.words(),
}

describe('filterPostsByFavorites', () => {
  it('should return post id list without favorites', async () => {
    const posts: Post[] = [post, post2, favoritePost]
    const favorites: string[] = [favoritePost.id.toString()]

    const result = filterPostsByFavorites(posts, favorites)

    expect(result).toEqual([post.id.toString(), post2.id.toString()])
  })
})
