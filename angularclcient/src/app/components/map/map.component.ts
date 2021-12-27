import {Component, OnInit} from '@angular/core';
import {BusStation} from "./model/bus-station";
import {BusAPIService} from "../../shared/bus-api.service";
import 'leaflet-draw'
import 'leaflet'
import {FuelStation} from "./model/fuel-station";
import {ParkingSpot} from "./model/parking-spot";
import {CarRental} from "./model/car-rental";
import {PublicTransport} from "./model/public-transport";
import 'leaflet.locatecontrol';
import 'leaflet.markercluster';
import 'leaflet-boundary-canvas';
import {config, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {GeoJSON} from "geojson";
declare const L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map: L.Map;
  private start_latlng: L.LatLng;
  private end_latlng: L.LatLng
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
      maxZoom: 15,
      minZoom: 6,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    /*var geom = {"type":"MultiPolygon","coordinates":[[[[20.435,41.52],[20.44,41.535],[20.435,41.56],[20.445,41.575],[20.52,41.585],[20.53,41.595],[20.53,41.605],[20.51,41.62],[20.505,41.645],[20.495,41.655],[20.51,41.69],[20.495,41.715],[20.495,41.74],[20.515,41.79],[20.535,41.81],[20.545,41.81],[20.54,41.88],[20.56,41.895],[20.605,41.895],[20.62,41.88],[20.645,41.895],[20.675,41.895],[20.695,41.88],[20.715,41.885],[20.72,41.9],[20.745,41.92],[20.735,41.94],[20.74,41.965],[20.73,41.97],[20.73,42.04],[20.74,42.045],[20.74,42.065],[20.76,42.075],[20.765,42.09],[20.785,42.105],[20.81,42.1],[20.825,42.105],[20.835,42.12],[20.88,42.115],[20.9,42.13],[20.905,42.145],[20.94,42.16],[20.965,42.155],[21.015,42.17],[21.04,42.185],[21.055,42.205],[21.07,42.205],[21.095,42.225],[21.175,42.215],[21.2,42.175],[21.235,42.14],[21.235,42.12],[21.265,42.115],[21.285,42.13],[21.285,42.155],[21.3,42.165],[21.295,42.175],[21.31,42.19],[21.315,42.215],[21.355,42.24],[21.375,42.265],[21.395,42.27],[21.415,42.265],[21.425,42.29],[21.44,42.3],[21.52,42.29],[21.535,42.27],[21.565,42.27],[21.585,42.285],[21.6,42.275],[21.665,42.27],[21.695,42.26],[21.72,42.285],[21.755,42.28],[21.78,42.315],[21.79,42.32],[21.81,42.315],[21.82,42.34],[21.835,42.345],[21.86,42.345],[21.87,42.335],[21.91,42.325],[21.91,42.34],[21.925,42.36],[21.955,42.365],[22.025,42.325],[22.055,42.33],[22.07,42.32],[22.11,42.335],[22.165,42.34],[22.185,42.36],[22.22,42.36],[22.24,42.38],[22.29,42.395],[22.31,42.39],[22.32,42.375],[22.315,42.355],[22.33,42.355],[22.365,42.33],[22.395,42.325],[22.42,42.3],[22.42,42.29],[22.47,42.25],[22.485,42.22],[22.5,42.22],[22.52,42.205],[22.535,42.16],[22.565,42.15],[22.58,42.13],[22.595,42.13],[22.61,42.115],[22.635,42.115],[22.685,42.085],[22.72,42.09],[22.745,42.065],[22.81,42.065],[22.83,42.04],[22.835,42.045],[22.88,42.04],[22.895,42.01],[22.9,41.935],[22.915,41.925],[22.92,41.895],[22.945,41.875],[22.965,41.835],[22.965,41.815],[22.98,41.805],[22.985,41.79],[23.015,41.79],[23.055,41.73],[23.055,41.7],[23.005,41.655],[23.005,41.64],[22.99,41.625],[22.975,41.625],[22.97,41.6],[22.98,41.595],[22.995,41.565],[22.985,41.53],[22.99,41.5],[22.98,41.49],[23,41.455],[23,41.44],[22.98,41.415],[22.985,41.345],[22.94,41.32],[22.845,41.32],[22.79,41.31],[22.775,41.24],[22.77,41.16],[22.74,41.125],[22.7,41.12],[22.66,41.16],[22.655,41.14],[22.63,41.115],[22.59,41.095],[22.565,41.1],[22.555,41.11],[22.52,41.11],[22.47,41.095],[22.405,41.1],[22.385,41.115],[22.365,41.11],[22.355,41.115],[22.34,41.1],[22.32,41.1],[22.305,41.125],[22.265,41.135],[22.26,41.145],[22.185,41.14],[22.15,41.105],[22.115,41.105],[22.06,41.13],[22.02,41.11],[21.98,41.11],[21.96,41.09],[21.93,41.08],[21.93,41.035],[21.87,41],[21.855,40.975],[21.825,40.97],[21.825,40.935],[21.805,40.925],[21.805,40.915],[21.745,40.905],[21.715,40.92],[21.695,40.92],[21.685,40.88],[21.65,40.88],[21.6,40.845],[21.585,40.85],[21.56,40.845],[21.52,40.89],[21.46,40.885],[21.445,40.895],[21.415,40.895],[21.375,40.86],[21.34,40.855],[21.325,40.845],[21.25,40.84],[21.23,40.86],[21.2,40.86],[21.16,40.835],[20.97,40.835],[20.955,40.855],[20.96,40.89],[20.935,40.905],[20.9,40.895],[20.85,40.915],[20.845,40.895],[20.825,40.88],[20.76,40.88],[20.725,40.89],[20.71,40.905],[20.66,41.06],[20.59,41.07],[20.58,41.08],[20.565,41.1],[20.56,41.155],[20.54,41.175],[20.515,41.185],[20.495,41.225],[20.49,41.295],[20.47,41.34],[20.485,41.365],[20.51,41.365],[20.525,41.375],[20.535,41.405],[20.49,41.43],[20.48,41.475],[20.45,41.485],[20.45,41.495],[20.435,41.505],[20.435,41.52]]]]};
    L.tileLayer.boundaryCanvas(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        boundary:geom,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        trackAttribution: true
      }
    ).addLayer(geom);*/

  }

  constructor(private busapi: BusAPIService, private http: HttpClient) {
  }

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
    var busicon = L.icon({
      iconUrl: 'https://angular-map-dians.herokuapp.com/assets/bus.png',
      iconSize: [20, 20],
    });
    var bs_markers = L.markerClusterGroup({chunkedLoading: true});
    this.busstations.forEach(e => {
      bs_markers.addLayer(L.marker(L.latLng(e.lat, e.long), {icon: busicon}));
    });
    this.map.addLayer(bs_markers);
  }

  public addPublicTransportMarker() {
    var pt_icon = L.icon({
      iconUrl: 'https://angular-map-dians.herokuapp.com/assets/bus.png',
      iconSize: [20, 20],
    });
    var pt_markers = L.markerClusterGroup({chunkedLoading: true});
    this.publictransport.forEach(e => {
      pt_markers.addLayer(L.marker(L.latLng(e.lat, e.long), {icon: pt_icon}));
    });
    this.map.addLayer(pt_markers);
  }

  public clearMap() {
    this.map.remove();
    this.initMap();
  }

  public addFuelStationMarker() {
    var fuelicon = L.icon({
      iconUrl: 'https://angular-map-dians.herokuapp.com/assets/fuel.png',
      iconSize: [20, 20],
    });
    var fs_markers = L.markerClusterGroup({chunkedLoading: true});
    this.fuelstations.forEach(e => {
      fs_markers.addLayer(L.marker(L.latLng(e.lat, e.long), {icon: fuelicon}));
    });
    this.map.addLayer(fs_markers);
  }

  public addCarRentalMarker() {
    var cr_icon = L.icon({
      iconUrl: 'https://angular-map-dians.herokuapp.com/assets/car_rental.png',
      iconSize: [20, 20],
    });
    var cr_markers = L.markerClusterGroup({chunkedLoading: true});
    this.carrentals.forEach(e => {
      cr_markers.addLayer(L.marker(L.latLng(e.lat, e.long), {icon: cr_icon}));
    });
    this.map.addLayer(cr_markers);
  }

  public addParkingSpotMarker() {
    var parkingicon = L.icon({
      iconUrl: 'https://angular-map-dians.herokuapp.com/assets/parking.png',
      iconSize: [20, 20],
    });
    var ps_markers = L.markerClusterGroup({chunkedLoading: true});
    this.parkingspots.forEach(e => {
      ps_markers.addLayer(L.marker(L.latLng(e.lat, e.long), {icon: parkingicon}));
    });
    this.map.addLayer(ps_markers);
  }

  public startMarker() {
    var start_marker = L.icon({
      iconUrl: 'https://angular-map-dians.herokuapp.com/assets/start_trip.png',
      iconSize: [40, 40],
    });
    this.map.once('click', <LeafletMouseEvent>(e: { latlng: any; }) => {
      L.marker(e.latlng, {icon: start_marker}).addTo(this.map)
      this.start_latlng=e.latlng;
    });
  }

  public endMarker() {
    var end_marker = L.icon({
      iconUrl: 'https://angular-map-dians.herokuapp.com/assets/end_trip.png',
      iconSize: [40, 40],
    });
    this.map.once('click', <LeafletMouseEvent>(e: { latlng: any; }) => {
      L.marker(e.latlng, {icon: end_marker}).addTo(this.map)
      this.end_latlng= e.latlng;
    });
  }

  public locateMeMarker() {
    L.control.locate({drawMarker: true, locateOptions: {enableHighAccuracy: true}}).addTo(
      this.map
    ).start();
  }

  public getDirection(type: string) {
    let url = 'https://api.openrouteservice.org/v2/directions/';
    let example = 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248879fb070905a45218492c610f4d6ed60&start=8.681495,49.41461&end=8.687872,49.420318'
    this.http.get<JSON>(
     example).subscribe(

      res => {
        console.log(res)
      },
      error => {
        alert(error.type);
        console.log(error.stringify)

      });
   /* return this.http.get<JSON>(url +'foot-walking' + '?api_key='+environment.taenkluc+'&start='+this.start_latlng.lat+','+this.start_latlng.lng+"&end="+this.end_latlng.lat+','+this.end_latlng.lng).subscribe(
      res => {
      console.log(res)
    },
    error => {
      alert(error.type);
      console.log(error.stringify)

    });*/
  }
  getLocation(): void{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.getWeather(longitude.toString(), latitude.toString());
      });
    } else {
      console.log("No support for geolocation")
    }
  }
  public getWeather(long:string,lat:string)
  {
    let url1 = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+'&lon='+long+"&appid=e1c149b903a27102c4b6ee74956254d0"+"&units=metric";
    console.log(L.control.locate());
    fetch(url1,)
      .then(response => response.json())
      .then(function (response){
        console.log(response);
      })
      .catch(function (error) {
        console.log('error',error)
      })
  }
}
