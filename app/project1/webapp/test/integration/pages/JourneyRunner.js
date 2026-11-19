sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project1/test/integration/pages/StudentList.gen",
	"project1/test/integration/pages/StudentObjectPage.gen"
], function (JourneyRunner, StudentListGenerated, StudentObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1') + '/test/flp.html#app-preview',
        pages: {
			onTheStudentListGenerated: StudentListGenerated,
			onTheStudentObjectPageGenerated: StudentObjectPageGenerated
        },
        async: true
    });

    return runner;
});

