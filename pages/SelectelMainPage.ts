import { Page, Locator } from '@playwright/test';

export class SelectelMainPage {

    public productsList: Locator;
    public solutionsList: Locator;
    public selectelList: Locator;
    public pricesList: Locator;
    public documentationButton: Locator;
    public academyList: Locator;
    public casesButton: Locator;
    
    public searchButton: Locator;
    public inputTextInSearchPlaceholder: Locator;
    public searchByTextButton: Locator;

    public openChangeLanguageMenuButton: Locator;
    public changeLanguageButton: Locator;
    

    constructor(public readonly page: Page) {       
        
        this.productsList = this.page.locator('[data-qa="main-nav__group-products"]');
        this.solutionsList = this.page.locator('[data-qa="main-nav__group-solutions"]');
        this.selectelList = this.page.locator('[data-qa="main-nav__group-selectel"]');
        this.pricesList = this.page.locator('[data-qa="main-nav__group-prices"]');
        this.documentationButton = this.page.locator('[data-qa="main-nav__link-documentation"]');
        this.academyList = this.page.locator('[data-qa="main-nav__group-academy"]');
        this.casesButton = this.page.locator('[data-qa="main-nav__link-cases"]');
        
        this.searchButton = this.page.getByRole('banner').getByRole('button').filter({ hasText: /^$/ });
        this.inputTextInSearchPlaceholder = this.page.getByRole('listitem').filter({ hasText: 'Искать' }).getByPlaceholder('Что вы ищете?');
        this.searchByTextButton = this.page.getByRole('button', { name: 'Искать' });
        
        this.openChangeLanguageMenuButton = this.page.locator('[class=language__selected]');
        this.changeLanguageButton = this.page.locator('[class=language-list__item-link]');       
    };

    public async open() {
        await this.page.goto('/');
    };

    public async inputTextInSearch(text: string) {
        await this.inputTextInSearchPlaceholder.fill(text);
        await this.searchByTextButton.click();
    };
    
}