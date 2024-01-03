import SpotDetailPage from '../../provider/spot/spotDetailPO.js';
import SpotSearchPage from '../../provider/spot/spotSearchPO.js';

describe('/tap-automation-tests/psVendor/psVendorSpotDetail', function() {
    /*
	 * We keep all of our variables on separate lines for convenient reading
	 * For convenience, it is also best to alphabetize them with $ items first
	 * These will be values we use through the spec file
	 * */
    const page = new SpotDetailPage();
    const adminUser = Cypress.env('adminUser');
    const adminPassword = Cypress.env('adminPassword');
    const searchPage = new SpotSearchPage();

    beforeEach('log in as admin and switch to PS vendor account', () => {
        // Before Every test, log in as admin and nav to the userDetails page
        cy.visit('/cad/login');
        cy.login(adminUser, adminPassword);
        
        // switch to prod services account for testing.
        cy.switchAccount(Cypress.env('psVendorUser'));
        
        // automation isn't always landing on spots. adding this.
        cy.visit('/cad/spots/list');

        searchPage.isciValue().type('PSTEST4135489H');
        searchPage.searchButton().click();
        searchPage.firstSpotDetail();
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
        it('should navigate to the spot detail page', function() {
            cy.url().should('contain', '/spots/list/spots/');
        });

        it('should contain the correct elements', function() {

            // Media Information
            page.isciLabel().should('be.visible');
            page.isciValue().should('be.visible');
            page.spotIdLabel().should('be.visible');
            page.spotIdValue().should('be.visible');
            page.expectedDurationLabel().should('be.visible');
            page.expectedDurationValue().should('be.visible');
            page.actualDurationLabel().should('be.visible');
            page.actualDurationValue().should('be.visible');
            page.agencyLabel().should('be.visible');
            page.vendorAgencyValue().should('be.visible');
            page.advertiserLabel().should('be.visible');
            page.vendorAdvertiserValue().should('be.visible');
            page.brandLabel().should('be.visible');
            page.vendorBrandValue().should('be.visible');
            page.encodedLabel().should('be.visible');
            page.encodedCheckbox().should('be.visible');
            page.dualMonoAudioLabel().should('be.visible');
            page.dualMonoAudioCheckbox().should('be.visible');
            page.ccLabel().should('be.visible');
            page.ccCheckbox().should('be.visible');
            page.centerCutSafeLabel().should('be.visible');
            page.centerCutSafeCheckbox().should('be.visible');
            page.validFromLabel().should('be.visible');
            page.validToLabel().should('be.visible');
            page.titleLabel().should('be.visible');
            page.titleValue().should('be.visible');
            page.poNumberLabel().should('be.visible');
            page.poNumberValue().should('be.visible');
            page.promoLabel().should('be.visible');
            page.promoCheckbox().should('be.visible');
            page.formatLabel().should('be.visible');
            page.formatValue().should('be.visible');
            page.spotLanguageLabel().should('be.visible');
            page.spotLanguageValue().should('be.visible');
            page.friendsLabel().should('be.visible');
            page.descriptionLabel().should('be.visible');
            page.descriptionValue().should('be.visible');
            page.versioningLabel().should('be.visible');
            page.statusLabel().should('be.visible');
            page.statusImage().should('be.visible');

            // media controls
            page.uploadNewMediaButton().should('be.visible');
            page.copyProxyButton().should('be.visible');

            // Downloads
            page.downloadsTitle().should('be.visible');
            page.spotLabel().should('be.visible');
            page.spotButton().should('be.visible');
            page.distLabel().should('be.visible');
            page.distButton().should('be.visible');
            page.mezzLabel().should('be.visible');
            page.mezzButton().should('be.visible');
            page.qtLabel().should('be.visible');
            page.qtButton().should('be.visible');
            page.qcLabel().should('be.visible');
            page.qcButton().should('be.visible');
            page.vqcLabel().should('be.visible');
            page.vqcButton().should('be.visible');
            page.dhLabel().should('be.visible');
            page.dhButton().should('be.visible');

            // Sys Events button
            page.systemEventsButton().should('not.exist');

            // spot stats modal
            page.spotStatisticsButton().should('be.visible');
    
            // video player is present
            page.bigPlayButton().should('be.visible');
            
            page.expandthumbnailsButton().click();
            // Good time to validate thumbnails
            page.firstThumbnail().should('be.visible');
   
            // open the thumbnail modal
            page.firstThumbnail().click();
            
            // modal validation
            page.lightboxTitle().should('be.visible');
            page.lightboxXButton().should('be.visible');
            page.lightboxImage().should('be.visible');
            page.lightboxDownloadButton().should('be.visible');
            page.lightboxCCButton().should('be.visible');
            page.lightboxCloseButton().should('be.visible');

            // CC safe validation
            page.lightboxCCButton().click();
            page.lightboxCCOverlay().should('be.visible');
            
            page.lightboxCCButton().click();
            page.lightboxCCOverlay().should('not.exist');

            // close modal
            page.lightboxCloseButton().click();
            
            page.lightboxTitle().should('not.exist');
                    
        });
    });

    /*
	 * The second describe block is specifically for testing that functionality
	 * of the page works as intended
	 * */
    describe('Page Functionality', function() {
        it('validate that all input fields are disabled', function() {
            // Media Information
            page.isciValue().should('be.disabled');
            page.spotIdValue().should('be.disabled');
            page.expectedDurationValue().should('be.disabled');
            page.actualDurationValue().should('be.disabled');
            page.actualDurationValue().should('be.disabled');
            page.encodedCheckbox().invoke('attr','disabled').should('eq','disabled');
            page.ccCheckbox().invoke('attr','disabled').should('eq','disabled');
            page.dualMonoAudioCheckbox().invoke('attr','disabled').should('eq','disabled');
            page.centerCutSafeCheckbox().invoke('attr','disabled').should('eq','disabled');
            page.titleValue().should('be.disabled');
            page.poNumberValue().should('be.disabled');
            page.promoCheckbox().invoke('attr','disabled').should('eq','disabled');
            page.formatValue().invoke('attr','disabled').should('eq','disabled');
            page.spotLanguageValue().invoke('attr','disabled').should('eq','disabled');
            page.descriptionValue().should('be.disabled');
        });
    });
});
