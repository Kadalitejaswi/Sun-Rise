import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private _hotelsUrl='http://127.0.0.1:3000/api/api/hotels';
  private _hotelUrl='http://127.0.0.1:3000/api/api/hotel';

  constructor(private http:HttpClient) { }
  //method to get all hotels data
  getAllHotels(){
    return this.http.get<any>(this._hotelsUrl);
  }
  //method to get hotel data on applying filters
  getHotelsWithFilter(offset,count){
    return this.http.get<any>(this._hotelUrl);
  }
  //method to get one hotel data
  getOneHotel(hotelId){
    return this.http.get<any>(this._hotelUrl+"/"+hotelId);
  }
}
