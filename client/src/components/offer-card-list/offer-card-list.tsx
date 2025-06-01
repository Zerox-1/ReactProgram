import { OfferCard } from "../offer-card/offer-card";
import { FullOffer } from "../../types/offer";

type OffersListProps = {
    offers: FullOffer[];
    cardType?: 'main' | 'near';
  };
  
export function OfferCardList({ offers}: OffersListProps){
    return(<div className="near-places__list places__list">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer}/>
      ))}
    </div>);
}