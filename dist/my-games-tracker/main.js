(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/de2":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent, HomeSortOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSortOptions", function() { return HomeSortOptions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


function UserProfileComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r1)("selected", opt_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", opt_r1, " \u25BC");
} }
class UserProfileComponent {
    constructor() {
        this.pageTitle = 'Innovation Ranks';
        this.sortOptions = [];
        this.activeSortKey = 'Title';
        //need to filter out the numbers for some reason (they're duplicate?)
        this.sortOptions = Object.keys(HomeSortOptions).filter(key => isNaN(Number(key)));
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["user-profile"]], decls: 23, vars: 4, consts: [[1, "navi"], [1, "bar-text"], [1, "list-state"], [1, "title"], [1, "sort"], [3, "ngModel", "ngModelChange"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "plus"], [1, "menuToggle"], ["type", "checkbox"], ["href", "#"], [3, "activeSortKey"], [3, "value", "selected"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserProfileComponent_Template_select_ngModelChange_6_listener($event) { return ctx.activeSortKey = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserProfileComponent_option_7_Template, 2, 3, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Your List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Friend's Lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "home", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.activeSortKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeSortKey", ctx.activeSortKey);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'user-profile', templateUrl: './user-profile.component.html' }]
    }], function () { return []; }, null); })();
var HomeSortOptions;
(function (HomeSortOptions) {
    HomeSortOptions["Title"] = "title";
    HomeSortOptions["TotalScore"] = "totalScore";
    HomeSortOptions["HoursPlayed"] = "hoursPlayed";
})(HomeSortOptions || (HomeSortOptions = {}));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\limit\Desktop\workspace\my-games-tracker\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _user_session_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-session-handler */ "fLXc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_item_add_rank_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-item/add-rank-card.component */ "vY0v");
/* harmony import */ var _user_rating_card_user_rating_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-rating-card/user-rating-card.component */ "RavM");
/* harmony import */ var _pipes_list_sort_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_pipes/list-sort.pipe */ "jDV8");








function HomeComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "user-rating-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rankCard_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardInput", rankCard_r2);
} }
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "add-rank-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAddItem", function HomeComponent_div_0_Template_add_rank_card_onAddItem_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.ngOnInit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Ranks (out of 100)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_0_div_7_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "listSort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 1, ctx_r0.activeRankCardList.rankCards, ctx_r0.activeSort));
} }
class HomeComponent {
    constructor(userSessionHandler) {
        this.userSessionHandler = userSessionHandler;
        this.activeSort = 'title';
        // initRequest = { userId: 'nkovitz' };
        this.initRequest = { userId: 'mocknkovitz' };
        this.sessionHasLoaded = false;
        console.log("LOADING USER: " + this.initRequest.userId);
        this.userSessionHandler.onSessionLoaded.subscribe(result => {
            console.log("onSessionLoaded result:");
            console.log(result);
            this.activeUser = result;
            this.activeRankCardList = this.userSessionHandler.activeList;
            this.sessionHasLoaded = true;
        });
    }
    set activeSortKey(value) { this.activeSort = _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["HomeSortOptions"][value]; }
    // initRequest = { userId: 'localmocknkovitz' };
    ngOnInit() { this.userSessionHandler.initializeSessionUser(this.initRequest.userId); }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_session_handler__WEBPACK_IMPORTED_MODULE_2__["UserSessionHandler"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], inputs: { activeSortKey: "activeSortKey" }, decls: 1, vars: 1, consts: [["class", "home-container", 4, "ngIf"], [1, "home-container"], [1, "add-item-container"], [3, "onAddItem"], [1, "page-details"], [1, "ranks-container"], ["class", "card-container", 4, "ngFor", "ngForOf"], [1, "card-container"], [3, "cardInput"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 9, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sessionHasLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _add_item_add_rank_card_component__WEBPACK_IMPORTED_MODULE_4__["AddRankCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _user_rating_card_user_rating_card_component__WEBPACK_IMPORTED_MODULE_5__["UserRankCardComponent"]], pipes: [_pipes_list_sort_pipe__WEBPACK_IMPORTED_MODULE_6__["ListSortPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'home', templateUrl: './home.component.html' }]
    }], function () { return [{ type: _user_session_handler__WEBPACK_IMPORTED_MODULE_2__["UserSessionHandler"] }]; }, { activeSortKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ANx9":
/*!************************************************!*\
  !*** ./src/app/_services/user-mock.service.ts ***!
  \************************************************/
/*! exports provided: UserMockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMockService", function() { return UserMockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _category_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-mock.service */ "Uz0K");




class UserMockService {
    getUser(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(UserMockService.mockUserJSON);
    }
    updateUser(user) {
        UserMockService.mockUserJSON = Object.assign({}, user);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
    }
    addLinkedRankCard(card, categoryItem) {
        //categoryItem isnt getting added for some reason
        _category_mock_service__WEBPACK_IMPORTED_MODULE_2__["CategoryMockService"].mockCategory.items.push(categoryItem);
        UserMockService.mockUserJSON.rankCardLists
            .find(x => x.listId == UserMockService.mockUserJSON.config.lastActiveListId)
            .rankCards.push(card);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
    }
}
//had dumb "this" issues, now it's static
UserMockService.mockUserJSON = {
    "userId": "localmocknkovitz",
    "config": {
        "facebookLink": "NONE",
        "lastActiveListId": "~niksgames"
    },
    "rankCardLists": [
        {
            "listId": "~niksgames",
            "title": "Niks Top-Tier Games",
            "categoryId": "#videogames",
            "rules": [
                { "code": "A", "ruleName": "Art Style", "weight": 10 },
                { "code": "B", "ruleName": "Game Mechanics", "weight": 10 },
                { "code": "C", "ruleName": "Cool & Nostalgia", "weight": 10 },
                { "code": "E", "ruleName": "Engagement", "weight": 10 },
                { "code": "G", "ruleName": "Game Design", "weight": 10 },
                { "code": "L", "ruleName": "Level Design", "weight": 10 },
                { "code": "M", "ruleName": "Music", "weight": 10 },
                { "code": "P", "ruleName": "Progression", "weight": 10 },
                { "code": "R", "ruleName": "Metacritic", "weight": 10 },
                { "code": "S", "ruleName": "Satisfaction", "weight": 7 },
                { "code": "X", "ruleName": "Bonuses", "weight": 3 }
            ],
            "rankCards": [
                {
                    "categoryItemId": 0,
                    "metadata": {},
                    "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
                    "ranks": [
                        { "code": "A", "score": 1 },
                        { "code": "B", "score": 2 },
                        { "code": "C", "score": 3 },
                        { "code": "E", "score": 4 },
                        { "code": "G", "score": 5 },
                        { "code": "L", "score": 10 },
                        { "code": "M", "score": 7 },
                        { "code": "P", "score": 8 },
                        { "code": "R", "score": 8 },
                        { "code": "S", "score": 8 },
                        { "code": "X", "score": 1 }
                    ]
                },
                {
                    "categoryItemId": 1,
                    "metadata": {},
                    "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }, { "increment": -1, "comment": "NEGATIVEEXAMPLECOMMENT" }],
                    "ranks": [
                        { "code": "A", "score": 3 },
                        { "code": "B", "score": 3 },
                        { "code": "C", "score": 4 },
                        { "code": "E", "score": 4 },
                        { "code": "G", "score": 5 },
                        { "code": "L", "score": 5 },
                        { "code": "M", "score": 5 },
                        { "code": "P", "score": 5 },
                        { "code": "R", "score": 5 },
                        { "code": "S", "score": 5 },
                        { "code": "X", "score": 1 }
                    ]
                },
                {
                    "categoryItemId": 2,
                    "metadata": {},
                    "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
                    "ranks": [
                        { "code": "A", "score": 8 },
                        { "code": "B", "score": 8 },
                        { "code": "C", "score": 8 },
                        { "code": "E", "score": 8 },
                        { "code": "G", "score": 8 },
                        { "code": "L", "score": 8 },
                        { "code": "M", "score": 8 },
                        { "code": "P", "score": 8 },
                        { "code": "R", "score": 8 },
                        { "code": "S", "score": 8 },
                        { "code": "X", "score": 1 }
                    ]
                },
                {
                    "categoryItemId": 3,
                    "metadata": {},
                    "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
                    "ranks": [
                        { "code": "A", "score": 8 },
                        { "code": "B", "score": 8 },
                        { "code": "C", "score": 8 },
                        { "code": "E", "score": 8 },
                        { "code": "G", "score": 8 },
                        { "code": "L", "score": 8 },
                        { "code": "M", "score": 8 },
                        { "code": "P", "score": 8 },
                        { "code": "R", "score": 8 },
                        { "code": "S", "score": 8 },
                        { "code": "X", "score": 1 }
                    ]
                },
                {
                    "categoryItemId": 4,
                    "metadata": {},
                    "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
                    "ranks": [
                        { "code": "A", "score": 8 },
                        { "code": "B", "score": 8 },
                        { "code": "C", "score": 8 },
                        { "code": "E", "score": 8 },
                        { "code": "G", "score": 8 },
                        { "code": "L", "score": 8 },
                        { "code": "M", "score": 8 },
                        { "code": "P", "score": 8 },
                        { "code": "R", "score": 8 },
                        { "code": "S", "score": 8 },
                        { "code": "X", "score": 1 }
                    ]
                },
                {
                    "categoryItemId": 5,
                    "metadata": {},
                    "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
                    "ranks": [
                        { "code": "A", "score": 8 },
                        { "code": "B", "score": 8 },
                        { "code": "C", "score": 8 },
                        { "code": "E", "score": 8 },
                        { "code": "G", "score": 8 },
                        { "code": "L", "score": 8 },
                        { "code": "M", "score": 8 },
                        { "code": "P", "score": 8 },
                        { "code": "R", "score": 8 },
                        { "code": "S", "score": 8 },
                        { "code": "X", "score": 1 }
                    ]
                },
                {
                    "categoryItemId": 6,
                    "metadata": {},
                    "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
                    "ranks": [
                        { "code": "A", "score": 8 },
                        { "code": "B", "score": 8 },
                        { "code": "C", "score": 8 },
                        { "code": "E", "score": 8 },
                        { "code": "G", "score": 8 },
                        { "code": "L", "score": 8 },
                        { "code": "M", "score": 8 },
                        { "code": "P", "score": 8 },
                        { "code": "R", "score": 8 },
                        { "code": "S", "score": 8 },
                        { "code": "X", "score": 1 }
                    ]
                },
                {
                    "categoryItemId": 7,
                    "metadata": {},
                    "bonusDetails": [{ "increment": 1, "comment": "EXAMPLECOMMENT" }],
                    "ranks": [
                        { "code": "A", "score": 8 },
                        { "code": "B", "score": 8 },
                        { "code": "C", "score": 8 },
                        { "code": "E", "score": 8 },
                        { "code": "G", "score": 8 },
                        { "code": "L", "score": 8 },
                        { "code": "M", "score": 8 },
                        { "code": "P", "score": 8 },
                        { "code": "R", "score": 8 },
                        { "code": "S", "score": 8 },
                        { "code": "X", "score": 1 }
                    ]
                }
            ]
        }
    ]
};
UserMockService.ɵfac = function UserMockService_Factory(t) { return new (t || UserMockService)(); };
UserMockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserMockService, factory: UserMockService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserMockService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "AfT/":
/*!***********************************************!*\
  !*** ./src/app/_services/category.service.ts ***!
  \***********************************************/
/*! exports provided: ICategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICategoryService", function() { return ICategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ICategoryService {
}
ICategoryService.ɵfac = function ICategoryService_Factory(t) { return new (t || ICategoryService)(); };
ICategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ICategoryService, factory: ICategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ICategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HO4u":
/*!************************************************!*\
  !*** ./src/app/_pipes/normalize-score.pipe.ts ***!
  \************************************************/
/*! exports provided: NormalizeScorePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalizeScorePipe", function() { return NormalizeScorePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NormalizeScorePipe {
    transform(card) {
        let totalScore = 0;
        card.ranks.forEach(rank => totalScore += rank.score);
        return totalScore;
    }
}
NormalizeScorePipe.ɵfac = function NormalizeScorePipe_Factory(t) { return new (t || NormalizeScorePipe)(); };
NormalizeScorePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "normalizeScore", type: NormalizeScorePipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NormalizeScorePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'normalizeScore', pure: false }]
    }], null, null); })();


/***/ }),

/***/ "RavM":
/*!****************************************************************!*\
  !*** ./src/app/user-rating-card/user-rating-card.component.ts ***!
  \****************************************************************/
/*! exports provided: UserRankCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRankCardComponent", function() { return UserRankCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_session_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-session-handler */ "fLXc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts-angular */ "kAVD");
/* harmony import */ var _pipes_normalize_score_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_pipes/normalize-score.pipe */ "HO4u");









function UserRankCardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRankCardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bonus_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bonus_r2.comment);
} }
class UserRankCardComponent {
    constructor(userSessionHandler) {
        this.userSessionHandler = userSessionHandler;
        this.listRules = [];
        this.categoryItem = null;
        this.ruleNames = [];
        this.scores = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartUpdateFlag = false;
        //onCardLoaded event
        this.cardLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onCardLoaded = this.cardLoaded.asObservable();
        this.chartOptions = {
            exporting: { buttons: { contextButton: { enabled: false } } },
            title: { text: null },
            tooltip: { enabled: false },
            credits: { enabled: false },
            yAxis: { visible: false, min: 0, max: 12, tickInterval: 1 },
            plotOptions: {
                bar: { dataLabels: { enabled: true } },
                series: { animation: false, dataLabels: { style: { textOutline: 'none' } } }
            },
            chart: {
                style: { fontFamily: "'Open Sans Condensed', sans-serif", fontSize: '16pt', fontWeight: 'bold' },
                type: 'bar',
                backgroundColor: 'transparent',
                // margin: 0,
                height: '210rem',
                width: 340 //TODO: add window size dependency: https://stackoverflow.com/questions/39888768/how-to-get-height-and-width-of-device-display-in-angular2-using-typescript
            },
            xAxis: {
                // minPadding: 0,
                // maxPadding: 0,
                title: { text: null },
                gridLineWidth: 0,
                categories: this.ruleNames,
                plotLines: [{ width: 0 }]
            },
            series: [{
                    borderRadius: 10,
                    pointWidth: 5,
                    showInLegend: false,
                    type: 'bar',
                    data: this.scores
                }]
        };
    }
    //this should ONLY trigger from the Home component
    //if I loaded this with the constructor or ngOnInit, it could cause a race condition with Home
    set cardInput(value) {
        this.dumbCard = value;
        this.categoryItem = this.userSessionHandler.getCategoryItem(value.categoryItemId);
        this.listRules = this.userSessionHandler.activeList.rules;
        this.listRules.forEach(rule => { this.ruleNames.push(rule.ruleName); });
        this.listRules.forEach(rule => {
            let linkedRank = value.ranks.find(rank => rank.code == rule.code);
            this.scores.push(linkedRank.score);
        });
        this.triggerCardLoaded(value);
    }
    triggerCardLoaded(event) { this.cardLoaded.next(event); }
    getName(code) { return this.listRules.find(x => x.code == code).ruleName; }
}
UserRankCardComponent.ɵfac = function UserRankCardComponent_Factory(t) { return new (t || UserRankCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_session_handler__WEBPACK_IMPORTED_MODULE_3__["UserSessionHandler"])); };
UserRankCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRankCardComponent, selectors: [["user-rating-card"]], inputs: { cardInput: "cardInput" }, decls: 20, vars: 12, consts: [[1, "card"], ["no-repeat", "", "center", "", 1, "thumb", 3, "src"], [1, "data-container"], ["type", "checkbox"], [1, "header"], [1, "title"], ["class", "stamp", 4, "ngIf"], [1, "score"], [1, "details"], ["class", "bonuses", 4, "ngFor", "ngForOf"], [1, "ranks"], [3, "Highcharts", "options", "update", "updateChange"], [1, "link"], ["src", "/assets/up-arrow.png", 1, "arrow"], [1, "gradient-fader-bottom"], [1, "stamp"], [1, "top10stamp"], [1, "bonuses"]], template: function UserRankCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserRankCardComponent_div_7_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "normalizeScore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "normalizeScore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserRankCardComponent_div_13_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "highcharts-chart", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateChange", function UserRankCardComponent_Template_highcharts_chart_updateChange_15_listener($event) { return ctx.chartUpdateFlag = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Show Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.categoryItem.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.categoryItem.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx.dumbCard) > 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, ctx.dumbCard));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dumbCard.bonusDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions)("update", ctx.chartUpdateFlag);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartComponent"]], pipes: [_pipes_normalize_score_pipe__WEBPACK_IMPORTED_MODULE_6__["NormalizeScorePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRankCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'user-rating-card', templateUrl: './user-rating-card.component.html' }]
    }], function () { return [{ type: _user_session_handler__WEBPACK_IMPORTED_MODULE_3__["UserSessionHandler"] }]; }, { cardInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "/de2");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "legal"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "user-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 0);
    } }, directives: [_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app-root', templateUrl: './app.component.html' }]
    }], null, null); })();


/***/ }),

/***/ "Uz0K":
/*!****************************************************!*\
  !*** ./src/app/_services/category-mock.service.ts ***!
  \****************************************************/
/*! exports provided: CategoryMockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryMockService", function() { return CategoryMockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class CategoryMockService {
    getCategory(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(CategoryMockService.mockCategory);
    }
}
//it is assumed that the User.RankCardList[activeList].categoryId will always point to only one "Category" Mongo document
//had dumb "this" issues, now it's static
CategoryMockService.mockCategory = {
    "categoryId": "#videogames",
    "items": [
        {
            "itemId": 0,
            "title": "Shadow of the Colossus",
            "thumb": "https://assets1.ignimgs.com/2017/11/01/shadow-of-the-colossus-button-01-1509569281609.jpg",
            "metadata": {
                "releaseDate": "DATEHERE",
                "platforms": ["PS2", "PS4"]
            }
        },
        {
            "itemId": 1,
            "title": "Child of Light",
            "thumb": "/assets/childoflight.png",
            "metadata": {
                "releaseDate": "DATEHERE",
                "platforms": ["PC", "PS4", "Switch"]
            }
        },
        {
            "itemId": 2,
            "title": "Golf Story",
            "thumb": "/assets/golfstory.jpg",
            "metadata": {}
        },
        {
            "itemId": 3,
            "title": "Horizon Zero Dawn",
            "thumb": "/assets/hzd.jpg",
            "metadata": {}
        },
        {
            "itemId": 4,
            "title": "STAR WARS Jedi: Fallen Order",
            "thumb": "/assets/jedif.jpg",
            "metadata": {}
        },
        {
            "itemId": 5,
            "title": "Outer Wilds",
            "thumb": "/assets/outerwilds.jpg",
            "metadata": {}
        },
        {
            "itemId": 6,
            "title": "Xenoblade Chronicles",
            "thumb": "/assets/xenoblade1.png",
            "metadata": {}
        },
        {
            "itemId": 7,
            "title": "Final Fantasy 7 Remake",
            "thumb": "/assets/ff7r.jpg",
            "metadata": {}
        }
    ]
};
CategoryMockService.ɵfac = function CategoryMockService_Factory(t) { return new (t || CategoryMockService)(); };
CategoryMockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryMockService, factory: CategoryMockService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryMockService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "VITL":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: IUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IUserService", function() { return IUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IUserService {
}
IUserService.ɵfac = function IUserService_Factory(t) { return new (t || IUserService)(); };
IUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IUserService, factory: IUserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "YClw":
/*!*************************************!*\
  !*** ./src/app/_model/rank-card.ts ***!
  \*************************************/
/*! exports provided: RankCard, Rank, BonusDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankCard", function() { return RankCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rank", function() { return Rank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusDetails", function() { return BonusDetails; });
class RankCard {
    constructor(categoryItemId = -1, ranks = [], bonusDetails = [], metadata = {}) {
        this.categoryItemId = categoryItemId;
        this.ranks = ranks;
        this.bonusDetails = bonusDetails;
        this.metadata = metadata;
    }
}
class Rank {
    constructor(code, score) {
        this.code = code;
        this.score = score;
    }
}
class BonusDetails {
    constructor(increment, comment) {
        this.increment = increment;
        this.comment = comment;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts-angular */ "kAVD");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "/de2");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _user_rating_card_user_rating_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-rating-card/user-rating-card.component */ "RavM");
/* harmony import */ var _add_item_add_rank_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-item/add-rank-card.component */ "vY0v");
/* harmony import */ var _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rating-input/rating-input.component */ "svh3");
/* harmony import */ var _user_session_handler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-session-handler */ "fLXc");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/user.service */ "VITL");
/* harmony import */ var _services_user_mock_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/user-mock.service */ "ANx9");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/category.service */ "AfT/");
/* harmony import */ var _services_category_mock_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_services/category-mock.service */ "Uz0K");
/* harmony import */ var _pipes_list_sort_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_pipes/list-sort.pipe */ "jDV8");
/* harmony import */ var _pipes_normalize_score_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_pipes/normalize-score.pipe */ "HO4u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "tyNb");






//COMPONENTS






//SERVICES





//PIPES







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _user_session_handler__WEBPACK_IMPORTED_MODULE_12__["UserSessionHandler"],
        { provide: _services_category_service__WEBPACK_IMPORTED_MODULE_15__["ICategoryService"], useClass: _services_category_mock_service__WEBPACK_IMPORTED_MODULE_16__["CategoryMockService"] },
        { provide: _services_user_service__WEBPACK_IMPORTED_MODULE_13__["IUserService"], useClass: _services_user_mock_service__WEBPACK_IMPORTED_MODULE_14__["UserMockService"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _user_rating_card_user_rating_card_component__WEBPACK_IMPORTED_MODULE_9__["UserRankCardComponent"],
        _add_item_add_rank_card_component__WEBPACK_IMPORTED_MODULE_10__["AddRankCardComponent"],
        _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_11__["RatingInputComponent"],
        _pipes_list_sort_pipe__WEBPACK_IMPORTED_MODULE_17__["ListSortPipe"],
        _pipes_normalize_score_pipe__WEBPACK_IMPORTED_MODULE_18__["NormalizeScorePipe"],
        _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _user_rating_card_user_rating_card_component__WEBPACK_IMPORTED_MODULE_9__["UserRankCardComponent"],
                    _add_item_add_rank_card_component__WEBPACK_IMPORTED_MODULE_10__["AddRankCardComponent"],
                    _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_11__["RatingInputComponent"],
                    _pipes_list_sort_pipe__WEBPACK_IMPORTED_MODULE_17__["ListSortPipe"],
                    _pipes_normalize_score_pipe__WEBPACK_IMPORTED_MODULE_18__["NormalizeScorePipe"],
                    _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartModule"]
                ],
                providers: [
                    _user_session_handler__WEBPACK_IMPORTED_MODULE_12__["UserSessionHandler"],
                    { provide: _services_category_service__WEBPACK_IMPORTED_MODULE_15__["ICategoryService"], useClass: _services_category_mock_service__WEBPACK_IMPORTED_MODULE_16__["CategoryMockService"] },
                    { provide: _services_user_service__WEBPACK_IMPORTED_MODULE_13__["IUserService"], useClass: _services_user_mock_service__WEBPACK_IMPORTED_MODULE_14__["UserMockService"] },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartComponent"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
    _user_rating_card_user_rating_card_component__WEBPACK_IMPORTED_MODULE_9__["UserRankCardComponent"],
    _add_item_add_rank_card_component__WEBPACK_IMPORTED_MODULE_10__["AddRankCardComponent"],
    _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_11__["RatingInputComponent"],
    _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["KeyValuePipe"], _pipes_list_sort_pipe__WEBPACK_IMPORTED_MODULE_17__["ListSortPipe"],
    _pipes_normalize_score_pipe__WEBPACK_IMPORTED_MODULE_18__["NormalizeScorePipe"]]);


/***/ }),

/***/ "aDtp":
/*!************************************!*\
  !*** ./src/app/_model/category.ts ***!
  \************************************/
/*! exports provided: Category, CategoryItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItem", function() { return CategoryItem; });
class Category {
}
class CategoryItem {
    constructor() {
        this.itemId = -1; //directly associated with a Rank Card, should be a 1-to-1 relationship
        this.title = 'TITLE'; //when a RankCard is added, this is the value used to determine if corresponding CategoryItem also needs to be added
        this.metadata = {}; //basically anything, who knows!
        this.thumb = 'https://vgboxart.com/boxes/PS2/27126-gamestop-insert.jpg'; //URL of the image used in the view model 
        //TODO: find a googling API that gets this, based on CategoryItem.title
    }
}


/***/ }),

/***/ "fLXc":
/*!*****************************************!*\
  !*** ./src/app/user-session-handler.ts ***!
  \*****************************************/
/*! exports provided: SessionVariables, UserSessionHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionVariables", function() { return SessionVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSessionHandler", function() { return UserSessionHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/user.service */ "VITL");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/category.service */ "AfT/");





var SessionVariables;
(function (SessionVariables) {
    SessionVariables["ActiveUser"] = "ActiveUser";
    SessionVariables["ActiveCategory"] = "ActiveCategory";
})(SessionVariables || (SessionVariables = {}));
/********************** This is ultimately where all the data magic happens ************************/
//I tried using inheritance, by creating a base class to give the User services a connection to the Session store,
//but the engineering got really messy, so I just made one single handler that does all the web requests.
//I couldn't feel at peace giving the implementers control over the Session store, in fear the logic would be duplicated,
//or worse, the implementers could behave with it differently. I wanted a base class that takes care of those boilerplate tasks.
//Any dependency injection is reflected in UserSessionHandler's constructor. EVERYTHING goes through this UserSessionHandler.
//That could be bad, but who knows!
//I also realize there's no point returning Observable<any> to invokers.
//All those invokers naturally subscribe to onSessionLoaded in their constructors
//TODO: needs a refresh/session token?
//TODO: might need a global logger that broadcasts error messages
class UserSessionHandler {
    constructor(userDataService, categoryDataService) {
        this.userDataService = userDataService;
        this.categoryDataService = categoryDataService;
        //UserProfile should be the only one listening
        this.sessionLoadedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onSessionLoaded = this.sessionLoadedEvent.asObservable();
        //these are essentially short-hand queries that get annoying to read
        this.getCategoryItem = (categoryItemId) => this.sessionCategory.items.find(x => x.itemId == categoryItemId);
        this.getRule = (ruleCode) => this.activeList.rules.find(r => r.code == ruleCode);
        this.getCard = (categoryItemId) => this.activeList.rankCards.find(c => c.categoryItemId == categoryItemId);
        this.getCardRank = (categoryItemId, ruleCode) => this.getCard(categoryItemId).ranks.find(r => r.code == ruleCode);
        this.refreshCurrentSessionUser = () => this.initializeSessionUser(this.sessionUser.userId);
    }
    triggerSessionLoaded(event) { this.sessionLoadedEvent.next(event); }
    /************ Always invoke this in OnInit of the main user container! *************/
    initializeSessionUser(id, changedActiveListId) {
        //make a clean data pull, don't want any concurrency issues
        sessionStorage.clear();
        //get the user
        this.userDataService.getUser(id).subscribe(userResult => {
            if (changedActiveListId) { //if user wants to switch lists, send update to database then login again (HAS NOT BEEN TESTED)
                userResult.config.lastActiveListId = changedActiveListId;
                this.userDataService.updateUser(userResult).subscribe(() => this.initializeSessionUser(id));
            }
            else { //this is the general case
                sessionStorage.setItem(SessionVariables.ActiveUser, JSON.stringify(userResult));
                //get the category associated with user.config.lastActiveListId
                this.categoryDataService.getCategory(this.activeList.categoryId).subscribe(categoryResult => {
                    console.log('getCategory after mockLoginNewUser');
                    console.log(categoryResult);
                    sessionStorage.setItem(SessionVariables.ActiveCategory, JSON.stringify(categoryResult));
                    this.triggerSessionLoaded(userResult);
                });
            }
        });
    }
    //wrappers for sessionStorage
    get sessionUser() { return JSON.parse(sessionStorage.getItem(SessionVariables.ActiveUser)); }
    get sessionCategory() { return JSON.parse(sessionStorage.getItem(SessionVariables.ActiveCategory)); }
    get activeList() { return this.sessionUser.rankCardLists.find(l => l.listId == this.sessionUser.config.lastActiveListId); }
    updateThenGetUser(card) {
        var user = this.sessionUser;
        user.rankCardLists.find(l => l.listId == this.activeList.listId).rankCards.push(card);
        return user;
    }
    //caller is responsible for tracking new category item details
    //if there is no new categoryItem, we assume there's already a match
    addRankCardForSessionUser(card, categoryItem) {
        //send the RankCard to the database, then refresh the user session data
        const newUserData = this.updateThenGetUser(card);
        console.log('PREupdateResult:');
        console.log(card);
        if (categoryItem)
            this.userDataService.addLinkedRankCard(card, categoryItem, this.sessionUser, this.sessionCategory).subscribe(updateResult => {
                console.log('updateResult:');
                console.log(updateResult);
                this.refreshCurrentSessionUser();
            });
        else
            this.userDataService.updateUser(newUserData).subscribe(updateResult => {
                console.log('updateResult:');
                console.log(updateResult);
                this.refreshCurrentSessionUser();
            });
    }
}
UserSessionHandler.ɵfac = function UserSessionHandler_Factory(t) { return new (t || UserSessionHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["IUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_category_service__WEBPACK_IMPORTED_MODULE_3__["ICategoryService"])); };
UserSessionHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserSessionHandler, factory: UserSessionHandler.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSessionHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["IUserService"] }, { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["ICategoryService"] }]; }, null); })();


/***/ }),

/***/ "jDV8":
/*!******************************************!*\
  !*** ./src/app/_pipes/list-sort.pipe.ts ***!
  \******************************************/
/*! exports provided: ListSortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSortPipe", function() { return ListSortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ListSortPipe {
    transform(array, field) {
        if (!Array.isArray(array))
            return;
        array.sort((a, b) => {
            if (a[field] < b[field])
                return -1;
            else if (a[field] > b[field])
                return 1;
            else
                return 0;
        });
        return array;
    }
}
ListSortPipe.ɵfac = function ListSortPipe_Factory(t) { return new (t || ListSortPipe)(); };
ListSortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "listSort", type: ListSortPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListSortPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'listSort', pure: false }]
    }], null, null); })();


/***/ }),

/***/ "svh3":
/*!********************************************************!*\
  !*** ./src/app/rating-input/rating-input.component.ts ***!
  \********************************************************/
/*! exports provided: RatingInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingInputComponent", function() { return RatingInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");




class RatingInputComponent {
    constructor() {
        this.onSelectedRating = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.status = [];
    }
    select(value) {
        this.status = [
            false, false, false, false, false,
            false, false, false, false, false, false
        ];
        this.status[value] = true;
        this.onSelectedRating.emit(value);
    }
}
RatingInputComponent.ɵfac = function RatingInputComponent_Factory(t) { return new (t || RatingInputComponent)(); };
RatingInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingInputComponent, selectors: [["rating-input"]], outputs: { onSelectedRating: "onSelectedRating" }, decls: 23, vars: 11, consts: [[1, "rating-selector"], [3, "ngClass", "click"]], template: function RatingInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_Template_div_click_1_listener() { return ctx.select(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_Template_div_click_3_listener() { return ctx.select(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_Template_div_click_5_listener() { return ctx.select(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_Template_div_click_7_listener() { return ctx.select(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_Template_div_click_9_listener() { return ctx.select(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_Template_div_click_11_listener() { return ctx.select(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_Template_div_click_13_listener() { return ctx.select(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_Template_div_click_15_listener() { return ctx.select(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_Template_div_click_17_listener() { return ctx.select(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_Template_div_click_19_listener() { return ctx.select(9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_Template_div_click_21_listener() { return ctx.select(10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status[0] ? "selected" : "unselected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status[1] ? "selected" : "unselected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status[2] ? "selected" : "unselected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status[3] ? "selected" : "unselected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status[4] ? "selected" : "unselected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status[5] ? "selected" : "unselected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status[6] ? "selected" : "unselected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status[7] ? "selected" : "unselected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status[8] ? "selected" : "unselected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status[9] ? "selected" : "unselected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status[10] ? "selected" : "unselected");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'rating-input', templateUrl: './rating-input.component.html' }]
    }], null, { onSelectedRating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vY0v":
/*!*****************************************************!*\
  !*** ./src/app/add-item/add-rank-card.component.ts ***!
  \*****************************************************/
/*! exports provided: AddRankCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRankCardComponent", function() { return AddRankCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_rank_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/rank-card */ "YClw");
/* harmony import */ var _model_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_model/category */ "aDtp");
/* harmony import */ var _user_session_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-session-handler */ "fLXc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rating-input/rating-input.component */ "svh3");









function AddRankCardComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "rating-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectedRating", function AddRankCardComponent_div_18_Template_rating_input_onSelectedRating_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const rank_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectRankScore(rank_r2.code, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rank_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getRuleName(rank_r2.code));
} }
function AddRankCardComponent_input_22_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddRankCardComponent_input_22_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const bonus_r5 = ctx.$implicit; return bonus_r5.comment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bonus_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", bonus_r5.comment);
} }
class AddRankCardComponent {
    constructor(userSessionHandler) {
        this.userSessionHandler = userSessionHandler;
        this.onAddItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.show = false;
        this.newCategoryItem = new _model_category__WEBPACK_IMPORTED_MODULE_2__["CategoryItem"](); //TODO: need to add categoryItem matching eventually
        this.newRankCardToPush = new _model_rank_card__WEBPACK_IMPORTED_MODULE_1__["RankCard"]();
        //i guess we want a max 3 bonuses constraint?
        this.emptyBonuses = [
            { increment: 1, comment: 'COMMENT HERE' },
            { increment: 1, comment: 'COMMENT HERE' },
            { increment: 1, comment: 'COMMENT HERE' },
        ];
        userSessionHandler.onSessionLoaded.subscribe(() => this.ngOnInit());
    }
    ngOnInit() {
        this.show = false;
        this.activeListTitle = this.userSessionHandler.activeList.title;
        this.newRankCardToPush.bonusDetails = this.emptyBonuses;
        this.rules = this.userSessionHandler.activeList.rules;
        this.rules.forEach(x => {
            this.newRankCardToPush.ranks.push(new _model_rank_card__WEBPACK_IMPORTED_MODULE_1__["Rank"](x.code, 0));
        });
    }
    selectRankScore(ruleCode, score) { this.newRankCardToPush.ranks.find(r => r.code == ruleCode).score = score; }
    getRuleName(ruleCode) { return this.rules.find(r => r.code == ruleCode).ruleName; }
    clearBoxArt() { this.newCategoryItem.thumb = ''; }
    submit() {
        this.userSessionHandler.addRankCardForSessionUser(this.newRankCardToPush, this.newCategoryItem);
        this.onAddItem.emit();
    }
}
AddRankCardComponent.ɵfac = function AddRankCardComponent_Factory(t) { return new (t || AddRankCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_session_handler__WEBPACK_IMPORTED_MODULE_3__["UserSessionHandler"])); };
AddRankCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddRankCardComponent, selectors: [["add-rank-card"]], outputs: { onAddItem: "onAddItem" }, decls: 25, vars: 7, consts: [["type", "checkbox", 1, "enable", 3, "checked", "change"], [1, "active-list"], [1, "form-container"], [1, "header"], [1, "field"], ["type", "text", 3, "ngModel", "ngModelChange"], ["type", "text", "alt", "Image will appear here if URL works", 1, "select-allowed", 3, "ngModel", "ngModelChange"], ["type", "button", "value", "Clear", 3, "click"], ["no-repeat", "", "center", "", 1, "thumb", 3, "src"], ["class", "field", 4, "ngFor", "ngForOf"], ["type", "text", 3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], ["type", "button", "value", "Add To List!", 1, "submit", 3, "click"], [3, "onSelectedRating"]], template: function AddRankCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddRankCardComponent_Template_input_change_0_listener() { return ctx.show = !ctx.show; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Find a Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddRankCardComponent_Template_input_ngModelChange_9_listener($event) { return ctx.newCategoryItem.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Box Art URL (jpg, png, whatevs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddRankCardComponent_Template_input_ngModelChange_13_listener($event) { return ctx.newCategoryItem.thumb = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddRankCardComponent_Template_input_click_14_listener() { return ctx.clearBoxArt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Rate the Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddRankCardComponent_div_18_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bonuses and Reductions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddRankCardComponent_input_22_Template, 1, 1, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddRankCardComponent_Template_input_click_24_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Adding to list: \"", ctx.activeListTitle, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newCategoryItem.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newCategoryItem.thumb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.newCategoryItem.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newRankCardToPush.ranks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newRankCardToPush.bonusDetails);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_6__["RatingInputComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddRankCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'add-rank-card', templateUrl: './add-rank-card.component.html' }]
    }], function () { return [{ type: _user_session_handler__WEBPACK_IMPORTED_MODULE_3__["UserSessionHandler"] }]; }, { onAddItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map