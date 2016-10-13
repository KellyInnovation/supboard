import angular from 'angular';
import 'angular-resource';

import supsPageComponent from './sups-page.component';
import supsItemComponent from './sups-item.component';
import supsEditComponent from './sups-edit.component';

import supsAPIService from './sups-api.service';

const SupsModule = angular.module('sups', [
	'ngResource',
])
	.factory('supsAPIService', supsAPIService)
	.component('supsPage', supsPageComponent)
	.component('supsItem', supsItemComponent)
	.component('supsEdit', supsEditComponent);

export default SupsModule;