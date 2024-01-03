
import SpotDetailPage from '../../provider/spot/spotDetailPO.js';
import SpotSearchPage from '../../provider/spot/spotSearchPO.js';

describe('/tap-automation-tests/psVendor/psVendorSpotSearch', function() {
    /*
	 * We keep all of our variables on separate lines for convenient reading
	 * For convenience, it is also best to alphabetize them with $ items first
	 * These will be values we use through the spec file
	 * */
    const page = new SpotSearchPage();
    const detailPage = new SpotDetailPage();
    const adminUser = Cypress.env('adminUser');
    const adminPassword = Cypress.env('adminPassword');

    beforeEach('log in as admin and switch to PS vendor account', () => {
        // Before Every test, log in as admin and nav to the userDetails page
        cy.visit('/cad/login');
        cy.login(adminUser, adminPassword);

        // switch to prod services account for testing.
        cy.switchAccount(Cypress.env('psVendorUser'));

        // automation isn't always landing on spots. adding this.
        cy.visit('/cad/spots/list');
    });

    /*
	 * We have two main describe blocks that contain tests for different aspects
	 * of the page we're testing
	 * */

    /*
	 * The first describe block is specifically for testing the layout of the page
	 * and ensuring that it looks the way we expect
	 * */
    describe('Page Structure', function() {
        it('should navigate to the spots page', function() {
            cy.url().should('contain', '/cad/spots/list');
        });

        it('should contain the correct elements', function() {
            // Ensure all the page elements exist
            // left nav Spot
            page.leftNavSpot().should('be.visible');

            // Search params - text inputs
            page.titleLabel().should('be.visible');
            page.titleValue().should('be.visible');
            page.isciLabel().should('be.visible');
            page.isciValue().should('be.visible');
            page.formatLabel().should('be.visible');
            page.formatValue().should('be.visible');
            page.statusLabel().should('be.visible');
            page.statusValue().should('be.visible');
            page.promoLabel().should('be.visible')
            page.promoValue().should('be.visible');
            page.videoStandardLabel().should('be.visible');
            page.videoStandardValue().should('be.visible');
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
            page.advertiserLabel().should('be.visible');
            page.advertiserValue().should('be.visible');
            page.agencyLabel().should('be.visible');
            page.agencyValue().should('be.visible');
            page.brandLabel().should('be.visible');
            page.brandValue().should('be.visible');

            // search params - date picker
            page.createdLabel().should('be.visible');
            page.createdValue().should('be.visible');
            page.updatedLabel().should('be.visible');
            page.updatedValue().should('be.visible');
            page.validLabel().should('be.visible');
            page.validValue().should('be.visible');

            // search params - checkboxes
            page.includeArchivesLabel().scrollIntoView();
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
            page.createdHeader().should('be.visible');

            // results
            page.firstSpot().should('be.visible');
            page.firstSpotNumber().should('be.visible');
        });
    });

    /*
	 * The second describe block is specifically for testing that functionality
	 * of the page works as intended
	 * */
    describe('Page Functionality', function() {
        it('search fields should be empty', function() {
            page.titleValue().should('have.value','');
            page.isciValue().should('have.value','');
            page.formatValue().should('include.text','None')
            .should('include.text','SD')
            .should('include.text','HD')
            .should('include.text','Radio')
            .should('include.text','Composite');
            page.statusValue().should('include.text','None')
            .should('include.text','Pending Prod Svcs')
            .should('include.text','Processing')
            .should('include.text','Rejected')
            .should('include.text','Uploaded')
            .should('include.text','Uploading')
            .should('include.text','Verifying');
            page.orderValue().should('have.value','');
            page.descriptionValue().should('have.value','');
            page.promoValue().should('include.text','None')
            .should('include.text','Promos Only')
            .should('include.text','Non-Promos Only');
            page.videoStandardValue().should('include.text','None')
            .should('include.text','Broadcast Only')
            .should('include.text','Non-Broadcast Only');
            page.durationValue().should('have.value','');
            page.advertiserValue().should('have.value','');
            page.agencyValue().should('have.value','');
            page.brandValue().should('have.value','');
            page.createdValue().should('have.value','');
            page.validValue().should('have.value','');
        });

        it('should be able to input text and reset fields', function() {
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

            page.clearPSSearchCriteria();
        });

        it('should discard dashes and underscores entered in isci search field', function() {
            // enter an isci with dashes and underscores
            page.isciValue().type('-_TE-_MPISCI-_');

            // validate that dashes and underscores are discarded
            page.isciValue().should('have.value','TEMPISCI');
        });

        it('should be able to click drop-down values and reset', function() {
            // drop-downs
            page.formatValue().click();
            page.formatSD().click();
            page.formatValue().should('include.text','SD')

            page.statusValue().click();
            page.statusPendingProdSvcs().click();
            page.statusValue().should('include.text','Pending Prod Svcs');

            page.promoValue().click();
            page.promoOnly().click();
            page.promoValue().should('include.text','Promos Only');

            page.clearPSSearchCriteria();
        });

        it('should be able to open created calendar date selectors', function() {
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

        it('should be able to open updated calendar date selectors', function() {
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

        it('should be able to open valid calendar date selectors', function() {
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

        it('should be able to check and uncheck boxes', function() {
            // checkboxes
            page.includeArchivesCheckbox().invoke('attr','aria-checked').should('eq', 'false');
            page.includeArchivesCheckbox().click();
            page.includeArchivesCheckbox().invoke('attr','aria-checked').should('eq', 'true');

            page.clearPSSearchCriteria();
        });

        it('should be able to search by ISCI', function() {
            page.searchByIsci('PSTEST4135489H');
            page.validateFirstSpot();
            page.firstIsci().should('have.text','PSTEST4135489H');
        });

        it('should be able to search by title', function() {
            page.searchByTitle('PSTEST4135488');
            page.validateFirstSpot();
            page.firstTitle().should('have.text','PSTEST4135488');
        });

        it('should be able to search by SD format', function() {
            page.formatValue().click();
            page.formatSD().click();
            page.updatedValue().clear();
            page.searchButton().click({force: true});
            page.validateFirstSpot();
            page.iconSD().should('be.visible');
            page.iconHD().should('not.exist');
        });

        it('should be able to search by HD format', function() {
            page.formatValue().click();
            page.formatHD().click();
            page.searchButton().click();
            page.validateFirstSpot();
            page.iconSD().should('not.exist');
            page.iconHD().should('be.visible');
        });

        it('should be able to search by Radio format', function() {
            page.formatValue().click();
            page.formatRadio().click();
            page.updatedValue().clear();
            page.searchButton().click({force: true});
            page.firstSpotDetail();
            detailPage.formatTextValue().should('include.text','Radio');
        });

        it('should be able to search by non promo', function() {
            page.promoValue().click();
            page.promoNon().click();
            page.searchButton().click();
            page.firstSpotDetail();
            detailPage.promoCheckbox().invoke('attr','aria-checked').should('eq', 'false');
        });

        it('should be able to search by promo', function() {
            page.promoValue().click();
            page.promoOnly().click();
            page.searchButton().click();
            page.firstSpotDetail();
            detailPage.promoCheckbox().invoke('attr','aria-checked').should('eq', 'true');
        });

        it('should be able to search by description', function() {
            page.searchByDescription('autoPSvendor');
            page.firstSpotDetail();
            detailPage.descriptionValue().should('have.value','autoPSvendor');
        });

        it('should be able to search by duration', function() {
            page.searchByDuration('15');
            page.validateFirstSpot();
            page.firstDuration().should('have.text','0:15');
        });
    });
});
