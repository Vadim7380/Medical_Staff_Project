class spotSearchPO {
    // Left nav
    leftNavSpot() { return cy.get('[ui-sref="spotList"]'); } 

    // // search params - text input
    searchParamsToggle() { return cy.get('[id=tsDiv]'); }
    hideSearchParamsButton() { return cy.get('[aria-label="Close Search Button"]'); }
    showSearchParamsButton() { return cy.get('[aria-label="View Search Button"]'); }
    searchParamsContainer() { return cy.get('[class*="sidebar"]'); }
    searchParamsFieldContainer() { return cy.get('[class="field-container"]'); }
    titleLabel() { return cy.contains('label', 'Title'); }
    titleValue() { return cy.get('[ng-model="vm.searchParams.title"]'); }
    isciLabel() { return cy.contains('label', 'ISCI/Ad-ID/Spot #'); } 
    isciValue() { return cy.get('[ng-model="vm.searchParams.isci"]'); }
    orderLabel() { return cy.contains('label', 'Order #'); }
    orderValue() { return cy.get('[ng-model="vm.searchParams.orderNumber"]'); }
    durationLabel() { return cy.contains('label', 'Duration'); }
    durationValue() { return cy.get('[ng-model="vm.searchParams.duration"]'); }
    descriptionLabel() { return cy.contains('label', 'Description'); }
    descriptionValue() { return cy.get('[ng-model="vm.searchParams.notes"]'); } 

    // search params - drop-downs
    formatLabel() { return cy.contains('span', 'Format'); }
    formatValue() { return cy.get('[ng-model="vm.searchParams.format"]'); }
    formatSD() { return cy.get('md-option[value="SD"]'); }
    formatHD() { return cy.get('md-option[value="HD"]'); }
    formatRadio() { return cy.get('md-option[value="RADIO"]'); }
    formatNone() { return cy.get('md-option[md-option-empty]').first(); }
    // statusLabel() { return cy.contains('span', 'Status'); }
    statusLabel() { return cy.get('md-select>md-select-value').contains('span', 'Status'); }
    statusValue() { return cy.get('[ng-model="vm.searchParams.SpotsStatus"]'); }
    statusNone() { return cy.get('md-option[md-option-empty]').second(); }
    statusCancelled() { return cy.get('md-option[value="CANCELLED"]'); }
    statusPendingMedia() { return cy.get('md-option[value="PENDING_MEDIA"]'); }
    statusPendingMetadata() { return cy.get('md-option[value="PENDING_META"]'); }
    statusPendingProdSvcs() { return cy.get('md-option[value="PENDING_PROD_SVCS"]'); }
    statusPendingQC() { return cy.get('md-option[value="PENDING_QC"]'); }
    statusProcessing() { return cy.get('md-option[value="PROCESSING"]'); }
    statusRejected() { return cy.get('md-option[value="REJECTED"]'); }
    statusReslateNeeded() { return cy.get('md-option[value="RESLATE"]'); }
    statusSending() { return cy.get('md-option[value="SENDING"]'); }
    statusSent() { return cy.get('md-option[value="SENT"]'); }
    statusUnsent() { return cy.get('md-option[value="UNSENT"]'); }
    statusUploaded() { return cy.get('md-option[value="UPLOADED"]'); }
    statusUploading() { return cy.get('md-option[value="UPLOADING"]'); }
    statusVerifying() { return cy.get('md-option[value="VERIFYING"]'); }
    promoLabel() { return cy.contains('span', 'Promos'); }
    promoValue() { return cy.get('[ng-model="vm.searchParams.promo"]'); }
    //promoOnly() { return cy.get('div', 'Promos Only'); }
    promoOnly() { return cy.get('md-content[aria-label="Promos"]>md-option:nth-child(2)'); }
    promoNon() { return cy.get('md-content[aria-label="Promos"]>md-option:nth-child(3)'); }
    promoNone() { return cy.get('md-content[aria-label="Promos"]>md-option:nth-child(1)'); }
    videoStandardLabel() { return cy.contains('span', 'Video Standard'); }
    videoStandardValue() { return cy.get('[ng-model="vm.searchParams.nonBroadcastMedia"]'); }
    videoStandardNoneOption() { return cy.get('md-content[aria-label="Video Standard"]>md-option:nth-child(1)'); }
    videoStandardBroadcastOption() { return cy.get('md-content[aria-label="Video Standard"]>md-option:nth-child(2)'); }
    videoStandardNonBroadcastOption() { return cy.get('md-content[aria-label="Video Standard"]>md-option:nth-child(3)'); }

    advertiserLabel() { return cy.contains('label', 'Advertiser'); }
    advertiserValue() { return cy.get('[name="advertiserNameField"]'); }
    advertiserOption1() { return cy.get('span[md-highlight-text="vm.searchAdvertiser"]:eq(0)'); }
    advertiserOption2() { return cy.get('span[md-highlight-text="vm.searchAdvertiser"]:eq(1)'); }
    advertiserNone() { return cy.get('span[md-highlight-text="vm.searchAdvertiser"]:eq(3)'); }
    
    notFoundDropdown() { return cy.get('[class="md-virtual-repeat-container md-autocomplete-suggestions-container md-whiteframe-z1 md-orient-vertical md-not-found"]'); }
    loadingMessage() { return cy.get('#feedLoading'); }

    agencyLabel() { return cy.contains('label', 'Agency'); }
    agencyValue() { return cy.get('[name="agencyNameField"]'); }
    agencyOption1() { return cy.get('span[md-highlight-text="vm.searchAgencies"]:eq(0)'); }
    agencyOption2() { return cy.get('span[md-highlight-text="vm.searchAgencies"]:eq(1)'); }
    agencyNone() { return cy.get('md-option[md-option-empty]:eq(4)'); }

    brandLabel() { return cy.contains('label', 'Brand'); }
    brandValue() { return cy.get('[name="brandNameField"]'); }
    brandOption1() { return cy.get('span[md-highlight-text="vm.searchBrand"]:eq(0)'); }
    brandOption2() { return cy.get('span[md-highlight-text="vm.searchBrand"]:eq(1)'); }
    brandNone() { return cy.get('md-option[md-option-empty]:eq(5)'); }
    //brandDropdown() { return cy.get('[class="md-virtual-repeat-container md-autocomplete-suggestions-container md-whiteframe-z1 md-orient-vertical"]'); }

    // search params - date picker
    createdLabel() { return cy.contains('label', 'Created'); }
    createdValue() { return cy.get('[ng-model="vm.createdDateSearchText"]'); }
    createdFromValue() { return cy.get('[ng-model="vm.searchParams.createdDateFrom"]'); }
    createdToValue() { return cy.get('[ng-model="vm.searchParams.createdDateTo"]'); }

    updatedLabel() { return cy.contains('label', 'Updated'); }
    updatedValue() { return cy.get('[ng-model="vm.updatedDateSearchText"]'); }
    updatedFromValue() { return cy.get('[ng-model="vm.searchParams.updatedDateFrom"]'); }
    updatedToValue() { return cy.get('[ng-model="vm.searchParams.updatedDateTo"]'); }

    validLabel() { return cy.contains('label', 'Valid'); }
    validValue() { return cy.get('[ng-model="vm.validDateSearchText"]'); }
    validFromValue() { return cy.get('[ng-model="vm.searchParams.validFrom"]'); }
    validToValue() { return cy.get('[ng-model="vm.searchParams.validTo"]'); }

    // calendar
    fromCalendarButton() { return cy.get('div:nth-child(1)>md-input-container>md-datepicker>button'); }
    toCalendarButton() { return cy.get('div:nth-child(2)>md-input-container>md-datepicker>button'); }
    calendarModal() { return cy.get('.md-datepicker-calendar-pane.md-pane-open'); }

    // search params - checkboxes
    includeArchivesLabel() { return cy.get('[class="md-label"]').contains('Include Archives'); }
    includeArchivesCheckbox() { return cy.get('[ng-model="vm.searchParams.includeArchives"]'); }

    // buttons
    resetButton() { return cy.contains('button', 'Reset'); }
    searchButton() { return cy.contains('button', 'Search'); }

    // Grid headers
    thumbnailHeader() { return cy.get('[id="thumbnailHeader"]'); }
    advertiserHeader() { return cy.get('[id="advertiserHeader"]'); }
    brandHeader() { return cy.get('[id="brandHeader"]'); }
    isciHeader() { return cy.get('[id="isciHeader"]'); }
    spotNumberHeader() { return cy.get('[id="spotNumberHeader"]'); }
    titleHeader() { return cy.get('[id="titleHeader"]'); }
    statusHeader() { return cy.get('[id="statusHeader"]'); }
    durationsHeader() { return cy.get('[id="durationHeader"]'); }
    createdHeader() { return cy.get('[id="createdHeader"]'); }
    sortAsc() { return cy.get('svg[data-icon="sort-alpha-up"]'); }
    sortDesc() { return cy.get('svg[data-icon="sort-alpha-down"]'); }

    // Grid content
    firstSpot() { return cy.get('md-list-item:nth-of-type(1)>div>div>md-list>md-list-item>div[class*="thumbnail-container"]'); }
    firstAdvertiser() { return cy.get('md-list-item[md-virtual-repeat="spot in vm.dynamicItems"]>div>div>md-list>md-list-item+md-list-item').first(); }
    firstBrand() { return cy.get('md-list-item[md-virtual-repeat="spot in vm.dynamicItems"]>div>div>md-list>md-list-item+md-list-item+md-list-item').first(); }
    firstIsci() { return cy.get('div>md-list-item:nth-of-type(1)>div>div>md-list>md-list-item[size-to-header="isciHeader"]'); }
    firstSpotNumber() { return cy.get('md-list-item[md-virtual-repeat="spot in vm.dynamicItems"]>div>div>md-list>md-list-item+md-list-item+md-list-item+md-list-item').first(); }
    firstTitle() { return cy.get('md-list-item[md-virtual-repeat="spot in vm.dynamicItems"]>div>div>md-list>md-list-item+md-list-item+md-list-item+md-list-item+md-list-item+md-list-item').first(); }
    firstTitleQC() { return cy.get('#spotTitleCell').first(); }
    firstStatus() { return cy.get('md-list-item[md-virtual-repeat="spot in vm.dynamicItems"]>div>div>md-list>md-list-item+md-list-item+md-list-item+md-list-item+md-list-item+md-list-item+md-list-item').first(); }
    firstDuration() { return cy.get('md-list-item[md-virtual-repeat="spot in vm.dynamicItems"]>div>div>md-list>md-list-item+md-list-item+md-list-item+md-list-item+md-list-item+md-list-item+md-list-item+md-list-item').first(); }
    firstDurationQC() { return cy.get(':nth-child(1) > div.md-button > .md-list-item-inner > md-list.layout-row > [size-to-header="durationHeader"] > .table-cell').first(); }
    firstCreated() { return cy.get('md-list-item[md-virtual-repeat="spot in vm.dynamicItems"]>div>div>md-list>md-list-item+md-list-item+md-list-item+md-list-item+md-list-item+md-list-item+md-list-item+md-list-item+md-list-item').first(); }
    firstMiniBurgerMenu() { return cy.get('button[ng-click*="vm.openDownloadMenu"]').first(); }
    firstOriginalCheckbox() { return cy.get('[ng-model="vm.downloadSelections.originalSpot"]'); }
    firstDistMasterCheckbox() { return cy.get('[ng-model="vm.downloadSelections.distributionMaster"]'); }
    firstMezzanineCheckbox() { return cy.get('[ng-model="vm.downloadSelections.mezzanine"]'); }
    firstQTProxyCheckbox() { return cy.get('[ng-model="vm.downloadSelections.quicktimeProxy"]'); }
    firstQCReportCheckbox() { return cy.get('[ng-model="vm.downloadSelections.qcReport"]'); }
    firstVideoQCCheckbox() { return cy.get('[ng-model="vm.downloadSelections.videoQC"]'); }
    firstDHReportCheckbox() { return cy.get('[ng-model="vm.downloadSelections.deliveryHistoryReport"]'); }
    secondSpot() { return cy.get('md-list-item:nth-of-type(2)>div>div>md-list>md-list-item>div[class*="thumbnail-container"]'); }
    secondIsci() { return cy.get('div>md-list-item:nth-of-type(2)>div>div>md-list>md-list-item[size-to-header="isciHeader"]'); }
    iconHD() { return cy.get('img[title="HD"]:nth-child(1)'); }
    iconSD() { return cy.get('img[title="SD"]:nth-child(1)'); }

    // Controls
    addSelectedToOrderButton() { return cy.get('[id="addSelectionToOrderButton"]'); }
    archiveButton() { return cy.get('[id="archiveSpotButton"]'); }
    // archiveLabel() { return cy.get('span', 'Archive'); }
    archiveLabel() { return cy.contains('span', 'Archive'); }
    unarchiveLabel() { return cy.contains('span', 'Unarchive'); }
    archiveCancelButton() { return cy.contains('button', 'Cancel'); }
    archiveAcceptButton() { return cy.contains('button', 'Continue'); }
    deleteButton() { return cy.contains('button', 'Delete'); }
    deleteCancelButton() { return cy.contains('button', 'Cancel'); }
    deleteContinueButton() { return cy.contains('button[ng-click="dialog.hide()"]', 'Continue'); }
    send2ProdSvcsButton() { return cy.contains('button', 'Send To Prod Services'); }
    confirmProdSvcsButton() { return cy.contains('button', 'Continue'); }
    cancelProdSvcsButton() { return cy.contains('button', 'Cancel'); }
    importButton() { return cy.get('[id="importSpotButton"]'); }
    exportToCSVButton() { return cy.get('[id="exportToCSVButton"]'); }
    bulkUploadButton() { return cy.contains('button','Bulk Upload'); }
    newButton() { return cy.get('[id="newSpotButton"]'); }

    // bulk upload popup
    bulkUploadPopupSpotsHeader() { return cy.contains('h2','Bulk Upload Spots'); }
    bulkUploadPopupCloseButton() { return cy.get('[class*="cts-close-button"]'); }
    bulkUploadPopupSelectButton() { return cy.get('#fileSelectButton'); }
    bulkUploadPopupMessage1() { return cy.contains('h3', 'Choose up to 25 files to import'); }
    bulkUploadPopupMessage2() { return cy.contains('h3', 'Max size per file is 5GB'); }
    bulkUploadPopupMessage3() { return cy.contains('p', 'Drag files to upload here.'); }
    bulkUploadPopupSelectThemButton() { return cy.get('#fileSelectButton'); }

    bulkUploadSpotsHeader() { return cy.contains('h2', 'Bulk Upload Spots'); }
    bulkUploadSpotsISCILabel() { return cy.contains('mat-dialog-container input[formcontrolname="isci"]+span>label>mat-label', 'isci'); }
    bulkUploadSpotsISCIValue() { return cy.get('input[formcontrolname="isci"]'); } 
    bulkUploadSpotsTitleLabel() { return cy.contains('mat-dialog-container input[formcontrolname="title"]+span>label>mat-label', 'title'); }
    bulkUploadSpotsTitleValue() { return cy.get('input[formcontrolname="title"]'); } 
    bulkUploadSpotsFormatLabel()  { return cy.contains('mat-dialog-container [formcontrolname="format"]+span>label>mat-label', 'format'); }
    bulkUploadSpotsFormatValue() { return cy.get('mat-select[formcontrolname="format"]'); } 
    bulkUploadSpotsFormatSD() { return cy.get('mat-option[value="SD"]'); }
    bulkUploadSpotsFormatHD() { return cy.get('mat-option[value="HD"]'); }
    bulkUploadSpotsFormatRadio() { return cy.get('mat-option[value="RADIO"]'); }
    bulkUploadSpotsFormatComposite() { return cy.get('mat-option[value="COMPOSITE"]'); }
    bulkUploadSpotsAgencyLabel() { return cy.contains('mat-dialog-container input[formcontrolname="agency"]+span>label>span', 'agency'); }
    bulkUploadSpotsAgencyValue() { return cy.get('input[formcontrolname="agency"]'); } 
    bulkUploadSpotsAgeAdvBrandOption1() { return cy.get('mat-option:eq(0)>span'); } 
    bulkUploadSpotsAdvertiserLabel()  { return cy.contains('mat-dialog-container input[formcontrolname="advertiser"]+span>label>span', 'advertiser'); }
    bulkUploadSpotsAdvertiserValue()  { return cy.get('input[formcontrolname="advertiser"]'); }
    bulkUploadSpotsAdvertiserOption1() { return cy.get('mat-option:eq(0)>span'); } 
    bulkUploadSpotsBrandLabel() { return cy.contains('mat-dialog-container  input[formcontrolname="brand"]+span>label>span', 'brand'); }
    bulkUploadSpotsBrandValue() { return cy.get('input[formcontrolname="brand"]'); }
    bulkUploadSpotsBrandOption1() { return cy.get('mat-option:eq(0)>span'); } 
    bulkUploadSpotsUploadedFile() { return cy.get('[class*="spot-metadata-filename-column"]>div'); }
    bulkUploadSpotsExistingISCIStatus() { return cy.get('[class*="cts-bulk-upload-dialog"]').contains('div', 'Status:'); }
    bulkUploadSpotsCloseButton(){ return cy.get('[class*="cts-close-button"]'); }
    bulkUploadSpotsISCIRemoveFirstRow() { return cy.get('[class*="spot-metadata-remove-column"]:eq(0)>div>svg'); }
    bulkUploadSpotsISCIRemoveSecondRow() { return cy.get('[class*="spot-metadata-remove-column"]:eq(1)>div>svg'); }
    bulkUploadSpotsCancelButton() { return cy.get('#ctsCancelButton'); }
    bulkUploadSpotsStartUploadingButton() { return cy.get('#ctsBeginUploadButton'); }
    bulkUploadBlankISCIError() { return cy.contains('span', 'An ISCI is required to begin upload'); }
    bulkUploadSpecialCharISCIError() { return cy.contains('span', 'ISCI can only contain letters and numbers'); }
    bulkUploadExistingISCIWarning() { return cy.contains('span', 'Existing ISCI with Media File'); }
    bulkUploadExistingMediaISCIWarning() { return cy.contains('div', ' ALERT: Proceeding will replace existing Media File. '); }



    // spot result counts
    totalSpots() { return cy.contains('span', 'Total:'); }
    selectedSpots() { return cy.get('span', 'Selected:'); }

    validateClearSearchCriteria = () => {
        this.resetButton().click();
        // validation
        this.titleValue().should('have.value', '');
        this.isciValue().should('have.value', '');
        this.descriptionValue().should('have.value', '');
        // this.formatValue().toEqual(null);
        // this.statusValue().toEqual(null);
        this.formatValue().should('have.value', '');
        this.statusValue().should('have.value', '');
        this.orderValue().should('have.value', '');
        // this.promoValue().toEqual(null);
        this.promoValue().should('have.value', '');
        this.durationValue().should('have.value', '');
        this.advertiserValue().should('have.value', '');
        this.agencyValue().should('have.value', '');
        this.brandValue().should('have.value', '');
        this.createdValue().should('have.value', '');
        this.validValue().should('have.value', '');
        this.includeArchivesCheckbox().should('not.be.checked');
    };

    clearSearchCriteria = () => {
        this.resetButton().click();
        // validation
        this.titleValue().should('have.value', '');
        this.isciValue().should('have.value', '');
        this.descriptionValue().should('have.value', '');
        this.formatValue().should('have.value', '');
        this.statusValue().should('have.value', '');
        this.orderValue().should('have.value', '');
        this.promoValue().should('have.value', '');
        this.durationValue().should('have.value', '');
        this.advertiserValue().should('have.value', '');
        this.agencyValue().should('have.value', '');
        this.brandValue().should('have.value', '');
        this.createdValue().should('have.value', '');
        this.validValue().should('have.value', '');
        this.includeArchivesCheckbox().should('not.be.checked');
    };

    clearQCSearchCriteria = () => {
        this.resetButton().click();
        // validation
        this.titleValue().should('have.value', '');
        this.isciValue().should('have.value', '');
        this.descriptionValue().should('have.value', '');
        this.formatValue().should('have.value', '');
        this.orderValue().should('have.value', '');
        this.promoValue().should('have.value', '');
        this.durationValue().should('have.value', '');
        this.createdValue().should('have.value', '');
        this.validValue().should('have.value', '');
        this.includeArchivesCheckbox().should('not.be.checked');
    };

    clearPSSearchCriteria = () => {
        this.resetButton().click();
        // validation
        this.titleValue().should('have.value', '');
        this.isciValue().should('have.value', '');
        this.descriptionValue().should('have.value', '');
        this.formatValue().should('have.value', '');
        this.orderValue().should('have.value', '');
        this.promoValue().should('have.value', '');
        this.durationValue().should('have.value', '');
        this.advertiserValue().should('have.value', '');
        this.agencyValue().should('have.value', '');
        this.brandValue().should('have.value', '');
        this.createdValue().should('have.value', '');
        this.validValue().should('have.value', '');
        this.includeArchivesCheckbox().should('not.be.checked');
    };

    firstSpotDetail = () => {
        this.firstSpot().dblclick();
    };

    validateFirstSpot = () => {
        this.firstSpot().should('be.visible');
        this.firstAdvertiser().should('be.visible');
        this.firstBrand().should('be.visible');
        this.firstIsci().should('be.visible');
        this.firstTitle().should('be.visible');
        this.firstStatus().should('be.visible');
        this.firstDuration().should('be.visible');
        this.firstCreated().should('be.visible');
    };

    searchByIsci = (input) => {
        this.isciValue().type(input);
        this.searchButton().click();
    };

    searchByTitle = (input) => {
        this.titleValue().type(input);
        this.searchButton().click();
    };

    searchByDescription = (input) => {
        this.descriptionValue().type(input);
        this.searchButton().click();
    };

    searchByDuration = (input) => {
        this.durationValue().type(input);
        this.searchButton().click();
    };

    searchRejected = () => {
        cy.visit('/cad/spots/list?SpotsStatus=REJECTED&includeArchives=false');
    };

    searchPromoOnly = () => {
        cy.visit('/cad/spots/list?promo=true&includeArchives=false');
    };

    searchNonPromoOnly = () => {
        cy.visit('/cad/spots/list?promo=false&includeArchives=false');
    };

    searchSent = () => {
        cy.visit('/cad/spots/list?SpotsStatus=SENT&includeArchives=false');
    };

    searchUnsent = () => {
        cy.visit('/cad/spots/list?format=SD&SpotsStatus=UNSENT&includeArchives=false');
    };

    go = () => {
        cy.visit('/cad/spots/list');
    };

}

export default spotSearchPO
