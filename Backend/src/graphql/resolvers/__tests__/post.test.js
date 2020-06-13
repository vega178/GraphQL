import post from '../post'
import { isFunction } from '../../../utils/is'

describe('#Query', () => {
  it('should have getPost method', async () => {
    expect(isFunction(post.Query.getPosts)).toBe(true)
  })
})

describe('#Mutation', () => {
  it('should have createPost methdo', async () => {
    expect(isFunction(post.Mutation.createPost)).toBe(true)
  })
})
