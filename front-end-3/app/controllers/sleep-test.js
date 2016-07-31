(function() {
  'use strict';

  var controllerId = 'SleepTestCtrl';
  angular.module('app').controller(controllerId, ['$scope', formsController]);

  function formsController($scope) {
    $scope.content = content;
  }

  var content = {
    headerTitle: 'Home Sleep Test',
    description1: 'Have you had someone tell you that you snore? Has your snoring ever bothered other people? When you are awake do you often feel tired or fatigued? If so you might be one of millions of Americans with undiagnosed sleep apnea.',
    title2: 'The only way to know for sure is through a sleep test',
    description2: 'Good Night Medical is dedicated to making the home sleep test process as simple as possible for patients so we are partnering with home sleep test specialists. The test will be delivered right to your door with easy step-by-step instruction.',
    title3: 'Make the first step in dramatically increasing your health! Follow the steps below to get started!',
    description3: 'Three Simple Steps to a Better Sleeping You:',
    steps: [{
      imgUrl: 'step1.png',
      title: '1. Enter your email below to get the Home Sleep Test Form sent to your email.',
      description: 'We will we send you a PDF to your email. If you do not have an email address please call and ask for a Home Sleep Test Order form to be mailed to you.'
    }, {
      imgUrl: 'step2.png',
      title: '2. Print the form and take it to your primary physician to get approved for a Sleep Test.',
      description: 'Fill out the patient information section either electronically or once printed. The rest of the form will be completed by your doctor. Be sure to get the signature at the bottom!'
    }, {
      imgUrl: 'step3.png',
      title: '3. Receive your simple sleep test device in the mail, wear it, then send it back to receive your results!',
      description: 'We will send you a home sleep test that you will wear for three nights. A home sleep test specialist will call you throughout your test to see if you need any assistance. Once you send it back, a Good Night Medical representative will call and get you started on your journey to sleeping better.'
    }],
    footerTitle: 'Think you might be at risk but not sure?',
    footerDescription: 'Take our online Screening Test here!'
  };

})();
