import React, { Component } from 'react'
import axios from 'axios'
import '../Css/PlayingNowApi.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

export class PlayingNowApi extends Component {


  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=feb5c0d6f258fa2a47b5828787b5f9b9")
      .then(res => {
        // console.log(res)
        this.setState({ posts: res.data.results })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    const { posts } = this.state

    return (

      <div>

        <h3 className='status-text'> now playing </h3>

        <>


          <Swiper
            slidesPerView={3}
            spaceBetween={-600}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className="mySwiper playing-card"
          >



            <div>

              {
                posts.length ?
                  posts.map(post =>

                    <SwiperSlide key={post.id}>


                      <div className="card">

                        <div className="image">
                          <img src={` https://image.tmdb.org/t/p/w500/${post.poster_path} `} alt="poster" />
                        </div>
                      </div>

                    </SwiperSlide>

                  ) :
                  "there is an err"
              }

            </div>
          </Swiper>
        </>


      </div>

    )
  }
}

export default PlayingNowApi
