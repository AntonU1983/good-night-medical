(function() {
  'use strict';

  var controllerId = 'ReSupplyCtrl';
  angular.module('app').controller(controllerId, ['$scope', formsController]);

  function formsController($scope) {
    $scope.offerTitle = offerTitle;
    $scope.offerLine1 = offerLine1;
    $scope.offerLine2 = offerLine2;
    $scope.offerLine3 = offerLine3;

    $scope.inBoxTitle = inBoxTitle;
    $scope.inBoxMsg1 = inBoxMsg1;
    $scope.inBoxMsg2 = inBoxMsg2;
    $scope.inBoxListTitle1 = inBoxListTitle1;
    $scope.inBoxListTitle2 = inBoxListTitle2;
    $scope.inBoxListData = inBoxListData;

    $scope.testText1 = testText1;
    $scope.testText2 = testText2;
    $scope.testLink = testLink;
  }

  var offerTitle = 'CPAP Automatic Re-Supply - Supplies Every 3 Month';
  var offerLine1 = 'new cpap';
  var offerLine2 = 'supplies';
  var offerLine3 = 'delivered to your door!';

  var inBoxTitle = 'what’s in the box?';
  var inBoxMsg1 = 'Most insurance covers new supplies every 3 months, so all you need to pay is the co-pay every 90 days (or as your insurance allows)';
  var inBoxMsg2 = 'We’ll contact you via phone or email 7-10 business days before your order ships to let you know your supplies are coming.';
  var inBoxListTitle1 = 'Each Auto Re-Supply';
  var inBoxListTitle2 = 'Box includes:';
  var inBoxListData = [
    'Cushions/Pillows',
    'Tube',
    'Disposable Filters',
    'Reusable Filter',
    'Mask',
    'Chin Strap'
  ];

  var testText1 = 'Not sure if you have Sleep Apnea?';
  var testText2 = 'to learn more about how you can get a Home Sleep Test!';
  var testLink = 'Click here';

})();
