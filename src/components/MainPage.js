import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './MainPage.css';
import ErrorBoundary from '../components/ErrorBoundary';

class MainPage extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }
    
    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render() {
        const { onSearchChange, isPending } = this.props;
        return isPending ?

            <React.Fragment>
                <h1>Loading</h1>
            </React.Fragment> :

            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={this.filterRobots()} />
                    </ErrorBoundary>
                </Scroll>
                
            </div>
        
    }
       
}

export default MainPage;