import {
  getAllPostIds,
  getPostData,
  getSortedPostsData
} from "../../lib/posts";

import mockFs from "mock-fs";

describe("lib/posts.js", () => {
  beforeAll(() => {
    mockFs({
      posts: {
        "some-post.md": `---
title: "Test Post Title"
date: "2020-01-01"
---

Some post content`,
        "another-post.md": `---
title: "Another Post Title"
date: "2022-01-01"
---

Some other post content`
      }
    });
  });

  afterAll(() => {
    mockFs.restore();
  });

  describe("getAllPostIds", () => {
    it("loads all post ids in a static path format", () => {
      const data = getAllPostIds();

      expect(data.length).toBe(2);
      expect(data).toContainEqual({
        params: {
          id: "some-post"
        }
      });
      expect(data).toContainEqual({
        params: {
          id: "another-post"
        }
      });
    });
  });

  describe("getPostData", () => {
    it("loads parsed post data for single post with HTML", async () => {
      const data = await getPostData("another-post");

      expect(data).toEqual({
        id: "another-post",
        title: "Another Post Title",
        date: "2022-01-01",
        contentHtml: "<p>Some other post content</p>\n"
      });
    });
  });

  describe("getSortedPostsData", () => {
    it("loads parsed post data for all posts", () => {
      const data = getSortedPostsData();

      expect(data).toEqual([
        {
          id: "another-post",
          title: "Another Post Title",
          date: "2022-01-01"
        },
        {
          id: "some-post",
          title: "Test Post Title",
          date: "2020-01-01"
        }
      ]);
    });
  });
});
