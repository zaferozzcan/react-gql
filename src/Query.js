const githubQuery = (queryString) => {
  return {
    query: `
    {
  viewer {
    name
  }
  search(query: "${queryString} react user:zaferozzcan sort:updated-desc", type: REPOSITORY, first: 10) {
    nodes {
      ... on Repository {
        name
        description
        id
        url
        viewerSubscription
      }
    }
  }
}
      `,
  };
};

export default githubQuery;
