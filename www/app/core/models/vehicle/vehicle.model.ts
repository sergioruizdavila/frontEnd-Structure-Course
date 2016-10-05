/*
* Specifies the classes and interfaces realted to Vehicle model
*/

'use strict'

module app.core.models.vehicle{

  /* CLASS DEFINITION */
  class Vehicle{

    /* PROPERTIES */
    private _id: number;
    private _vin: string;
    private _model: string;
    private _year: string;
    private _user: app.core.models.user.User;


    /* CONSTRUCTOR */
    constructor(){

    }

    /* VIN GETTER */
    get Vin(){
      return this._vin;
    }

    /* VIN SETTER */
    set Vin(value:string){
      /* variables */
      if(value === undefined){
        throw 'Please supply vehicle vin value';
      }
      this._vin = value;
    }

    /* MODEL GETTER */
    get Model(){
      return this._model;
    }

    /* MODEL SETTER */
    set Model(value:string){
      /* variables */
      if(value === undefined){
        throw 'Please supply vehicle model value';
      }
      this._model = value;
    }

    /* YEAR GETTER */
    get Year(){
      return this._year;
    }

    /* YEAR SETTER */
    set Year(value:string){
      /* variables */
      if(value === undefined){
        throw 'Please supply vehicle year value';
      }
      this._year = value;
    }

    /* USER GETTER */
    get User(){
      return this._user;
    }
  }
}
