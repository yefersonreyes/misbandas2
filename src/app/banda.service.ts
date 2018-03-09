import { Injectable } from '@angular/core';

import { Banda } from './banda';
import { BANDAS } from './bandas-falsas';

@Injectable()
export class BandaService {
    getBandas() : Banda[]{
        return BANDAS;
    }

}