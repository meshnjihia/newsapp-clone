import { fetchNews } from '../../../utils/fetchNews'
import NewsList from '../../news/NewsList'
interface Props {
  params: any;
}

const SearchDetailPage = async ({ params }: Props) => {
  const keyword = params.slug;
  console.log(keyword)
  const { articles } = await fetchNews(keyword);
  console.log(articles);
  return (
    <div>
      <NewsList />
    </div>
  )
}

export default SearchDetailPage