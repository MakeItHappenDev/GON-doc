import graph from '../data/graphDB'

export default {
  tweets: () => Object.values(graph.tweetsById)
}