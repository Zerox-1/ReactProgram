import { useParams } from "react-router-dom";
import { Logo } from "../../components/logo/logo";
import { FullOffer } from "../../types/offer";
import { C404 } from "../../components/404/404";
import { ReviewForm } from "../../components/review-form/review-form";
import ReviewList from "../../components/reviews-list/reviews-list";
import { reviewsMock } from '../../mocks/reviews';
import { CITY,POINTS } from './../../mocks/map';
import List from "../../components/map/list";
import { useState } from "react";
import { City, Point } from "../../types/map.js";
import Map from '../../components/map/map';
import { OfferCardList } from './../../components/offer-card-list/offer-card-list';

import { getOffersByCity, sortOffersByType, getOffersByCityPoints } from '../../utils.js';

type OfferProps={
  offers:FullOffer[];
}
function Offer({offers}:OfferProps){
  const params = useParams();
  
    const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);
  
    const handlePointListItemHoverEnter = (listItemName: string) => {
      const currentPoint = selectedCityOffersPoint.find((point) =>
        point.id === listItemName
      ) || null;
      setSelectedPoint(currentPoint);
    };
  
    const handlePointListItemHoverLeave = () => {
      setSelectedPoint(null);
    };
  const offer=offers.find((item)=>item.id===params.id);
  if(!offer){
    return <C404></C404>;
  }
  const selectedCityPoint: City = {
      lat: offer.city.location.latitude,
      lng: offer.city.location.longitude,
      zoom: offer.city.location.zoom
    };
    
      const selectedCityOffers = getOffersByCity(offer.city.name, offers);
      const selectedCityOffersPoint = getOffersByCityPoints(selectedCityOffers);
    return(
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo></Logo>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">

          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((item)=>(
                <div key={item} className="offer__image-wrapper">
                  <img className="offer__image" src={item} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium?(
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              ):null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: "80%"}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item)=>(
                    <li className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro?(
                      <span className="offer__user-status">Pro</span>
                  ):null}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ReviewList reviews={reviewsMock}></ReviewList>
                <ReviewForm></ReviewForm>
            </section>
            </div>
          </div>
          <section className="offer__map map">
          {/* <List points={POINTS} onListItemHover={handleListItemHover}/> */}
                <Map
                  city={selectedCityPoint}
                  points={selectedCityOffersPoint}
                  selectedPoint={selectedPoint}
                />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferCardList offers={selectedCityOffers} onListItemHoverEnter ={handlePointListItemHoverEnter} onListItemHoverLeave={handlePointListItemHoverLeave}/>
          </section>
        </div>
      </main>
    </div>
    );
}


export {Offer}