import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'

function AboutPage(props){
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Hossein. I'm a electrical engineer 
                    graduated from K. N. Toosi University of Technology in 2020 .</p>
                <p>My major in BSc is electrical-control engineering, 
                    and I am interested in intelligent systems and activities in
                     the field of machine learning and artificial intelligence, 
                     as well as intelligent control.</p>
                <p>My dreem is to one day start my own business and become an 
                    entrepreneur (currently working on some ideas).</p>
                <p>I'm currently a MSc student in Power Electronics
                     in K. N. Toosi University of Technology.</p>
            </Content>
        </div>
    );

}




export default AboutPage; 