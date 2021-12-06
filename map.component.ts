import {Component, OnInit} from '@angular/core';
//import * as L from 'leaflet';
import {BusStation} from "./model/bus-station";
import {BusAPIService} from "../../shared/bus-api.service";
import 'leaflet-draw'
import 'leaflet'
import {FuelStation} from "./model/fuel-station";
import {isAsciiLetter} from "@angular/compiler/src/chars";
import {ParkingSpot} from "./model/parking-spot";
import {CarRental} from "./model/car-rental";
import {PublicTransport} from "./model/public-transport";

declare const L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map: L.Map;
  busstations: BusStation[] = [];
  fuelstations: FuelStation[] = [];
  parkingspots: ParkingSpot[] = [];
  carrentals: CarRental[] = [];
  publictransport: PublicTransport[] = [];
  private centroid: L.LatLngExpression = [41.608635, 21.745275];

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 9
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 8,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  constructor(private busapi: BusAPIService) {

  }

  private customMarker = L.Icon.extend({
    options: {
      shadowUrl: null,
      iconAnchor: new L.Point(12, 12),
      iconSize: new L.Point(24, 24),
      //  iconUrl: 'http://joshuafrazier.info/images/firefox.svg',
      iconUrl: 'angularclcient/src/assets/bus.png'
    }
  });

  ngOnInit(): void {
    this.initMap();
    this.getAllBusStations();
    this.getAllFuelStations();
    this.getAllParkingSpaces();
    this.getAllPublicTransport();
    this.getAllCarRentals();
  }

  public getAllBusStations() {
    this.busapi.getAllBusStations().subscribe(
      res => {
        this.busstations = res;
      },
      error => {
        alert("BUS API FAILED");
      }
    );
  }

  public getAllFuelStations() {
    this.busapi.getAllFuelStations().subscribe(
      res => {
        this.fuelstations = res;
      },
      error => {
        alert("FUEL API FAILED");
      }
    )
  }

  public getAllParkingSpaces() {
    this.busapi.getAllParkingSpot().subscribe(
      res => {
        this.parkingspots = res;
      },
      error => {
        alert("PARKING SPOT API FAILED");
      }
    );
  }

  public getAllCarRentals() {
    this.busapi.getAllCarRentals().subscribe(
      res => {
        this.carrentals = res;
      },
      error => {
        alert("CAR RENTALS API FAILED");
      });
  }

  public getAllPublicTransport() {
    this.busapi.getAllPublicTransports().subscribe(
      res => {
        this.publictransport = res;
      },
      error => {
        alert("PUBLIC TRANSPORT API FAILED");
      });
  }

  public addBusMarker() {
    L.marker([41.4420472, 22.648084]).addTo(this.map);
    L.marker([41.885596, 22.503943]).addTo(this.map);
    L.marker([42.0006992, 21.3780662,]).addTo(this.map);
    L.marker([41.6321299, 22.4644241]).addTo(this.map);
    L.marker([41.1852952, 20.6740502]).addTo(this.map);
    L.marker([41.9816051, 20.6740502]).addTo(this.map);
    L.marker([41.9905807, 21.4458112]).addTo(this.map);
    L.marker([41.9132553, 22.4148662]).addTo(this.map);
    L.marker([41.1439339, 22.5115832]).addTo(this.map);
    L.marker([42.0080322, 20.9856536]).addTo(this.map);
    L.marker([41.8671973, 21.9432320]).addTo(this.map);
    L.marker([41.1245764, 20.8121635]).addTo(this.map);
    L.marker([41.7414111, 22.1895163]).addTo(this.map);
    L.marker([41.9693324, 22.7715819]).addTo(this.map);
    L.marker([41.3442448, 21.5403842]).addTo(this.map);
    L.marker([41.0200259, 21.3419312]).addTo(this.map);
    L.marker([42.0077640, 20.9857337]).addTo(this.map);
    L.marker([41.1439113, 22.5113730]).addTo(this.map);
    L.marker([41.9693774, 22.7715181]).addTo(this.map);
    L.marker([41.0201339, 21.3416538]).addTo(this.map);
  }

  public addPublicTransportMarker() {
    L.marker([42.1315693, 21.3087201]).addTo(this.map);
    L.marker([42.1220983, 21.7453092]).addTo(this.map);
    L.marker([41.0200259, 21.3419312]).addTo(this.map);
    L.marker([41.5126683, 20.9500145]).addTo(this.map);
    L.marker([41.3441221, 21.5380051]).addTo(this.map);
    L.marker([41.6791638, 21.7441645]).addTo(this.map);
    L.marker([41.1245764, 20.8121635]).addTo(this.map);
    L.marker([41.3673960, 21.2462841]).addTo(this.map);
    L.marker([41.1676404, 21.7378232]).addTo(this.map);
    L.marker([41.9673061, 21.4788317]).addTo(this.map);
    L.marker([41.1112863, 20.7984894]).addTo(this.map);
    L.marker([41.1439339, 22.5115832]).addTo(this.map);
    L.marker([41.0200931, 21.3430817]).addTo(this.map);
    L.marker([41.0201369, 21.3417824]).addTo(this.map);
    L.marker([41.0200649, 21.3417261]).addTo(this.map);
    L.marker([41.0201637, 21.3418128]).addTo(this.map);
    L.marker([41.0200823, 21.3421552]).addTo(this.map);
    L.marker([41.0199192, 21.3418168]).addTo(this.map);
    L.marker([41.0199538, 21.3417043]).addTo(this.map);
    L.marker([41.0198933, 21.3421967]).addTo(this.map);
  }

  public clearMap() {
    this.map.remove();
    this.initMap();
  }

  public addFuelStationMarker() {
    L.marker([41.0371043, 21.3478549]).addTo(this.map);
    L.marker([42.0773617, 21.7001437]).addTo(this.map);
    L.marker([42.1740192, 21.7085282]).addTo(this.map);
    L.marker([42.1057063, 21.6996066]).addTo(this.map);
    L.marker([41.0459084, 21.2895049]).addTo(this.map);
    L.marker([41.0459412, 21.2896974]).addTo(this.map);
    L.marker([41.0459668, 21.2895558]).addTo(this.map);
    L.marker([41.9746802, 21.4542071]).addTo(this.map);
    L.marker([41.4444801, 22.0053060]).addTo(this.map);
    L.marker([41.4350263, 22.0036985]).addTo(this.map);
    L.marker([41.4435249, 22.0059941]).addTo(this.map);
    L.marker([41.4832253, 22.0792997]).addTo(this.map);
    L.marker([41.4988918, 22.0987911]).addTo(this.map);
    L.marker([41.7174030, 21.7628783]).addTo(this.map);
    L.marker([41.4404814, 22.6659707]).addTo(this.map);
    L.marker([41.4120197, 22.7304000]).addTo(this.map);
    L.marker([41.4404486, 22.7050143]).addTo(this.map);
    L.marker([41.4399258, 22.6542913]).addTo(this.map);
    L.marker([41.9043533, 21.6544066]).addTo(this.map);
    L.marker([42.1719716, 21.8132634]).addTo(this.map);


  }

  public addCarRentalMarker() {
    /*for (let i=0, len = this.carrentals.length;i<len;i++)
    {
      let a = this.carrentals[1];
      let b = this.carrentals[2];
      console.log("a:"+a.lat);
      console.log("/nb:"+a.long);
      L.marker(L.LatLng(a.lat,a.long)).addTo(this.map);
    }Ne pretvara vo klasa :( ahahahahha */
    L.marker([41.0100905, 21.3549758]).addTo(this.map);
    L.marker([42.0006985, 21.426988]).addTo(this.map);
    L.marker([42.0006459, 21.4271085]).addTo(this.map);
    L.marker([42.0006313, 21.4269350]).addTo(this.map);
    L.marker([41.9601202, 21.6275954]).addTo(this.map);
    L.marker([41.9979016, 21.4466679]).addTo(this.map);
    L.marker([42.0005788, 21.4270554]).addTo(this.map);
    L.marker([41.1815902, 20.7470825]).addTo(this.map);
    L.marker([42.0020060, 21.4230372]).addTo(this.map);
    L.marker([41.9948430, 21.4356090]).addTo(this.map);
    L.marker([42.0019004, 21.4229514]).addTo(this.map);
    L.marker([42.0020003, 21.4227287]).addTo(this.map);
    L.marker([42.0021059, 21.4228145]).addTo(this.map);
    L.marker([41.999324, 21.4283210]).addTo(this.map);
    L.marker([42.0008066, 21.4367546]).addTo(this.map);
    L.marker([42.0060379, 21.4151167]).addTo(this.map);
    L.marker([42.0006386, 21.4270217]).addTo(this.map);
    L.marker([42.0020031, 21.4228829]).addTo(this.map);
  }

  public addParkingSpotMarker() {
    L.marker([41.9987598, 21.392087]).addTo(this.map);
    L.marker([41.9988528, 21.3920694]).addTo(this.map);
    L.marker([41.7360607, 22.1892539]).addTo(this.map);
    L.marker([41.7360581, 22.1892402]).addTo(this.map);
    L.marker([41.7360516, 22.1891631]).addTo(this.map);
    L.marker([41.7360414, 22.1896955]).addTo(this.map);
    L.marker([41.7360601, 22.1895512]).addTo(this.map);
    L.marker([41.7360628, 22.189389]).addTo(this.map);
    L.marker([41.7360383, 22.1892425]).addTo(this.map);
    L.marker([41.7360318, 22.1891654]).addTo(this.map);
    L.marker([41.7359931, 22.1888873]).addTo(this.map);
    L.marker([41.7360127, 22.1888823]).addTo(this.map);
    L.marker([41.7359843, 22.1899678]).addTo(this.map);
    L.marker([41.7359253, 22.1904477]).addTo(this.map);
    L.marker([41.7359253, 22.1906687]).addTo(this.map);
    L.marker([41.7359871, 22.1908803]).addTo(this.map);
    L.marker([41.7360843, 22.1912215]).addTo(this.map);
    L.marker([41.7361043, 22.1912762]).addTo(this.map);
    L.marker([41.7362257, 22.1915408]).addTo(this.map);
    L.marker([41.738429, 22.1963449]).addTo(this.map);
    L.marker([41.7383818, 22.1962733]).addTo(this.map);
    L.marker([41.7382552, 22.1959003]).addTo(this.map);
    L.marker([41.7374766, 22.1948756]).addTo(this.map);
    L.marker([41.7375062, 22.1949219]).addTo(this.map);
    L.marker([41.7375214, 22.1949044]).addTo(this.map);
    L.marker([41.7373708, 22.1946698]).addTo(this.map);
    L.marker([41.1393204, 20.788011]).addTo(this.map);
    L.marker([42.1803058, 22.4732891]).addTo(this.map);
    L.marker([41.7476035, 22.1863069]).addTo(this.map);
    L.marker([41.7472643, 22.1858199]).addTo(this.map);
    L.marker([41.7484998, 22.1822174]).addTo(this.map);
    L.marker([41.7482755, 22.181763]).addTo(this.map);
    L.marker([41.7604991, 22.1612161]).addTo(this.map);
    L.marker([41.7890237, 20.9132941]).addTo(this.map);
    L.marker([41.7360141, 22.189751]).addTo(this.map);

  }
}
