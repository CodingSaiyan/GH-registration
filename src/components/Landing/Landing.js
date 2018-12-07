import React, { Component } from 'react';
import './Landing.css';
import axios from 'axios';



class Landing extends Component {
    constructor() {
        super()

        this.state = {
            city: "",
            state: "",
            date: "",
            tempurature: "",
            condition: "",
            image: "",
            height: 0,
            width: 0
        }
    }


    componentDidMount() {
        axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22saltlakecity%2C%20ut%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').then(results => {
                this.setState({
                    city: results.data.query.results.channel.location.city,
                    state: results.data.query.results.channel.location.region,
                    date: results.data.query.results.channel.item.condition.date,
                    tempurature: results.data.query.results.channel.item.condition.temp,
                    condition: results.data.query.results.channel.item.condition.text,
                    image: results.data.query.results.channel.image.url,
                    height: results.data.query.results.channel.image.height,
                    width: results.data.query.results.channel.image.width
                })
            }).catch(Error => {console.log('did not get the weather')})

        }
    
    render() {
        let { city, state, date, tempurature, condition, image, height, width } = this.state;
        console.log(this.state)
    return (
            <div className="landing">
            <div className="menu-filler">
            
            </div>
            <div className="landingBody">
                <h1>GOLDEN JERSEY</h1>
                <div>
                    <p>{city}, {state}</p>
                    <p>{date}</p>
                    <p>{tempurature}</p>
                    <p>{condition}</p>
                    <img src={image} height={height} width={width} />
                </div>
            </div>
            <div className="sidebar-filler">

            </div>
            </div>

       
    )
    }
}
export default Landing;