import React, { Component } from 'react'
import '../Css/TopRated.css'

import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

class TopRated extends Component {

    constructor(props) {
        super(props)

        this.state = {
            rated: []
        }
    }

    componentDidMount() {
        axios.get(" https://api.themoviedb.org/3/movie/top_rated?api_key=feb5c0d6f258fa2a47b5828787b5f9b9 ")
            .then(res => {
                console.log(res)
                this.setState({
                    rated: res.data.results
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {

        const { rated } = this.state

        return (

            <div>
      
              <h3 className='status-text'> top rated </h3>
      
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
                      rated.length ?
                        rated.map(rate =>
      
                          <SwiperSlide key={rate.id}>
      
      
                            <div className="card">
      
                              <div className="image">
                                <img src={`  https://image.tmdb.org/t/p/w500/${rate.poster_path} `} alt="poster" />
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

export default TopRated
