/*
 * This file is part of Invenio.
 * Copyright (C) 2015, 2016 CERN.
 *
 * Invenio is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * Invenio is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Invenio; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 *
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
 */

(function (angular) {
  /**
   * @ngdoc controller
   * @name invenioSearchController
   * @namespace invenioSearchController
   * @description
   *    Invenio search controller.
   */
  function invenioSearchController($scope, invenioExportLocation, invenioExportAPI) {
    // Assign controller to `vm`
    var vm = this;
  }

  ////////////

  // Directives

  /**
   * @ngdoc directive
   * @name invenioSearch
   * @description
   *    The invenioSearch directive handler
   * @namespace invenioSearch
   * @example
   *    Usage:
   *    <invenio-export
   *     endpoint='SEARCH_PROVIDER_URL'
   *     >
   *        ... Any child directives
   *    </invenio-export>
   */
  function invenioExport() {
    // Functions

    /**
     * Initialize export
     * @memberof invenioExport
     * @param {service} scope -  The scope of this element.
     * @param {service} element - Element that this directive is assigned to.
     * @param {service} attrs - Attribute of this element.
     * @param {invenioSearchController} vm - Invenio export controller.
     */
    function link(scope, element, attrs, vm) {
      // // Update search parameters
      // var collectedArgs = {
      //   url: attrs.searchEndpoint,
      //   method: attrs.searchMethod || 'GET',
      // };

      // // Add any extra parameters
      // var extraParams = {
      //   params: JSON.parse(attrs.searchExtraParams || '{}')
      // };

      // var urlParams = {
      //   params: vm.invenioSearchGetUrlArgs()
      // };

      // vm.invenioSearchHiddenParams = JSON.parse(
      //   attrs.searchHiddenParams  || '{}'
      // );

      // // Update arguments
      // var params = angular.merge(
      //   {},
      //   collectedArgs,
      //   extraParams,
      //   urlParams
      // );

      // // Brodcast ready to initialization
      // scope.$broadcast('invenio.search.initialazation', params);
    }

    ////////////

    return {
      restrict: 'AE',
      scope: false,
      controller: 'invenioExportController',
      controllerAs: 'vm',
      link: link,
    };
  }

  /**
   * @ngdoc directive
   * @name invenioExportResults
   * @description
   *    The invenioSearchBar directive
   * @namespace invenioSearchBar
   * @example
   *    Usage:
   *    <invenio-export-results
   *     template='TEMPLATE_PATH'>
   *        ... Any child directives
   *    </invenio-search-bar>
   */
  function invenioExportResults() {

    // Functions

    /**
     * Force apply the attributes to the scope
     * @memberof invenioExportResults
     * @param {service} scope -  The scope of this element.
     * @param {service} element - Element that this direcive is assigned to.
     * @param {service} attrs - Attribute of this element.
     * @param {invenioSearchController} vm - Invenio search controller.
     */
    function link(scope, element, attrs, vm) {
    }

    /**
     * Choose template for results
     * @memberof invenioExportResults
     * @param {service} element - Element that this direcive is assigned to.
     * @param {service} attrs - Attribute of this element.
     */
    function templateUrl(element, attrs) {
      return attrs.template;
    }

    ////////////

    return {
      restrict: 'AE',
      require: '^invenioExport',
      scope: false,
      templateUrl: templateUrl,
      link: link,
    };
  }

  /**
   * @ngdoc directive
   * @name invenioExportLoading
   * @description
   *    The invenioExportLoading directive
   * @namespace invenioExportLoading
   * @example
   *    Usage:
   *    <invenio-search-loading
   *     message='{{ _('Loading') }}'
   *     template='TEMPLATE_PATH'>
   *        ... Any children directives
   *    </invenio-search-loading>
   */
  function invenioExportLoading() {

    // Functions

    /**
     * Force apply the attributes to the scope
     * @memberof invenioExportLoading
     * @param {service} scope -  The scope of this element.
     * @param {service} element - Element that this direcive is assigned to.
     * @param {service} attrs - Attribute of this element.
     * @param {invenioExportController} vm - Invenio export controller.
     */
    function link(scope, element, attrs, vm) {
      scope.loadingMessage = attrs.message;
    }

    /**
     * Choose template for search loading
     * @memberof invenioExportLoading
     * @param {service} element - Element that this direcive is assigned to.
     * @param {service} attrs - Attribute of this element.
     * @example
     *    Minimal template `template.html` usage
     *        <div ng-show='vm.invenioExportLoading'>
     *          <i class='fa fa-loading'></i> {{ loadingMessage }}
     *        </div>
     */
    function templateUrl(element, attrs) {
      return attrs.template;
    }

    ////////////

    return {
      restrict: 'AE',
      require: '^invenioExport',
      templateUrl: templateUrl,
      link: link,
    };
  }

  /**
   * @ngdoc directive
   * @name invenioExportError
   * @description
   *    The invenioExportError directive
   * @namespace invenioExportError
   * @example
   *    Usage:
   *    <invenio-search-loading
   *     message='{{ _('Loading') }}'
   *     template='TEMPLATE_PATH'>
   *        ... Any children directives
   *    </invenio-search-loading>
   */
  function invenioExportError() {

    // Functions

    /**
     * Force apply the attributes to the scope
     * @memberof invenioExportError
     * @param {service} scope -  The scope of this element.
     * @param {service} element - Element that this direcive is assigned to.
     * @param {service} attrs - Attribute of this element.
     * @param {invenioExportController} vm - Invenio export controller.
     */
    function link(scope, element, attrs, vm) {
      scope.loadingMessage = attrs.message;
    }

    /**
     * Choose template for search loading
     * @memberof invenioExportError
     * @param {service} element - Element that this direcive is assigned to.
     * @param {service} attrs - Attribute of this element.
     * @example
     *    Minimal template `template.html` usage
     *        <div ng-show='vm.invenioExportError'>
     *          <i class='fa fa-loading'></i> {{ loadingMessage }}
     *        </div>
     */
    function templateUrl(element, attrs) {
      return attrs.template;
    }

    ////////////

    return {
      restrict: 'AE',
      require: '^invenioExport',
      templateUrl: templateUrl,
      link: link,
    };
  }

  ////////////

  // Services

  /**
   * @ngdoc service
   * @name invenioExportAPI
   * @namespace invenioExportAPI
   * @param {service} $http - Angular http requests service.
   * @param {service} $q - Angular promise services.
   * @description
   *     Call the search API
   */
  function invenioExportAPI($http,  $q) {

    /**
     * Make a request to the API
     * @memberof invenioExportAPI
     * @param {Object} args - The request parameters.
     * @returns {service} promise
     */
    function search(args, hidden) {

      // Initialize the promise
      var deferred = $q.defer();

      /**
       * Search on success
       * @memberof invenioExportAPI
       * @param {Object} response - The API response.
       * @returns {Object} response
       */
      function success(response) {
        deferred.resolve(response);
      }

      /**
       * Search on error
       * @memberof invenioExportAPI
       * @param {Object} response - The API error response.
       * @returns {Object} error
       */
      function error(response) {
        deferred.reject(response);
      }

      // Place all parameters together
      var params = angular.copy(args);
      // extend parameters with the hidden params
      params.params = angular.merge(params.params, hidden || {});

      // Make the request
      $http(params).then(
        success,
        error
      );
      return deferred.promise;
    }
    return {
      search: search
    };
  }

  // Inject the necessary angular services
  invenioSearchAPI.$inject = ['$http', '$q'];

  /**
   * @ngdoc service
   * @name invenioExportLocation
   * @namespace invenioExportLocation
   * @param {service} $location - Angular window.location service.
   * @description
   *    window.location API
   */
  function invenioExportLocation($location) {
    /**
     * Get $location.search() parameters
     * @memberof invenioExportLocation
     * @returns {Object}
     */
    function get() {
      return $location.search();
    }

    /**
     * Set $location.search() parameters
     * @memberof invenioExportLocation
     * @param {Object} args - The search request parameters.
     * @returns {Object}
     */
    function set(args) {
      $location.search(args);
    }

    ////////////

    return {
      get: get,
      set: set,
    };
  }

  invenioExportLocation.$inject = ['$location'];

  ////////////

  // Configuration

  /**
   * @ngdoc interface
   * @name invenioSearchConfiguration
   * @namespace invenioSearchConfiguration
   * @param {service} $locationProvider - Angular window.location provider.
   * @description
   *     Enable HTML5 mode in urls
   */
  function invenioExportConfiguration($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
      rewriteLinks: false,
    });
  }

  // Inject the necessary angular services
  invenioExportConfiguration.$inject = ['$locationProvider'];

  ////////////

  // Put everything together

  // Setup configuration
  angular.module('invenioExport.configuration', [])
    .config(invenioExportConfiguration);

  // Setup services
  angular.module('invenioExport.services', [])
    .service('invenioExportLocation', invenioExportLocation)
    .service('invenioExportAPI', invenioExportAPI);

  // Setup controllers
  angular.module('invenioExport.controllers', [])
    .controller('invenioExportController', invenioExportController);

  // Sutup directives
  angular.module('invenioExport.directives', [])
    .directive('invenioExport', invenioExport)
    .directive('invenioExportError', invenioExportError)
    .directive('invenioExportResults', invenioExportResults)
    .directive('invenioExportLoading', invenioExportLoading);

  // Setup everyhting
  angular.module('invenioExport', [
    'invenioExport.configuration',
    'invenioExport.services',
    'invenioExport.controllers',
    'invenioExport.directives'
  ]);

})(angular);
