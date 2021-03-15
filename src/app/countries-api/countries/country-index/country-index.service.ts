import { Injectable } from '@angular/core';
import * as regionsJson from '../../../../assets/regions.json';
import { Region } from './region.model';


@Injectable()
export class CountryIndexService {
    private _regions: Region[] = (regionsJson as any).default;

    constructor() {
    }

    public getRegions(){
        return this._regions;
    }

}