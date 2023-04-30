import spotSearchPO from '../provider/spot/spotSearchPO.js';
import spotDetailPO from '../provider/spot/spotDetailPO.js';

describe('/tap-automation-tests/qcVendor/qcVendorSpot', () => {
    /*
	 * We keep all of our variables on separate lines for convenient reading
	 * For convenience, it is also best to alphabetize them with $ items first
	 * These will be values we use through the spec file
	 * */
    const page = new spotSearchPO();
    const detailPage = new spotDetailPO();
    const adminUser = Cypress.env('adminUser');
    const adminPassword = Cypress.env('adminPassword');
    const qcVendorUser = Cypress.env('qcVendorUser');
    const qcVendorPassword = Cypress.env('qcVendorPassword');

    beforeEach('log in as adminUser', () => {
        // Before Every test, navigate to the page we are testing anew
        cy.visit('/cad/login');
        cy.login(adminUser, adminPassword);
        page.leftNavSpot().should('be.visible');
        page.leftNavSpot().click();

        // switch to QC_VENDOR for testing.
        cy.switchAccount(Cypress.env('qcVendorUser'));
        page.leftNavSpot().click();
    });

    /*
	 * We have two main describe blocks that contain tests for different aspects
	 * of the page we're testing
	 * */

    /*
	 * The first describe block is specifically for testing the layout of the page
	 * and ensuring that it looks the way we expect
	 * */
    describe('Page Structure', () => {
        it('should navigate to the spots page', () => {
            cy.url().should('contain', '/cad/spots/list');
        });

        it('should contain the correct elements', () => {
            // Ensure all the page elements exist
            // left nav Spot
            page.leftNavSpot().should('be.visible');

            // Search params - text inputs
            page.titleLabel().should('be.visible');
            page.titleValue().should('be.visible');
            page.isciLabel().should('be.visible');
            page.isciValue().should('be.visible');
            page.orderLabel().should('be.visible');
            page.orderValue().should('be.visible');
            page.descriptionLabel().should('be.visible');
            page.descriptionValue().should('be.visible');
            page.durationLabel().should('be.visible');
            page.durationValue().should('be.visible');

            // Search params - drop-downs
            page.formatLabel().should('be.visible');
            page.formatValue().should('be.visible');
            page.promoLabel().should('be.visible');
            page.promoValue().should('be.visible');

            // search params - date picker
            page.createdLabel().should('be.visible');
            page.createdValue().should('be.visible');
            page.updatedLabel().should('be.visible');
            page.updatedValue().should('be.visible');
            page.validLabel().should('be.visible');
            page.validValue().should('be.visible');

            // search params - checkboxes
            page.includeArchivesLabel().should('be.visible');
            page.includeArchivesCheckbox().should('be.visible');

            // buttons
            page.resetButton().should('be.visible');
            page.searchButton().should('be.visible');

            // List view Headers
            page.thumbnailHeader().should('be.visible');
            page.brandHeader().should('be.visible');
            page.isciHeader().should('be.visible');
            page.titleHeader().should('be.visible');
            page.statusHeader().should('be.visible');
            page.durationsHeader().should('be.visible');
            //page.createdHeader().should('be.visible');


            // results
            page.firstSpot().should('be.visible');
            page.firstSpotNumber().should('be.visible');
        });
    });

    /*
	 * The second describe block is specifically for testing that functionality
	 * of the page works as intended
	 * */
    describe('Page Functionality', () =>  {
        it('search fields should be empty', () => {
            page.titleValue().should('have.value','');
            page.isciValue().should('have.value','');
            page.formatValue().should('have.value','');
            page.orderValue().should('have.value','');
            page.descriptionValue().should('have.value','');
            page.promoValue().should('have.value','');
            page.durationValue().should('have.value','');
            page.createdValue().should('have.value','');
            page.validValue().should('have.value','');
        });

        it('should be able to input text and reset fields', () => {
            // Text Input
            page.titleValue().type('testtitle');
            page.titleValue().should('have.value','testtitle');

            page.isciValue().type('testisci');
            page.isciValue().should('have.value','testisci');

            page.orderValue().type('123');
            page.orderValue().should('have.value','123');

            page.descriptionValue().type('testdescription');
            page.descriptionValue().should('have.value','testdescription');

            page.durationValue().type('123');
            page.durationValue().should('have.value','123');

            page.clearQCSearchCriteria();
        });

        it('should discard dashes and underscores entered in isci search field', () => {
            // enter an isci with dashes and underscores
            page.isciValue().type('-_TE-_MPISCI-_');

            // validate that dashes and underscores are discarded
            page.isciValue().should('have.value','TEMPISCI');
        });

        it('should be able to click drop-down values and reset', () => {
            // drop-downs
            page.formatValue().click();
            page.formatSD().should('be.visible');
            page.formatHD().should('be.visible');
            page.formatRadio().should('be.visible');
            page.formatNone().should('exist');
            page.formatSD().click();
            page.formatValue().should('contain','SD');

            page.promoValue().click();
            page.promoOnly().should('be.visible');
            page.promoNon().should('be.visible');
            page.promoNone().should('be.visible');
            page.promoOnly().click();
            page.promoValue().should('contain','Promos Only');

            page.clearQCSearchCriteria();
        });

        it('should be able to open created calendar date selectors', () => {
            // date picker - created
            page.createdValue().click();
            page.createdFromValue().should('be.visible');
            page.createdToValue().should('be.visible');
            page.fromCalendarButton().click();
            page.calendarModal().should('be.visible');
            page.calendarModal().click();
            page.toCalendarButton().click();
            page.calendarModal().should('be.visible');
        });

        it('should be able to open updated calendar date selectors', () => {
            // date picker - created
            page.updatedValue().click();
            page.updatedFromValue().should('be.visible');
            page.updatedToValue().should('be.visible');
            page.fromCalendarButton().click();
            page.calendarModal().should('be.visible');
            page.calendarModal().click();
            page.toCalendarButton().click();
            page.calendarModal().should('be.visible');
        });

        it('should be able to open valid calendar date selectors', () => {
            // date picker - created
            page.validValue().click();
            page.validFromValue().should('be.visible');
            page.validToValue().should('be.visible');
            page.fromCalendarButton().click();
            page.calendarModal().should('be.visible');
            page.calendarModal().click();
            page.toCalendarButton().click();
            page.calendarModal().should('be.visible');
        });

        it('should be able to check and uncheck boxes', () => {
            // checkboxes
            // check default state
            page.includeArchivesCheckbox().should('have.attr', 'aria-checked', 'false');
            // select checkbox
            page.includeArchivesCheckbox().click();
            // verify it's new state
            page.includeArchivesCheckbox().should('have.attr', 'aria-checked', 'true');

            page.clearQCSearchCriteria();
        });

        it('should be able to search by ISCI', () => {
            page.searchByIsci('AUTOQC001');
            page.validateFirstSpot();
            page.firstIsci().should('have.attr', 'title','AUTOQC001');
        });

        it('should be able to search by title', () => {
            page.searchByTitle('autoQC001');
            page.validateFirstSpot();
            page.firstTitleQC().should('contain', 'autoQC001');
        });

        it('should be able to search by SD format', () => {
            // page.searchByFormat('');
            page.formatValue().click();
            page.formatSD().click();
            page.searchButton().click();
            page.validateFirstSpot();
            page.iconSD().should('be.visible');
            page.iconHD().should('not.exist');
        });

        it('should be able to search by HD format', () => {
            // page.searchByFormat('');
            page.formatValue().click();
            page.formatHD().click();
            page.searchButton().click();
            page.validateFirstSpot();
            page.iconSD().should('not.exist');
            page.iconHD().should('be.visible');
        });

        it('should be able to search by Radio format', () => {
            // page.searchByFormat('');
            page.formatValue().click();
            page.formatRadio().click();
            page.searchButton().click();
            page.validateFirstSpot();
            page.iconSD().should('not.exist');
            page.iconHD().should('not.exist');
        });

        it('should be able to search by non promo', () => {
            page.promoValue().click();
            page.promoNon().click();
            page.searchButton().click();
            page.validateFirstSpot();
            page.firstSpotDetail();
            detailPage.promoCheckbox().should('have.attr', 'aria-checked', 'false');
        });

        it('should be able to search by promo', () => {
            page.promoValue().click();
            page.promoOnly().click();
            page.searchButton().click();
            page.validateFirstSpot();
            page.firstSpotDetail();
            cy.intercept('GET', 'friendOf/*').as("loadPage");
            cy.wait("@loadPage",{timeout: 22000});
            detailPage.promoCheckbox().should('have.attr', 'aria-checked', 'true');
        });

        it('should be able to search by description', () => {
            page.searchByDescription('autoQC001');
            page.firstSpotDetail();
            detailPage.descriptionValue().should('have.value', 'autoQC001');
        });

        it('should be able to search by duration', () => {
            page.searchByDuration('15');
            page.validateFirstSpot();
            page.firstDurationQC().should('contain', '0:15');
        });
    });

    describe('return to Provider account after tests complete', () => {
        it('because this is good practice', () => {
            cy.switchAccount(Cypress.env('providerUser'));
        });
    });
});
