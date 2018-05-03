webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ag-grid/filter-sort.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterSortService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterSortService = /** @class */ (function () {
    function FilterSortService() {
    }
    /*
     * Convert ag-grid sort/filter data into a popoulated
     * TypeScript object of custom type FilterSortModel
     *
     * Assuming you are using ag-grid Angular for front end data grids
     * and using BoxTurtleCs C# MVC controllers to produce data (or something similar),
     * use this method to package up all requested sorts, filters, and pagination
     * that ag-grid events produce into easy to use TypeScript objects that we can pass
     * along back to backend controllers.  By converting from ag-grid's syntax into
     * these objects, it's easier to push TypeScript front-end objects to C# backend
     * objects.  BoxTurtleCs project has C# objects with the same structure, then
     * it feeds it into dynamic LINQ for final datatabase queries.
     *
     * Example:
     *  // Assume we're in an ag-grid Angular component
     *  // set all the grid options
     * this.gridOptions.onGridReady = function (event) {
     * 	var dataSource = {
     * 		rowCount: null, // behave as infinite scroll
     *      // ag-grid will call this when it wants data
     * 		getRows: function (params) {
     *          // Call this service, and pass it ag-grid data
     *			// and you will get back FilterSortModel object with stuff filled out
     * 			let myFilterSortModel: FilterSortModel = filterSortService.getFilterSortModelFromAgGridParm(params);
     *			// Using standard Angular techniques, call a data service that accepts the filter model
     *			// and returns a promise to return data
     * 			myDataService.filterSort(myFilterSortModel).then(
     * 				filterSortResponse => {
     * 					params.successCallback(filterSortResponse.rows, filterSortResponse.totalCount);
     * 				});
     * 		}
     * 	}
     *  // Feed this object to ag-grid
     * 	event.api.setDatasource(dataSource);
     *
     */
    FilterSortService.prototype.getFilterSortModelFromAgGridParm = function (params) {
        var myFilterModel = {};
        for (var colId in params.filterModel) {
            var theirFilterItem = params.filterModel[colId];
            var myFilterItem = theirFilterItem;
            myFilterModel[colId] = myFilterItem;
        }
        var mySortModel = [];
        for (var _i = 0, _a = params.sortModel; _i < _a.length; _i++) {
            var theirSortItemX = _a[_i];
            var theirSortItemY = theirSortItemX;
            var mySortItem = theirSortItemY;
            mySortModel.push(mySortItem);
        }
        var myFilterSortModel = {
            filterModel: myFilterModel,
            sortModel: mySortModel,
            startRow: params.startRow,
            endRow: params.endRow
        };
        return myFilterSortModel;
    };
    FilterSortService.prototype.addLineNumbers = function (filterSortModel, filterSortResponse) {
        var startRow = 0;
        if (filterSortModel != null) {
            startRow = filterSortModel.startRow;
        }
        for (var i = 0; i < filterSortResponse.rows.length; i++) {
            filterSortResponse.rows[i].lineNumber = startRow + i + 1;
            // Every row gets a checkbox column, even if it's not used
            filterSortResponse.rows[i].checkbox = null;
        }
    };
    FilterSortService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FilterSortService);
    return FilterSortService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_zip_list_component__ = __webpack_require__("./src/app/component/zip-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_state_list_component__ = __webpack_require__("./src/app/component/state-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__component_state_list_component__["a" /* StateListComponent */] },
    { path: 'zip', component: __WEBPACK_IMPORTED_MODULE_2__component_zip_list_component__["a" /* ZipListComponent */] },
    { path: 'state', component: __WEBPACK_IMPORTED_MODULE_3__component_state_list_component__["a" /* StateListComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ag_grid_angular_main__ = __webpack_require__("./node_modules/ag-grid-angular/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ag_grid_angular_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ag_grid_angular_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_app_component__ = __webpack_require__("./src/app/component/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_zip_list_component__ = __webpack_require__("./src/app/component/zip-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_state_list_component__ = __webpack_require__("./src/app/component/state-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_zip_service__ = __webpack_require__("./src/app/service/zip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_state_service__ = __webpack_require__("./src/app/service/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import standard required angular libraries





// Import the extra third party libraries 


// Import our primary component (like a master page)

// Import our components


// Import our services


// Import our routing table

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                // Make all of our components available to Angular
                __WEBPACK_IMPORTED_MODULE_6__component_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__component_zip_list_component__["a" /* ZipListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_state_list_component__["a" /* StateListComponent */]
            ],
            imports: [
                // Import standard libraries and make available to individual components
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                // Import our routing list
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                // Import angular bootstrap
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                // Import ag-grid, note the special syntax
                __WEBPACK_IMPORTED_MODULE_5_ag_grid_angular_main__["AgGridModule"].withComponents([]),
            ],
            providers: [
                // Make our services available for dependency injection
                __WEBPACK_IMPORTED_MODULE_9__service_zip_service__["a" /* ZipService */],
                __WEBPACK_IMPORTED_MODULE_10__service_state_service__["a" /* StateService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__component_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/component/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark mb-4\">\r\n  <button type=\"button\" class=\"navbar-toggler\" aria-controls=\"navbarCollapse\" (click)=\"isExpanded = !isExpanded\" [attr.aria-expanded]=\"!isExpanded\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" routerLink=\"/\">Bluejay</a>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarContent\" [ngbCollapse]=\"!isExpanded\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <!-- START_MENU -->\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" routerLink=\"/state\">State</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" routerLink=\"/zip\">Zip</a>\r\n      </li>\r\n      <!-- END_MENU -->\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<footer class=\"footer \">\r\n  <div class=\"container\">\r\n    <p class=\"text-muted\">Site Footer, copyright, contact, etc.</p>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/component/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/component/app.component.html"),
            styles: [__webpack_require__("./src/app/component/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/component/state-list.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/component/state-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>State List</h2>\r\n\r\n<div style=\"width: 1150px;\">\r\n\t<ag-grid-angular #agGrid style=\"width: 100%; height: 400px;\" class=\"ag-fresh\"\r\n\t\t\t\t [gridOptions]=\"gridOptions\">\r\n\t</ag-grid-angular>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/state-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_state_service__ = __webpack_require__("./src/app/service/state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StateListComponent = /** @class */ (function () {
    function StateListComponent(stateService, route, router) {
        this.stateService = stateService;
        this.route = route;
        this.router = router;
        // Some weird thing with load order, must explicitly supply
        // services here and not rely on this.statusReportService
        this.loadGridOptions(stateService);
    }
    StateListComponent.prototype.ngOnInit = function () {
    };
    StateListComponent.prototype.loadGridOptions = function (stateService) {
        this.gridOptions = {};
        this.gridOptions.columnDefs = [
            {
                headerName: 'Code',
                field: 'code',
                width: 80,
                filter: 'text',
                tooltipField: 'code'
            },
            {
                headerName: 'Name',
                field: 'name',
                width: 200,
                filter: 'text',
                tooltipField: 'name'
            }
        ];
        // Load all data to the client, no server side paging.
        // Set basic grid options
        this.gridOptions.floatingFilter = true;
        this.gridOptions.debug = false;
        this.gridOptions.enableColResize = true;
        this.gridOptions.suppressRowClickSelection = true;
        this.gridOptions.rowModelType = 'normal';
        this.gridOptions.maxConcurrentDatasourceRequests = 2;
        this.gridOptions.deltaRowDataMode = true;
        this.gridOptions.enableSorting = true;
        // Tell ag-grid how to uniquely identify each column
        // so it can manage pagination and filtering correctly
        this.gridOptions.getRowNodeId = function (item) { return item.stateId; };
        // After the javascript loads and ag-grid is 
        // woken up, hit the service to get the data
        this.gridOptions.onGridReady = function (event) {
            stateService.list().then(function (myData) {
                // Call ag-grid API to supply an array of objects
                event.api.setRowData(myData);
            });
        };
        // Hyperlinks in grid force Angular SPA reloads, so we catch click events instead.
        var angularComponentPtr = this;
        this.gridOptions.onCellClicked = function (params) {
            if (params.colDef.field == "stateId") {
                angularComponentPtr.router.navigate(["/state/" + params.data.stateId]);
            }
        };
    };
    StateListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'state-list',
            template: __webpack_require__("./src/app/component/state-list.component.html"),
            styles: [__webpack_require__("./src/app/component/state-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_state_service__["a" /* StateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], StateListComponent);
    return StateListComponent;
}());



/***/ }),

/***/ "./src/app/component/zip-list.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/component/zip-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Zip List</h2>\r\n\r\n<div style=\"width: 1150px;\">\r\n\t<ag-grid-angular #agGrid style=\"width: 100%; height: 400px;\" class=\"ag-fresh\"\r\n\t\t\t\t [gridOptions]=\"gridOptions\">\r\n\t</ag-grid-angular>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/zip-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZipListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ag_grid_filter_sort_service__ = __webpack_require__("./src/app/ag-grid/filter-sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_zip_service__ = __webpack_require__("./src/app/service/zip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ZipListComponent = /** @class */ (function () {
    function ZipListComponent(zipService, route, router, filterSortService) {
        this.zipService = zipService;
        this.route = route;
        this.router = router;
        this.filterSortService = filterSortService;
        // Some weird thing with load order, must explicitly supply
        // services here and not rely on this.statusReportService
        this.loadGridOptions(zipService, filterSortService);
    }
    ZipListComponent.prototype.ngOnInit = function () {
    };
    ZipListComponent.prototype.loadGridOptions = function (zipService, filterSortService) {
        this.gridOptions = {};
        this.gridOptions.columnDefs = [
            {
                headerName: 'Zip',
                field: 'zipcode',
                width: 80,
                filter: 'text',
                tooltipField: 'zip'
            },
            {
                headerName: 'City',
                field: 'city',
                width: 200,
                filter: 'text',
                tooltipField: 'zip'
            },
            {
                headerName: 'State',
                field: 'state',
                width: 80,
                filter: 'text',
                tooltipField: 'zip'
            }
        ];
        // Infinite scrolling with paging and filtering and sorting
        this.gridOptions.rowModelType = 'infinite';
        this.gridOptions.floatingFilter = true;
        this.gridOptions.debug = false;
        this.gridOptions.enableServerSideSorting = true;
        this.gridOptions.enableServerSideFilter = true;
        this.gridOptions.enableColResize = true;
        this.gridOptions.rowSelection = 'single';
        this.gridOptions.rowDeselection = true;
        this.gridOptions.maxConcurrentDatasourceRequests = 2;
        this.gridOptions.paginationPageSize = 1;
        this.gridOptions.infiniteInitialRowCount = 1;
        this.gridOptions.getRowNodeId = function (item) { return item.id; };
        this.gridOptions.onGridReady = function (event) {
            var dataSource = {
                rowCount: null,
                getRows: function (params) {
                    // Get the filter and sort settings requested by user
                    var myFilterSortModel = filterSortService.getFilterSortModelFromAgGridParm(params);
                    // Ask the server for matching data
                    zipService.filterSort(myFilterSortModel).then(function (filterSortResponse) {
                        filterSortService.addLineNumbers(myFilterSortModel, filterSortResponse);
                        params.successCallback(filterSortResponse.rows, filterSortResponse.totalCount);
                    });
                }
            };
            event.api.setDatasource(dataSource);
        };
        // Hyperlinks in grid force Angular SPA reloads, so we catch click events instead.
        var angularComponentPtr = this;
        this.gridOptions.onCellClicked = function (params) {
            if (params.colDef.field == "zipId") {
                angularComponentPtr.router.navigate(["/zip/" + params.data.zipId]);
            }
        };
    };
    ZipListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'zip-list',
            template: __webpack_require__("./src/app/component/zip-list.component.html"),
            styles: [__webpack_require__("./src/app/component/zip-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ag_grid_filter_sort_service__["a" /* FilterSortService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_zip_service__["a" /* ZipService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__ag_grid_filter_sort_service__["a" /* FilterSortService */]])
    ], ZipListComponent);
    return ZipListComponent;
}());



/***/ }),

/***/ "./src/app/service/state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StateService = /** @class */ (function () {
    function StateService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        this.baseUrl = "/api/state";
    }
    StateService.prototype.list = function () {
        return this.http.get("" + this.baseUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StateService.prototype.get = function (id) {
        return this.http.get(this.baseUrl + "/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StateService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    StateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/service/zip.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZipService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZipService = /** @class */ (function () {
    function ZipService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        this.baseUrl = "/api/zip";
    }
    ZipService.prototype.list = function () {
        return this.http.get("" + this.baseUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ZipService.prototype.get = function (id) {
        return this.http.get(this.baseUrl + "/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ZipService.prototype.filterSort = function (filterSortModel) {
        return this.http.post(this.baseUrl + "/FilterSort", JSON.stringify(filterSortModel), this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ZipService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ZipService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ZipService);
    return ZipService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map