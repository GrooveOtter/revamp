var React = require('react');
var Fluxxor = require('fluxxor');
var Nav = require('./navbar');
var Grid = require('./grid');
var Timer = require('./timer');
var TaskArea = require('./taskarea');
var Anltcs = require('./anltcs');
var Tabs = require('./tabs');
var TaskList = require('./task-list');
var Archive = require('./archive');

var FluxMixin = Fluxxor.FluxMixin(React);

var Main = module.exports = React.createClass({
    mixins: [FluxMixin],

    getInitialState: function() {
        return {
            activeTabIndex: 0
        };
    },

    updateActiveTabIndex: function(index) {
        this.setState({
            activeTabIndex: index
        });
    },

    render: function() {
        var activeTabIndex = this.state.activeTabIndex;

        var tabs = [
            {title: 'Today', content: <TaskList/>},
            {title: 'Blocker', content: <div/>},
            {title: 'Archive', content: <Archive/>}
        ];

        return <div>
            <Nav>
                <Nav.Left>
                    <Nav.Item>
                        <a href=""><img src="images/logo.svg" /></a>
                    </Nav.Item>
                </Nav.Left>

                <Nav.Right>
                    <Nav.Item active><a href="">Timer</a></Nav.Item>
                    <Nav.Item><a href="">How To</a></Nav.Item>
                    <Nav.Item><a href="">Login</a></Nav.Item>
                </Nav.Right>
            </Nav>

            <Grid.Hero>
                <Grid.Row>
                    <Grid.Right>
                        <Timer/>
                    </Grid.Right>

                    <Grid.Left>
                        <TaskArea/>
                    </Grid.Left>
                </Grid.Row>
            </Grid.Hero>

            <Grid.Wing>
                <Grid.Row>
                    <Grid.Right><Anltcs/></Grid.Right>

                    <Grid.Left>
                        <Tabs
                            active={activeTabIndex}
                            tabs={tabs}
                            onNewTabIndex={this.updateActiveTabIndex}
                        />
                    </Grid.Left>
                </Grid.Row>
            </Grid.Wing>
        </div>;
    }
});
