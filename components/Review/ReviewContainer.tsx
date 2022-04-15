import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ReviewContainer = ({ children }: Props) => {
  return (
    <div className="reviews-container scroll-animation animated">
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="reviews">
              <div className="glide glide-reviews">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">{children}</ul>
                </div>
              </div>
              <a
                className="d-none d-lg-block reviews__link"
                href="https://www.google.com/maps/place/Russell+Financial+Solutions+Ltd/@51.7706023,0.0774928,9z/data=!4m7!3m6!1s0x47d8db6a4f562e3f:0x4e3715f3f5b9bda0!8m2!3d51.7719346!4d0.6378927!9m1!1b1"
              >
                See more reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
