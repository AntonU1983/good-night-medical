var app = angular.module('app', ['ui.router']);

// app.controller('Ctrl', function(){
//   // Some logic...
// });

var refCpap = {
  rentProgram: "Refurbished CPAP",
  imgUrl: "resmed-s9-auto-cpap.jpg",
  everyText: "starts at",
  shipsText: "per month",
  priceDollars: "29",
  programTitle: "Refurbished CPAP",
  programDesc1: "Email/Fax your valid sleep study and prescription to info@goodnightmedical.com and make sure to specify you are interested in a Refurbished CPAP rental",
  programDesc2: "A dedicated service team member will contact you by phone or email to complete the order",
  programDesc3: "Check your porch! Your CPAP machine with tubing and filter will be delivered to your door",
  howItWorks: "After your completed order of a rental machine through Good Night Medical, we will send your sanitized machine with tubing and filter. Refurbished machines must be rented for a minimum of one (1) month. There is a one-time Set Up charge equal to the monthly fee to retrieve the initial physician order to set up the unit and confirm the validity of the prescription. This fee will be waived if you supply a copy of your sleep study and a scan/photo of your valid, up-to-date presription. If for any reason we cannot provide you with a machine, Good Night Medical will issue a full refund equivalent to the initial fee paid.",
  textBlockOne: true,
  textBlockOneTitleBool: true,
  textBlockOneTitle: "ONLY FOR REFURBISHD:",
  textBlockOneDesc: "Good Knight Guarantee: If somehow your machine breaks down, we will replace the unit with the same or comparable unit."
};
var newCpap = {
  rentProgram: "New CPAP",
  imgUrl: "resmed-s10-airsense-auto.jpg",
  everyText: "starts at",
  shipsText: "per month",
  priceDollars: "49",
  programTitle: "New CPAP",
  programDesc1: "Email/Fax your valid sleep study and prescription to info@goodnightmedical.com and make sure to specify you are interested in a New CPAP rental",
  programDesc2: "A dedicated service team member will contact you by phone or email to complete the order",
  programDesc3: "Check your porch! Your CPAP machine with tubing and filter will be delivered to your door",
  howItWorks: "After your completed order of a rental machine through Good Night Medical, we will send your new machine with tubing and filter. New machines must be rented for a minimum of eight (8) months. There is a one-time set up charge equal to the monthly fee to retrieve the initial physician order to set up the unit and confirm the validity of the prescription. This fee is waived if you are a current customer of Good Night Medical. If for any reason we cannot provide you with a machine, Good Night Medical will issue a full refund equivalent to the initial monthly fee paid. Good Night Medical also offers unlimited telephone support during the life of your rental.",
  textBlockOne: true,
  textBlockOneTitleBool: false,
  textBlockOneTitle: "",
  textBlockOneDesc: "*The rental amount will be charged until the rental program is returned or purchased. During your rental period, you may purchase the unit from us at any time. If the unit is damaged or lost due to your negligence, you will be obligated to purchase the unit. You may alternately choose to return the damaged machine to us, and for $75 we will diagnose and quote the repair. After the quote, the up-front $75 fee can be applied towards the cost of the  repair, the rental of a different unit, or the purchase of another unit."
};

var newBipap = {
  rentProgram: "New BiPAP",
  imgUrl: "philips-respironics-dreamstation-bipap.jpg",
  everyText: "priced at",
  shipsText: "per month",
  priceDollars: "79",
  programTitle: "BiPAP",
  programDesc1: "Email/Fax your valid sleep study and prescription to info@goodnightmedical.com and make sure to specify you are interested in a BiPAP rental",
  programDesc2: "A dedicated service team member will contact you by phone or email to complete the order",
  programDesc3: "Check your porch! Your CPAP machine with tubing and filter will be delivered to your door",
  howItWorks: "After your completed order of a rental machine through Good Night Medical, we will send your new machine with tubing and filter. New machines must be rented for a minimum of eight (8) months. There is a one-time set up charge equal to the monthly fee to retrieve the initial physician order to set up the unit and confirm the validity of the prescription. This fee is waived if you are a current customer of Good Night Medical. If for any reason we cannot provide you with a machine, Good Night Medical will issue a full refund equivalent to the initial monthly fee paid. Good Night Medical also offers unlimited telephone support during the life of your rental.",
  textBlockOne: true,
  textBlockOneTitleBool: false,
  textBlockOneTitle: "",
  textBlockOneDesc: "*The rental amount will be charged until the rental program is returned or purchased. During your rental period, you may purchase the unit from us at any time. If the unit is damaged or lost due to your negligence, you will be obligated to purchase the unit. You may alternately choose to return the damaged machine to us, and for $75 we will diagnose and quote the repair. After the quote, the up-front $75 fee can be applied towards the cost of the repair, the rental of a different unit, or the purchase of another unit."
};
