import { OffersList } from "../../types/offer";
import { CitiesCard } from "../cities-card/cities-card";

export type CitiesCardListProps={
    offersList:OffersList[];
    onListItemHoverEnter: (id: string) => void;
    onListItemHoverLeave: () => void;
}

function CitiesCardList({offersList, onListItemHoverEnter, onListItemHoverLeave}:CitiesCardListProps){
    return(
        <div className="cities__places-list place__list tabs__contnet">
            {Array.from(offersList,(item)=>
                <CitiesCard key={item.id} id={item.id} title={item.title} type={item.type} price={item.price}
                            previewImage={item.previewImage} isPremium={item.isPremium} rating={item.rating} onListItemHoverEnter={onListItemHoverEnter} onListItemHoverLeave={onListItemHoverLeave}/>)}
        </div>
    );
}
export {CitiesCardList};