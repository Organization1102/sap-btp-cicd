/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"kupitflexiblewf/docmanage/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
