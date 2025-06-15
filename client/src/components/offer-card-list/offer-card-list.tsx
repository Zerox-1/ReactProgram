import { OfferCard } from "../offer-card/offer-card";
import { FullOffer } from "../../types/offer";

type OffersListProps = {
    offers: FullOffer[];
    onListItemHoverEnter: (id: string) => void;
    onListItemHoverLeave: () => void;
  };
  
export function OfferCardList({ offers, onListItemHoverEnter, onListItemHoverLeave}: OffersListProps){
    return(<div className="near-places__list places__list">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} onListItemHoverEnter ={onListItemHoverEnter} onListItemHoverLeave={onListItemHoverLeave}/>
      ))}
    </div>);
}