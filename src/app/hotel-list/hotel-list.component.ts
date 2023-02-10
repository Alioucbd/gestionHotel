import { Component, OnInit } from "@angular/core";
import { IHotel } from "./hotel";

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

    public title: string = "Liste Hotels";

    public hotels: IHotel[] = [
        {
            id: 1,
            hotelName: "hotel name",
            description: "Un hôtel est un établissement commercial qui offre un service d'hébergement payant en chambres meublées à une clientèle de passage. ",
            prix: 300,
            imageUrl: 'assets/img/hotel-room.jpg',
            rating: 3.5
        },
        {
            id: 2,
            hotelName: "hotel name",
            description: "Un hôtel est un établissement commercial qui offre un service d'hébergement payant en chambres meublées à une clientèle de passage. ",
            prix: 400,
            imageUrl: 'assets/img/indoors.jpg',
            rating: 4
        },
        {
            id: 3,
            hotelName: "hotel name",
            description: "Un hôtel est un établissement commercial qui offre un service d'hébergement payant en chambres meublées à une clientèle de passage. ",
            prix: 200,
            imageUrl: 'assets/img/the-interior.jpg',
            rating: 5
        },
        {
            id: 4,
            hotelName: "hotel name",
            description: "Un hôtel est un établissement commercial qui offre un service d'hébergement payant en chambres meublées à une clientèle de passage. ",
            prix: 100,
            imageUrl: 'assets/img/window.jpg',
            rating: 4.5
        }
    ];
    public showBadge: boolean = false;

    public togleIsNewBadge(): void {
        this.showBadge = !this.showBadge;
    }

    

    public filteredHotels: any[] = [];

    ngOnInit(): void {
        this.filteredHotels = this.hotels;
    }
    public _hotelFilter: string = "mot";

    public get hotelFilter(): string {
        return this._hotelFilter;
    }
    public set hotelFilter(filter: string) {
        this._hotelFilter = filter;

        this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
    }
    
    public filterHotels(criteria: string) : IHotel[]{
        criteria = criteria.toLocaleLowerCase();

        const res = this.hotels.filter(
            (hotel: IHotel )=> hotel.hotelName.toLocaleLowerCase().indexOf(criteria) != -1
        );

        return res;
    }

}