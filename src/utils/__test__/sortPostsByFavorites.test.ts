import { Post } from 'interfaces'
import { sortPostsByFavorites } from '../sortPostsByFavorites'
import { faker } from '@faker-js/faker'

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

describe('sortPostsByFavorites', () => {
  it('should return favorites at the top of the list', async () => {
    const posts: Post[] = [post, post2, favoritePost]
    const favorites: string[] = [favoritePost.id.toString()]

    const result = sortPostsByFavorites(posts, favorites)

    expect(result).toEqual([favoritePost, post, post2])
  })

  it('should return the same order when favorites are empty', async () => {
    const posts: Post[] = [post, post2]
    const favorites: string[] = []

    const result = sortPostsByFavorites(posts, favorites)

    expect(result).toEqual(posts)
  })
})
