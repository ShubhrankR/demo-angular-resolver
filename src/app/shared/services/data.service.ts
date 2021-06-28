import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {AppConstants} from "../../app-constants";
import {NasaApodApiResponseModel} from "../models/nasa-apod-api-response.model";

@Injectable()
export class DataService {
    nasaApiKey = 'JCeai4LdUiqdGbNwQqz9iwdWldMcaAWRbBUhJr5N';

    constructor(private http: HttpClient) {
    }

    /**
     * Astronomy Picture of the Day
     */
    getAstronomyData(): Observable<NasaApodApiResponseModel> {
        return this.http.get<NasaApodApiResponseModel>(environment.api.routes.nasa.planetaryAPOD.endpoint +
            '?api_key=' + this.nasaApiKey, AppConstants.requestOptions);
    }
}
