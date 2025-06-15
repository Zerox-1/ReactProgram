
export type City = {
    lat: number;
    lng: number;
    zoom: number;
  };
  
  export type Point = {
    id: string;
    title: string;
    lat: number;
    lng: number;
  };
  
  
  export  type MapProps = {
    city: City;
    points: Point[];
    selectedPoint: Point | null;
  };