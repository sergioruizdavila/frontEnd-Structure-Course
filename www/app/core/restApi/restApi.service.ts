/**
 * RestApiService
 * @description - Rest Api Service
 */

module app.core.restApi {

    'use strict';

    /**********************************/
    /*           INTERFACES           */
    /**********************************/
    export interface IRestApi extends ng.resource.IResource<any>{
        show: any;
        query: any;
        queryObject: any;
        create: any;
        update: any;
        remove: any;
    }

    /**********************************/
    /*         CLASS DEFINITION       */
    /**********************************/
    export class RestApiService {

        /**********************************/
        /*           PROPERTIES           */
        /**********************************/
        static serviceId = 'psApp.core.restApi.restApiService';


        /*-- INJECT DEPENDENCIES--*/
        static $inject = [
            '$resource'
        ];

        /**********************************/
        /*           CONSTRUCTOR          */
        /**********************************/
        constructor(private $resource: ng.resource.IResourceService) {
        }

        /**********************************/
        /*               API              */
        /**********************************/
        public static Api($resource, dataConfig: app.values.IDataConfig): IRestApi {

            var resource = $resource(dataConfig.baseUrl + ':url/:id', { url: '@url'},
            {
                show: { method: 'GET', params: {id: '@id'}, headers: {Accept: 'application/json; charset=utf-8'} },
                query: { method: 'GET', isArray: true, headers: {Accept: 'application/json; charset=utf-8'} },
                queryObject: { method: 'GET', isArray: false, headers: {Accept: 'application/json; charset=utf-8'}  },
                create: { method: 'POST', headers: {Accept: 'application/json; charset=utf-8'} },
                update: { method: 'PUT', params: { id: '@id'}, headers: {Accept: 'application/json; charset=utf-8'} },
                remove: { method: 'DELETE', params: { id: '@id' }, headers: {Accept: 'application/json; charset=utf-8'} }
            });

            return <IRestApi>resource;

        }

    }

    angular
        .module('psApp.core.restApi')
        .factory(RestApiService.serviceId, RestApiService.Api)
        .factory('customHttpInterceptor', customHttpInterceptor)
        .config(configApi);

        configApi.$inject = ['$httpProvider'];
        customHttpInterceptor.$inject = ['$q'];

        function configApi($httpProvider) {
            $httpProvider.interceptors.push('customHttpInterceptor');
        }

        function customHttpInterceptor($q) {
            return {
                request: function(req) {
                    req.url = decodeURIComponent(req.url);
                    return req;
                },
                requestError: function (rejection) {
                    return rejection;
                },
                response: function (res) {
                    return res;
                },
                responseError: function (rejection) {
                    return rejection;
                }
            }
        }

}
