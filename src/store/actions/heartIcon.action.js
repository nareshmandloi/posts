export const LIKE = 'LIKE'
export const DISLIKE = 'DISLIKE'

export const like = () => {
  return {
    type: LIKE
  }
}

export const dislike = () => {
  return {
    type: DISLIKE
  }
}