import { SortOffersType } from "./const.ts";
import { CityOffer } from "./types/offer";
import { OffersList } from "./types/offer";
import { SortOffer } from "./types/sort";
import { Point } from '../src/types/map.js';

export function getCity(city:string,CITIES_LOCATION:CityOffer[]){
    return (
        CITIES_LOCATION.find((local)=>
            local.name === city
        )
    );
}

export function getOffersByCity(city: CityOffer, offersList: OffersList[]): OffersList[] {
    return offersList.filter((offer) => offer.city.name === city);
}

export function getOffersByCityPoints(offers: OffersList[]){
    const points:Point[] = offers.map((offer)=>({
        id: offer.id,
        title: offer.title,
        lat: offer.location.latitude,
        lng: offer.location.longitude,
    }))
    return points;
}

export function sortOffersByType(offers:OffersList[],type:SortOffer):OffersList[]{
    switch(type){
        case SortOffersType.PriceToHigh:
            return offers.sort((a,b)=>a.price - b.price);
        case SortOffersType.PriceToLow:
            return offers.sort((a,b)=>b.price - a.price);
        case SortOffersType.TopRated:
            return offers.sort((a,b)=>b.rating-a.rating);
        default:
            return offers;
    }
}