// components
import { PostCard, Categories, PostWidget } from '../components';

// functions to communicate with backend
import { getPosts } from '../services';

// sections
import { FeaturedPosts } from '../sections/index'; // to render the carousel

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      
      <FeaturedPosts />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* <div className="lg:col-span-8 col-span-1"> */}
        <div className="lg:col-span-8 col-span-1">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>

      </div>
    </div>
  );
}

// fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || []; // empty array if we don't get the data
  return {
    props: { posts }, // this allows to use as props in argument of functional component
  };
}

