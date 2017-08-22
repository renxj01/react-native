import { TabNavigator } from "react-navigation";
import BookList from './../books/BookList';
import MovieList from './../Movie/MovieList';

const TabBar = TabNavigator({
    图书: {
        screen: BookList,
        navigationOptions: {
            header: () => null
        }
    },
    电影: {
        screen: MovieList,
        navigationOptions: {
            header: () => null
        }
    }
}, {
        // 位置
        tabBarPosition: 'bottom',
        tabBarOptions: {
            // 文字颜色
            activeTintColor: 'red',
        }
    }
)

export default TabBar;