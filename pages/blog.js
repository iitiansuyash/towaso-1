import React, { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../sanityClient";
import styles from '../styles/Blogg.module.css'
import { bgWrap, typeBox, bgText } from '../styles/Blogg.module.css'
import Head from "next/head";
import Image from "next/image";

import PostCard from "../components/PostCard"

const Blog = ({ posts }) => {
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imageBuilder = imageUrlBuilder(sanityClient);

      setMappedPosts(
        posts.map((post) => {
          return {
            ...post,
            mainImage: imageBuilder
              .image(post.mainImage)
              .width(600)
              .height(300),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <>
    <Head>
      <title>ToWaSo-Total Waste Solution</title>
        <meta
          name="description"
          content="Save your surroundings with ToWaSo"
          />
          <link rel="icon" href="/favicon.ico"/>
    </Head>
    <div>
        <div className={styles.bgWrap}>
        </div>
        <div className={styles.typeBox}>
                    <h1>Blogs.</h1>
                    <h4>Join our community to make this world a better place</h4>
                    <div className="scroll-downs">
                    <div className="mousey">
                        
                        <div className="scroller"></div>
                    </div>
                  </div>
              </div>
      </div>

    <div className="container">
      <h1 className="my-5 text-center display-1 ">Recent Blogs</h1>

      <div className="row">
        {mappedPosts &&
          mappedPosts.length &&
          mappedPosts.map((post, index) => (
            <PostCard data={post} key={index} />
            ))}
      </div>
    </div>
    </>
    
  );
};

export const getServerSideProps = async (context) => {
  const query = encodeURIComponent(`*[ _type == "post" ]`);
  const url = `${`https://1pxwynxd.api.sanity.io/v2021-06-07/data/query/production?`}query=${query}`;

  const data = await fetch(url).then((res) => res.json());
  const posts = data.result;

  // if (!posts || !posts.length === 0) {
  //   return {
  //     props: {
  //       posts: [],
  //     },
  //   };
  // } else {
    return {
      props: {
        posts,
      },
    };
  }
  // }

export default Blog;