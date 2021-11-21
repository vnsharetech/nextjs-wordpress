import axios from "axios";

const API_URL = "http://vnsharetech.local/graphql";

const getPosts = async () => {
  return await axios.post(
    API_URL,
    {
      query: `{
        posts(first: 5) {
            edges {
              node {
                id
                title
                content
                featuredImage {
                  node {
                    mediaItemUrl
                  }
                }
              }
            }
          }
      }`,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const getPostDetail = async (id) => {
  return await axios.post(
    API_URL,
    {
      query: `{
        post(id: "${id}") {
          id
          content
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }`,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export { getPosts, getPostDetail };
