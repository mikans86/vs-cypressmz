class AddBoard{

    get clickOrganization(){
       return cy,get(".vs-c-list__btn vs-c-list__organisation") 
    }

    get addNewBoard(){
        return cy.get(".vs-c-boards-item__title")
    }

    get boardTitle(){
        return cy.get("input[type='text']")
    }

    get newBordNextButton(){
        return cy.get('[name="next_btn"]');
    }
    get checkScrumbox(){
        returncy.get('[name="type_scrum]')
    }
    get bordTypeNextButton(){
        return cy.get('[name="next_btn"]');
    }
    get bordLogoNextButton(){
        return cy.get('[name="next_btn"]');
    }
    get bordFinishButton(){
        return cy.get('[name="next_btn"]');
    }
    addBoard(bordName){
        this.clickOrganization.click()
        this.addNewBoard.click()
        this.boardTitle.type(bordName)
        this.newBordNextButton.click()
        this.checkScrumbox.check()
        this.bordTypeNextButton.click()
        this.bordLogoNextButton.click()
        this.bordFinishButton.click()
    }
}
export const addBord = new AddBoard()
