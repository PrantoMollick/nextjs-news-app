import { useRouter } from "next/router";


//domain.com/news
function DetailPage() {
    const router = useRouter();
    const newsId = router.query.newsId;

    //send a request to the backend api
    //to fetch the news item with newsId

    return <h1>The details page</h1>
}

export default DetailPage;