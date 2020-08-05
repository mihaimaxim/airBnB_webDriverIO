let assert = require('assert');
let Page = require('../pageobjects/page');

let todayNextWeek = new Date().getDate() + 7;
let todayInTwoWeeks = new Date().getDate() + 14;

describe('airBnb page', () => {
   it('should have the right title', () => {
      Page.prototype.open();
      browser.maximizeWindow();
      expect(browser).toHaveTitle(
         'Vacation Rentals, Homes, Experiences & Places - Airbnb'
      );
      browser.pause(3000);
   });

   it('should find the search input', () => {
      let searchInput = $('#bigsearch-query-detached-query');
      searchInput.click();
      browser.pause(1000);
   });

   it('should type in Rome, Italy', () => {
      let searchInput = $('#bigsearch-query-detached-query');
      searchInput.addValue('Rome, Italy');

      let value = searchInput.getValue();
      assert(value === 'Rome, Italy');

      browser.keys(['Meta', 'Enter']);
      browser.pause(1000);
   });

   it('should pick the dates', () => {
      let first = $(`._f8btejl=${todayNextWeek}`);
      first.click();
      browser.pause(1000);

      let second = $(`._f8btejl=${todayInTwoWeeks}`);
      second.click();
      browser.pause(1000);
   });

   it('should pick guests', () => {
      let guestsButton = $('._uh2dzp=Add guests');
      guestsButton.click();
      browser.pause(1000);

      let addAdults = $('//*[@id="stepper-adults"]/button[2]/span');
      for (let i = 0; i < 2; i++) {
         addAdults.click();
      }
      browser.pause(1000);

      let addKid = $('//*[@id="stepper-children"]/button[2]/span');
      addKid.click();
      browser.pause(1000);
   });

   it('should show results', () => {
      let searchButton = $('button._1mzhry13');
      searchButton.click();
      browser.pause(5000);
   });

   it('should filter results', () => {
      browser.switchWindow('Metropolitan City of Rome · Stays · Airbnb');
      expect(browser).toHaveTitle('Metropolitan City of Rome · Stays · Airbnb');
      browser.pause(1000);

      let moreFilters = $('._w37zq5=More filters');
      moreFilters.click();
      browser.pause(1000);

      let addBedrooms = $(
         '//*[@id="filterItem-stepper-min_bedrooms-0"]/button[2]/span'
      );
      for (let i = 0; i < 5; i++) {
         addBedrooms.click();
      }
      browser.pause(2000);

      let pool = $('._py3ty1=Pool');
      pool.scrollIntoView({ behavior: 'smooth', block: 'center' });
      browser.pause(1000);

      let poolChecker = $(
         '/html/body/div[11]/section/div/div/div[2]/div[6]/div/div/div[4]/label/span[1]/span'
      );
      poolChecker.click();
      browser.pause(1000);

      let smoking = $('._py3ty1=Smoking allowed');
      smoking.scrollIntoView({ behavior: 'smooth', block: 'center' });
      browser.pause(1000);

      let smokingChecker = $(
         '/html/body/div[11]/section/div/div/div[2]/div[9]/div/div/div[2]/label/span[1]/span'
      );
      smokingChecker.click();
      browser.pause(1000);

      let showStays = $(
         'body > div:nth-child(22) > section > div > div > footer > button'
      );
      showStays.click();
      browser.pause(5000);
   });

   it('should scroll through listed props', () => {
      let secondProp = $('div._8ssblpx:nth-child(2)');
      secondProp.scrollIntoView({ behavior: 'smooth', block: 'center' });
      browser.pause(2000);

      let thirdProp = $('div._8ssblpx:nth-child(3)');
      thirdProp.scrollIntoView({ behavior: 'smooth', block: 'center' });
      browser.pause(2000);

      // let fourthProp = $('div._8ssblpx:nth-child(4)');
      // fourthProp.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // browser.pause(2000);

      let firstProp = $('div._8ssblpx:nth-child(1)');
      firstProp.scrollIntoView({ behavior: 'smooth', block: 'center' });
      browser.pause(2000);
   });

   it('should see first prop details', () => {
      let firstProp = $('div._8ssblpx:nth-child(1)');
      let firstPropTitle = $('div._1c2n35az');
      let firstPropTitleValue = firstPropTitle.getText();
      firstProp.click();
      browser.pause(5000);
      browser.switchWindow(`${firstPropTitleValue}`);

      let amenitiesZone = $('div._1byskwn');
      amenitiesZone.scrollIntoView({ behavior: 'smooth', block: 'center' });
      browser.pause(2000);

      let amenitiesButton = $('a._13e0raay');
      amenitiesButton.click();
      browser.pause(5000);

      // browser.debug();
   });

   it('should check for that pool being present', () => {
      let pool = $('div._aujnou:nth-child(2)');
      pool.scrollIntoView({ behavior: 'smooth', block: 'center' });
      browser.pause(3000);

      let closeWindow = $('div._zpjce3');
      closeWindow.click();
      browser.pause(3000);
   });

   it('should go for a reservation', () => {
      let reserve = $('button._1ot1we5p');
      reserve.click();

      let closeWindow = $('div._zpjce3');
      closeWindow.click();
      browser.pause(5000);
   });

   it('should go back to all props', () => {
      browser.switchWindow('Metropolitan City of Rome · Stays · Airbnb');
      browser.pause(10000);
   });
});
