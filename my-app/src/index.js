import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Icon, Image, Grid, Dropdown, Button, Form, List, Container, Divider, Segment } from 'semantic-ui-react';


class TopMenu extends React.Component {
    state = {activeItem: ''};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <Menu borderless className="topmenu">
                <Container>
                    <Menu.Item>
                        <Image size="small"
                               src="https://cdn.shopify.com/s/files/1/0100/7232/files/LOGO_2_RGB_1000x1000.jpg?v=1585599608"/>
                    </Menu.Item>
                    <Menu.Item
                        position='right'
                        name='search'
                        active={activeItem === 'search'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='search' />
                    </Menu.Item>

                    <Menu.Item>SHOP</Menu.Item>
                    <Menu.Item>ACCOUNT</Menu.Item>
                    <Menu.Item>CART (0)</Menu.Item>
                    <Menu.Item>FEED</Menu.Item>
                </Container>
            </Menu>
        )
    }
}

class FullWidthImage extends React.Component {
    render() {
        return (
            <Image
                src='IMGGGG2.JPG'
                fluid/>
        )
    }
}

class FullWidthImage1 extends React.Component {
    render() {
        return (
            <Image
                src='IMGGGG1.JPG'
                fluid/>
        )
    }
}

class FullWidthImage2 extends React.Component {
    render() {
        return (
            <Image
                src='IMGGGG3.JPG'
                fluid/>
        )
    }
}

class FullWidthImage3 extends React.Component {
    render() {
        return (
            <Image
                src='IMGGGG4.JPG'
                fluid/>
        )
    }
}

class FullWidthImage4 extends React.Component {
    render() {
        return (
            <Image
                src='IMGGGG5.JPG'
                fluid/>
        )
    }
}

class FullWidthImage5 extends React.Component {
    render() {
        return (
            <Image
                src='IMGGGG6.JPG'
                fluid/>
        )
    }
}

class FullWidthImage6 extends React.Component {
    render() {
        return (
            <Image
                src='IMGGGG7.JPG'
                fluid/>
        )
    }
}

class FullWidthImage7 extends React.Component {
    render() {
        return (
            <Image
                src='IMGGGG8.JPG'
                fluid/>
        )
    }
}
class FullWidthImage8 extends React.Component {
    render() {
        return (
            <Image
                src='IMGGGG9.JPG'
                fluid/>
        )
    }
}

class MiddleMenu extends React.Component {
    state = {activeItem: ''};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (

                    <Button
                        type='submit'
                        floated='center'
                        style={{backgroundColor: 'black', color: 'white'}}>ADD ME
                    </Button>


        )
    }
}

class FooterMenu extends React.Component {
    state = {activeItem: ''};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});


    render() {
        const {activeItem} = this.state;
        return (
            <Grid
                centered
                style={{ backgroundColor:'#white', color: '#black', padding: '60px 20px 0px 0px'}}
columns='equal'
            >
                <Grid.Column>
                    <List
                    position='left'
                    >
                        fact <br />
                    </List>
                </Grid.Column>
                <Grid.Column>
                    <List>
                        Terms of Use <br />
                    </List>
                </Grid.Column>


                <Grid.Column>

                    <Menu.Item
                        position='left'
                        name='instagram'
                    >
Privacy Policy
                    </Menu.Item>
                </Grid.Column>

                <Grid.Column>

                    <Menu.Item
                        name='twitter'
                    >
                        Contact   Link33    World CLan
                    </Menu.Item>
                </Grid.Column>
            </Grid>
        )
    }
}



class IslandSnow extends React.Component {

    render() {
        return (
            <div>
                <TopMenu/>
                <FullWidthImage1/>
                <FullWidthImage/>
                <FullWidthImage2/>
                <FullWidthImage3/>
                <FullWidthImage4/>
                <FullWidthImage5/>
                <FullWidthImage6/>
                <FullWidthImage7/>
                <FullWidthImage8/>

                <FooterMenu/>
            </div>
        );
    }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));