import React from 'react'

const VideoPopupArea = () => {
    return (
        <>
              <div className="ltn__video-popup-area ltn__video-popup-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__video-bg-img ltn__video-popup-height-600 bg-overlay-black-10-- bg-image" data-bg="./assets/img/bg/15.jpg"  style={{backgroundImage : "url(./assets/img/bg/15.jpg)"}}>
                <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/ATI7vfCgwXE?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default VideoPopupArea