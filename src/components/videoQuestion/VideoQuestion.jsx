import CardVideo from "../cardVideo/CardVideo"
import "./videoQuestion.css"

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import useVideoQuestion from "../../hooks/useVideoQuestion";


const VideoQuestion = () => {

    let { dataVQ, videos } = useVideoQuestion()

    const sendData = () => {

        console.log('dataArray')
        console.log(dataVQ)
        console.log('videos')
        console.log(videos)
        alert('se envio :V/')
    }
    return (
        <div className="videoQuestion">

            <div className="videoQuestion__title"><h1>VIDEO QUESTIONS</h1></div>
            <div className="videoQuestion__videoContent">

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                >

                    {dataVQ.map((dataVideodadda, i) => <SwiperSlide key={i + 'cvc'}>
                        <CardVideo showRecButton={false} index={i} width={200} dataVideo={dataVideodadda}></CardVideo>
                    </SwiperSlide>)}

                </Swiper>
            </div>

            <div className="videoQuestion__sendButton">
                <button onClick={sendData} {...(dataVQ.every((el) => el.answered == true) ? {} : { disabled: 'disabled', })} >Enviar</button>
            </div>

        </div>
    )
}

export default VideoQuestion