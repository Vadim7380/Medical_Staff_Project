import spotSearchPO from '../provider/spot/spotSearchPO.js';
import spotDetailPO from '../provider/spot/spotDetailPO.js';

describe('/tap-automation-tests/qcVendor/qcVendorSpotDetail', () => {
    /*
	 * We keep all of our variables on separate lines for convenient reading
	 * For convenience, it is also best to alphabetize them with $ items first
	 * These will be values we use through the spec file
	 * */
    const page = new spotDetailPO();
    const searchPage = new spotSearchPO();
    const adminUser = Cypress.env('adminUser');
    const adminPassword = Cypress.env('adminPassword');
    const qcVendorUser = Cypress.env('qcVendorUser');
    const qcVendorPassword = Cypress.env('qcVendorPassword');

    beforeEach('log in as admin', () => {
        // Before Every test, navigate to the page we are testing anew
        cy.visit('/cad/login');
        cy.login(adminUser, adminPassword);

        cy.switchAccount(Cypress.env('qcVendorUser'));
        searchPage.go();

        searchPage.isciValue().type('AUTOQC001');
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
    describe('Page Structure', () => {
        it('should navigate to the spot detail page', () => {
            cy.url().should('contain', '/spots/list/spots/');
        });

        it('should contain the correct elements', () => {
            // Left nav
            page.leftNavSpot().should('be.visible');

            // Media Information
            page.isciLabel().should('be.visible');
            page.isciValue().should('be.visible');
            page.expectedDurationLabel().should('be.visible');
            page.expectedDurationValue().should('be.visible');
            page.actualDurationLabel().should('be.visible');
            page.actualDurationValue().should('be.visible');
            page.agencyLabel().should('be.visible');
            page.qcAgencyValue().should('be.visible');
            page.advertiserLabel().should('be.visible');
            page.qcAdvertiserValue().should('be.visible');
            page.brandLabel().should('be.visible');
            page.qcBrandValue().should('be.visible');
            page.encodedLabel().should('be.visible');
            page.encodedCheckbox().should('be.visible');
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
            page.providerLabel().should('be.visible');
            page.providerValue().should('be.visible');
            page.spotLanguageLabel().should('be.visible');
            page.spotLanguageValue().should('be.visible');
            page.friendsLabel().should('be.visible');
            page.descriptionLabel().should('be.visible');
            page.descriptionValue().should('be.visible');
            page.versioningLabel().should('be.visible');
            page.statusLabel().should('be.visible');
            page.statusImage().should('be.visible');

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

            // spot stats modal
            page.spotStatisticsButton().should('be.visible');

            // player should either be visible or display a message
            page.videoPlayer().then((result) => {
                    if (result.length >0) {
                        // video player is present, validate functionality after play is pressed
                        page.bigPlayButton().should('be.visible');

                        // Good time to validate thumbnails
                        page.expandthumbnailsButton().click();
                        page.firstThumbnail().should('be.visible');
                    }
                    else {
                        // video player is not present, validate "no proxy" message
                        page.noProxyMessage().should('be.visible');
                    }
                });

            // thumbnail might be visible, validate modal if so
            page.firstThumbnail().then((result) => {
                    if (result.length >0) {
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
                        page.lightboxCCOverlay().should('not.exist');
                        page.lightboxCCButton().click();
                        page.lightboxCCOverlay().should('be.visible');
                        page.lightboxCCButton().click();
                        page.lightboxCCOverlay().should('not.exist');

                        // close modal
                        page.lightboxCloseButton().click();
                        page.lightboxTitle().should('be.visible');
                    }
                });

            // QC Vendor specific
            page.qcAcceptButton().should('be.visible');
            page.qcRejectButton().should('be.visible');
        });
    });

    /*
	 * The second describe block is specifically for testing that functionality
	 * of the page works as intended
	 * */
    describe('Page Functionality', () => {
        it('validate populated data SD', () => {
            // open reject modal
            page.qcRejectButton().click();

            // validate contents
            page.qcRejectTitle().should('be.visible');
            page.qcRejectReason().should('be.visible');
            page.qcRejectReason().invoke('attr', 'aria-label').should('contains', 'Reason Dropdown');
            page.qcRejectNotesValue().should('be.visible');
            page.qcRejectNotesValue().should('have.value','');
            page.qcRejectCancelButton().should('exist');
            page.qcRejectRejectButton().should('be.visible');

            // validate dropdown
            page.qcRejectReason().click();

            page.qcRejectReasonVideoQual().should('be.visible');
            page.qcRejectReasonAudioQual().should('be.visible');
            page.qcRejectReasonStandards().should('be.visible');
            page.qcRejectReasonCaption().should('be.visible');
            cy.get('#select_listbox_265').scrollTo('bottom');
            page.qcRejectReasonMetadata().should('be.visible');
            page.qcRejectReasonOther().should('be.visible');

            page.qcRejectReasonVideoQual().click();

            page.qcRejectReasonTextValue().should('have.text', 'Video Quality');

            page.qcRejectNotesValue().click();
            page.qcRejectNotesValue().type('test');

            page.qcRejectNotesValue().should('not.have.value','');

            page.qcRejectCancelButton().click({ force: true });
        });
    });

    describe('return to Provider account after tests complete', () => {
        it('because this is good practice', () => {
            //dashPage.switchToProviderAccount();
            cy.switchAccount(Cypress.env('providerUser'));
        });
    });
});
