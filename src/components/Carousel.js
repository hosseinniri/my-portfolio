import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import profile_pic from '../images/2.jpg'
import github_pic from '../images/my-project.png'
import linkedin_pic from '../images/3.jpg'


import Card from './Card'

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: 'Github',
                    subtitle: 'Some of my projects are here.',
                    imgSrc:github_pic,
                    link: 'https://github.com/hosseinniri',
                    selected: false

                },
                {
                    id: 1,
                    title: 'Linkedin',
                    subtitle: 'Linkedin Account',
                    imgSrc: linkedin_pic,
                    link: 'https://www.linkedin.com/in/hosseinniri/',
                    selected: false

                },
                {
                    id: 2,
                    title: 'Telegram',
                    subtitle: 'Send a message to me',
                    imgSrc: profile_pic,
                    link: 'https://t.me/Hossein_dehghanniri',
                    selected :false

                },
            ]

        } 
    }

    handleCardClick = (id,card) =>{
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true ;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }

        });

        this.setState(
            items
        );
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} Click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }



    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

    
}

export default Carousel;