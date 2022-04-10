import BLOG from '@/blog.config'
import { FacebookProvider, Page } from 'react-facebook'
import { FacebookIcon } from 'react-share'

const FacebookPage = () => (
  <div className="shadow-md hover:shadow-xl dark:text-gray-300 border dark:border-black rounded-xl px-2 py-4 bg-white dark:bg-hexo-black-gray lg:duration-100 justify-center">
    <div className="flex  items-center pb-2">
      <a href={BLOG.FACEBOOK_PAGE} target="_blank" className="p-1 pr-2 pt-0">
        <FacebookIcon size={28} round />
      </a>
      <a href={BLOG.FACEBOOK_PAGE} target="_blank">
        FACEBOOK 粉絲團
      </a>
    </div>
    <FacebookProvider appId={BLOG.FACEBOOK_APP_ID}>
      <Page href={BLOG.FACEBOOK_PAGE} tabs="timeline" />
    </FacebookProvider>
  </div>
)
export default FacebookPage
