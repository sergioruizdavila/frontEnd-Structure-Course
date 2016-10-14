/**
 * LogInPageController
 * @description - Log In Page Controller
 */

module app.pages.logInPage {

    'use strict';

    /**********************************/
    /*           INTERFACES           */
    /**********************************/
    export interface ILogInPageController {
        logIn: () => void;
    }

    export interface IUserData {
        email: string;
        password: string;
    }

    /**********************************/
    /*         CLASS DEFINITION       */
    /**********************************/
    export class LogInPageController implements ILogInPageController {

        /**********************************/
        /*           PROPERTIES           */
        /**********************************/
        static controllerId = 'psApp.pages.logInPage.logInPageController';
        userData: IUserData;

        /*-- INJECT DEPENDENCIES--*/
        static $inject = [
            'psApp.pages.logInPage.logInPageService'
        ];


        /**********************************/
        /*           CONSTRUCTOR          */
        /**********************************/
        constructor(private logInService: ILogInPageService) {
            this._init();
        }

        /* -- INITIALIZE METHOD -- */
        private _init() {
            //Init Variables
            this.userData = {
                email: '',
                password: ''
            };

            this._activate();
        }

        /* -- ACTIVATE METHOD -- */
        private _activate(): void {
            //LOG
            console.log('logInPage controller actived');
        }


        /**********************************/
        /*             METHODS            */
        /**********************************/

        logIn(): void {
            console.log(this.userData);
            this.logInService.logIn(this.userData.email, this.userData.password)
            .then(
                function(response) {
                    console.log(response);
                }
            );
        }

    }


    angular.module('psApp.pages.logInPage')
            .controller(LogInPageController.controllerId, LogInPageController);

}
