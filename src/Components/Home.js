import React, { Component } from 'react'

import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Parallax } from 'swiper/modules';
import '../Css/Home.css'


class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=feb5c0d6f258fa2a47b5828787b5f9b9")
            .then(res => {
                // console.log(res)
                this.setState({
                    posts: res.data.results

                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        const { posts } = this.state

    

        return (
            <div >
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation, Parallax]}
                    className="mySwiper"
                >

                    {
                        posts.length ?
                            posts.map(post =>
                                <SwiperSlide key={post.id}>

                                    <div className='container'>

                                        <div className="content">

                                            <div className="section">

                                                <div className="free">
                                                    <p>free</p>
                                                </div>

                                                <div className="movie-name">
                                                    <h1>   {post.title} </h1>
                                                </div>

                                                <div className="decr">
                                                    <p>  {post.overview} </p>
                                                </div>

                                            </div>

                                        </div>

                                        <div className='image'>
                                            <img src={` https://image.tmdb.org/t/p/w500/${post.poster_path} `} alt="poster" />
                                        </div>

                                    </div>

                                </SwiperSlide>) :
                            "there is an error"
                    }

                </Swiper>
            </div>
        )
    }
}

export default Home
