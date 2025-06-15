import React, { useRef, useEffect } from 'react';
import L, { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import { MapProps } from '../../types/map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from './const';

const Map: React.FC<MapProps> = ({ city, points, selectedPoint }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  const markersRef = useRef<Marker[]>([]); // Храним все маркеры

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
      map.setView(
        {
          lat: city.lat,
          lng: city.lng,
        },
        city.zoom
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      // Удаляем все старые маркеры
      markersRef.current.forEach((marker) => map.removeLayer(marker));
      markersRef.current = [];

      // Добавляем новые маркеры
      points.forEach((point) => {
        const icon = selectedPoint && point.id === selectedPoint.id ? currentIcon : defaultIcon;

        const marker = L.marker(
          {
            lat: point.lat,
            lng: point.lng,
          },
          { icon }
        );

        marker.addTo(map);
        markersRef.current.push(marker); // Сохраняем маркер
      });
    }
  }, [map, points, selectedPoint]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
};

export default Map;
