// 接口 Api
//固定的头部
const BaseUrl = 'https://api.douban.com/v2/'

const DoubanApi = {
    /**
     *  图书搜索
     * image: 图书缩略图
     * title： 图书名字
     * punList：出版社
     * author：作者
     * pricel：价格
     * pages：页数
     */
    book_search:BaseUrl + 'book/search',
    /**
     *  图书详情
     * image: 图书缩略图
     * title： 图书名字
     * punList：出版社
     * author：作者
     * pricel：价格
     * pages：页数
     */
    book_detial_id:BaseUrl + 'book/',


    movie_search: BaseUrl + 'movie/search',
    /**
     *  电影搜索
     * image: 图书缩略图
     * title： 图书名字
     * punList：出版社
     * author：作者
     * pricel：价格
     * pages：页数
     */
}
export default DoubanApi;