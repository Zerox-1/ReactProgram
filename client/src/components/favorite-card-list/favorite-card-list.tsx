import { OffersList } from "../../types/offer";
import { FavoriteCard } from "../favorite-card/favorite-card";

type FavoritesCardListProps={
    offersList:OffersList[];
}

function FavoritesCardList({offersList}:FavoritesCardListProps){
    return(
        <div className="favorites__places">
            {Array.from(offersList,(item)=>
                <FavoriteCard key={item.id} id={item.id} title={item.title} type={item.type} price={item.price}
                            previewImage={item.previewImage} isPremium={item.isPremium} rating={item.rating}/>)}
        </div>
    );
}
export {FavoritesCardList};