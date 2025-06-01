import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import { MapProps } from '../../types/map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from './const';


const Map: React.FC<MapProps> = ({ city, points, selectedPoint }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  const defaultIcon = L.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentIcon = L.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        L.marker(
          {
            lat: point.lat,
            lng: point.lng,
          },
          {
            icon: selectedPoint && point.title === selectedPoint.title ? currentIcon : defaultIcon,
          }
        ).addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
};

export default Map;
