import { CitiesCardList } from "../../components/cities-card-list/cities-card-list.js";
import { Logo } from "../../components/logo/logo.js";
import Map from "../../components/map/map.js";
import List from "../../components/map/list";
import { City, Point } from "../../types/map.js";
import { useState } from "react";
import { useAppSelector } from "../../hooks/index.js";
import { getOffersByCity, sortOffersByType, getOffersByCityPoints } from '../../utils.js';
import { OffersList } from "../../types/offer.js";
import { CitiesList } from "../../components/cities-list/cities-list.js";
import { SortOffer } from "../../types/sort.js";
import { SortOptions } from "../../components/sort-options/sort-options.js";

function MainPage() {
  const selectedCity = useAppSelector((state) => state.city);
  const selectedCityPoint: City = {
    lat: selectedCity?.location.latitude,
    lng: selectedCity?.location.longitude,
    zoom: selectedCity?.location.zoom
  };

  const offersList = useAppSelector((state) => state.offers);
  const selectedCityOffers = getOffersByCity(selectedCity?.name, offersList);
  const selectedCityOffersPoint = getOffersByCityPoints(selectedCityOffers);
  const rentalOffersCount = selectedCityOffers.length;

  const [activeSort, setActiveSort] = useState<SortOffer>("Popular");
  const [selectedOffer, setSelectedOffer] = useState<OffersList | undefined>(undefined);
  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);

  // const handlePointListItemHoverEnter = (id: string) => {
  //   const currentPoint = selectedCityOffersPoint.find((point) => point.title === id) || null;
  //   setSelectedPoint(currentPoint);
  // };
  const handlePointListItemHoverEnter = (listItemName: string) => {
    const currentPoint = selectedCityOffersPoint.find((point) =>
      point.id === listItemName
    ) || null;
    setSelectedPoint(currentPoint);
  };

  const handlePointListItemHoverLeave = () => {
    setSelectedPoint(null);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {rentalOffersCount} places to stay in {selectedCity?.name}
              </b>
              <SortOptions activeSorting={activeSort} onChange={(newSorting) => setActiveSort(newSorting)} />
              <CitiesCardList offersList={sortOffersByType(selectedCityOffers, activeSort)}                  onListItemHoverEnter={handlePointListItemHoverEnter}
                  onListItemHoverLeave={handlePointListItemHoverLeave} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={selectedCityPoint}
                  points={selectedCityOffersPoint}
                  selectedPoint={selectedPoint}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { MainPage };
